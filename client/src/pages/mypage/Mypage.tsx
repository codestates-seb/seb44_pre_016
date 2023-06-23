import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Mypage() {
  return (
    <div className="flex w-[100%] h-[800px]">
      <div className="flex flex-row w-[100%] h-[200px] p-5 border-2 border-red-500">
        <img
          src="/images/profile.jpg"
          alt="프로필사진"
          className="w-[100px] h-[120px]"
        />
        <div className="ml-3 ">
          <h2 className="text-[30px] ">김준표</h2>
          <p className="text-[13px] font-thin mt-2">
            킹갓레전드 준표님 환영합니다.
          </p>
          <ul>
            <li className="flex flex-row"></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Mypage;
