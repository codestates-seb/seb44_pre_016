package com.bluelight.question.controller;

import com.bluelight.dto.MultiResponseDto;
import com.bluelight.dto.SingleResponseDto;
import com.bluelight.question.dto.AskQuestionDto;
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
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/questions")
@Validated
@Slf4j
public class QuestionController {

    private final QuestionService questionService;
    private final QuestionMapper mapper;

    public QuestionController(QuestionService questionService, QuestionMapper mapper) {
        this.questionService = questionService;
        this.mapper = mapper;
    }

    @PostMapping("/ask")
    public ResponseEntity postAskQuestion(
        @Valid @RequestBody AskQuestionDto.Post requestBody) {
        Question question = mapper.askquestionPostToQuestion(requestBody);
        Question createQuestion = questionService.createQuestion(question);

        return new ResponseEntity<>(
            createQuestion, HttpStatus.CREATED);
    }

    @GetMapping("/{question-id}")
    public ResponseEntity getQuestionDetail(@Positive @PathVariable("question-id") long questionId) {
        Question question = questionService.findQuestionDetail(questionId);

        return new ResponseEntity<>(mapper.questionToQuestionDetail(question),
            HttpStatus.OK);
    }



    /*
    @GetMapping
    public ResponseEntity getTopQuestion() {
        Page<Question> pageQuestions = questionService.findQuestions(0, 50);
        List<Question> questions = pageQuestions.getContent();
        return new ResponseEntity<>(
            new MultiResponseDto<>(mapper.questionsToquestionsResponses(questions), pageQuestions),
            HttpStatus.OK);
    }

    @GetMapping("/questions")
    public ResponseEntity getAllQuestion(
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
    public ResponseEntity getSearchQuestion(
        @Positive @RequestParam(required = false) int page,
        @Positive @RequestParam(required = false) int size,
        @RequestParam(required = false) String title,
        @RequestParam(required = false) String tag) {

        return new ResponseEntity<>(HttpStatus.OK);
    }
    */
}
