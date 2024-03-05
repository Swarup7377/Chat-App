import React, { lazy,Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Chat=lazy(()=> import("./pages/Chat"));
const SetAvatar=lazy(()=> import("./components/SetAvatar"));
const Login=lazy(()=> import("./pages/Login"));
const Register=lazy(()=> import("./pages/Register"));
export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/setAvatar" element={<SetAvatar />} />
          <Route path="/" element={<Chat />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
