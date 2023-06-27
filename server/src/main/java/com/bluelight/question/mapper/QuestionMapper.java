package com.bluelight.question.mapper;

import com.bluelight.answer.dto.AnswerDto;
import com.bluelight.answer.dto.AnswerDto.Response;
import com.bluelight.member.entity.Member;
import com.bluelight.member.entity.Profile;
import com.bluelight.question.dto.AllQuestionDto;
import com.bluelight.question.dto.AskQuestionDto;
import com.bluelight.question.dto.AskQuestionDto.TagDto;
import com.bluelight.question.dto.QuestionDetailDto;
import com.bluelight.question.dto.QuestionMemberProfileDto;
import com.bluelight.question.dto.QuestionTagResponseDto;
import com.bluelight.question.dto.ResponseDto;
import com.bluelight.question.dto.TopQuestionDto;
import com.bluelight.question.entity.Question;
import com.bluelight.question.entity.QuestionTag;
import com.bluelight.tag.entity.Tag;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
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
            long questionId = 0;
            String questionTitle = null;
            int answerCount = 0;
            List<Tag> questionTag = null;
            String profileImage = null;
            String displayName = null;
            String createdAt = null;

            questionId = questionMemberProfileDto.getQuestion().getQuestionId();
            questionTitle = questionMemberProfileDto.getQuestion().getQuestionTitle();
            answerCount = questionMemberProfileDto.getAnswerList().size();
            questionTag = questionMemberProfileDto.getTagList();
            profileImage = questionMemberProfileDto.getProfile().getProfileImage();
            displayName = questionMemberProfileDto.getProfile().getDisplayName();
            createdAt = questionMemberProfileDto.getQuestion().getCreatedAt().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));

            TopQuestionDto.Response topQuestionDto = new TopQuestionDto.Response(questionId, questionTitle, answerCount,
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
            long questionId = 0;
            String questionTitle = null;
            String questionContent = null;
            List<Tag> questionTag = null;
            long memberId = 0;
            String profileImage = null;
            String displayName = null;
            List<AnswerDto.Response> answerList = new ArrayList<>();
            String createdAt = null;

            questionId = questionMemberProfileDto.getQuestion().getQuestionId();
            questionTitle = questionMemberProfileDto.getQuestion().getQuestionTitle();
            questionContent = questionMemberProfileDto.getQuestion().getQuestionContent();
            questionTag = questionMemberProfileDto.getTagList();
            memberId = questionMemberProfileDto.getMember().getMemberId();
            profileImage = questionMemberProfileDto.getProfile().getProfileImage();
            displayName = questionMemberProfileDto.getProfile().getDisplayName();

            questionMemberProfileDto.getAnswerList().stream()
                .forEach(answer -> {
                    Member answerMember = answer.getMember();
                    Profile answerProfile = answerMember.getProfile();

                    AnswerDto.Response answerResponse = new Response();

                    answerResponse.setMemberId(answerMember.getMemberId());
                    answerResponse.setAnswerId(answer.getAnswerId());
                    answerResponse.setAnswerContent(answer.getAnswerContent());
                    answerResponse.setProfileImage(answerProfile.getProfileImage());
                    answerResponse.setDisplayName(answerProfile.getDisplayName());
                    answerResponse.setCreatedAt(answer.getCreatedAt().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")));
                    answerList.add(answerResponse);
                });

            createdAt = questionMemberProfileDto.getQuestion().getCreatedAt().format(
                DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));

            QuestionDetailDto questionDetailDto =
                new QuestionDetailDto(questionId, questionTitle, questionContent, questionTag, memberId, profileImage,
                    displayName, answerList, createdAt);
            return questionDetailDto;
        }
    }

    default AllQuestionDto AllQuestionResponseDto(Question question) {
        List<QuestionTag> questionTags = question.getQuestionTags();

        AllQuestionDto allQuestionDto = new AllQuestionDto();
        allQuestionDto.setQuestionId(question.getQuestionId());
        allQuestionDto.setQuestionTitle(question.getQuestionTitle());
        allQuestionDto.setQuestionContent(question.getQuestionContent());
        allQuestionDto.setAnswerCount(question.getAnswers().stream().count());

        allQuestionDto.setQuestionTag(questionTagsToQuestionTagResponseDto(questionTags));

        allQuestionDto.setMemeber(question.getMember());
        allQuestionDto.setProfileImage(question.getMember().getProfile().getProfileImage());
        allQuestionDto.setDisplayName(question.getMember().getProfile().getDisplayName());
        allQuestionDto.setCreatedAt(question.getCreatedAt().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")));

        return allQuestionDto;
    }

    default List<QuestionTagResponseDto> questionTagsToQuestionTagResponseDto(List<QuestionTag> questionTags) {
        return questionTags
            .stream()
            .map(questionTag -> QuestionTagResponseDto
                .builder()
                .tagId(questionTag.getTag().getTagId())
                .tagName(questionTag.getTag().getTagName())
                .tagContent(questionTag.getTag().getTagContent())
                .build())
            .collect(Collectors.toList());
    }

    List<ResponseDto> questionsToResponse(List<Question> questions);
}
