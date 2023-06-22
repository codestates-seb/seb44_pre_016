import React from 'react';
import ReactQuill from 'react-quill';


import 'react-quill/dist/quill.snow.css';
import 'highlight.js/styles/default.css'; // 기본 하이라이트 스타일 불러오기
import './myQuillStyle.css';

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
}

const modules = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'],
    ['code-block'],
    [{ 'header': 1 }, { 'header': 2 }],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'size': ['small', false, 'large', 'huge'] }],
    [{ 'font': [] }],
    [{ 'align': [] }],
    ['clean'],
  ],
};

// Quill 포맷의 기본 설정
const formats = [
  'bold', 'italic', 'underline', 'strike',
  'blockquote', 'code-block',
  'header', 'list', 'bullet', 'script',
  'indent', 'direction', 'size', 'header',
  'color', 'background', 'font', 'align',
  'clean',
];

const Editor = ({ value, onChange }:EditorProps) => {

  return (
    <div>
      <ReactQuill
        className='react-quill-editor'
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
      />
    </div>
  );
};

export default Editor;