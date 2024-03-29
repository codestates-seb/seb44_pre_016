import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  customStyle?: string;
}

function Button({ children, customStyle, ...attributes }: ButtonProps) {
  const buttonStyles = `
  text-[white] bg-[#4393F7] rounded-[6px]
  inline-flex 
  capitalize p-[10px]
  border-[1px]
  border-solid
  border-[#4393F7]
 text-[13px]
  p-[7px]
  hover:bg-[#0064C2]
  active:bg-[#2960B7]
  ${customStyle}`; // 커스텀 스타일을 포함한 클래스

  return (
    <button className={buttonStyles} {...attributes}>
      {children}
    </button>
  );
}

export default Button;
