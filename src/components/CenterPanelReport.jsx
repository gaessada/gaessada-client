import React, { useState } from "react";
import DefaultUser from "../assets/default_user.png";
import DailyReportCell from "./DailyReportCell";

const CenterPanelReport = () => {
  const [selectedButton, setSelectedButton] = useState("승인 대기중");
  const Header = () => (
    <div className="w-full h-14 border-b flex items-center px-8 font-nanum justify-between">
      <div className="flex items-center font-bold h-full">업무일지</div>
    </div>
  );

  const EmployeeColumn = ({ name, pending }) => {
    return (
      <div className="px-8 border-r h-full overflow-y-auto">
        <div className="flex items-center space-x-2 py-6">
          <img src={DefaultUser} className="h-6 w-6 rounded-full" alt="" />
          <p className="font-semibold">{name}</p>
        </div>
        {pending ? (
          <>
            <DailyReportCell pending />
          </>
        ) : (
          <>
            <DailyReportCell type={0} />
            <DailyReportCell type={1} />
            <DailyReportCell type={2} />
            <DailyReportCell type={1} />
            <DailyReportCell type={1} />
            <DailyReportCell type={2} />
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
