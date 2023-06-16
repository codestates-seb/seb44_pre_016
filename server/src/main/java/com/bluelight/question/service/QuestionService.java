package com.bluelight.question.service;

import com.bluelight.question.entity.Question;
import com.bluelight.question.repository.QuestionRepository;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service
public class QuestionService {

    private final QuestionRepository questionRepository;

    private final ApplicationEventPublisher publisher;

    public QuestionService(QuestionRepository questionRepository,
        ApplicationEventPublisher publisher) {
        this.questionRepository = questionRepository;
        this.publisher = publisher;
    }

    public Question createQuestion(Question question) {
        Question savedQuestion = questionRepository.save(question);

        return savedQuestion;
    }

    public Page<Question> findQuestions(int page, int size) {

        return questionRepository.findAll(
            PageRequest.of(page, size, Sort.by("questionId").descending()));
    }

    public Page<Question> findQuestions(int page, int size, String filters) {
        if(filters.equals("newest")){
            return questionRepository.findAll(
                PageRequest.of(page, size, Sort.by("questionId").descending()));
        } else if(filters.equals("noanswer")) {
            return questionRepository.findAll()
        } else if (filters.equals("highestscore")) {
            
        }

        return questionRepository.findAll(
            PageRequest.of(page, size, Sort.by("questionId").descending()));
    }
}
