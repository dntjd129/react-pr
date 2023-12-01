import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" />
        <Route path="/register" />
        <Route path="/findPw" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
