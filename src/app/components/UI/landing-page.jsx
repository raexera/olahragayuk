import React from "react";
import Image from "next/image";
import "../../globals.css";

const Hero = () => {
  return <Image alt="hero" width={767} height={837} src="/hero.png" />;
};

export default function LandingPage() {
  return (
    <div className="relative flex flex-row w-screen h-screen">
      <div
        class="L3ft"
        className="w-[35%] h-screen flex items-center justify-center items-center ml-[50px]"
      >
        <div
          class="box"
          className="w-full h-[300px] flex justify-center items-center justify-center text-center"
        >
          <div class="tagline" className="text-[28px]">
            <p>
              <span>&quot;</span>Your Complete <span>Sports</span> Destination :{" "}
              <span>Courts</span>, <span>Coaches</span>, and{" "}
              <span>Competitions</span>
              <span>&quot;</span>
            </p>
          </div>
        </div>
      </div>

      <div
        class="R1ght"
        className="w-[65%] h-screen flex justify-center items-center mt-[30px]"
      >
        <div class="box" className="flex justify-center items-center">
          <Hero />
        </div>
      </div>
    </div>
  );
}
