package com.bluelight.tag.service;

import com.bluelight.tag.dto.CreateTagDto;
import com.bluelight.tag.entity.Tag;
import com.bluelight.tag.repository.TagRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class TagService {

    private final TagRepository tagRepository;

    @Transactional
    public Long createTag(CreateTagDto.Request requestBody) {
        Tag savedTag = tagRepository.save(requestBody.toEntity());
        return savedTag.getTagId();
    }
}
