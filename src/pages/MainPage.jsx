import React from "react";
import LeftPanel from "../components/LeftPanel";
import "moment/locale/ko";
import RightPanel from "../components/RightPanel";
import CenterPanel from "../components/CenterPanel";

const MainPage = () => {

  return (
    <div className="w-screen h-screen flex font-poppins">
      <LeftPanel />
      <CenterPanel />
      <RightPanel />
    </div>
  );
};

export default MainPage;
