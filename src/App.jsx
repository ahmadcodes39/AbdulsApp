import React from "react";
import { Routes, Route } from "react-router-dom";
import DataPage from "./Pages/DataPage";
import ModelPage from "./Pages/ModelPage";
import AttackPage from "./Pages/AttackPage";
import MitigatePage from "./Pages/MitigatePage";
import ComparePage from "./Pages/ComparePage";
import "./App.css";
import Header from "./Components/Header";

const App = () => {
  return (
    <>
      <Header />
      <div className="px-11">
        <Routes>
          <Route path="/" element={<DataPage />} />
          <Route path="/model" element={<ModelPage />} />
          <Route path="/attack" element={<AttackPage />} />
          <Route path="/mitigate" element={<MitigatePage />} />
          <Route path="/compare" element={<ComparePage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
