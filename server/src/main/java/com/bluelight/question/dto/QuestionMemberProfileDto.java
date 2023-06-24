package com.bluelight.question.dto;

import com.bluelight.answer.entity.Answer;
import com.bluelight.member.entity.Member;
import com.bluelight.member.entity.Profile;
import com.bluelight.question.entity.Question;
import com.bluelight.tag.entity.Tag;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class QuestionMemberProfileDto {
    private Question question;
    private Member member;
    private Profile profile;
    private List<Tag> tagList;
    private List<Answer> answerList;
}
