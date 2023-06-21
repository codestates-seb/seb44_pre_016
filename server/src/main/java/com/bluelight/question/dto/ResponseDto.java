package com.bluelight.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class ResponseDto {
    private long questionId;
    private String questionTitle;
    private String questionContent;
}
