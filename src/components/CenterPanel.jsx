import React from "react";
import { Route, Routes } from "react-router-dom";
import DefaultUser from "../assets/default_user.png";

const CenterPanel = () => {
  const Main = () => {
    const Header = () => (
      <div className="w-full h-14 border-b flex items-center px-4 font-nanum justify-between">
        <div className="flex items-center">
          <div className="px-3 py-1 font-nanum font-bold text-xs text-white bg-gray-500 rounded-lg cursor-default">
            목표
          </div>
          <p className="ml-3 font-bold cursor-default">7월까지 사이트 완성</p>
          <button className="flex-shrink-0 text-blue-500 text-xs font-bold ml-4">
            수정
          </button>
        </div>
        <div className="flex items-center">
          <p className="font-bold text-xs">관리자</p>
          <img src={DefaultUser} className="w-5 h-5 rounded-full ml-3" alt="" />
        </div>
      </div>
    );

    const TitleText = ({ title, hasEdit }) => (
      <div className="font-bold text-sm mb-3 mt-6 flex items-center">
        <p>{title}</p>
        {hasEdit && (
          <button className="text-blue-500 font-bold ml-4 text-xs">수정</button>
        )}
      </div>
    );

    const ShortTermGoal = () => {
      const Cell = ({
        name,
        text
      }) => (
        <div className="flex items-center py-2">
          <img src={DefaultUser} className="h-6 w-6 rounded-full" alt="" />
          <div className="text-sm ml-3">
            <p className="font-bold inline">{name}: </p>
            <p className="inline">
              {text}
            </p>
          </div>
        </div>
      );
      return (
        <div className="w-full">
          <Cell name={"Sereen"} text="2023/04/03 까지 프론트 완성 (수정사항 포함)"/>
          <Cell name={"Ahmad"} text="2023/04/03 까지 벡엔드 초본" />
        </div>
      );
    };

    return (
      <div className="w-full h-screen">
        <Header />
        <div className="px-6">
          <TitleText title="단기목표" hasEdit />
          <ShortTermGoal />
          <TitleText title="업무일지" />

          <TitleText title="체크사항" />
        </div>
      </div>
    );
  };

  return (
    <Routes>
      <Route path="/*" element={<Main />} />
      <Route
        path="/daily-report"
        element={<div className="w-full h-screen bg-gray-300">123</div>}
      />
      <Route
        path="/feedback"
        element={<div className="w-full h-screen bg-gray-400">456</div>}
      />
    </Routes>
  );
};

export default CenterPanel;
