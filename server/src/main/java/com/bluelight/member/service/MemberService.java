package com.bluelight.member.service;

import com.bluelight.auth.utils.CustomAuthorityUtils;
import com.bluelight.exception.BusinessLogicException;
import com.bluelight.exception.ExceptionCode;
import com.bluelight.member.dto.ProfileDto;
import com.bluelight.member.dto.SignUpDto;
import com.bluelight.member.entity.Member;
import com.bluelight.member.entity.Profile;
import com.bluelight.member.mapper.MemberMapper;
import com.bluelight.member.repository.MemberRepository;
import com.bluelight.member.repository.ProfileRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service
public class MemberService {

    private final MemberMapper memberMapper;
    private final MemberRepository memberRepository;
    private final ProfileRepository profileRepository;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils authorityUtils;

    public MemberService(MemberMapper memberMapper, MemberRepository memberRepository,
        ProfileRepository profileRepository, PasswordEncoder passwordEncoder,
        CustomAuthorityUtils authorityUtils) {
        this.memberMapper = memberMapper;
        this.memberRepository = memberRepository;
        this.profileRepository = profileRepository;
        this.passwordEncoder = passwordEncoder;
        this.authorityUtils = authorityUtils;
    }

    public Member createMember(SignUpDto requestBody) {
        Member member = memberMapper.memberPostToMember(requestBody);

        verifyExistsEmail(member.getEmail());

        String encryptedPassword = passwordEncoder.encode(member.getPassword());
        member.setPassword(encryptedPassword);

        List<String> roles = authorityUtils.createRoles(member.getEmail());
        member.setRoles(roles);

        Member savedMember = memberRepository.save(member);

        return savedMember;
    }

    @Transactional(readOnly = true)
    public Member findMember(long memberId) {
        return findVerifiedMember(memberId);
    }

    @Transactional(readOnly = true)
    public Member findVerifiedMember(long memberId) {
        Optional<Member> optionalMember = memberRepository.findById(memberId);
        Member findMember = optionalMember.orElseThrow(
            () -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));

        return findMember;
    }

    private void verifyExistsEmail(String email) {
        Optional<Member> member = memberRepository.findByEmail(email);
        if (member.isPresent()) {
            throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
        }
    }

    public void deleteMember(long memberId) {
        Member findMember = findMember(memberId);
        memberRepository.delete(findMember);
    }

    @Transactional(readOnly = true)
    public Profile findProfile(long memberId) {
        Member findMember = findMember(memberId);

        Profile profile = findMember.getProfile();

        return profile;
    }

    @Transactional(readOnly = true)
    public ProfileDto.Response getProfile(long memberId) {
        Member findMember = findMember(memberId);

        Profile profile = findMember.getProfile();

        return memberMapper.profileToProfileResponse(profile);
    }

    public ProfileDto.Response updateProfile(ProfileDto.Patch patch) {

        Profile findProfile = findProfile(patch.getMemberId());

        Optional
            .ofNullable(patch.getProfileImage())
            .ifPresent(profileImage -> findProfile.setProfileImage(profileImage));
        Optional
            .ofNullable(patch.getDisplayName())
            .ifPresent(displayName -> findProfile.setDisplayName(displayName));
        Optional
            .ofNullable(patch.getLocation())
            .ifPresent(location -> findProfile.setLocation(location));
        Optional
            .ofNullable(patch.getProfileTitle())
            .ifPresent(profileTitle -> findProfile.setProfileTitle(profileTitle));
        Optional
            .ofNullable(patch.getProfileContent())
            .ifPresent(profileContent -> findProfile.setProfileContent(profileContent));

        Profile updateProfile =  profileRepository.save(findProfile);
        return memberMapper.profileToProfileResponse(updateProfile);
    }
}
