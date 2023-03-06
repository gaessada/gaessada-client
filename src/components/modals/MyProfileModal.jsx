import React from "react";
import DefaultUser from "../../assets/default_user.png";

const MyProfileModal = () => {
  return (
    <div className="w-full px-8 py-8">
      <div className="flex h-28 w-full items-center font-nanum">
        <img src={DefaultUser} alt="" className="w-28 h-28 rounded-full" />
        <div className="ml-6">
          <p className="text-3xl">장동해</p>
          <p className="mt-3 text-xs">대표 · (주)남산컴퍼니</p>
        </div>
      </div>
      <div className="w-full p-8 mt-4 bg-gray-100 rounded-lg border font-nanum flex space-x-12">
        <div className="space-y-4 text-sm text-gray-500">
          <p>직책</p>
          <p>소속</p>
          <p>현지시간</p>
          <p>깃허브</p>
          <p>링크드인</p>
          <p>이력서</p>
        </div>
        <div className="space-y-4 text-sm">
          <p>대표</p>
          <p>(주)남산컴퍼니</p>
          <p>오후 3:19, 2023년 3월 7일</p>
          <p>www.github.com/andrew-jang</p>
          <p>www.linkedin.com/andrew-jang0</p>
          <p>www.namsancompany.com</p>
        </div>
      </div>
    </div>
  );
};

export default MyProfileModal;
