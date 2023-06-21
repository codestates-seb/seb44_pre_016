package com.bluelight.Answer.Entity;

import com.bluelight.audit.Auditable;
import java.sql.Timestamp;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.aspectj.weaver.patterns.TypePatternQuestions.Question;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class Answer extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "answer_id")
    private Long answerId;

    @Column(name = "answer_content", nullable = false)
    private String answerContent;

//    @ManyToOne
//    @JoinColumn(name = "question_id")
//    private Question question;
//
//    @ManyToOne
//    @JoinColumn(name = "member_id")
//    private Member member;


}
