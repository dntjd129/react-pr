import TheWaveChat from "./components/TheWaveChat";
import "./App.css";
import AdminCsPage from "./pages/AdminCsPage";

function App() {
  return (
    <>
      <div className="container">
        <div className="left">
          <TheWaveChat />
        </div>
        <div className="right">
          <AdminCsPage />
        </div>
      </div>
    </>
  );
}

export default App;
