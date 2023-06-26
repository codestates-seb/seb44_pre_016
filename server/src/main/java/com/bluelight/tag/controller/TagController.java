package com.bluelight.tag.controller;

import com.bluelight.tag.dto.TagDto;
import com.bluelight.tag.entity.Tag;
import com.bluelight.tag.mapper.TagMapper;
import com.bluelight.tag.service.TagService;
import java.util.List;
import javax.validation.Valid;
import javax.validation.constraints.Positive;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/tags")
@RequiredArgsConstructor
public class TagController {

    private final TagService tagService;
    private final TagMapper tagMapper;

    @PostMapping
    public ResponseEntity createTag(@Valid @RequestBody TagDto.Request requestBody) {
        return new ResponseEntity(tagService.createTag(requestBody), HttpStatus.CREATED);
    }

    @GetMapping("/{tag-id}")
    public ResponseEntity getTag(@PathVariable("tag-id") @Positive long tagId) {
        Tag tag = tagService.findTag(tagId);
        return new ResponseEntity<>(tagMapper.tagToTagResponse(tag),HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getTags() {
        List<Tag> tags = tagService.findTags();
        return new ResponseEntity<>(tagMapper.tagsToTagResponse(tags),HttpStatus.OK);
    }
}
