package com.bluelight.tag.dto;

import com.bluelight.tag.entity.Tag;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;

public class CreateTagDto {

    @Getter
    @NoArgsConstructor
    public static class Request {
        @JsonProperty(value = "tagName")
        private String tagName;

        @JsonProperty(value = "tagContent")
        private String tagContent;

        public Tag toEntity() {
            return new Tag(this.tagName, this.tagContent);
        }
    }
}
