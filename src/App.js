import React from "react";
import { Routes, Route } from "react-router-dom";
import CustomerPage from "./components/CustomerViewPage/CustomerPage";
import DownloadPage from "./components/DownloadPage/DownloadPage";
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CustomerPage />}></Route>
        <Route path="/preview" element={<DownloadPage />}></Route>
      </Routes>
    </div>
  );
};

export default App;
