package com.bluelight.question.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import lombok.Getter;
import lombok.Setter;

//@Getter
//@Setter
//@Entity
//public class QuestionVoteCount {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long questionVoteCountId;
//
//    @OneToOne
//    @JoinColumn(name = "question_id")
//    private Question question;
//
//    private Long votesCount;
//
//    public void increase() {
//        this.votesCount++;
//    }
//
//    public void descrease() {
//        this.votesCount--;
//    }
//}
