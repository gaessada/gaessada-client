import React, { useState } from "react";
import DefaultUser from "../../assets/default_user.png";

const MilestoneModal = ({ setVisible }) => {
  const Cell = ({ name }) => {
    const [inputValue, setInputValue] = useState("");
    const maxLength = 50;
    return (
      <div>
        <div className="items-center py-2 inline">
          <img
            src={DefaultUser}
            className="h-5 w-5 rounded-full inline"
            alt=""
          />
          <p className="font-semibold font-poppins inline text-sm"> {name} </p>
          <p className="text-sm font-nanum inline">
            을 위해 단기 목표 또는 마일스톤을 정해주세요. ({maxLength}자 이내)
          </p>
        </div>
        <textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="단기 목표 또는 마일스톤"
          className={`${
            inputValue.length > maxLength
              ? "outline-red-400"
              : "outline-blue-400"
          } w-full h-32 border font-nanum mt-4 rounded-xl bg-gray-100  p-4`}
        />
        <div
          className={`${
            inputValue.length > maxLength ? "text-red-500" : "text-gray-500"
          } w-full flex justify-end font-nanum text-sm `}
        >
          {inputValue.length}/{maxLength}자
        </div>
      </div>
    );
  };

  return (
    <div className="p-8 w-full">
      <Cell name={"Sereen"} />
      <Cell name={"Ahmad"} />

      <div className="w-full justify-end flex h-8 mt-8 font-nanum">
        <button
          onClick={() => setVisible(false)}
          className="h-full px-5 mr-6 font-bold rounded text-sm text-gray-500"
        >
          취소
        </button>
        <button
          className={`bg-blue-500 hover:bg-blue-400 h-full px-12 transition text-white font-bold rounded text-sm`}
        >
          저장
        </button>
      </div>
    </div>
  );
};

export default MilestoneModal;
