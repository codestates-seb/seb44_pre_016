package com.bluelight.question.dto;

import com.bluelight.member.entity.Member;
import com.bluelight.tag.entity.Tag;
import java.sql.Timestamp;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AllQuestionDto {

    private Long questionId;
    private String questionTitle;
    private String questionContent;
    private long answerCount;
    private List<QuestionTagResponseDto> questionTag;

    @Setter
    private Long memberId;
    @Setter
    private String profileImage;
    @Setter
    private String displayName;
    private String createdAt;

    public void setMemeber(Member member) {
        this.memberId = member.getMemberId();
        this.displayName = member.getProfile().getDisplayName();
        this.profileImage = member.getProfile().getProfileImage();
    }
}