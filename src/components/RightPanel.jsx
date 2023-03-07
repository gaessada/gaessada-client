import React from "react";
import { Route, Routes } from "react-router-dom";
import RightPanelChat from "./RightPanelChat";
import RightPanelMain from "./RightPanelMain";

const RightPanel = () => {
  return (
    <div className="border-l">
      <Routes>
        <Route path="/*" element={<RightPanelMain />} />
        <Route path="/daily-report" element={<></>} />
        <Route path="/feedback" element={<></>} />
        <Route path="/chat/*" element={<RightPanelChat />} />
      </Routes>
    </div>
  );
};

export default RightPanel;
