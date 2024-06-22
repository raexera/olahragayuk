"use client";

import React, { useState, useEffect, useCallback } from "react";
import Sewa from "../assets/sewaLogo";
import SewaActive from "../assets/sewaLogoOn";
import Tutor from "../assets/tutorLogo";
import TutorActive from "../assets/tutorLogoOn";
import Turnamen from "../assets/turnamenLogo";
import TurnamenActive from "../assets/turnamenLogoOn";
import SewaYuk from "./sewa-yuk";
import TutorYuk from "./tutor-yuk";
import TurnamenYuk from "./turnamen-yuk";

const features = [
  {
    id: 1,
    hash: "#sewayuk",
    icon: Sewa,
    activeIcon: SewaActive,
    data: <SewaYuk />,
  },
  {
    id: 2,
    hash: "#tutoryuk",
    icon: Tutor,
    activeIcon: TutorActive,
    data: <TutorYuk />,
  },
  {
    id: 3,
    hash: "#turnamenyuk",
    icon: Turnamen,
    activeIcon: TurnamenActive,
    data: <TurnamenYuk />,
  },
];

const MainFeature = () => {
  const [activeFeature, setActiveFeature] = useState(features[0].id);

  const handleFeatureClick = useCallback((id) => {
    setActiveFeature(id);
    const hash = features.find((feature) => feature.id === id).hash;
    window.location.hash = hash;
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    const active = features.find((feature) => feature.hash === hash);
    if (active) setActiveFeature(active.id);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const active = features.find((feature) => feature.hash === hash);
      if (active) setActiveFeature(active.id);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="relative flex flex-col w-screen h-full">
      {/* Top Section */}
      <div className="flex flex-row w-full h-[200px] items-center justify-center gap-[50px]">
        {features.map((feature) => (
          <div
            key={feature.id}
            onClick={() => handleFeatureClick(feature.id)}
            style={{ cursor: "pointer" }}
          >
            {activeFeature === feature.id ? (
              <feature.activeIcon style={{ width: "50px", height: "50px" }} />
            ) : (
              <feature.icon style={{ width: "50px", height: "50px" }} />
            )}
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="bg-[#f5f5f5] bg-opacity-50 backdrop-blur-4 h-full mt-4 rounded-tl-[30px] rounded-tr-[30px] p-[10px] relative flex">
        <section className="container mx-auto p-4 flex flex-col">
          <div className="flex mb-8">
            {features.find((feature) => feature.id === activeFeature).data}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainFeature;
