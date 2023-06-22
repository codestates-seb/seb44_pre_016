import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import Button from '../../components/button/Button';
import Editor from '../../components/editor/Editor'

import { QuestionTagList } from '../../components/questionItem/QuestionItem.styled'


import {
  AllContainer,
  TitleContainer,
  DisableContainer,
  InputBox,
  AskTag,
  SuggestionTagBox,
  AnswerTagName,
  SuggestionTagItem,
} from './AskQuestion.styled';

function AskQuestion() {
  const [title, setTitle] = useState("");
  const [isContentEnabled, setIsContentEnabled] = useState(false);
  const [isTagEnabled, setIsTagEnabled] = useState(false);
  const [content, setContent] = useState("");
  const [currentTag, setCurrentTag] = useState("")
  const [similarTags, setSimilarTags] = useState([]);
  const [tags, setTags] = useState([]);

  const allTagList=[
    {
      "tagId": 1,
      "tagName": "java",
      "tagContent": "Java is a high-level object-oriented programming language. Use this tag when you're having problems using or understanding the language itself. This tag is frequently used alongside other tags for libraries and/or frameworks used by Java developers."
    },
    {
      "tagId": 2500574,
      "tagName": "javascript",
      "tagContent": "JavaScript (a dialect of ECMAScript) is a high-level, dynamic, multi-paradigm, object-oriented, prototype-based, weakly-typed, and interpreted language traditionally used for client-side scripting in web browsers. JavaScript can also be run outside the browser using a framework like Node.js, Nashorn, Wakanda, or Google Apps Script. Despite the name, it is unrelated to the Java programming language and shares only superficial similarities."
    },
    {
      "tagId": 3,
      "tagName": "java1",
      "tagContent":"spring blah blah"
    },
    {
      "tagId": 6,
      "tagName": "java2",
      "tagContent":"spring-boot blah blah"
    },
    {
      "tagId": 13,
      "tagName": "java3",
      "tagContent":"jwt blah blah"
    }
  ];

  const allTagNameList = allTagList.map((tag) => tag.tagName)

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (value: string) => {
    setContent(value);
  };

  const handleTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTag(e.target.value);

    if (e.target.value === '') {
      setSimilarTags([]);
    } else {
      const foundTags = allTagList
        .filter((tag) =>
          tag.tagName.toLowerCase().includes(e.target.value.toLowerCase())
        );
      setSimilarTags(foundTags);
    }
    console.log(similarTags);
  }

  const handleTagKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if(event.key === 'Enter'){
      event.preventDefault();
      const foundTagName = event.currentTarget.value.toLowerCase();
      const foundTag = allTagList.find(
        (tag) => tag.tagName.toLowerCase() === foundTagName
      );

      if (foundTag && !(tags.some((tag) => tag.tagId === foundTag.tagId))) {
        setTags([...tags, foundTag]);
        setSimilarTags([]);
        setCurrentTag("");
      } else if(!foundTag) {
        alert(`[${foundTagName}] does not exist.`);
      } else {
        setSimilarTags([]);
        setCurrentTag("");
      }
    }

    if(event.key === 'Backspace' && event.currentTarget.value === "") {
      setSimilarTags([]);
    }
  };

  const handleClickSuggestionTag = (id:number) => {
    const foundTag = allTagList.find(
      (tag) => tag.tagId === id
    );
    if (foundTag && (allTagList.some((tag) => tag.tagId === id))) {
      setTags([...tags, foundTag]);
      setSimilarTags([]);
      setCurrentTag("");
    }
  }

  const deleteTag = (id:number) => {
    setTags(tags.filter((tag) => tag.tagId !== id));
  }
  
  const handleTitleNextClick = () => {
    if (title.length >= 15) {
      setIsContentEnabled(true);
    } else {
      alert("Title should be at least 15 characters.");
    }
  };

  const handleContentNextClick = () => {
    if (content.length >= 220) {
      setIsTagEnabled(true);
    } else {
      alert("Content should be at least 220 characters.");
    }
  };

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return `${text.substring(0, maxLength)} ...`;
    }
    return text;
  };

  const handlePostClick = () => {
    // post 요청 보내기
  }

  return (
    <div>
      <div className='font-extrabold text-2xl ml-5 mb-10'>Ask a public question</div>
      <AllContainer>
        <TitleContainer>
          <p className='font-bold mb-1'>Title</p>
          <p className='text-xs'>Be specific and imagine you’re asking a question to another person.</p>
          <InputBox 
            className='h-8'
            value={title}
            onChange={handleTitleChange}
            placeholder='e.g. Is there an R function for finding the index of an element in a vector?'
          />
          <div className='mb-3'></div>
          <Button customStyle='w-min h-8' onClick={handleTitleNextClick}>Next</Button>
        </TitleContainer>
        <DisableContainer isEnabled={isContentEnabled}>
          <p className='font-bold mb-1'>Content</p>
          <p className='text-xs mb-1'>The body of your question contains your problem details and results. Minimum 220 characters.</p>
          <Editor value={content} onChange={handleContentChange} />
          <div className='mt-3'></div>
          {isContentEnabled && (
          <Button customStyle='w-min h-8' onClick={handleContentNextClick}>Next</Button>
          )}

        </DisableContainer>
        <DisableContainer isEnabled={isTagEnabled}>
          <p className='font-bold mb-1'>Tag</p>
          <p className='text-xs mb-1'>Add up to 5 tags to describe what your question is about. Start typing to see suggestions.</p>
          <ul>
              {tags.map(tag => (
                <QuestionTagList key={tag.tagId}>
                  <AskTag onClick={() => deleteTag(tag.tagId)}>
                    {tag.tagName}&nbsp;<FontAwesomeIcon icon={faXmark} />
                  </AskTag>
                </QuestionTagList>
              ))}
          </ul>
          <div>
            <InputBox 
              className='h-8 w-[720px]'
              value={currentTag}
              onChange={handleTagChange}
              onKeyDown={handleTagKeyPress}
              placeholder='e.g. (Java JavaScript django)'
            />
            {currentTag && (
              <SuggestionTagBox>
                <div className='flex content-start flex-wrap'>
                  {similarTags.map(tag => (
                    <SuggestionTagItem key={tag.tagId} onClick={() => handleClickSuggestionTag(tag.tagId)}>
                      <div className='flex items-center justify-start mb-2'>
                        <AnswerTagName>{tag.tagName}</AnswerTagName>
                        <div className='text-gray-text text-sm'>&nbsp;&nbsp;&nbsp;&nbsp;{tag.tagId}</div>
                      </div>
                      <div className='text-xs'>{truncateText(tag.tagContent, 140)}</div>
                    </SuggestionTagItem>
                  ))}
                </div>
              </SuggestionTagBox>
            )}
          </div>
        </DisableContainer>
        {isContentEnabled ? (
          <Button customStyle='w-min h-8' onClick={handlePostClick}>Post&nbsp;your&nbsp;question</Button>
        ):(
          <></>
        )}
      </AllContainer>
    </div>
  )
}

export default AskQuestion;