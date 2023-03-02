import React from "react";
import { Route, Routes } from "react-router-dom";
import FeedbackPage from "../pages/FeedbackPage";
import CenterPanelMain from "./CenterPanelMain";
import CenterPanelReport from "./CenterPanelReport";

const CenterPanel = () => {
  return (
    <Routes>
      <Route path="/*" element={<CenterPanelMain />} />
      <Route path="/daily-report" element={<CenterPanelReport />} />
      <Route path="/feedback" element={<FeedbackPage />} />
    </Routes>
  );
};

export default CenterPanel;
