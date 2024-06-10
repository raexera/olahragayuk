import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInAuth from "./signin";
import Loading from "./loading";
import Home from "./page";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignInAuth />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
    </Router>
  );
};

export default App;
