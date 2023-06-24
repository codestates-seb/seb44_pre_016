package com.bluelight.tag.service;

import com.bluelight.exception.BusinessLogicException;
import com.bluelight.exception.ExceptionCode;
import com.bluelight.tag.dto.TagDto;
import com.bluelight.tag.entity.Tag;
import com.bluelight.tag.repository.TagRepository;
import java.util.List;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class TagService {

    private final TagRepository tagRepository;

    @Transactional
    public Long createTag(TagDto.Request requestBody) {
        Tag savedTag = tagRepository.save(requestBody.toEntity());
        return savedTag.getTagId();
    }

    @Transactional(readOnly = true)
    public Tag findTag(long tagId) {
        return findVerifiedTag(tagId);
    }

    public List<Tag> findTags() {
        return tagRepository.findAll();
    }

    @Transactional(readOnly = true)
    public Tag findVerifiedTag(long tagId) {
        Optional<Tag> optionalTag =
            tagRepository.findById(tagId);
        Tag findTag =
            optionalTag.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.TAG_NOT_FOUND));
        return findTag;
    }
}
