import React from "react";
import Navbar from "./Components/Navbar";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Actions from "./pages/Actions";
import Home from "./pages/Home";

const App = () => (
  <div className="App">
    <BrowserRouter basename="/foodDudeWeb">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Your Routes */}
        <Route path="/actions" component={Actions} />
        {/* Other routes */}
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
