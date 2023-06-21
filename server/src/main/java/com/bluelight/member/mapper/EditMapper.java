package com.bluelight.member.mapper;

import com.bluelight.member.dto.EditDto;
import com.bluelight.member.dto.MemberProfileDto;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface EditMapper {

    default EditDto.Response memberProflieToEditResponse(MemberProfileDto memberProfileDto) {

        String profileImage = null;
        String displayName = null;
        String location = null;
        String profileTitle = null;
        String profileContent = null;
        String name = null;

        profileImage = memberProfileDto.getProfile().getProfileImage();
        displayName = memberProfileDto.getProfile().getDisplayName();
        location = memberProfileDto.getProfile().getLocation();
        profileTitle = memberProfileDto.getProfile().getProfileTitle();
        profileContent = memberProfileDto.getProfile().getProfileContent();
        name = memberProfileDto.getMember().getName();

        EditDto.Response editDto = new EditDto.Response(profileImage, displayName, location, profileTitle,
            profileContent, name);
        return editDto;
    }

}
