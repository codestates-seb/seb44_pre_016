import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  bottom: -52px;
  left: 0px;
  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.3));
`;
const Triangle = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 0;
  height: 0;
  border-bottom: 13px solid white;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
`;

const DropUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  margin-top: 13px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 650px;
  height: fit-content;
  background-color: white;
  border-radius: 3px;

  li {
    display: flex;
    flex-direction: row;
    width: 180px;
    height: 25px;
    font-size: 13px;
    line-height: 25px;
    margin: 10px 13px;
    width: 50%;
    cursor: pointer;
    > p {
      font-weight: bold;
    }
  }
`;
interface DropdownProps {
  dropdownHandler: () => void;
  inputRef: React.RefObject<HTMLInputElement>;
}

function Dropdown({ dropdownHandler, inputRef }: DropdownProps) {
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
        <li>
          <p>Keyword </p>search by keyword
        </li>
        <li>
          <p>[tag] </p> search within a tag
        </li>
      </DropUl>
    </Container>
  );
}

export default Dropdown;
