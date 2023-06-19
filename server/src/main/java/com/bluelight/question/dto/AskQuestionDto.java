package com.bluelight.question.dto;

import com.bluelight.tags.entity.Tag;
import java.sql.Timestamp;
import java.util.List;
import javax.validation.constraints.NotBlank;
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
        private List<Tag> questionTag;
        private Timestamp questionCreatedAT;
    }

}
