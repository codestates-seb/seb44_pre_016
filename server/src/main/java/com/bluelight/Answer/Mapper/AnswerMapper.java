package com.bluelight.Answer.Mapper;

import com.bluelight.Answer.Dto.AnswerQuestionDto;
import com.bluelight.Answer.Entity.Answer;
import java.util.List;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface AnswerMapper {

    Answer answerPostToAnswer(AnswerQuestionDto.Post requestBody);

    AnswerQuestionDto.Response AnswerToResponse(Answer answer);

    List<AnswerQuestionDto.Response> AnswersToResponses(List<Answer> members);
}
