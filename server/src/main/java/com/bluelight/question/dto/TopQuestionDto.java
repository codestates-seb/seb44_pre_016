package com.bluelight.question.dto;

import com.bluelight.member.entity.Member;
import com.bluelight.member.entity.Profile;
import com.bluelight.question.dto.AskQuestionDto.TagDto;
import com.bluelight.question.entity.Question;
import com.bluelight.question.entity.QuestionTag;
import com.bluelight.tag.entity.Tag;
import com.fasterxml.jackson.annotation.JsonProperty;
import java.sql.Timestamp;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.stream.Collectors;
import javax.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import lombok.Getter;

public class TopQuestionDto {

    @Getter
    @AllArgsConstructor
    public static class Response {

        private long questionId;
        private String questionTitle;
        private int answerCount;
        private List<Tag> questionTag;
        private String profileImage;
        private String displayName;
        private String createdAt;

    }
}
