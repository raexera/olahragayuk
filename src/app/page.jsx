import React from "react";
import LandingPage from "./UI/landing-page";
import MainFeature from "./UI/main-feature";

export default function Home() {
  return (
    <main className="w-full h-full bg-[#141414] overflow-hidden">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <LandingPage />
        <MainFeature />
      </div>
    </main>
  );
}
