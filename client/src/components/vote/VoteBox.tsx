import React, { useState } from "react";
import tw from 'tailwind-styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

const Container = tw.div`
flex
flex-col
mx-10
h-[150px]
`

const RoundBtn = tw.button`
flex
rounded-full
border-solid
border-[1px]
w-[40px]
h-[40px]
items-center
justify-center

hover:bg-[#F8E4D1]
active:border-[2px]
active:border-orange-point
`

const Count = tw.div`
flex
items-center
justify-center
my-5
text-xl
font-medium
`

interface VoteBoxProps {
  count: number;
}

function VoteBox({count}:VoteBoxProps) {
  const [vote, setVote] = useState(count);

  const incrementCount = () => {
    setVote(vote + 1);
  };

  const decrementCount = () => {
    setVote(vote - 1);
  };

  return(
    <Container>
      <RoundBtn>
      <FontAwesomeIcon icon={faCaretUp} onClick={incrementCount}/>
      </RoundBtn>
      <Count>
        {vote}
      </Count>
      <RoundBtn>
        <FontAwesomeIcon icon={faCaretDown} onClick={decrementCount} />
      </RoundBtn>
    </Container>
  )
}

export default VoteBox;