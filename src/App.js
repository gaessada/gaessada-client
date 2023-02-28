import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<SignIn />} />
      <Route path="/main/*" element={<MainPage />} />
    </Routes>
  );
}

export default App;
