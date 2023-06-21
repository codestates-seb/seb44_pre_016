package com.bluelight.Answer.Service;

import com.bluelight.exception.ExceptionCode;
import com.bluelight.Answer.Entity.Answer;
import com.bluelight.Answer.Repository.AnswerRepository;
import com.bluelight.exception.BusinessLogicException;
import java.util.Optional;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service
public class AnswerService {

    private final AnswerRepository answerRepository;

    private final ApplicationEventPublisher publisher;

    public AnswerService(AnswerRepository answerRepository, ApplicationEventPublisher publisher) {
        this.answerRepository = answerRepository;
        this.publisher = publisher;
    }


    public Answer createAnswer(Answer answer) {
        Answer savedAnswers = answerRepository.save(answer);
        return savedAnswers;
    }

    @Transactional(readOnly = true)
    public Answer findAnswer(long answerId) {
        return findVerifiedAnswer(answerId);
    }

    public Page<Answer> findAnswers(int page, int size) {
        return answerRepository.findAll(PageRequest.of(page, size,
            Sort.by("answerId").descending()));
    }

    public void deleteAnswer(long answerId) {
        Answer findAnswer = findVerifiedAnswer(answerId);

        answerRepository.delete(findAnswer);
    }

    @Transactional(readOnly = true)
    public Answer findVerifiedAnswer(long answerId) {
        Optional<Answer> optionalAnswer =
            answerRepository.findById(answerId);
        Answer findAnswer =
            optionalAnswer.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
        return findAnswer;
    }

}
