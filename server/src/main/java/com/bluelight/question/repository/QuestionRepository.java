package com.bluelight.question.repository;

import com.bluelight.question.entity.Question;

import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface QuestionRepository extends JpaRepository<Question, Long> {
    @Query(value = "SELECT c FROM Question c WHERE c.questionId = :questionId")
    Optional<Question> findByQuestion(long questionId);

    Page<Question> findByQuestionTitleContaining(String keyword, Pageable pageable);
}
