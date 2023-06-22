package com.bluelight.member.service;

import com.bluelight.exception.BusinessLogicException;
import com.bluelight.exception.ExceptionCode;
import com.bluelight.member.dto.MemberProfileDto;
import com.bluelight.member.entity.Member;
import com.bluelight.member.entity.Profile;
import com.bluelight.member.repository.ProfileRepository;
import java.util.Optional;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service
public class ProfileService {
    private final MemberService memberService;
    private final ProfileRepository profileRepository;

    public ProfileService(MemberService memberService, ProfileRepository profileRepository) {
        this.memberService = memberService;
        this.profileRepository = profileRepository;
    }

    @Transactional(readOnly = true)
    public Profile findProfile(Member member) {
        return findVerifiedProfile(member);
    }

    @Transactional(readOnly = true)
    public Profile findVerifiedProfile(Member member) {
        Optional<Profile> optionalProfile = profileRepository.findByMember(member);
        Profile findProfile = optionalProfile.orElseThrow(
            () -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));

        return findProfile;
    }

    public Profile updateMemberProfile(MemberProfileDto memberProfileDto) {

        Profile findProfile =
            findVerifiedProfile(memberService.findMember(memberProfileDto.getMember().getMemberId()));

        Optional
            .ofNullable(memberProfileDto.getProfile().getProfileImage())
            .ifPresent(profileImage -> findProfile.setProfileImage(profileImage));
        Optional
            .ofNullable(memberProfileDto.getProfile().getDisplayName())
            .ifPresent(displayName -> findProfile.setDisplayName(displayName));
        Optional
            .ofNullable(memberProfileDto.getProfile().getLocation())
            .ifPresent(location -> findProfile.setLocation(location));
        Optional
            .ofNullable(memberProfileDto.getProfile().getProfileTitle())
            .ifPresent(profileTitle -> findProfile.setProfileTitle(profileTitle));
        Optional
            .ofNullable(memberProfileDto.getProfile().getProfileContent())
            .ifPresent(profileContent -> findProfile.setProfileContent(profileContent));

        return profileRepository.save(findProfile);
    }
}
