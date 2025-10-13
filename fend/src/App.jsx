import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Welcome</div>} />
        <Route path="/:assesmentId" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
