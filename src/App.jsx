import React from "react";
import { BrowserRouter, Route, Switch, Routes } from "react-router-dom";
import Udemy from "./pages/Udemy";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export default function App() {
  return (
   <BrowserRouter>
   <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Udemy />} />
    </Routes>
    </BrowserRouter>

  );
}