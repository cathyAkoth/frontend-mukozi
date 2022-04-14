import { Routes, Route } from "react-router-dom";
import React from "react";
import { RegisterLoginBox, SelectRole } from "containers";

const RegisterRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SelectRole />} />
      <Route path="candidate" element={<RegisterLoginBox />} />
    </Routes>
  );
};

export default RegisterRoutes;
