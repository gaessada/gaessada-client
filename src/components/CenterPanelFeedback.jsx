import React, { useState } from "react";
import FeedbackPage from "../pages/FeedbackPage";
import DefaultUser from "../assets/default_user.png";

const CenterPanelFeedback = () => {
  const [selectedUser, setSelectedUser] = useState(0);
  const [selectedTab, setSelectedTab] = useState(0);
  const employeeArray = [
    {
      uid: 0,
      name: "Ahmad Algazali",
    },
    { uid: 1, name: "직원 2" },
  ];
  const tabArray = [
    { id: 0, title: "전체" },
    { id: 1, title: "진행중" },
    { id: 2, title: "승인대기", notification: 4 },
    { id: 3, title: "승인거절", notification: 2 },
    { id: 4, title: "승인완료" },
  ];

  const EmployeeCell = ({ name, uid }) => (
    <button
      onClick={() => setSelectedUser(uid)}
      className={`h-10 flex items-center px-2 transition border rounded-lg ${
        selectedUser === uid
          ? "bg-gray-100 ring-1 ring-blue-500"
          : "hover:bg-gray-100"
      }`}
    >
      <img src={DefaultUser} className="w-6 h-6 rounded-full" alt="" />
      <p className={`ml-2 text-xs`}>{name}</p>
    </button>
  );

  const OptionButton = ({ title, id, notification }) => (
    <button
      onClick={() => setSelectedTab(id)}
      className={`h-14 w-20 text-sm font-nanum relative ${
        selectedTab === id ? "font-bold" : "hover:bg-gray-100"
      }`}
    >
      {title}
      {selectedTab === id && (
        <div
          style={{ height: "3px" }}
          className="absolute bottom-0 w-full bg-black"
        ></div>
      )}
      {notification && (
        <div className="absolute top-3 right-1 w-2 h-2 bg-red-500 rounded-full"></div>
      )}
    </button>
  );

  const Header = () => (
    <div className="w-full h-14 border-b flex items-center px-4 font-nanum justify-between">
      <div className="flex items-center space-x-1">
        {tabArray.map((item) => (
          <OptionButton
            title={item.title}
            id={item.id}
            key={item.id}
            notification={item.notification}
          />
        ))}
      </div>
      <div className="flex items-center space-x-2">
        {employeeArray.map((item) => (
          <EmployeeCell name={item.name} uid={item.uid} key={item.uid} />
        ))}
      </div>
    </div>
  );
  return (
    <div className="w-full">
      <Header />
      <div style={{ height: "calc(100vh - 3.5rem)" }}>
        <FeedbackPage />
      </div>
    </div>
  );
};

export default CenterPanelFeedback;
