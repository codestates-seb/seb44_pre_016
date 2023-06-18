import React, { ButtonHTMLAttributes } from 'react';
import tw from 'tailwind-styled-components';
import styled, { css } from 'styled-components';

type Variant = 'default' | 'login';
type Size = 'sm' | 'md';

// props 형식
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: Variant;
  size: Size;
}

export type Props = Partial<ButtonProps>;

// 버튼 타입에 따라 달라지는 css
const buttonRoleStyle = (props: Props) => css`
  background-color: ${props.variant === 'default' ? '#0A95FF' : '#E3ECF3'};
  color: ${props.variant === 'default' ? 'white' : '#83A6C4'};
  border: 1px solid ${props.variant === 'default' ? '#4393F7' : '#83A6C4'};

  &:hover {
    background-color: ${props.variant === 'default' ? '#0064C2' : '#B9D2E8'};
  }

  &:active {
    background-color: ${props.variant === 'default' ? '#2960B7' : '#A6C4DF'};
  }
  width: ${props.size === 'md' ? '100%' : 'auto'};
`;

const ButtonBase = styled.button<Props>`
  display: inline-flex;
  gap: 4px;
  justify-content: center;
  align-items: center;
  vertical-align: center;
  /* position: relative;
  min-width: 64px; */
  cursor: pointer;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none;
  transition: background-color 0.1s ease;
  border: none;
  border-radius: 6px;
  padding: 10px 12px;
  text-transform: capitalize;
  ${buttonRoleStyle}
`;

export default ButtonBase;
