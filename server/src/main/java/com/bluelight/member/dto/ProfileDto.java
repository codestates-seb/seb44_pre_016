package com.bluelight.member.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


public class ProfileDto {

    @Getter
    @Setter
    @NoArgsConstructor
    public static class Response {

        private String profileImage;
        private String displayName;
        private String location;
        private String profileTitle;
        private String profileContent;
        private String createdAt;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    public static class Patch {
        private long memberId;
        private String profileImage;
        private String displayName;
        private String location;
        private String profileTitle;
        private String profileContent;
    }
}
