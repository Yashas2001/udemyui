import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Udemy from "./pages/Udemy";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export default function App() {
  return (
   <BrowserRouter>
   <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/" element={<Udemy />} />
    </Routes>
    </BrowserRouter>

  );
}