"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import supabase from "../../lib/supabase";
import { SignInBttn, SignUpBttn } from "./button";

const OlahragaYukLogo = ({ href }) => {
  return (
    <Link href={href}>
      <div className="z-50">
        <Image alt="logo" width={137} height={85} src="/olahragayuk-logo.png" />
      </div>
    </Link>
  );
};

const Menu = () => {
  return (
    <div className="menuNavbar relative flex gap-10 z-50">
      <Link href="/#sewayuk">SewaYuk</Link>
      <Link href="/#tutoryuk">TutorYuk</Link>
      <Link href="/#turnamenyuk">TurnamenYuk</Link>
    </div>
  );
};

const Navbar = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setSession(session);
    };

    getSession();

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setSession(null);
    window.location.href = "/";
  };

  return (
    <nav className="absolute z-50 flex w-screen h-30 items-center">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8 lg:px-16">
        <OlahragaYukLogo href="./" />
        <Menu />
        <div className="flex gap-4 z-50">
          {session ? (
            <div className="flex items-center gap-4">
              <Link href="/profile">
                <Image
                  alt="Profile Picture"
                  src={
                    session.user.user_metadata.avatar_url ||
                    "/default-avatar.png"
                  }
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </Link>
              <button
                onClick={handleLogout}
                className="text-white px-4 py-2 rounded-lg bg-[#BEE702]"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <SignInBttn href="/signin" />
              <SignUpBttn href="/signup" />
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
