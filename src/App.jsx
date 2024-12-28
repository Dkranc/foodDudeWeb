import React from "react";
import Navbar from "./Components/Navbar";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;