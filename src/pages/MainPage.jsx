import React from "react";
import { Route, Routes } from "react-router-dom";
import LeftPanel from "../components/LeftPanel";
import "moment/locale/ko";
import RightPanel from "../components/RightPanel";

const MainPage = () => {

  return (
    <div className="w-screen h-screen flex font-poppins">
      <LeftPanel />
      <Routes>
        <Route
          path="/*"
          element={<div className="w-full h-screen bg-gray-200">asd</div>}
        />
        <Route
          path="/daily-report"
          element={<div className="w-full h-screen bg-gray-300">123</div>}
        />
        <Route
          path="/feedback"
          element={<div className="w-full h-screen bg-gray-400">45</div>}
        />
      </Routes>
      <RightPanel />
    </div>
  );
};

export default MainPage;
