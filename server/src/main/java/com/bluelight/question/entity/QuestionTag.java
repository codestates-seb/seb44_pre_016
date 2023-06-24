package com.bluelight.question.entity;

import com.bluelight.audit.Auditable;
import com.bluelight.tag.entity.Tag;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@NoArgsConstructor
@Getter
@Setter
@Entity
public class QuestionTag extends Auditable {

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

    public void addTag(Tag tag) {
        this.tag = tag;
    }
}
