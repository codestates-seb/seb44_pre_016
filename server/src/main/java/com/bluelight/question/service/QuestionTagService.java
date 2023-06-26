package com.bluelight.question.service;

import com.bluelight.question.repository.QuestionTagRepository;
import com.bluelight.tag.entity.Tag;
import java.util.List;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service
@Slf4j
public class QuestionTagService {

    private final QuestionTagRepository questionTagRepository;

    public QuestionTagService(QuestionTagRepository questionTagRepository) {
        this.questionTagRepository = questionTagRepository;
    }

    public List<Tag> getTagsByQuestionId(Long questionId) {
        return questionTagRepository.findTagsByQuestionId(questionId);
    }
}

