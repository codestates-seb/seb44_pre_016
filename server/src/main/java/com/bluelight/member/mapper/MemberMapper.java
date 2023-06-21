package com.bluelight.member.mapper;

import com.bluelight.member.dto.SignUpDto;
import com.bluelight.member.entity.Member;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface MemberMapper {
    Member memberPostToMember(SignUpDto signUpDto);
}
