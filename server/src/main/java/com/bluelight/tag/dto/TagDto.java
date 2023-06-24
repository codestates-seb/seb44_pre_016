package com.bluelight.tag.dto;

import com.bluelight.tag.entity.Tag;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

public class TagDto {

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
    @AllArgsConstructor
    @Getter
    public static class Response {

        private long tagId;
        private String tagName;
        private String tagContent;
    }
}
