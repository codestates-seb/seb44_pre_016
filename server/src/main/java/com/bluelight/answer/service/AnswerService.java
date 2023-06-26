package com.bluelight.answer.service;

import com.bluelight.answer.dto.AnswerDto;
import com.bluelight.answer.entity.Answer;
import com.bluelight.answer.repository.AnswerRepository;
import com.bluelight.member.service.MemberService;
import com.bluelight.question.service.QuestionService;
import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service
public class AnswerService {

    private final AnswerRepository answerRepository;
    private final MemberService memberService;
    private final QuestionService questionService;

    public AnswerService(AnswerRepository answerRepository, MemberService memberService,
        QuestionService questionService) {
        this.answerRepository = answerRepository;
        this.memberService = memberService;
        this.questionService = questionService;
    }

    public void createAnswer(AnswerDto.Post requestBody) {

        Answer answer = new Answer();
        answer.setMember(memberService.findMember(requestBody.getMemberId()));
        answer.setQuestion(questionService.findQuestion(requestBody.getQuestionId()));
        answer.setAnswerContent(requestBody.getAnswerContent());

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
