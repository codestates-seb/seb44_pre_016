package com.bluelight.tag.controller;

import com.bluelight.tag.dto.CreateTagDto;
import com.bluelight.tag.service.TagService;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/tags")
@RequiredArgsConstructor
public class TagController {

    private final TagService tagService;

    @PostMapping
    public ResponseEntity createTag(@Valid @RequestBody CreateTagDto.Request requestBody) {
        return new ResponseEntity(tagService.createTag(requestBody), HttpStatus.CREATED);
    }

}
