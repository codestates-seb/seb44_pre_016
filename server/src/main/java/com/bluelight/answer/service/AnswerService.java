package com.bluelight.answer.service;

import com.bluelight.answer.dto.AnswerDto;
import com.bluelight.answer.dto.CreateAnswerDto;
import com.bluelight.answer.entity.Answer;
import com.bluelight.answer.mapper.AnswerMapper;
import com.bluelight.answer.repository.AnswerRepository;
import com.bluelight.member.service.MemberService;
import com.bluelight.question.service.QuestionService;
import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service
public class AnswerService {

    private final AnswerMapper answerMapper;
    private final AnswerRepository answerRepository;
    private final MemberService memberService;
    private final QuestionService questionService;

    public AnswerService(AnswerMapper answerMapper, AnswerRepository answerRepository,
        MemberService memberService, QuestionService questionService) {
        this.answerMapper = answerMapper;
        this.answerRepository = answerRepository;
        this.memberService = memberService;
        this.questionService = questionService;
    }

    public void createAnswer(AnswerDto.Post requestBody) {
        CreateAnswerDto createAnswerDto = new CreateAnswerDto();

        createAnswerDto.setMember(memberService.findMember(requestBody.getMemberId()));
        createAnswerDto.setQuestion(questionService.findQuestion(requestBody.getQuestionId()));
        createAnswerDto.setAnswerContent(requestBody.getAnswerContent());

        Answer answer = answerMapper.answerPostToAnswer(createAnswerDto);

        answerRepository.save(answer);
    }

    @Transactional(readOnly = true)
    public List<Answer> findAnswers(long questionId) {
        List<Answer> answerList = answerRepository.findByQuestionQuestionId(questionId);

        return answerList;
    }

    public void deleteAnswer(long answerId) {
        answerRepository.deleteById(answerId);
    }
}
