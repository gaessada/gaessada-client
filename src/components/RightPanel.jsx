import React from "react";
import { Route, Routes } from "react-router-dom";
import RightPanelMain from "./RightPanelMain";
import RightPanelReport from "./RightPanelReport";

const RightPanel = () => {
  return (
    <div className="border-l">
      <Routes>
        <Route path="/*" element={<RightPanelMain />} />
        <Route path="/daily-report" element={<RightPanelReport />} />
        <Route
          path="/feedback"
          element={
            <div className="w-80 h-screen bg-gray-100 flex-shrink-0"></div>
          }
        />
      </Routes>
    </div>
  );
};

export default RightPanel;
