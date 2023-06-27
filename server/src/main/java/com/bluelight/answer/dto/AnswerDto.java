package com.bluelight.answer.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


public class AnswerDto {

    @Getter
    @Setter
    @NoArgsConstructor
    public static class Post {

        private long memberId;
        private long questionId;
        private String answerContent;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    public static class Response {

        private long memberId;
        private long answerId;
        private String answerContent;
        private String profileImage;
        private String displayName;
        private String createdAt;
    }

}
