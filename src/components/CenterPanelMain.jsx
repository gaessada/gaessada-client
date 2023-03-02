import moment from "moment/moment";
import React, { useState } from "react";
import DefaultUser from "../assets/default_user.png";
import { GrDocumentNotes } from "react-icons/gr";
import { MdPendingActions } from "react-icons/md";
import { useNavigate } from "react-router";

const CenterPanelMain = () => {
  const navigate = useNavigate();
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

  const TitleText = ({ title, hasEdit, path }) => (
    <div className="font-bold text-lg mb-4 mt-5 flex items-center">
      <p className="font-nanum">{title}</p>
      {path && (
        <button
          onClick={() => navigate(path)}
          className="text-blue-500 font-bold ml-4 text-xs"
        >
          자세히 보기
        </button>
      )}
      {hasEdit && (
        <button className="text-blue-500 font-bold ml-4 text-xs">수정</button>
      )}
    </div>
  );

  const ShortTermGoal = () => {
    const Cell = ({ name, text }) => (
      <div className="flex items-center py-2">
        <img src={DefaultUser} className="h-8 w-8 rounded-full" alt="" />
        <div className="text-xs ml-3">
          <p className="font-semibold inline">{name} </p>
          <p className="text-xs mt-1">{text}</p>
        </div>
      </div>
    );
    return (
      <div className="w-full">
        <Cell
          name={"Sereen"}
          text="2023/04/03 까지 프론트 완성 (수정사항 포함)"
        />
        <Cell name={"Ahmad"} text="2023/04/03 까지 벡엔드 초본" />
      </div>
    );
  };

  const DailyReport = () => {
    const Cell = ({ name, pending }) => {
      const [checkType, setCheckType] = useState(null);
      const actionArray = [
        { type: 0, emoji: "😊", text: "만족" },
        { type: 1, emoji: "✅", text: "승인" },
        { type: 2, emoji: "😞", text: "노력바람" },
      ];

      const ActionButton = ({ type, emoji, text }) => (
        <button
          onClick={() => setCheckType(type)}
          className={`${
            checkType === type
              ? "bg-sky-200 border-sky-400"
              : "hover:bg-gray-100"
          } h-6 px-1  mt-2 flex items-center justify-center border rounded-lg cursor-pointer`}
        >
          <p>{emoji}</p>
          <p className="text-xs font-bold">{text}</p>
        </button>
      );
      return (
        <div className="py-2 text-sm">
          <div className="flex items-center space-x-2">
            <img src={DefaultUser} className="h-6 w-6 rounded-full" alt="" />
            <p className="font-semibold">{name}</p>
            {!pending && <p className="text-xs">{moment().fromNow()}</p>}
          </div>
          {pending ? (
            <div className="mt-3 w-64 h-16 bg-gray-100 rounded-xl flex items-center px-4 text-zinc-500">
              <MdPendingActions size={20} />
              <div className="ml-3">
                <p className="font-semibold text-xs ">업로드 전</p>
              </div>
            </div>
          ) : (
            <div className="mt-3 w-64 h-16 bg-white border shadow rounded-xl flex items-center px-4 hover:bg-gray-100 transition cursor-pointer relative">
              <GrDocumentNotes size={20} />
              <div className="ml-3">
                <div className="text-xs font-semibold">
                  <div className="inline w-4 h-4 bg-red-500"></div>
                  {"2023-03-02 업무일지"}
                </div>
                <p className="text-xs text-gray-500">{name}</p>
              </div>

              {checkType !== null && (
                <div className="absolute -top-2 right-2 w-8 h-8 rounded-full bg-white shadow border text-lg flex items-center justify-center">
                  {actionArray[checkType].emoji}
                </div>
              )}
            </div>
          )}
          {!pending && (
            <div className="flex space-x-2">
              {actionArray.map((item) => (
                <ActionButton
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

    return (
      <div className="flex space-x-2">
        <Cell name={"Sereen"} />
        <Cell name={"Ahmad"} pending />
      </div>
    );
  };

  const Feedback = () => {
    const optionsArray = [
      { type: 0, title: "승인 대기중" },
      { type: 1, title: "진행중" },
    ];
    const [selectedButton, setSelectedButton] = useState(0);
    const OptionButton = ({ type, title }) => (
      <button
        onClick={() => setSelectedButton(type)}
        className={`px-3 h-8 rounded-lg text-sm font-nanum ${
          selectedButton === type ? "bg-blue-500 text-white" : "hover:bg-gray-100 border"
        }`}
      >
        {title}
      </button>
    );

    const Cell = () => (
      <div className="w-full h-24 bg-gray-100 rounded-lg flex items-center px-6">
        <div className="">#1</div>
        {/* <div>image</div> */}
      </div>
    )
    return (
      <div>
        <div className="flex space-x-1 mb-4">
          {optionsArray.map((item) => (
            <OptionButton type={item.type} title={item.title} />
          ))}
        </div>
        진행중 & 승인 대기중만 보임 (엑셀 x)
        <Cell />
      </div>
    );
  };

  const Divider = () => <div className="w-full h-px border-t my-8"></div>;

  return (
    <div className="w-full h-screen">
      <Header />
      <div className="px-6">
        <TitleText title="단기목표" hasEdit />
        <ShortTermGoal />
        <Divider />
        <TitleText title="오늘의 업무일지" path="/main/daily-report" />
        <DailyReport />
        <Divider />
        <TitleText title="체크사항" path="/main/feedback" />
        <Feedback />
      </div>
    </div>
  );
};

export default CenterPanelMain;
