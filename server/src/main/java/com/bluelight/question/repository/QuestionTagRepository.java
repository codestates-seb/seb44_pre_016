package com.bluelight.question.repository;

import com.bluelight.member.entity.Member;
import com.bluelight.member.entity.Profile;
import com.bluelight.question.entity.Question;
import com.bluelight.question.entity.QuestionTag;
import com.bluelight.tag.entity.Tag;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionTagRepository extends JpaRepository<QuestionTag, Long> {
    @Query("SELECT qt.tag FROM QuestionTag qt WHERE qt.question.questionId = :questionId")
    List<Tag> findTagsByQuestionId(@Param("questionId") Long questionId);
}