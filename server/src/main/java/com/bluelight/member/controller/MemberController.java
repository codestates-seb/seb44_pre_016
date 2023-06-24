package com.bluelight.member.controller;

import com.bluelight.member.dto.ProfileDto;
import com.bluelight.member.dto.SignUpDto;
import com.bluelight.member.service.MemberService;
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

    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    @PostMapping("/signup")
    public ResponseEntity signUpMember(@Valid @RequestBody SignUpDto requestBody) {

        memberService.createMember(requestBody);

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("/{member-id}")
    public ResponseEntity getProfile(@PathVariable("member-id") @Positive long memberId) {

        ProfileDto.Response profileDto = memberService.getProfile(memberId);

        return new ResponseEntity<>(profileDto, HttpStatus.OK);
    }

    @GetMapping("/edit/{member-id}")
    public ResponseEntity getProfileForm(@PathVariable("member-id") @Positive long memberId) {

        ProfileDto.Response profileDto = memberService.getProfile(memberId);

        return new ResponseEntity<>(profileDto, HttpStatus.OK);
    }

    @PatchMapping("/edit/{member-id}")
    public ResponseEntity patchProfile(
        @PathVariable("member-id") @Positive long memberId,
        @Valid @RequestBody ProfileDto.Patch requestBody) {

        requestBody.setMemberId(memberId);

        ProfileDto.Response profileDto = memberService.updateProfile(requestBody);

        return new ResponseEntity<>(profileDto, HttpStatus.OK);
    }

    @DeleteMapping("/edit/{member-id}")
    public ResponseEntity deleteMember(@PathVariable("member-id") @Positive long memberId) {

        memberService.deleteMember(memberId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
