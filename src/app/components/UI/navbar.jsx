import React from "react";
import Image from "next/image";
import Link from "next/link";

const OlahragYukLogo = () => {
  return (
    <div className="z-100">
      <Image
        alt="logo"
        width={137}
        height={85}
        src="/olahragayuk-logo.png"
      />
    </div>
  );
};

const Menu = () => {
  return (
    <div class="menuNavbar" className="relative flex flex-row gap-[100px] me-[300px] z-100">
      <a href="">SewaYuk</a>
      <a href="">TutorYuk</a>
      <a href="">TurnamenYuk</a>
    </div>
  );
};

const RegistAndLogin = () => {
  return (
    <div className="flex flex-row gap-[20px] z-100">
      <div className="h-[40px] w-[115px] bg-white bg-opacity-10 backdrop-blur-sm rounded-[50px] flex items-center justify-center text-center">
        <p>Sign In</p>
      </div>

      
      <div className="h-[40px] w-[115px] bg-[#BEE702] rounded-[50px] flex items-center justify-center text-center text-[#141414]">
        <p>Sign In</p>
      </div>
    </div>
  )
}

export default function Navbar() {
  return (
    <div class="navbar" className="fixed z-100 flex w-screen h-[120px] items-center">
      <div class="boxNavbar" className="flex flex-row w-screen h-[100px] items-center justify-around text-[14px]">
        <OlahragYukLogo />
        <Menu />
        <RegistAndLogin />
      </div>
    </div>
  )
}

