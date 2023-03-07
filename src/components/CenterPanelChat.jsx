import React from "react";
import DefaultUser from "../assets/default_user.png";
import ChatContainer from "./ChatContainer";

const CenterPanelChat = () => {
  const Header = () => (
    <div className="w-full h-14 border-b flex items-center px-4 font-nanum justify-between">
      <div className="flex items-center">
        <img src={DefaultUser} alt="" className="w-8 h-8 rounded-full" />
        <p className="ml-3 font-semibold cursor-default font-poppins">Sereen</p>
      </div>
      <div className="flex items-center">
        <p className="font-bold text-sm italic text-gray-500">관리자 PORTAL</p>
      </div>
    </div>
  );

  return (
    <div className="w-full">
      <Header />
      <ChatContainer />
    </div>
  );
};

export default CenterPanelChat;
