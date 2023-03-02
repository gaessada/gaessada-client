import React, { useState } from "react";
import DefaultUser from "../assets/default_user.png";

const CenterPanelReport = () => {
  const [selectedUser, setSelectedUser] = useState(0);
  const Header = () => (
    <div className="w-full h-14 border-b flex items-center px-4 font-nanum justify-between">
      <div className="flex items-center">
        <p className="ml-3 font-bold cursor-default">업무일지</p>
      </div>
      <div className="flex items-center">
        <button onClick={() => setSelectedUser(0)}>
          <img
            src={DefaultUser}
            className={`w-8 h-8 rounded-full ml-3 border-2 border-white ring-blue-500 ${
              selectedUser === 0 && "ring-2"
            }`}
            alt=""
            draggable={false}
          />
        </button>
        <button onClick={() => setSelectedUser(1)}>
          <img
            src={DefaultUser}
            className={`w-8 h-8 rounded-full ml-3 border-2 border-white ring-blue-500 ${
              selectedUser === 1 && "ring-2"
            }`}
            alt=""
          />
        </button>
      </div>
    </div>
  );
  return <Header />;
};

export default CenterPanelReport;
