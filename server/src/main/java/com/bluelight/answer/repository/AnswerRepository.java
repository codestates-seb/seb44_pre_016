package com.bluelight.answer.repository;


import com.bluelight.answer.entity.Answer;
import com.bluelight.question.entity.Question;
import com.bluelight.tag.entity.Tag;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface AnswerRepository extends JpaRepository<Answer, Long> {
    List<Answer> findByQuestionQuestionId(Long questionId);
}
