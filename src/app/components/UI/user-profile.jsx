"use client";

import React from "react";
import "../../globals.css";

const box = () => {
  return <div className="p-4 m-4 bg-[#F5F5F5] rounded shadow-md"></div>;
};

const textBox = (placeholder) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="w-full px-2 py-2 border rounded-md text-[#141414] focus:outline-none focus:ring-2 focus:ring-[#BEE702]"
    />
  );
};

const UserProfilePage = () => {
  return (
    <div className="w-screen h-screen relative flex items-center justify-center"></div>
  );
};

export default UserProfilePage;
