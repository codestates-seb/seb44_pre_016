package com.bluelight.tag.mapper;

import com.bluelight.tag.dto.TagDto;
import com.bluelight.tag.entity.Tag;
import java.util.List;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface TagMapper {

    TagDto.Response tagToTagResponse(Tag tag);

    List<TagDto.Response> tagsToTagResponse(List<Tag> tags);

}
