package com.bluelight.question.service;

import com.bluelight.exception.BusinessLogicException;
import com.bluelight.exception.ExceptionCode;
import com.bluelight.member.entity.Member;
import com.bluelight.member.entity.Profile;
import com.bluelight.question.dto.QuestionDetailDto;
import com.bluelight.question.entity.Question;
import com.bluelight.question.entity.QuestionTag;
import com.bluelight.question.repository.QuestionRepository;
import com.bluelight.question.repository.QuestionTagRepository;
import com.bluelight.tag.entity.Tag;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;
import java.util.stream.Collectors;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.LoggerFactory;
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

