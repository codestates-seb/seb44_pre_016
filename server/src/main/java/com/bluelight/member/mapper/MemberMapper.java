package com.bluelight.member.mapper;


import com.bluelight.member.dto.ProfileDto;
import com.bluelight.member.dto.SignUpDto;
import com.bluelight.member.entity.Member;
import com.bluelight.member.entity.Profile;
import java.time.format.DateTimeFormatter;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface MemberMapper {
    Member memberPostToMember(SignUpDto signUpDto);

    default ProfileDto.Response profileToProfileResponse(Profile profile){
        ProfileDto.Response profileDto = new ProfileDto.Response();

        profileDto.setProfileImage(profile.getProfileImage());
        profileDto.setDisplayName(profile.getDisplayName());
        profileDto.setLocation(profile.getLocation());
        profileDto.setProfileTitle(profile.getProfileTitle());
        profileDto.setProfileContent(profile.getProfileContent());
        profileDto.setCreatedAt(profile.getMember().getCreatedAt().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")));

        return profileDto;
    }
}
