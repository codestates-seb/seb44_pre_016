package com.bluelight.question.controller;

import com.bluelight.dto.MultiResponseDto;
import com.bluelight.question.dto.QuestionDto;
import com.bluelight.question.entity.Question;
import com.bluelight.question.mapper.QuestionMapper;
import com.bluelight.question.service.QuestionService;
import java.util.List;
import javax.validation.Valid;
import javax.validation.constraints.Positive;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
@Validated
@Slf4j
public class QuestionController {

    private final QuestionService questionService;
    private final QuestionMapper mapper;

    public QuestionController(QuestionService questionService, QuestionMapper mapper) {
        this.questionService = questionService;
        this.mapper = mapper;
    }

    @PostMapping("/questions/ask")
    public ResponseEntity postQuestion(
        @Valid @RequestBody QuestionDto.Post requestBody) {
        Question question = mapper.questionPostToQuestion(requestBody);

        Question createQuestion = questionService.createQuestion(question);

        return new ResponseEntity<>(
            createQuestion, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity getTopQuestions() {
        Page<Question> pageQuestions = questionService.findQuestions(0, 50);
        List<Question> questions = pageQuestions.getContent();
        return new ResponseEntity<>(
            new MultiResponseDto<>(mapper.questionsToquestionsResponses(questions), pageQuestions),
            HttpStatus.OK);
    }

    @GetMapping("/questions")
    public ResponseEntity getAllQuestions(
        @Positive @RequestParam(required = false) int page,
        @Positive @RequestParam(required = false) int size,
        @RequestParam(required = false) String filters) {
        Page<Question> pageQuestions;
        if(filters == null){
            pageQuestions = questionService.findQuestions(page, size);
        }else{
            pageQuestions = questionService.findQuestions(page, size, filters);
        }

        List<Question> questions = pageQuestions.getContent();

        return new ResponseEntity<>(
            new MultiResponseDto<>(mapper.questionsToquestionsResponses(questions), pageQuestions), HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity getSearchQuestions(
        @Positive @RequestParam(required = false) int page,
        @Positive @RequestParam(required = false) int size,
        @RequestParam(required = false) String title,
        @RequestParam(required = false) String tag) {

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
