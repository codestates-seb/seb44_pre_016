package com.bluelight.member.dto;

import com.bluelight.member.entity.Member;
import com.bluelight.member.entity.Profile;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class MemberProfileDto {
    private Member member;
    private Profile profile;
}