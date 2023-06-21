package com.bluelight.Answer.Dto;


import com.bluelight.Answer.Entity.Answer;
import java.sql.Timestamp;
import java.time.format.DateTimeFormatter;
import javax.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;


public class AnswerQuestionDto {

    @Getter
    @Builder
    @AllArgsConstructor
    public static class Post {

        private int memberId;
        private int questionId;
        @NotBlank(message = "내용을 입력하세요.")
        private String answerContent;


    }

    @Getter
    @Builder
    @AllArgsConstructor
    public static class Response {

        private Long answerId;

        private Long questionId;

        private String answerContent;

        private int answerVoteCount;

//        private String profileImage;

        private String nickName;

        private String createdAt;


        public Response(Answer answer) {
            this.answerId = answer.getAnswerId();
            this.answerContent = answer.getAnswerContent();
            this.createdAt = answer.getCreatedAt()
                .format(DateTimeFormatter.ofPattern("YYYY-mm-dd HH:MM:ss"));
        }
    }

}
