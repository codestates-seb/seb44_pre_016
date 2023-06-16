package com.bluelight.question.dto;

import com.bluelight.tags.entity.Tag;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;

public class QuestionDto {
    @Getter
    @AllArgsConstructor
    public static class Post {
        private String questionTitle;
        private String questionContent;
        private List<Tag> questionTag;
    }

    @Getter
    @AllArgsConstructor
    public static class Response {
        private long questionId;
        private String questionTitle;
        private String questionContent;
        private List<Tag> questionTag;
    }
}
