import React from "react";
import {
  AiFillBook,
  AiFillGithub,
  AiOutlineBook,
  AiOutlineLink,
} from "react-icons/ai";
import {
  RiDriveFill,
  RiFileList3Fill,
  RiFileList3Line,
  RiHome5Fill,
  RiHome5Line,
} from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import DefaultUser from "../assets/default_user.png";

const LeftPanel = () => {
  const naviate = useNavigate();
  const pathname = window.location.pathname; //returns the current url minus the domain name
  const CompanyCell = () => (
    <div className="h-14 w-full bg-white hover:bg-gray-100 transition border-b flex items-center px-4 cursor-pointer flex-shrink-0">
      <img src={DefaultUser} className="w-8 h-8 rounded-full" alt="" />
      <div className="ml-2">
        <p className="font-bold text-xs">주식회사 픽톨로지</p>
        <p
          style={{
            fontSize: "0.5rem",
            marginBottom: "-0.3rem",
            marginTop: "0.1rem",
          }}
          className="text-gray-500"
        >
          Since 2004
        </p>
      </div>
    </div>
  );

  const MenuButton = ({
    title,
    icon,
    highlightIcon,
    path,
    notificationCount,
  }) => (
    <button
      onClick={() => naviate(path)}
      className="w-full h-12 flex items-center px-6 hover:bg-gray-100 transition font-poppins"
    >
      <div className="flex-shrink-0">
        {pathname === path ? highlightIcon : icon}
      </div>
      <p
        className={`${
          pathname === path && "font-bold"
        } ml-6 text-sm w-full text-left`}
      >
        {title}
      </p>

      {notificationCount && (
        <div
          style={{
            paddingTop: "0.02rem",
            paddingBottom: "0.02rem",
            paddingLeft: "0.35rem",
            paddingRight: "0.35rem",
            fontSize: "0.5rem",
            borderRadius: "0.4rem",
          }}
          className="bg-red-500 flex-shrink-0 text-xs text-white font-medium font-poppins"
        >
          {notificationCount}
        </div>
      )}
    </button>
  );

  const TitleText = ({ title, hasEdit }) => (
    <div className="w-full items-center flex justify-between px-4 text-xs font-bold mt-6 mb-2 font-nanum">
      <p className="text-gray-500">{title}</p>
      {hasEdit && <button className="flex-shrink-0 text-blue-500">설정</button>}
    </div>
  );

  const EmployeeCell = ({ name }) => (
    <button className="w-full h-14 flex items-center px-4 hover:bg-gray-100 transition">
      <img src={DefaultUser} className="w-8 h-8 rounded-full" alt="" />
      <p className={`ml-3 text-xs`}>{name}</p>
    </button>
  );

  const LinkCell = ({ icon, title }) => (
    <button className="w-full h-10 flex items-center px-6 hover:bg-gray-100 transition font-poppins">
      <div className="flex-shrink-0">{icon}</div>
      <p className={`ml-4 text-xs w-full text-left font-bold`}>{title}</p>
    </button>
  );

  const MyProfileCell = () => (
    <div className="h-14 w-full bg-white hover:bg-gray-100 transition border-t flex items-center px-4 cursor-pointer flex-shrink-0">
      <img src={DefaultUser} className="w-8 h-8 rounded-full" alt="" />
      <div className="ml-2">
        <p className="font-bold text-xs">내 프로필</p>
        <p
          style={{
            fontSize: "0.5rem",
            marginBottom: "-0.3rem",
            marginTop: "0.1rem",
          }}
          className="text-gray-500"
        >
          Online
        </p>
      </div>
    </div>
  );

  return (
    <div className="w-64 h-screen flex-shrink-0 flex flex-col justify-between overflow-hidden">
      <CompanyCell />

      <div className="overflow-y-auto h-full py-2">
        <MenuButton
          title="홈 피드"
          icon={<RiHome5Line />}
          highlightIcon={<RiHome5Fill />}
          path="/main"
        />
        <MenuButton
          title="업무일지"
          icon={<AiOutlineBook />}
          highlightIcon={<AiFillBook />}
          path="/main/daily-report"
        />
        <MenuButton
          title="체크사항"
          icon={<RiFileList3Line />}
          highlightIcon={<RiFileList3Fill />}
          path="/main/feedback"
          notificationCount={3}
        />

        <TitleText title="직원 (1)" />
        <EmployeeCell name={"Ahmad Algazali"} />
        <EmployeeCell name={"직원 2"} />

        <TitleText title="주요 링크" hasEdit />
        <LinkCell title="PC 링크" icon={<AiOutlineLink />} />
        <LinkCell title="모바일 링크" icon={<AiOutlineLink />} />
        <LinkCell title="구글 드라이브" icon={<RiDriveFill />} />
        <LinkCell title="소스코드 다운" icon={<AiFillGithub />} />
      </div>

      <MyProfileCell />
    </div>
  );
};

export default LeftPanel;
