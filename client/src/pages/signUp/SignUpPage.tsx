import React from 'react';
import Litext from './Litext';
import SignupForm from './SignupForm';

function SignUpPage() {
  return (
    <div className="w-[100%] h-[800px] flex items-center justify-center gap-10">
      <div className="w-[420px] ">
        <h2 className="text-[27px] mb-5">Join the Stack Overflow community</h2>
        <ul>
          {/* Get unstuck -ask a question */}
          <Litext />
          <Litext />
          <Litext />
          <Litext />
        </ul>
        <p className="mt-4 text-gray-500 text-[13px]">
          Collaborate and share knowledge with a private group for FREE.
          <br />
          <a
            href="https://stackoverflow.com/teams?utm_source=so-owned&amp;utm_medium=product&amp;utm_campaign=free-50&amp;utm_content=public-sign-up"
            target="_blank"
            rel="noreferrer"
            className="text-blue"
          >
            Get Stack Overflow for Teams free for up to 50 users
          </a>
        </p>
      </div>
      {/*  border-solid  border-[1px] border-red-400 */}
      <div className="w-[316px] h-[600px]  ">
        {/* 구글로그인 */}
        <button
          className=" w-[100%] border-solid  border-[1px] border-gray-300 bg-white p-3 rounded-[5px] hover:bg-gray-50 mb-3 "
          data-provider="google"
          data-oauthserver="https://accounts.google.com/o/oauth2/auth"
          data-oauthversion="2.0"
        >
          <svg
            aria-hidden="true"
            className="native svg-icon iconGoogle"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path
              fill="#4285F4"
              d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18Z"
            ></path>
            <path
              fill="#34A853"
              d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17Z"
            ></path>
            <path
              fill="#FBBC05"
              d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07Z"
            ></path>
            <path
              fill="#EA4335"
              d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3Z"
            ></path>
          </svg>
          Sign up with Google{' '}
        </button>
        <SignupForm />
        {/* 한줄 */}
        <div className="mx-auto mt-9 text-[10px] flex flex-col items-center ">
          {/* 한줄 */}
          <div>
            Don’t have an account?{' '}
            <a
              href="/users/signup?ssrc=head&amp;returnurl=https%3a%2f%2fstackoverflow.com%2f"
              className="text-blue"
            >
              Sign up
            </a>
          </div>
          {/* 한줄 */}
          <div className="flex mt-3">
            <div className="mt12">
              Are you an employer?{' '}
              <a
                href="https://careers.stackoverflow.com/employer/login"
                className="text-blue"
              >
                Sign up on Talent{' '}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
