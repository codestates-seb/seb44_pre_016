package com.bluelight.question.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

//@Getter
//@Setter
//@Table
//@Entity
//public class QuestionVote {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long questionVoteId;
//
//    @ManyToOne
//    @JoinColumn(name = "question_id")
//    private Question question;
//
//    //임시 조치
//    private Long memberId;
//
//    private Boolean votes;
//}
