package com.bluelight.question.controller;


import com.bluelight.question.dto.AllResponseDto;
import com.bluelight.question.dto.AskQuestionDto;

import com.bluelight.question.dto.QuestionDetailDto;

import com.bluelight.question.dto.TopQuestionDto;

import com.bluelight.question.mapper.QuestionMapper;
import com.bluelight.question.service.QuestionService;
import com.bluelight.question.service.QuestionTagService;

import java.util.List;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import lombok.extern.slf4j.Slf4j;

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
@RequestMapping
@Validated
@Slf4j
public class QuestionController {

    private final QuestionService questionService;
    private final QuestionMapper questionMapper;
    private final QuestionTagService questionTagService;

    public QuestionController(QuestionService questionService, QuestionMapper questionMapper,
        QuestionTagService questionTagService) {
        this.questionService = questionService;
        this.questionMapper = questionMapper;
        this.questionTagService = questionTagService;
    }

    @PostMapping("/questions/ask")
    public ResponseEntity postQuestion(
        @Valid @RequestBody AskQuestionDto.Post requestBody) {

        questionService.createQuestion(requestBody);

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity topQuestions(@Positive @RequestParam(defaultValue = "50") int size) {
        List<TopQuestionDto.Response> topQuestions = questionService.topQuestions(size);
        return new ResponseEntity<>(topQuestions, HttpStatus.OK);
    }

    @GetMapping("/questions")
    public ResponseEntity allQuestions(@Positive @RequestParam int page,
        @Positive @RequestParam int size) {
        AllResponseDto pageQuestions = questionService.findAllQuestions(page - 1, size);

        return new ResponseEntity<>(pageQuestions, HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity getSearchQuestion(
        @Positive @RequestParam(required = false) int page,
        @Positive @RequestParam(required = false) int size,
        @RequestParam(required = false) String title,
        @RequestParam(required = false) String tag) {
        if(title != null ){
            AllResponseDto pagepageQuestions = questionService.findSearchQuestions(page - 1, size, title);
            return new ResponseEntity<>(pagepageQuestions, HttpStatus.OK);
        } else if(tag != null){
            AllResponseDto pagepageQuestions = questionService.findSearchtagQuestions(page - 1, size, tag);
            return new ResponseEntity<>(pagepageQuestions, HttpStatus.OK);
        } else{
            AllResponseDto pageQuestions = questionService.findAllQuestions(page - 1, size);
            return new ResponseEntity<>(pageQuestions, HttpStatus.OK);
        }
    }

    @GetMapping("/questions/{question-id}")
    public ResponseEntity getQuestionDetail(
        @Positive @PathVariable("question-id") long questionId) {
        QuestionDetailDto questionDetailDto = questionService.findQuestionDetail(questionId);
        return new ResponseEntity<>(questionDetailDto, HttpStatus.OK);
    }

    @DeleteMapping("/questions/{question-id}")
    public ResponseEntity deleteQuestion(@PathVariable("question-id") @Positive long questionId) {
        questionService.deleteQuestion(questionId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

}
