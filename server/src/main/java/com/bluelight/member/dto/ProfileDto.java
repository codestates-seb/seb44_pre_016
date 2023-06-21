package com.bluelight.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class ProfileDto {

    private String profileImage;
    private String displayName;
    private String location;
    private String profileTitle;
    private String profileContent;

}
