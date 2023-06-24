package com.bluelight.answer.mapper;

import com.bluelight.answer.dto.AnswerDto;
import com.bluelight.answer.dto.CreateAnswerDto;
import com.bluelight.answer.entity.Answer;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface AnswerMapper {

    default Answer answerPostToAnswer(CreateAnswerDto createAnswerDto) {
        Answer answer = new Answer();

        answer.setMember(createAnswerDto.getMember());
        answer.setQuestion(createAnswerDto.getQuestion());
        answer.setAnswerContent(createAnswerDto.getAnswerContent());

        return answer;
    }
}
