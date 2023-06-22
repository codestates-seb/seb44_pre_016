package com.bluelight.question.dto;

import com.bluelight.tag.entity.Tag;
import java.sql.Timestamp;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class QuestionDetailDto {


    private String questionTitle;
    private String questionContent;
//    private int questionVoteCount;
    private List<Tag> questionTag;
    private String profileImage;
    private String displayName;
    private String createdAt;

}
