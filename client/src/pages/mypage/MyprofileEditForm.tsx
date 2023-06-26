import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Button from '../../components/button/Button';
import { RootState } from '../../redux/store';
import { userinfoLogin, userinfoGet } from '../../redux/userInfoReducer';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const MyprofileEditForm = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const memberId = useSelector(
    (state: RootState) => state.userInfoReducer.memberId,
  );
  const [profileInfo, setProfileInfo] = useState({
    profileImage: '',
    displayName: '',
    location: '',
    profileTitle: '',
    profileContent: '',
  });

  //   ~/bluelight/members/edit/{member-id} [GET]
  // ~/bluelight/members/edit/{member-id} [PATCH]
  //   {
  //     "profileImage": "~",
  //     "displayName": "~",
  //     "location": "~",
  //     "profileTitle": "~",
  //     "profileContent": "~"
  // }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setProfileInfo({ ...profileInfo, [id]: value });
    console.log(profileInfo);
  };
  const handleUserInfo = async (memberid: string) => {
    fetch(`${BASE_URL}/members/edit/${memberid}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'true',
      },
    })
      .then(data => data.json())
      .then(data => {
        console.log(data);
        dispatch(
          userinfoGet({
            displayName: data.displayName,
            location: data.location,
            profileContent: data.profileContent,
            profileImage: data.profileImage,
            profileTitle: data.profileTitle,
          }),
        );
        navigation('/mypage');
      })
      .catch(err => {
        console.log(err);
        navigation('/error');
      });
  };

  const handleprofileEdit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(profileInfo);
    fetch(`${BASE_URL}/members/edit/${memberId}`, {
      method: 'PATCH',
      headers: {
        'ngrok-skip-browser-warning': 'true',
        'Content-Type': 'application/json', // json fetch시
      },
      body: JSON.stringify(profileInfo),
    })
      .then(data => {
        if (data.status === 201 || data.status === 200) {
          // 응답이 성공적인 경우
          console.log('요청이 성공했습니다.');
          // console.log(data);

          handleUserInfo(memberId);
          // 여기에서 추가적인 처리를 수행할 수 있습니다.
        } else {
          // 응답이 실패한 경우
          console.log('요청이 실패했습니다.');
          // 실패에 대한 처리를 수행할 수 있습니다.
        }
      })
      .catch(error => {
        console.log('에러', error);
        navigation('/error');
      });
  };

  return (
    <div className="w-[100%] border-t border-t-1 border-gray-200 h-[400px] py-6 ">
      <h3 className="text-[20px] text-bold">Public information</h3>
      <form
        onSubmit={handleprofileEdit}
        className="w-[100%] flex flex-col p-[24px] shadow shadow-md shadow-lg shadow-lg bg-white mt-2"
      >
        {/* 닉네임인풋 */}
        <label
          htmlFor="displayName"
          className="capitalize font-bold text-[13px]"
        >
          Display name
        </label>
        <input
          id="displayName"
          type="text"
          className="my-2 py-2 rounded-sm  border border-solid border-gray-200 "
          onChange={handleInputChange}
        ></input>
        {/* 장소 */}
        <label htmlFor="location" className="capitalize font-bold text-[13px]">
          Location
        </label>
        <input
          id="location"
          type="text"
          className="my-2 py-2 rounded-sm  border border-solid border-gray-200 "
          onChange={handleInputChange}
        ></input>
        {/* 타이틀 */}
        <label
          htmlFor="profileTitle"
          className="capitalize font-bold text-[13px]"
        >
          title
        </label>
        <input
          id="profileTitle"
          type="text"
          className="my-2 py-2 rounded-sm  border border-solid border-gray-200 "
          onChange={handleInputChange}
        ></input>

        <Button customStyle="mt-5 h-[40px] w-[100px]">
          {/* */}
          save profile
        </Button>
      </form>
    </div>
  );
};

export default MyprofileEditForm;
