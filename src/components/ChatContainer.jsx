import moment from "moment";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import DefaultUser from "../assets/default_user.png";
import "../css/ChatInput.css";

const ChatContainer = () => {
  const testArray = [
    { attachment: true },
    { attachment: false },
    { attachment: false },
    { attachment: true },
    { attachment: false },
    { attachment: false },
    { attachment: false },
    { attachment: false },
    { attachment: false },
    { attachment: false },
  ];
  const ChatBubble = ({ name = "Sereen", attachment }) => {
    return (
      <div className="w-full flex items-start flex-shrink-0 mt-8">
        <img src={DefaultUser} alt="" className="w-10 h-10 rounded-full" />
        <div className="ml-4">
          <div className="flex items-center space-x-2">
            <p className="font-poppins text-sm font-medium">{name}</p>
            <p className="font-poppins text-xs text-zinc-500">
              {moment().format("MM/DD/YYYY a h:mm")}
            </p>
          </div>
          <p className="font-nanum text-sm mt-1">
            안녕하세요 이사님 이제야 전화하신거 봤습니다 죄송합니다. 네 그
            주소가 맞습니다!
          </p>
          {attachment && (
            <button className="w-60 h-60 bg-gray-100 mt-4 rounded-xl hover:bg-gray-200 transition"></button>
          )}
        </div>
      </div>
    );
  };
  const ChatInput = () => {
    return (
      <div className="w-full flex items-start flex-shrink-0 px-4 ">
        <div class="chat-wrapper">
          <div class="message-wrapper relative flex items-center">
            <div
              className="message-text font-sm font-nanum cursor-text"
              data-placeholder="메세지를 작성하세요..."
              contentEditable
            />
            <button className="w-7 h-7 rounded-full bg-zinc-600 hover:bg-zinc-800 transition absolute left-4 text-white flex items-center justify-center">
              <AiOutlinePlus />
            </button>
          </div>
          <br />
        </div>
      </div>
    );
  };
  return (
    <div
      style={{ height: "calc(100vh - 3.5rem)" }}
      className="w-full flex flex-col justify-end"
    >
      <div
        style={{ height: "calc(100vh - 8rem)" }}
        className="flex flex-col-reverse overflow-y-scroll w-full p-8"
      >
        {testArray.map((item, index) => (
          <ChatBubble key={index} attachment={item.attachment} />
        ))}
      </div>

      <ChatInput />
    </div>
  );
};

export default ChatContainer;
