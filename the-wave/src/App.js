import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from "./assets/img/theWave.png";
import "./App.css";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage logo={logo} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<LoginPage />} />
        <Route path="/findPw" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
