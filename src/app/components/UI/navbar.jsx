import React from "react";
import Image from "next/image";
import Link from "next/link";

const OlahragYukLogo = () => {
  return (
    <div className="">
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
    <div class="menuNavbar" className="flex flex-row">
      <ul>
        <li>SewaYuk</li>
        <li>TutorYuk</li>
        <li>TournamentYuk</li>
      </ul>
    </div>
  );
};

const RegistAndLogin = () => {
  return (
    <div className="boxBtn">
      <div className="SignIn">
        <p>Sign In</p>
      </div>
      
      <div className="SignUp">
        <p>Sign Up</p>
      </div>
    </div>
  )
}

export default function Navbar() {
  return (
    <div class="navbar" className="relative flex w-screen h-[120px] items-center bg-red-700">
      <div class="boxNavbar" className="flex flex-row w-screen h-[100px] items-center bg-blue-400">
        <OlahragYukLogo />
        <Menu />
        <RegistAndLogin />
      </div>
    </div>
  )
}

