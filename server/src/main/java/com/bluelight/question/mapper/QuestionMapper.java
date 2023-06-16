package com.bluelight.question.mapper;

import com.bluelight.question.dto.QuestionDto;
import com.bluelight.question.entity.Question;
import java.util.List;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface QuestionMapper {
    Question  questionPostToQuestion(QuestionDto.Post requestBody);
    List<QuestionDto.Response> questionsToquestionsResponses(List<Question> questions);
}
