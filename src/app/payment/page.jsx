"use client";

import React, { useState } from "react";
import WhiteArrow from "../assets/white-arrow";

const BookingPage = () => {
  return (
    <div className="w-screen h-screen relative flex items-center justify-center">
      <div className="w-screen h-[90%] mx-[50px] flex flex-row gap-[50px]">
        <div className="left w-[60%] h-full bg-white/10 rounded-lg backdrop-blur-md shadow-md border border-white/30 px-[30px] py-[30px] flex flex-row">
          <div className="arrw pt-[10px]">
            <WhiteArrow />
          </div>
          <div className="ml-[40px]">
            <div className="head h-[80px] w-full text-[28px] text-[#BEE702]">
              <h1>Choose Your Payment Method</h1>
            </div>
            <div className="body"></div>
          </div>
        </div>

        <div className="right w-[40%] h-full">
          <div className="w-full h-full bg-white/10 rounded-lg backdrop-blur-md shadow-md border border-white/30 px-[20px] py-[30px]">
            <div className="head h-[80px] w-full text-[30px] text-[#BEE702]">
              <h1>Order Summary</h1>
            </div>

            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
