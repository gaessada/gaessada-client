import React, { useState } from "react";
import { GrDocumentNotes } from "react-icons/gr";
import moment from "moment";
import ModalContainer from "./ModalContainer";
import DailyReportModal from "./modals/DailyReportModal";

const DailyReportCell = ({ pending, type = null }) => {
  const [checkType, setCheckType] = useState(type);
  const [dailyReportModalOpen, setDailyReportModalOpen] = useState(false);
  const actionArray = [
    { type: 0, emoji: "😊", text: "굿~!" },
    { type: 1, emoji: "✅", text: "승인" },
    { type: 2, emoji: "😞", text: "노력바람" },
  ];

  const ActionButton = ({ type, emoji, text }) => (
    <button
      onClick={() => setCheckType(type)}
      className={`${
        checkType === type ? "bg-sky-200 border-sky-400" : "hover:bg-gray-100"
      } h-6 px-1 mt-2 flex items-center justify-center border rounded-lg cursor-pointer`}
    >
      <p>{emoji}</p>
      <p className="text-xs font-bold">{text}</p>
    </button>
  );

  return (
    <div className="text-sm mb-2">
      <ModalContainer
        shouldCloseOnOverlayClick={false}
        isVisible={dailyReportModalOpen}
        setVisible={setDailyReportModalOpen}
        modalTitle="업무일지"
        children={<DailyReportModal />}
      />
      <button
        onClick={() => setDailyReportModalOpen(true)}
        className="w-72 h-16 bg-white border shadow rounded-xl flex items-center px-4 hover:bg-gray-100 transition cursor-pointer relative"
      >
        <GrDocumentNotes size={20} />
        <div className="ml-4">
          <div className="text-xs font-semibold">
            <div className="inline w-4 h-4 bg-red-500"></div>
            {"2023년 3월 2일 업무일지"}
          </div>
          <div className="text-xs flex text-gray-500 mt-1">
            <p className="text-xs">{moment().format("제출 M월 D일 a h:mm")}</p>
          </div>
        </div>
        {checkType !== null && (
          <div className="absolute -top-2 right-2 w-8 h-8 rounded-full bg-white shadow border text-lg flex items-center justify-center">
            {actionArray[checkType].emoji}
          </div>
        )}
      </button>
      {pending && (
        <div className="flex space-x-2 mt-1">
          {actionArray.map((item) => (
            <ActionButton
              key={item.type}
              type={item.type}
              emoji={item.emoji}
              text={item.text}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DailyReportCell;
