import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sample2 from "../assets/sample2.png";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const RightSection = () => (
    <div className="hidden sm:flex h-screen items-center flex-col w-1/2 justify-center bg-gradient-to-b from-green-900 to-emerald-900 flex-shrink-0">
      <div className="max-w-2xl z-20 px-12">
        <img
          src={Sample2}
          alt=""
          className="object-contain"
          draggable={false}
        />
        <h2 className="text-white text-lg mt-8 font-nanum">
          저렴한 가격으로 높은 퀄리티의 개발자를 정규직으로 채용하세요
        </h2>
      </div>
    </div>
  );

  const LeftSection = () => {
    const [usernameValue, setUsernameValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [errorMessage] = useState("");

    return (
      <div className="w-full flex flex-col items-center justify-center bg-gray-50 relative">
        <div className="max-w-2xl">
          <h1 className="font-nanum text-3xl font-bold">반갑습니다.</h1>
          <h1 className="font-nanum mt-3">오늘 하루도 화이팅 하세요!</h1>

          <div className="mt-8 bg-white rounded-lg bg-opacity-10 w-full space-y-4">
            <input
              placeholder="아이디 또는 이메일"
              value={usernameValue}
              onChange={(e) => setUsernameValue(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 outline-none"
            />
            <input
              placeholder="비밀번호"
              type={"password"}
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 outline-none"
            />
          </div>

          {errorMessage && (
            <p className="mt-4 text-xs text-red-500">{errorMessage}</p>
          )}
          <button
            onClick={() => navigate("/main")}
            disabled={errorMessage === "Successfully submitted!"}
            className="font-nanum text-sm p-3 rounded-lg px-6 mt-4 w-full font-bold text-white bg-black"
          >
            로그인
          </button>
        </div>
        <p className="absolute bottom-4 left-4 text-xs font-nanum text-gray-500">
          © NAMSAN COMPANY {new Date().getFullYear()}
        </p>
      </div>
    );
  };

  return (
    <div className="w-full h-screen flex flex-col items-center font-nanum">
      <Navbar />
      <div className="flex w-full h-full">
        <LeftSection />
        <RightSection />
      </div>
    </div>
  );
};

export default SignIn;
