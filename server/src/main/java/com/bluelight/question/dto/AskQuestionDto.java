package com.bluelight.question.dto;

import com.bluelight.question.entity.Question;
import com.bluelight.tag.entity.Tag;
import com.fasterxml.jackson.annotation.JsonProperty;
import java.sql.Timestamp;
import java.time.format.DateTimeFormatter;
import java.util.List;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import lombok.Getter;

public class AskQuestionDto {
    @Getter
    @AllArgsConstructor
    public static class Post {
        @NotBlank (message = "제목을 입력하세요.")
        private String questionTitle;
        @NotBlank (message = "내용을 입력하세요.")
        private String questionContent;
        private List<TagDto> questionTag;

    }

    // 임시적 조치
    @Getter
    @AllArgsConstructor
    public static class Response {

        private Long questionId;

        private String questionTitle;

        private String questionContent;

        private String createdAt;


        public Response(Question question) {
            this.questionId = question.getQuestionId();
            this.questionTitle = question.getQuestionTitle();
            this.questionContent = question.getQuestionContent();
            this.createdAt = question.getCreatedAt().format(DateTimeFormatter.ofPattern("YYYY-mm-dd HH:MM:ss"));
        }
    }


    @Getter
    @AllArgsConstructor
    public static class TagDto {

        @Positive
        @JsonProperty(value = "tagId")
        private Long tagId;

        @JsonProperty(value = "tagName")
        private String tagName;
    }

}
