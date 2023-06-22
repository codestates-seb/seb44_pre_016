package com.bluelight.member.controller;

import com.bluelight.member.dto.EditDto;
import com.bluelight.member.dto.MemberProfileDto;
import com.bluelight.member.dto.SignUpDto;
import com.bluelight.member.entity.Member;
import com.bluelight.member.entity.Profile;
import com.bluelight.member.mapper.EditMapper;
import com.bluelight.member.mapper.MemberMapper;
import com.bluelight.member.mapper.ProfileMapper;
import com.bluelight.member.service.MemberService;
import com.bluelight.member.service.ProfileService;
import com.bluelight.utils.UriCreator;
import java.net.URI;
import javax.validation.Valid;
import javax.validation.constraints.Positive;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/members")
@Validated
@Slf4j
public class MemberController {

    private final static String MEMBER_DEFAULT_URL = "/members";
    private final MemberService memberService;
    private final MemberMapper memberMapper;
    private final ProfileService profileService;
    private final ProfileMapper profileMapper;
    private final EditMapper editMapper;

    public MemberController(MemberService memberService, MemberMapper memberMapper,
        ProfileService profileService, ProfileMapper profileMapper, EditMapper editMapper) {
        this.memberService = memberService;
        this.memberMapper = memberMapper;
        this.profileService = profileService;
        this.profileMapper = profileMapper;
        this.editMapper = editMapper;
    }

    @PostMapping("/signup")
    public ResponseEntity signUpMember(@Valid @RequestBody SignUpDto signUpDto) {
        Member member = memberMapper.memberPostToMember(signUpDto);
        member.setMemberType("local");

        Member createdMember = memberService.createMember(member);
        URI location = UriCreator.createUri(MEMBER_DEFAULT_URL, createdMember.getMemberId());
        return ResponseEntity.created(location).build();
    }

    @GetMapping("/{member-id}")
    public ResponseEntity getMemberProfile(@PathVariable("member-id") @Positive long memberId) {
        Member member = memberService.findMember(memberId);
        Profile profile = profileService.findProfile(member);
        return new ResponseEntity<>(profileMapper.profileToProfileResponse(profile), HttpStatus.OK);
    }

    @GetMapping("/edit/{member-id}")
    public ResponseEntity getEditProfileForm(@PathVariable("member-id") @Positive long memberId) {
        Member member = memberService.findMember(memberId);
        Profile profile = profileService.findProfile(member);
        MemberProfileDto memberProfileDto = new MemberProfileDto(member, profile);
        return new ResponseEntity<>(editMapper.memberProflieToEditResponse(memberProfileDto),
            HttpStatus.OK);
    }

    @PatchMapping("/edit/{member-id}")
    public ResponseEntity updateMemberProfile(
        @PathVariable("member-id") @Positive long memberId,
        @Valid @RequestBody EditDto.Patch requestBody) {
        Member member = memberService.findMember(memberId);

        MemberProfileDto memberProfileDto =
            new MemberProfileDto(member, profileMapper.profilePatchToProfile(requestBody));

        Profile profile =
            profileService.updateMemberProfile(memberProfileDto);

        return new ResponseEntity<>(profileMapper.profileToProfileResponse(profile), HttpStatus.OK);
    }

    @DeleteMapping("/edit/{member-id}")
    public ResponseEntity deleteMember(@PathVariable("member-id") @Positive long memberId) {
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
