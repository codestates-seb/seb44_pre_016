package com.bluelight.member.mapper;

import com.bluelight.member.dto.EditDto;
import com.bluelight.member.dto.ProfileDto;
import com.bluelight.member.entity.Profile;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface ProfileMapper {
    ProfileDto profileToProfileResponse(Profile profile);

    Profile profilePatchToProfile(EditDto.Patch editDto);
}
