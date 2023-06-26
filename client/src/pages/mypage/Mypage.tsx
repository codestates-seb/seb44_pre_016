import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/button/Button';
import { RootState } from '../../redux/store';
import MyprofileEditForm from './MyprofileEditForm';

function Mypage() {
  const displayname = useSelector(
    (state: RootState) => state.userInfoReducer.displayName,
  );

  const email = useSelector((state: RootState) => state.userInfoReducer.email);
  const location = useSelector(
    (state: RootState) => state.userInfoReducer.location,
  );
  const title = useSelector((state: RootState) => state.userInfoReducer.title);
  const aboutme = useSelector(
    (state: RootState) => state.userInfoReducer.aboutme,
  );
  const profileContent = useSelector(
    (state: RootState) => state.userInfoReducer.profileContent,
  );
  const profileImage = useSelector(
    (state: RootState) => state.userInfoReducer.profileImage,
  );
  const profileTitle = useSelector(
    (state: RootState) => state.userInfoReducer.profileTitle,
  );
  return (
    <div className="flex w-[100%] h-[800px] flex-col ">
      <div className="flex flex-row w-[100%] h-[200px] p-5  justify-between">
        <div className="flex">
          <img
            src={`${profileImage}`}
            alt="프로필사진"
            className="w-[100px] h-[120px]"
          />
          <div className="ml-3 ">
            <h2 className="text-[30px] ">{displayname}</h2>
            <p className="text-[13px] font-thin mt-2">{profileTitle}</p>
            <p className="text-[13px] font-thin mt-2">{aboutme}</p>
            <ul className=" ">
              <li className="flex flex-row  mt-3">
                <div className="flex--item fc-black-350">
                  <svg
                    aria-hidden="true"
                    className="svg-icon iconCake"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  >
                    <path d="M9 4.5a1.5 1.5 0 0 0 1.28-2.27L9 0 7.72 2.23c-.14.22-.22.48-.22.77 0 .83.68 1.5 1.5 1.5Zm3.45 7.5-.8-.81-.81.8c-.98.98-2.69.98-3.67 0l-.8-.8-.82.8c-.49.49-1.14.76-1.83.76-.55 0-1.3-.17-1.72-.46V15c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-2.7c-.42.28-1.17.45-1.72.45-.69 0-1.34-.27-1.83-.76Zm1.3-5H10V5H8v2H4.25C3 7 2 8 2 9.25v.9c0 .81.91 1.47 1.72 1.47.39 0 .77-.14 1.03-.42l1.61-1.6 1.6 1.6a1.5 1.5 0 0 0 2.08 0l1.6-1.6 1.6 1.6c.28.28.64.43 1.03.43.81 0 1.73-.67 1.73-1.48v-.9C16 8.01 15 7 13.75 7Z"></path>
                  </svg>
                </div>
                {` Member for 15 days`}
              </li>
              <li className="flex flex-row  mt-3">
                <div className="flex--item fc-black-350">
                  <svg
                    aria-hidden="true"
                    className="svg-icon iconCake"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  >
                    <path d="M9 4.5a1.5 1.5 0 0 0 1.28-2.27L9 0 7.72 2.23c-.14.22-.22.48-.22.77 0 .83.68 1.5 1.5 1.5Zm3.45 7.5-.8-.81-.81.8c-.98.98-2.69.98-3.67 0l-.8-.8-.82.8c-.49.49-1.14.76-1.83.76-.55 0-1.3-.17-1.72-.46V15c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-2.7c-.42.28-1.17.45-1.72.45-.69 0-1.34-.27-1.83-.76Zm1.3-5H10V5H8v2H4.25C3 7 2 8 2 9.25v.9c0 .81.91 1.47 1.72 1.47.39 0 .77-.14 1.03-.42l1.61-1.6 1.6 1.6a1.5 1.5 0 0 0 2.08 0l1.6-1.6 1.6 1.6c.28.28.64.43 1.03.43.81 0 1.73-.67 1.73-1.48v-.9C16 8.01 15 7 13.75 7Z"></path>
                  </svg>
                </div>
                {location}
              </li>
            </ul>
          </div>
        </div>
        <div className=" ">
          <Button customStyle="h-[30px] bg-white border-1 border-gray-300 text-gray-500 hover:bg-gray-300">
            Edit profile
          </Button>
        </div>
      </div>

      <ul className="flex gap-2 ">
        <li className="">
          <Button customStyle=" bg-white text-black active:bg-orange-500 border-none rounded-full hover:bg-gray-300">
            Profile
          </Button>
        </li>
        <li>
          <Button customStyle=" bg-orange-500 border-none hover:bg-orange-600 rounded-full">
            Settings
          </Button>
        </li>
      </ul>
      <div className=" flex mt-5">
        <dl className="w-[200px] h-[500px]">
          <dt className="uppercase text-[12px] font-bold py-3 ">
            personal information
          </dt>
          <dd className="w-[100%]">
            <Button customStyle="w-[100%] rounded-full bg-orange-500  border-0 justify-start mb-2">
              Edit profile
            </Button>
          </dd>
          <dd className="w-[100%] ">
            <Button customStyle="rounded-full bg-white border-0 text-black ">
              Delete profile
            </Button>
          </dd>
        </dl>
        <div className="w-[100%] ml-5">
          <h3 className="text-[30px] py-2">Edit your profile</h3>
          <MyprofileEditForm />
        </div>
      </div>
    </div>
  );
}

export default Mypage;
