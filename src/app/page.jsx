"use client";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./UI/landing-page";
import MainFeature from "./UI/main-feature";
import SewaDetail from "./detail-sewa/page";
import CoachDetail from "./detail-tutor/page";
import TournamentDetail from "./detail-turnamen/page";

export default function App() {
  return (
    <Router>
      <main className="w-full h-full bg-[#141414]">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <LandingPage />
                  <MainFeature />
                </>
              }
            />
            <Route path="/detail-sewa/:fieldId" element={<SewaDetail />} />
            <Route path="/detail-tutor/:coachId" element={<CoachDetail />} />
            <Route path="/detail-turnamen/:tournamentId" element={<TournamentDetail />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
}
