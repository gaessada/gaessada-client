import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import OnboardingPage from "./pages/OnboardingPage";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<OnboardingPage />} />
      <Route path="/main/*" element={<MainPage />} />
    </Routes>
  );
}

export default App;
