import React, { useState } from "react";
import { BsArrowReturnRight } from "react-icons/bs";

const RejectFeedbackModal = ({ setVisible }) => {
  const Reply = ({ isRecent, date, title }) => (
    <div className="flex flex-shrink-0 my-1 mb-4">
      <BsArrowReturnRight className="text-gray-500 text-xs" />
      <div className="ml-2">
        <p className="text-sm">{title}</p>
        <p
          className={`text-xs ${
            isRecent ? "text-red-500" : "text-gray-500"
          }`}
        >
          {date}
        </p>
      </div>
    </div>
  );

  const Cell = ({ name }) => {
    const [inputValue, setInputValue] = useState("");
    return (
      <div>
        <textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="추가 설명을 작성하세요"
          className={` w-full h-32 border font-nanum mt-4 rounded-xl bg-gray-100 outline-blue-400 p-4`}
        />
      </div>
    );
  };

  return (
    <div className="p-8 w-full">
      <div className="font-nanum mb-4">
        <div className="flex items-center border-b pb-8">
          <button className="w-32 h-32 flex items-center justify-center hover:bg-gray-100 border rounded transition"></button>
          <div className="ml-8">
            <p className="text-xs text-zinc-500 font-bold">체크사항 번호</p>
            <p className="mt-1 text-sm">#12</p>
            <p className="text-xs text-zinc-500 mt-4 font-bold">상태</p>
            <p className="mt-1 text-sm text-red-500">승인 거절</p>
          </div>
        </div>

        <p className="text-xs text-zinc-500 my-8 font-bold">체크사항 설명</p>
        <p className="mb-4">이 부분 가로 크기가 더 커져야 합니다</p>

        <Reply date={"2023-03-02"} title="아직도 가로 크기가 작습니다" />
        <Reply isRecent date={"2023-03-04"} title="아직도!!!!" />
      </div>
      <Cell name={"Sereen"} />

      <div className="w-full justify-end flex mt-8 pb-8 font-nanum">
        <button
          onClick={() => setVisible(false)}
          className="h-8 px-5 mr-6 font-bold rounded text-sm text-gray-500"
        >
          취소
        </button>
        <button
          className={`bg-blue-500 hover:bg-blue-400 h-8 px-12 transition text-white font-bold rounded text-sm`}
        >
          재요청
        </button>
      </div>
    </div>
  );
};

export default RejectFeedbackModal;
