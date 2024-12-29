import React from "react";

import Home from "./Home/Home";
import Mentors_list from "./Mentors/Mentors";
import Signup from "./component/Signup";
import About from "./component/About/About";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mentors" element={<Mentors_list />} />

          <Route path="/signup" element={<Signup/>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}
