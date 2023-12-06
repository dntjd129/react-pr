import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import FindIdPage from "./pages/FindIdPage";
import FindPwPage from "./pages/FindPwPage";
import NewPwPage from "./pages/NewPwPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/findId" element={<FindIdPage />} />
        <Route path="/findPw" element={<FindPwPage />} />
        <Route path="/findPw/newPw" element={<NewPwPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
