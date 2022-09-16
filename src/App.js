import { Route, Routes } from "react-router-dom";
import HomePage from "./components/Home";
import DetailPage from "./components/Detail";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
