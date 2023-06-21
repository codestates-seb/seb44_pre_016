package com.bluelight.question.entity;

import com.bluelight.tag.entity.Tag;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

// Question <> Question = 1 : N
//
@Getter
@Setter
@Entity
public class QuestionTag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionTagId;

    @ManyToOne
    @JoinColumn(name = "question_id")
    private Question question;

    @ManyToOne
    @JoinColumn(name = "tag_id")
    private Tag tag;

    public QuestionTag(Question question, Tag tag) {
        this.question = question;
        this.tag = tag;
    }

    public void addQuestion(Question question) {
        this.question = question;
    }

    public void addTag(Tag tag){
        this.tag = tag;
    }
}
