import TheWaveChat from "./components/TheWaveChat";
import "./App.css";
// import AdminCsPage from "./pages/AdminCsPage";
import ChatPage from "./pages/ChatPage";
import ConsultPage from "./pages/ConsultPage";
import ConsultPage2 from "./pages/ConsultPage2";

function App() {
  return (
    <>
      <div className="container">
        <div className="left">
          <ConsultPage />
        </div>
        <div className="right">
          {/* <AdminCsPage /> */}
          <ConsultPage2 />
        </div>
      </div>
    </>
  );
}

export default App;
