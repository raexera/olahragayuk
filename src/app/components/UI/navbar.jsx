import React from "react";
import Image from "next/image";
import Link from "next/link";

const OlahragaYukLogo = () => {
  return (
    <div className="z-50">
      <Image alt="logo" width={137} height={85} src="/olahragayuk-logo.png" />
    </div>
  );
};

const Menu = () => {
  return (
    <div className="menuNavbar relative flex gap-10 z-50">
      <Link href="/sewa-yuk">SewaYuk</Link>
      <Link href="/tutor-yuk">TutorYuk</Link>
      <Link href="/turnamen-yuk">TurnamenYuk</Link>
    </div>
  );
};

const RegistAndLogin = () => {
  return (
    <div className="flex gap-4 z-50">
      <div className="h-10 w-28 bg-white bg-opacity-10 backdrop-blur-sm rounded-full flex items-center justify-center text-center">
        <p>Sign In</p>
      </div>
      <div className="h-10 w-28 bg-[#BEE702] rounded-full flex items-center justify-center text-center text-[#141414]">
        <p>Sign Up</p>
      </div>
    </div>
  );
};

export default function Navbar() {
  return (
    <nav className="absolute z-50 flex w-screen h-30 items-center bg-transparent">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8 lg:px-16">
        <OlahragaYukLogo />
        <Menu />
        <RegistAndLogin />
      </div>
    </nav>
  );
}
