package com.bluelight.member.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Profile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "profile_id")
    private Long profileId;

    @Column(name = "display_id", length = 32, nullable = false)
    private String displayName;

    @Column(name = "profile_image", length = 256, nullable = false)
    private String profileImage;

    @Column(name = "location", length = 128, nullable = true)
    private String location;

    @Column(name = "profile_title", length = 64, nullable = true)
    private String profileTitle;

    @Column(name = "profile_content", nullable = true)
    private String profileContent;

    @OneToOne
    @JoinColumn(name = "member_id")
    private Member member;
}
