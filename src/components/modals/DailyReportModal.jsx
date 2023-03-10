import moment from "moment";
import React, { useState } from "react";

const DailyReportModal = ({ pending = true }) => {
  const [checkType, setCheckType] = useState(null);
  const actionArray = [
    { type: 0, emoji: "๐", text: "๊ตฟ~!" },
    { type: 1, emoji: "โ", text: "์น์ธ" },
    { type: 2, emoji: "๐", text: "๋ธ๋ ฅ๋ฐ๋" },
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
    <div className="py-8 px-12 w-full">
      <div className="pb-4 border-b w-full">
        <p className="font-nanum font-black text-2xl text-zinc-700">
          {"2023๋ 3์ 2์ผ ์๋ฌด์ผ์ง"}
        </p>
        <p className="font-nanum text-zinc-500 mt-4 text-xs">
          Sereen ยท {moment().format("M์ D์ผ a h:mm")} ์ ์ถ
        </p>
        {checkType !== null && (
          <div className="absolute top-6 right-12 text-3xl">
            {actionArray[checkType].emoji}
          </div>
        )}
        {pending && (
          <div className="flex justify-end space-x-2 mt-4">
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

      <div className="font-nanum text-zinc-700 mt-8">
        <p className="font-poppins font-semibold text-sm">๐ DAILY REPORT</p>
        <p className="font-poppins text-sm mt-6">cloud fsync</p>
        <p className="font-poppins text-sm mt-2">
          - languagewindow * timelinewindow ์ฑํฌ ์์ ํ
        </p>
        <p className="font-poppins text-sm mt-2">
          - ์จ์ด๋ธํผ ์์ญ ์์ (๋ฐ์คํ)
        </p>
      </div>
    </div>
  );
};

export default DailyReportModal;
