import React from "react";
import { Route, Routes } from "react-router-dom";
import RightPanelMain from "./RightPanelMain";

const RightPanel = () => {
  return (
    <div className="border-l">
      <Routes>
        <Route path="/*" element={<RightPanelMain />} />
        <Route path="/daily-report" element={<></>} />
        <Route path="/feedback" element={<></>} />
      </Routes>
    </div>
  );
};

export default RightPanel;
