import moment from "moment/moment";
import React, { useState } from "react";
import DefaultUser from "../assets/default_user.png";
import { MdPendingActions } from "react-icons/md";
import { useNavigate } from "react-router";
import { BsArrowReturnRight } from "react-icons/bs";
import ModalContainer from "./ModalContainer";
import GoalModal from "./modals/GoalModal";
import MilestoneModal from "./modals/MilestoneModal";
import DailyReportCell from "./DailyReportCell";

const CenterPanelMain = () => {
  const navigate = useNavigate();
  const [goalModalOpen, setGoalModalOpen] = useState(false);
  const [milestoneModalOpen, setMilestoneModalOpen] = useState(false);
  const Header = () => (
    <div className="w-full h-14 border-b flex items-center px-8 font-nanum justify-between">
      <div className="flex items-center">
        <div className="px-3 py-1 font-nanum font-bold text-xs text-white bg-gray-500 rounded-lg cursor-default">
          목표
        </div>
        <p className="ml-3 font-bold cursor-default">7월까지 사이트 완성</p>
        <button
          onClick={() => setGoalModalOpen(true)}
          className="flex-shrink-0 text-blue-500 text-xs font-bold ml-4"
        >
          수정
        </button>
      </div>
      <div className="flex items-center">
        <p className="font-bold text-sm italic text-gray-500">관리자 PORTAL</p>
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
        <button
          onClick={hasEdit}
          className="text-blue-500 font-bold ml-4 text-xs"
        >
          수정
        </button>
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
    const Cell = ({ name, notUploaded }) => {
      return (
        <div className="py-2 text-sm">
          <div className="flex items-center space-x-2 mb-3">
            <img src={DefaultUser} className="h-6 w-6 rounded-full" alt="" />
            <p className="font-semibold">{name}</p>
            {!notUploaded && <p className="text-xs">{moment().fromNow()}</p>}
          </div>
          {notUploaded ? (
            <div className="w-72 h-16 bg-gray-100 rounded-xl flex items-center px-4 text-zinc-500">
              <MdPendingActions size={20} />
              <div className="ml-3">
                <p className="font-semibold text-xs ">업로드 전</p>
              </div>
            </div>
          ) : (
            <DailyReportCell pending />
          )}
        </div>
      );
    };

    return (
      <div className="flex space-x-4">
        <Cell name={"Sereen"} />
        <Cell name={"Ahmad"} notUploaded />
      </div>
    );
  };

  const Feedback = () => {
    const optionsArray = [
      { type: 0, title: "승인 대기중" },
      { type: 1, title: "진행중" },
    ];
    const [selectedButton, setSelectedButton] = useState("승인 대기중");
    const OptionButton = ({ type, title }) => (
      <button
        onClick={() => setSelectedButton(title)}
        className={`px-3 h-8 rounded-lg text-sm font-nanum ${
          selectedButton === title
            ? "bg-blue-600 text-white"
            : "hover:bg-gray-100 border"
        }`}
      >
        {title}
      </button>
    );

    const Reply = ({ isRecent, date, title }) => (
      <div className="flex flex-shrink-0 my-1">
        <BsArrowReturnRight className="text-gray-500 text-xs" />
        <div className="ml-2">
          <p
            className={`text-xs font-bold ${
              isRecent ? "text-red-500" : "text-gray-500"
            }`}
          >
            {date}
          </p>
          <p className="text-sm mt-1">{title}</p>
        </div>
      </div>
    );

    const Cell = ({ num, hasReply, title, status }) => (
      <div className="w-full py-2 border-b flex items-center justify-between font-nanum text-sm">
        <div className="flex">
          <div className="w-16 flex items-center justify-center text-xs flex-shrink-0">
            {num}
          </div>
          <div className="w-20 flex items-center justify-center flex-shrink-0 text-center break-keep text-xs">
            {status}
          </div>
          <div className="w-32 flex items-center justify-center flex-shrink-0">
            <button className="w-20 h-20 flex items-center justify-center hover:bg-gray-100 border rounded transition">
              캡쳐화면
            </button>
          </div>
          <div className="w-full flex flex-col justify-center px-4">
            <p className="my-2">{title}</p>
            {hasReply && (
              <>
                <Reply
                  date={"2023-03-02"}
                  title="아직도 가로 크기가 작습니다"
                />
                <Reply isRecent date={"2023-03-04"} title="아직도!!!!" />
              </>
            )}
          </div>
        </div>
        {status === "승인 대기중" && (
          <div className="w-24 flex flex-col space-y-1 text-xs">
            <button className="w-full h-8 rounded-lg border bg-blue-600 hover:bg-blue-400 text-white font-bold transition">
              승인
            </button>
            <button className="w-full h-8 rounded-lg border text-red-600 font-bold border-red-300 hover:bg-red-600 hover:text-white transition">
              재요청 및 댓글
            </button>
          </div>
        )}
      </div>
    );

    const TableHeader = ({ status }) => (
      <div className="flex items-center justify-between text-xs font-nanum h-8 border-b">
        <div className="flex">
          <div className="w-16 flex items-center justify-center flex-shrink-0">
            번호
          </div>
          <div className="w-20 flex items-center justify-center flex-shrink-0">
            상태
          </div>
          <div className="w-32 flex items-center justify-center flex-shrink-0">
            캡쳐화면
          </div>
          <div className="w-full flex items-center px-4">설명</div>
        </div>
        {status === "승인 대기중" && (
          <div className="w-24 flex justify-center">액션</div>
        )}
      </div>
    );

    return (
      <div>
        <div className="flex space-x-1 mb-4">
          {optionsArray.map((item) => (
            <OptionButton type={item.type} title={item.title} key={item.type} />
          ))}
        </div>

        <TableHeader status={selectedButton} />
        <Cell
          num={12}
          hasReply
          title={"이 부분은 가로 크기가 커져야 합니다"}
          status={selectedButton}
        />
        <Cell num={230} title={"이미지 교체 바람"} status={selectedButton} />
      </div>
    );
  };

  const Divider = () => <div className="w-full h-px border-t my-8"></div>;

  return (
    <div className="w-full h-screen overflow-y-auto">
      <ModalContainer
        shouldCloseOnOverlayClick={false}
        isVisible={goalModalOpen}
        setVisible={setGoalModalOpen}
        modalTitle="목표 설정"
        children={<GoalModal setVisible={setGoalModalOpen} />}
      />
      <ModalContainer
        shouldCloseOnOverlayClick={false}
        isVisible={milestoneModalOpen}
        setVisible={setMilestoneModalOpen}
        modalTitle="직원별 마일스톤 설정"
        children={<MilestoneModal setVisible={setMilestoneModalOpen} />}
      />
      <Header />
      <div className="px-8">
        <TitleText
          title="직원별 마일스톤"
          hasEdit={() => setMilestoneModalOpen(true)}
        />
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
