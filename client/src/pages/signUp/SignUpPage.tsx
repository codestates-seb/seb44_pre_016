import React from 'react';
import Litext from './Litext';

function SignUpPage() {
  return (
    <div className="w-[100%] h-[800px] flex items-center justify-center gap-10 border-[1px] border-solid  border-[#4393F7]">
      <div className="w-[420px] border-[1px] border-solid  border-[#4393F7]">
        <h2 className="text-[27px] mb-5">Join the Stack Overflow community</h2>
        <ul>
          {/* Get unstuck -ask a question */}
          <Litext />
          <Litext />
          <Litext />
          <Litext />
        </ul>
      </div>
      <div className="w-[316px] h-[600px]   border-solid  border-[1px] border-red-400">
        로그인
      </div>
    </div>
  );
}

export default SignUpPage;
