package com.bluelight.answer.dto;

import com.bluelight.member.entity.Member;
import com.bluelight.question.entity.Question;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class CreateAnswerDto {

    private String answerContent;
    private Question question;
    private Member member;
}
