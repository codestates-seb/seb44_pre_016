package com.bluelight.question.entity;

import com.bluelight.answer.entity.Answer;
import com.bluelight.audit.Auditable;
import com.bluelight.member.entity.Member;
import com.bluelight.tag.entity.Tag;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@NoArgsConstructor
@Getter
@Setter
@Entity
public class Question extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "question_id")
    private Long questionId;

    @Column(name = "question_title", length = 72, nullable = false)
    private String questionTitle;

    @Column(name = "question_content", nullable = false)
    private String questionContent;

    @OneToMany(mappedBy = "question", fetch = FetchType.LAZY, cascade = {CascadeType.ALL})
    private List<QuestionTag> questionTags = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    @OneToMany(mappedBy = "question", cascade = {CascadeType.ALL})
    private List<Answer> answers = new ArrayList<>();

//    @OneToMany(mappedBy = "Question", fetch = FetchType.LAZY, cascade = { CascadeType.ALL })
//    private List<QuestionVote> questionVotes = new ArrayList<>();
//
//    @OneToOne(mappedBy = "Question", fetch = FetchType.LAZY, cascade = { CascadeType.ALL })
//    private QuestionVoteCount questionVoteCount;

    public void addQuestionTags(List<Tag> tags) {
        List<QuestionTag> questionTags = tags.stream()
            .map((tag) -> new QuestionTag(this, tag))
            .collect(Collectors.toList());

        for (QuestionTag questionTag : questionTags) {
            addQuestionTag(questionTag);
        }
    }

    public void addQuestionTag(QuestionTag questionTag) {
        questionTags.add(questionTag);
    }
}
