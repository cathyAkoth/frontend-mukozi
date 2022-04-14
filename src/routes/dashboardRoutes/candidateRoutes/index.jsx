import React from "react";
import { Routes, Route } from "react-router-dom";
import { dashboards } from "containers";

const { Candidate } = dashboards;

const { CandidateDashboard, CompleteProfile } = Candidate;

export default function CandidateRoutes() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<CandidateDashboard />} />
        <Route path="verify" element={<CompleteProfile />} />
      </Routes>
    </div>
  );
}
