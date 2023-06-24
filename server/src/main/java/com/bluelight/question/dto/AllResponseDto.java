package com.bluelight.question.dto;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class AllResponseDto {

    private List<AllQuestionDto> data;
    private int totalPage;
    private long totalCount;

}
