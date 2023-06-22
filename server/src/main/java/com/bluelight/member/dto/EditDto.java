package com.bluelight.member.dto;

import javax.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

public class EditDto {
    @Getter
    @AllArgsConstructor
    public static class Response {
        private String profileImage;
        private String displayName;
        private String location;
        private String profileTitle;
        private String profileContent;
        private String name;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Patch {
        @NotBlank
        private String profileImage;
        private String displayName;
        private String location;
        private String profileTitle;
        private String profileContent;
    }
}
