import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminRoutes from "./adminRoutes";
import EmployerRoutes from "./employerRoutes";
import CandidateRoutes from "./candidateRoutes";

export default function DashboardRoutes() {
  return (
    <>
      <div>
        <Routes>
          <Route path="admin/*" element={<AdminRoutes />} />
          <Route path="employer/*" element={<EmployerRoutes />} />
          <Route path="candidate/*" element={<CandidateRoutes />} />
        </Routes>
      </div>
    </>
  );
}
