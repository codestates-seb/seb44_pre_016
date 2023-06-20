import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.1));
`;
const Triangle = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 0;
  height: 0;
  border-bottom: 18px solid white;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
`;

const DropUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  margin-top: 17px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
  background-color: white;
  border-radius: 12px;

  li {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 180px;
    height: 25px;
    font-size: 16px;
    line-height: 25px;
    margin: 10px 13px;
    // border: 1px solid red;
    cursor: pointer;
  }
`;
interface DropdownProps {
  dropdownHandler: () => void;
  inputRef: React.RefObject<HTMLInputElement>;
}

const Dropdown: React.FC<DropdownProps> = ({ dropdownHandler, inputRef }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handler = e => {
      if (
        !modalRef.current.contains(e.target) &&
        !inputRef.current.contains(e.target)
      ) {
        dropdownHandler();
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });
  return (
    <Container ref={modalRef}>
      <Triangle />
      <DropUl>
        <li>어피치님, 안녕하세요!</li>
      </DropUl>
    </Container>
  );
};

export default Dropdown;
