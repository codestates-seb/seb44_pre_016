package com.bluelight.Answer.Repository;

import com.bluelight.Answer.Entity.Answer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnswerRepository extends JpaRepository<Answer, Long> {

}
