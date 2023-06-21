package com.bluelight.question.controller;

import com.bluelight.dto.MultiResponseDto;
import com.bluelight.dto.SingleResponseDto;
import com.bluelight.question.dto.AskQuestionDto;
import com.bluelight.question.dto.AskQuestionDto.Response;
import com.bluelight.question.entity.Question;
import com.bluelight.question.mapper.QuestionMapper;
import com.bluelight.question.service.QuestionService;
import java.util.List;
import java.util.stream.Collectors;
import javax.validation.Valid;
import javax.validation.constraints.Positive;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
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

    // controller 위에 RequestMapping ("/questions")
    @PostMapping("/ask")
    public ResponseEntity postAskQuestion(
        @Valid @RequestBody AskQuestionDto.Post requestBody) {

        questionService.createQuestion(requestBody);

        return new ResponseEntity<>(HttpStatus.CREATED);
    }


//    @GetMapping("/top")
//    public ResponseEntity topQuestions(@Positive @RequestParam(defaultValue = "50") int size) {
//        List<Question> questions = questionService.topQuestions(size);
//        return new ResponseEntity<>(questions.stream().map().collect(Collectors.toList()), HttpStatus.OK);
//    }

//    @GetMapping("/questions/{question-id}")
//    public ResponseEntity getQuestionDetail(@Positive @PathVariable("question-id") long questionId) {
//        Question question = questionService.findQuestionDetail(questionId);
//
//
//
//
//        return new ResponseEntity<>(mapper.questionToResponse(question),
//            HttpStatus.OK);
//    }
    @GetMapping
    public ResponseEntity allQuestions(@Positive @RequestParam int page,
                                    @Positive @RequestParam int size) {
        Page<Question> pageQuestions = questionService.findQuestions(page - 1, size);
        List<Question> questions = pageQuestions.getContent();

        return new ResponseEntity<>(
            new MultiResponseDto<>(mapper.questionsToResponse(questions),
                pageQuestions),
            HttpStatus.OK);
    }

    @DeleteMapping("/{question-id}")
    public ResponseEntity deleteQuestion(@PathVariable("question-id") @Positive long questionId) {
        questionService.deleteQuestion(questionId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
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
