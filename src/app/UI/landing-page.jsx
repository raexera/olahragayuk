import React from "react";
import Image from "next/image";
import "../globals.css";

const Hero = () => {
  return <Image alt="hero" width={767} height={837} src="/hero.png" />;
};

export default function LandingPage() {
  return (
    <div className="relative flex w-screen h-screen z-10">
      <div className="w-[35%] h-screen flex items-center justify-center ml-[50px]">
        <div className="w-full h-[300px] flex justify-center items-center text-center">
          <div className="text-[28px]">
            <p>
              <span>&quot;</span>Your Complete <span>Sports</span> Destination :{" "}
              <span>Courts</span>, <span>Coaches</span>, and{" "}
              <span>Competitions</span> <span>&quot;</span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-[65%] h-screen flex justify-center items-center mt-[30px]">
        <div className="flex justify-center items-center">
          <Hero />
        </div>
      </div>
    </div>
  );
}
