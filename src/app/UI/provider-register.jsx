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

const ProviderRegister = () => {
    return (
        <div className="relative w-screen h-screen flex items-center bg-[#F5F5F5]">
            <div className="flex flex-row w-full">
                <div className="w-[10%] p-4 ml-10 mt-6 m-4 bg-black rounded-xl shadow-lg opacity-80">
                    <div className="flex flex-col items-center justify-center text-white">
                        <OlahragaYukLogo />
                        <Link href="">
                            <Image alt="home" width={30} height={30} src="/home-button.svg" className="mb-10" />
                        </Link>

                        <Link href="">
                            <Image alt="field" width={30} height={30} src="/field-button.svg" className="mb-10" />
                        </Link>

                        <Link href="">
                            <Image alt="coach" width={30} height={30} src="/coach-button.svg" className="mb-10" />
                        </Link>

                        <Link href="">
                            <Image alt="tournament" width={30} height={30} src="/tournament-button.svg" className="mb-20" />
                        </Link>

                        <Link href="">
                            <Image alt="logout" width={30} height={30} src="/logout-button.svg" className="mt-10" />
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
                                    <h1>Field Registration</h1>
                                </div>

                                <form action="">
                                    <div>
                                        <h1>Company Name</h1>
                                        <input
                                            type="text"
                                            name="companyName"
                                            id="companyName"
                                            className="sm:text-sm mb-2 rounded-lg block w-full p-2 bg-slate-200 placeholder-slate-600 text-black focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Company Name"
                                            required
                                        />

                                        <h1>Address</h1>
                                        <input
                                            type="text"
                                            name="address"
                                            id="address"
                                            className="sm:text-sm mb-2 rounded-lg block w-full p-2 bg-slate-200 placeholder-slate-600 text-black focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Address"
                                            required
                                        />

                                        <h1>Price List</h1>
                                        <input
                                            type="text"
                                            name="priceList"
                                            id="priceList"
                                            className="sm:text-sm mb-2 rounded-lg block w-full p-2 bg-slate-200 placeholder-slate-600 text-black focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Price List"
                                            required
                                        />

                                        <h1>Description</h1>
                                        <textarea
                                            name="description"
                                            id="description"
                                            className="sm:text-sm mb-2 rounded-lg block w-full p-2 bg-slate-200 placeholder-slate-600 text-black focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Description"
                                            required
                                        ></textarea>

                                        <h1>Photos</h1>
                                        <input
                                            type="file"
                                            name="photo"
                                            id="photo"
                                            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer slate-200 dark:text-gray-400 focus:outline-none"
                                            required
                                        />
                                        
                                        <div id="save" className="flex item-center justify-center">
                                            <button
                                                type="submit"
                                                className="mt-5 w-20 p-2 bg-lime-400 text-black rounded-lg hover:bg-blue-700"
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </form>
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
  
  export default ProviderRegister;
  