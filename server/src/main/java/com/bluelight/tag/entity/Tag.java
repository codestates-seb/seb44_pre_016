package com.bluelight.tag.entity;

import com.bluelight.question.entity.QuestionTag;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Tag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tag_id")
    private Long tagId;

    @Column(nullable = false, unique = true)
    private String tagName;

    @Column(nullable = false)
    private String tagContent;

    @OneToMany(mappedBy = "tag")
    private List<QuestionTag> questionTags = new ArrayList<>();

    public Tag(String tagName, String tagContent) {
        this.tagName = tagName;
        this.tagContent = tagContent;
    }

    public void addQuestionTag(QuestionTag questionTag) {
        this.questionTags.add(questionTag);
    }
}
