package com.bluelight.question.mapper;

import com.bluelight.question.dto.AllQuestionDto;
import com.bluelight.question.dto.AskQuestionDto;
import com.bluelight.question.dto.AskQuestionDto.TagDto;
import com.bluelight.question.dto.QuestionDetailDto;
import com.bluelight.question.dto.QuestionMemberProfileDto;
import com.bluelight.question.dto.ResponseDto;
import com.bluelight.question.dto.TopQuestionDto;
import com.bluelight.question.entity.Question;
import com.bluelight.tag.entity.Tag;
import java.time.format.DateTimeFormatter;
import java.util.List;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface QuestionMapper {

    Question askquestionPostToQuestion(AskQuestionDto.Post requestBody);

    AllQuestionDto questionToAllQuestion(Question question);

    default TopQuestionDto.Response questionToTopQuestion(
        QuestionMemberProfileDto questionMemberProfileDto) {
        if (questionMemberProfileDto == null) {
            return null;
        } else {
            String questionTitle = null;
            int answerCount = 0;
            List<Tag> questionTag = null;
            String profileImage = null;
            String displayName = null;
            String createdAt = null;

            questionTitle = questionMemberProfileDto.getQuestion().getQuestionTitle();
            answerCount = 0;
            questionTag = questionMemberProfileDto.getTagList();
            profileImage = questionMemberProfileDto.getProfile().getProfileImage();
            displayName = questionMemberProfileDto.getProfile().getDisplayName();
            createdAt = questionMemberProfileDto.getQuestion().getCreatedAt().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));

            TopQuestionDto.Response topQuestionDto = new TopQuestionDto.Response(questionTitle, answerCount,
                questionTag, profileImage, displayName, createdAt);
            return topQuestionDto;
        }
    }

    QuestionDetailDto questionToQuestionDetail(Question question);

    default QuestionDetailDto questionToResponse(
        QuestionMemberProfileDto questionMemberProfileDto) {
        if (questionMemberProfileDto == null) {
            return null;
        } else {

            String questionTitle = null;
            String questionContent = null;
            List<Tag> questionTag = null;
            String profileImage = null;
            String displayName = null;
            String createdAt = null;

            questionTitle = questionMemberProfileDto.getQuestion().getQuestionTitle();
            questionContent = questionMemberProfileDto.getQuestion().getQuestionContent();
            questionTag = questionMemberProfileDto.getTagList();
            profileImage = questionMemberProfileDto.getProfile().getProfileImage();
            displayName = questionMemberProfileDto.getProfile().getDisplayName();
            createdAt = questionMemberProfileDto.getQuestion().getCreatedAt().format(
                DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));

            QuestionDetailDto questionDetailDto =
                new QuestionDetailDto(questionTitle, questionContent, questionTag, profileImage,
                    displayName, createdAt);
            return questionDetailDto;
        }
    }

    List<ResponseDto> questionsToResponse(List<Question> questions);
}
