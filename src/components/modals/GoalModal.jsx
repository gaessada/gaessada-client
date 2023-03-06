import React, { useState } from "react";

const GoalModal = ({ setVisible }) => {
  const [inputValue, setInputValue] = useState("");
  const maxLength = 50;
  return (
    <div className="p-8 w-full">
      <p className="text-sm font-nanum">
        개발팀을 전체의 목표 또는 기업의 방향성을 알려주세요. ({maxLength}자
        이내)
      </p>
      <textarea
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="개발팀 전체의 목표를 작성하세요"
        className={`${
          inputValue.length > maxLength ? "outline-red-400" : "outline-blue-400"
        } w-full h-32 border font-nanum mt-4 rounded-xl bg-gray-100  p-4`}
      />
      <div
        className={`${
          inputValue.length > maxLength ? "text-red-500" : "text-gray-500"
        } w-full flex justify-end font-nanum text-sm `}
      >
        {inputValue.length}/{maxLength}자
      </div>
      <div className="w-full justify-end flex h-8 mt-8 font-nanum">
        <button
          onClick={() => setVisible(false)}
          className="h-full px-5 mr-6 font-bold rounded text-sm text-gray-500"
        >
          취소
        </button>
        <button
          className={`${
            inputValue.length > maxLength
              ? "bg-gray-200"
              : "bg-blue-500 hover:bg-blue-400"
          } h-full px-12 transition text-white font-bold rounded text-sm`}
        >
          저장
        </button>
      </div>
    </div>
  );
};

export default GoalModal;
