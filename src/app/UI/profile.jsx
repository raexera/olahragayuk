"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const OlahragaYukLogo = () => {
    return (
      <Link href="/">
        <div className="z-50 mb-20">
          <Image alt="logo" width={137} height={85} src="/olahragayuk-logo.png" />
        </div>
      </Link>
    );
  };

const Profile = () => {
    return (
        <div className="relative w-screen h-screen flex items-center bg-[#F5F5F5]">
            <div className="flex flex-row w-full">
                <div className="w-[10%] p-4 ml-10 mt-6 m-4 bg-black rounded-xl shadow-lg opacity-80">
                    <div className="flex flex-col items-center justify-center text-white">
                        <OlahragaYukLogo/>
                        <Link href="">
                            <Image alt="home" width={30} height={30} src="/home-button.svg" className="mb-10"/>
                        </Link>

                        <Link href="">
                            <Image alt="field" width={30} height={30} src="/field-button.svg" className="mb-10"/>
                        </Link>

                        <Link href="">
                            <Image alt="coach" width={30} height={30} src="/coach-button.svg" className="mb-10"/>
                        </Link>

                        <Link href="">
                            <Image alt="tournament" width={30} height={30} src="/tournament-button.svg" className="mb-20"/>
                        </Link>

                        <Link href="">
                            <Image alt="logout" width={30} height={30} src="/logout-button.svg" className="mt-10"/>
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col flex-grow">
                    <div className="h-full flex flex-row mt-4">
                        <div className="w-60 p-4 m-2 bg-white rounded-xl shadow-lg text-black">
                            <img src="" alt="profile-pic" />
                            <p>John Doe</p>
                        </div>

                        <div className="flex items-center justify-center w-[32%] p-4 m-2 bg-white rounded-xl shadow-lg text-black">
                            <p className="opacity-50">Gladiator</p>
                        </div>
                    </div>

                    <div className="flex flex-row flex-grow">
                        <div className="flex flex-col flex-grow">
                            <div className="p-4 m-2 bg-white rounded-xl shadow-lg text-black">
                                <div className="font-bold underline text-black mb-10">
                                    <h1>Information Details</h1>
                                </div>

                                <div className="underline">
                                    <p>Name</p>
                                </div>

                                <div className="mb-2 opacity-50">
                                    <p>John Doe</p>
                                </div>

                                <div className="underline">
                                    <p>Gender</p>
                                </div>

                                <div className="mb-2 opacity-50">
                                    <p>Male</p>
                                </div>

                                <div className="underline">
                                    <p>Email Address</p>
                                </div>

                                <div className="mb-2 opacity-50">
                                    <p>john.doe@gmail.com</p>
                                </div>

                                <div className="underline">
                                    <p>Phone Number</p>
                                </div>

                                <div className="mb-2 opacity-50">
                                    <p>+62 8567975327</p>
                                </div>

                                <div className="underline">
                                    <p>Address</p>
                                </div>

                                <div className="mb-2 opacity-50">
                                    <p>West Jakarta, Indonesia</p>
                                </div>
                            </div>

                            <div className="p-4 m-2 bg-white rounded-xl shadow-lg text-black">
                                <div className="flex flex-col text-black">
                                    <Link href="">
                                        <p>Make your pitch</p>
                                    </Link>

                                    <Link href="">
                                        <p className="opacity-50">Be a coach!</p>
                                    </Link>
                                        <p className="opacity-50">Bring your tournament!</p>
                                    <Link href="">
                                    
                                    </Link>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="flex-grow w-[10%] p-4 m-2 mr-10 bg-white rounded-xl shadow-lg text-black">
                            <div className="font-bold underline text-black">
                                <h1>Booking Details</h1>
                            </div>
                            <div className="w-full h-80 flex justify-center items-center text-black">
                                <p className="opacity-50">Empty</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  };
  
  export default Profile;
  