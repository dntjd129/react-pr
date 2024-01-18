import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import "./App.css";
import Main from "./pages/Main";

function App() {
  const GlobalStyle = createGlobalStyle`
  ${reset}
`;
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
