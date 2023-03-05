import moment from "moment";
import React, { useState } from "react";
import DefaultUser from "../assets/default_user.png";
import { GrDocumentNotes } from "react-icons/gr";

const CenterPanelReport = () => {
  const [selectedButton, setSelectedButton] = useState("승인 대기중");
  const Header = () => (
    <div className="w-full h-14 border-b flex items-center px-8 font-nanum justify-between">
      <div className="flex items-center font-bold h-full">업무일지</div>
    </div>
  );

  const ReportCell = ({ name, pending, type = null }) => {
    const [checkType, setCheckType] = useState(type);
    const actionArray = [
      { type: 0, emoji: "😊", text: "만족" },
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
        <div className="w-72 h-16 bg-white border shadow rounded-xl flex items-center px-4 hover:bg-gray-100 transition cursor-pointer relative">
          <GrDocumentNotes size={20} />
          <div className="ml-4">
            <div className="text-xs font-semibold">
              <div className="inline w-4 h-4 bg-red-500"></div>
              {"2023년 3월 2일 업무일지"}
            </div>
            <div className="text-xs flex text-gray-500 mt-1">
              <p className="text-xs">
                {moment().format("제출 M월 D일 a h:mm")}
              </p>
            </div>
          </div>
          {checkType !== null && (
            <div className="absolute -top-2 right-2 w-8 h-8 rounded-full bg-white shadow border text-lg flex items-center justify-center">
              {actionArray[checkType].emoji}
            </div>
          )}
        </div>
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

  const EmployeeColumn = ({ name, pending }) => {
    return (
      <div className="px-8 border-r h-full overflow-y-auto">
        <div className="flex items-center space-x-2 py-6">
          <img src={DefaultUser} className="h-6 w-6 rounded-full" alt="" />
          <p className="font-semibold">{name}</p>
        </div>
        {pending ? (
          <>
            <ReportCell pending />
          </>
        ) : (
          <>
            <ReportCell type={0} />
            <ReportCell type={1} />
            <ReportCell type={2} />
            <ReportCell type={1} />
            <ReportCell type={1} />
            <ReportCell type={2} />
          </>
        )}
      </div>
    );
  };

  const optionsArray = [
    { type: 0, title: "승인 대기중" },
    { type: 1, title: "전체" },
  ];
  const OptionButton = ({ type, title }) => (
    <button
      onClick={() => setSelectedButton(title)}
      className={`h-full w-20 text-sm font-nanum relative ${
        selectedButton === title ? "font-bold" : "hover:bg-gray-100"
      }`}
    >
      {title}
      {selectedButton === title && (
        <div
          style={{ height: "3px" }}
          className="absolute bottom-0 w-full bg-black"
        ></div>
      )}
    </button>
  );

  return (
    <div className="w-full h-full">
      <Header />
      <div className="flex flex-col">
        <div className="flex space-x-4 h-14 px-8 border-b">
          {optionsArray.map((item) => (
            <OptionButton type={item.type} title={item.title} key={item.type} />
          ))}
        </div>
        <div style={{ height: "calc(100vh - 7rem)" }} className="flex">
          {selectedButton === "승인 대기중" ? (
            <>
              <EmployeeColumn name={"Sereen"} pending />
              <EmployeeColumn name={"Ahmad"} pending />
            </>
          ) : (
            <>
              <EmployeeColumn name={"Sereen"} />
              <EmployeeColumn name={"Ahmad"} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CenterPanelReport;
