package com.bluelight.question.mapper;

import com.bluelight.question.dto.AllQuestionDto;
import com.bluelight.question.dto.AskQuestionDto;
import com.bluelight.question.dto.QuestionDetailDto;
import com.bluelight.question.dto.ResponseDto;
import com.bluelight.question.dto.TopQuestionDto;
import com.bluelight.question.entity.Question;
import com.bluelight.tag.entity.Tag;
import java.util.List;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface QuestionMapper {

    Question askquestionPostToQuestion(AskQuestionDto.Post requestBody);

    AllQuestionDto questionToAllQuestion(Question question);

    TopQuestionDto questionToTopQuestion(Question question);

    QuestionDetailDto questionToQuestionDetail(Question question);

    ResponseDto questionToResponse(Question question);

    List<ResponseDto> questionsToResponse(List<Question> questions);
}
