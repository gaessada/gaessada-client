import React, { useState } from "react";
import DefaultUser from "../assets/default_user.png";

const CenterPanelReport = () => {
  const [selectedUser, setSelectedUser] = useState(0);
  const employeeArray = [
    {
      uid: 0,
      name: "Ahmad Algazali",
    },
    { uid: 1, name: "직원 2" },
  ];

  const EmployeeCell = ({ name, uid }) => (
    <button
      onClick={() => setSelectedUser(uid)}
      className={`h-10 flex items-center px-2 transition border rounded-lg ${
        selectedUser === uid ? "bg-gray-100 ring-1 ring-blue-500" : "hover:bg-gray-100"
      }`}
    >
      <img src={DefaultUser} className="w-6 h-6 rounded-full" alt="" />
      <p className={`ml-2 text-xs`}>{name}</p>
    </button>
  );

  const Header = () => (
    <div className="w-full h-14 border-b flex items-center px-4 font-nanum justify-between">
      <div className="flex items-center">
        <p className="ml-3 font-bold cursor-default">업무일지</p>
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
      <div className="flex space-x-1 p-4"></div>
    </div>
  );
};

export default CenterPanelReport;
