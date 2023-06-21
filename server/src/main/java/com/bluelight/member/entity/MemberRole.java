package com.bluelight.member.entity;

import javax.persistence.Column;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

//@Getter
//@Setter
//@NoArgsConstructor
//@Entity
//@Table(name = "member_roles")
public class MemberRole {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_role_id")
    private Long memberRoleId;

    @Column(name = "role")
    private String role;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;


    public MemberRole(Member member, String role) {
        this.member = member;
        this.role = role;
    }

    public MemberRole(String role) {
        this.role = role;
    }
}