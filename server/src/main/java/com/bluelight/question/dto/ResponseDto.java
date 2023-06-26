package com.bluelight.question.dto;

import com.bluelight.question.entity.QuestionTag;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class ResponseDto {
    private List<QuestionTag> questionTags;
}
