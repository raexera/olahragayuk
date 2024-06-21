import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SignInBttn, SignUpBttn } from "./button"; 

const OlahragaYukLogo = () => {
  return (
    <Link href="/">
      <div className="z-50">
        <Image alt="logo" width={137} height={85} src="/olahragayuk-logo.png" />
      </div>
    </Link>
  );
};

const Menu = () => {
  return (
    <div className="menuNavbar relative flex gap-10 z-50">
      <Link href="/page.jsx#sewayuk">SewaYuk</Link>
      <Link href="/page.jsx#tutoryuk">TutorYuk</Link>
      <Link href="/page.jsx#turnamenyuk">TurnamenYuk</Link>
    </div>
  );
};

export default async function Navbar() {
  return (
    <nav className="absolute z-50 flex w-screen h-30 items-center">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8 lg:px-16">
        <OlahragaYukLogo />
        <Menu />
        <div className="flex gap-4 z-50">
          <SignInBttn href="/signin" />
          <SignUpBttn href="/signup" />
        </div>
      </div>
    </nav>
  );
}
