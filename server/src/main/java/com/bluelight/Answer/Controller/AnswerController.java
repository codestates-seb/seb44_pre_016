package com.bluelight.Answer.Controller;

import com.bluelight.Answer.Dto.AnswerQuestionDto;
import com.bluelight.Answer.Entity.Answer;
import com.bluelight.Answer.Mapper.AnswerMapper;
import com.bluelight.Answer.Service.AnswerService;
import com.bluelight.Dto.MultiResponseDto;
import com.bluelight.Dto.SingleResponseDto;

import java.util.List;
import javax.validation.Valid;
import javax.validation.constraints.Positive;
import lombok.extern.slf4j.Slf4j;

import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/answers")
@Validated
@Slf4j
public class AnswerController {

    private final AnswerService answerService;
    private final AnswerMapper mapper;

    public AnswerController(AnswerService answerService, AnswerMapper mapper) {
        this.answerService = answerService;
        this.mapper = mapper;
    }

    @PostMapping("/comments")
    public ResponseEntity postAnswer(@Valid @RequestBody AnswerQuestionDto.Post requestBody) {
        Answer answer = mapper.answerPostToAnswer(requestBody);
        Answer createdAnswer = answerService.createAnswer(answer);

        return new ResponseEntity<>(createdAnswer, HttpStatus.CREATED);
    }

    @GetMapping("/{answer-id}")
    public ResponseEntity getAnswer(
        @PathVariable("answer-id") @Positive long answerId) {
        Answer answer = answerService.findAnswer(answerId);
        return new ResponseEntity<>(
            new SingleResponseDto<>(mapper.AnswerToResponse(answer))
            , HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getAnswers(@Positive @RequestParam int page,
        @Positive @RequestParam int size) {
        Page<Answer> pageAnswers = answerService.findAnswers(page - 1, size);
        List<Answer> Answers = pageAnswers.getContent();
        return new ResponseEntity<>(
            new MultiResponseDto<>(mapper.AnswersToResponses(Answers),
                pageAnswers),
            HttpStatus.OK);
    }

    @DeleteMapping("/{answer-id}")
    public ResponseEntity deleteAnswer(
        @PathVariable("answer-id") @Positive long answerId) {
        answerService.deleteAnswer(answerId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
