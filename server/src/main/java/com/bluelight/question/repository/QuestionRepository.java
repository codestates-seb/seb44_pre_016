package com.bluelight.question.repository;

import com.bluelight.question.entity.Question;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface QuestionRepository extends JpaRepository<Question, Long> {
    @Query(value = "SELECT c FROM Question c WHERE c.questionId = :questionId")
    Optional<Question> findByQuestion(long questionId);

//    @Query(value = "SELECT c FROM Question c ORDER BY c.created_at DESC LIMIT 50")
//    List<Question> findByCreatedAtOrderByDesc();
}
