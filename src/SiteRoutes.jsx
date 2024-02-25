import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Generator from "./pages/Generator";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";


function SiteRoutes({handleLogin}) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/generator" element={<Generator />} />
      <Route path="/login" element={<Login handleLogin={handleLogin}/>} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default SiteRoutes;
