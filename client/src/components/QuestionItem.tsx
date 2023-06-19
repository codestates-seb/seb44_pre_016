import React from 'react';
import data from '../common/data/data.json';
import {
  ONE_DAY_MILLISECOND,
  ONE_HOUR_MILLISECOND,
  ONE_MINUTE_MILLISECOND,
  ONE_SECOND_MILLISECOND,
} from '../common/data/ConstantValue';

function QuestionItem() {
  const changeDate = date => {
    const nowDate = Date.now();
    const oldDate = Date.parse(date);
    let dateDiff = nowDate - oldDate;

    if (dateDiff < ONE_SECOND_MILLISECOND) {
      return 'now';
    }
    if (dateDiff < ONE_MINUTE_MILLISECOND) {
      dateDiff = Math.floor(dateDiff / ONE_SECOND_MILLISECOND);
      return `${dateDiff} sec ago`;
    }
    if (dateDiff < ONE_HOUR_MILLISECOND) {
      dateDiff = Math.floor(dateDiff / ONE_MINUTE_MILLISECOND);
      return `${dateDiff} min ago`;
    }
    if (dateDiff < ONE_DAY_MILLISECOND) {
      dateDiff = Math.floor(dateDiff / ONE_HOUR_MILLISECOND);
      return `${dateDiff} hour ago`;
    }
    dateDiff = Math.floor(dateDiff / ONE_DAY_MILLISECOND);

    return `${dateDiff} day ago`;
  };

  return (
    <div className="p-4 max-w-3xl flex min-h-6.875 border-t border-[#d6d9dc]">
      <div className="flex flex-col items-end flex-wrap justify-evenly w-28 mr-4 mb-1 text-[13px]">
        <div className="text-black-nav-active">{data[0].votes} votes</div>
        <div
          className={
            data[0].answer
              ? `text-green border-green border px-1 py-0.5 rounded-m`
              : `text-[#6A737C]`
          }
        >
          {data[0].answer} answers
        </div>
      </div>
      <div className="flex-1 text-start">
        <h3 className="text-lg text-blue-text hover:text-blue visit:text-[#0061BD] pr-6 mb-1">
          {data[0].title}
        </h3>
        <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-2 text-xs tracking-wide">
          <div>
            <ul>
              {data[0].tags.map(e => (
                <li className="list-none inline mr-1" key={e.tagId}>
                  <p className="inline-flex py-1 px-1.5 bg-[#E1ECF4] hover:bg-[#D0E3F1] text-[#39739D]">
                    {e.tagName}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap justify-end ml-auto gap-x-1">
            <img
              className="w-4 h-4"
              src={data[0].profileImage}
              alt="프로필 사진"
            />
            <div className="text-[#39739D] hover:text-blue visit:text-[#0061BD]">
              {data[0].nickName}
            </div>
            <time className="text-[#6A737C]">
              {changeDate(data[0].createdAt)}
            </time>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionItem;
