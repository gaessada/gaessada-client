import React from "react";
import moment from "moment/moment";
import DefaultUser from "../assets/default_user.png";

const RightPanelMain = () => {
  const Cell = ({ type }) => (
    <div className="w-full py-3 text-xs flex items-start">
      <img src={DefaultUser} alt="" className="w-8 h-8 rounded-full mr-3" />
      <div>
        <p className="font-bold inline">Sereen </p>
        <p className="font-nanum font-bold text-gray-500 inline">
          · {moment().fromNow()}
        </p>
        <p className="mt-1">
          {type === 0
            ? "체크사항 수정 완료 처리"
            : "<2월 12일 업무일지> 제출함"}
        </p>
      </div>
    </div>
  );
  return (
    <div className="w-80 h-screen flex-shrink-0 p-5 py-4">
      <p className="font-nanum text-lg font-bold mb-4">히스토리</p>
      <Cell type={0} />
      <Cell type={1} />
    </div>
  );
}

export default RightPanelMain