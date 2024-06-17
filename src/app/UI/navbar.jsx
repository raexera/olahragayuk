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
      <Link href="/sewa-yuk">SewaYuk</Link>
      <Link href="/tutor-yuk">TutorYuk</Link>
      <Link href="/turnamen-yuk">TurnamenYuk</Link>
    </div>
  );
};

export default function Navbar() {
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
