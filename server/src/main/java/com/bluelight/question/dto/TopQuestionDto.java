package com.bluelight.question.dto;

import com.bluelight.tag.entity.Tag;
import java.sql.Timestamp;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;

public class TopQuestionDto {

    @Getter
    @AllArgsConstructor
    public static class Response {
        private long questionId;
        private String questionTitle;
        private int questionVoteCount;
        private int answerCount;
        private List<Tag> questionTag;
        private long memberId;
        private String profileImage;
        private String nickName;
        private Timestamp createdAt;
    }

}
