import React from "react";
import { Route, Routes } from "react-router-dom";
import CenterPanelChat from "./CenterPanelChat";
import CenterPanelFeedback from "./CenterPanelFeedback";
import CenterPanelMain from "./CenterPanelMain";
import CenterPanelReport from "./CenterPanelReport";

const CenterPanel = () => {
  return (
    <Routes>
      <Route path="/*" element={<CenterPanelMain />} />
      <Route path="/daily-report" element={<CenterPanelReport />} />
      <Route path="/feedback" element={<CenterPanelFeedback />} />
      <Route path="/chat/*" element={<CenterPanelChat />} />
    </Routes>
  );
};

export default CenterPanel;
