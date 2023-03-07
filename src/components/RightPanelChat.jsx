import React from "react";
import DefaultUser from "../assets/default_user.png";

const RightPanelChat = () => {
  const Cell = ({ type }) => (
    <button className="w-full h-8 bg-zinc-100 rounded-xl hover:bg-zinc-200 text-nanum text-xs flex items-center px-4">
      스크린샷 2023.02.19.jpg
    </button>
  );
  return (
    <div className="w-80 h-screen flex-shrink-0 p-5 py-12 flex flex-col items-center">
      <img src={DefaultUser} alt="" className="w-24 h-24 rounded-full" />
      <p className="text-lg font-medium my-4">Sereen</p>

      <div className="flex space-x-8">
        <div className="space-y-4 flex flex-col items-end text-xs font-semibold font-nanum">
          <p>직책</p>
          <p>소속</p>
          <p>현지시간</p>
        </div>
        <div className="space-y-4 flex flex-col items-start text-xs font-semibold font-nanum">
          <p>백엔드 개발자</p>
          <p>주식회사 픽톨로지</p>
          <p>3:00 am</p>
        </div>
      </div>

      <div className="w-full mt-12">
        <p className="font-black text-xs font-nanum">첨부파일</p>
        <div className="py-4 space-y-1">
          <Cell />
          <Cell />
          <Cell />
        </div>
      </div>
    </div>
  );
};

export default RightPanelChat;
