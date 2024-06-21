"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Arrow from "../assets/arrow";
import { BookBttn } from "../UI/button";
import { useParams } from "react-router-dom";
import { getTournamentById } from "../../services/tournament";

const DetailTurnamen = () => {
  const { tournamentId } = useParams();
  const [tournament, setTournament] = React.useState(null);

  React.useEffect(() => {
    const fetchTournament = async () => {
      try {
        const fetchedTournament = await getTournamentById(tournamentId);
        setTournament(fetchedTournament);
      } catch (error) {
        console.error("Error fetching tournament:", error);
      }
    };

    fetchTournament();
  }, [tournamentId]);

  if (!tournament) {
    return <p>Loading...</p>;
  }

  return (
    <div className="relative flex flex-col">
        <div>
          <div className="w-screen h-[1380px] bg-[#BBBBBB] relative flex items-center justify-center pt-[60px] ">
            <div className="w-[1340px] h-[1200px] rounded-[12px] bg-[#F5F5F5] border-black border-[1px] flex items-center justify-center overflow-hidden">
              <Image src={tournament.image} alt={tournament.tournamentname} width={940} height={1200} className="object-contain" />
            </div>
          </div>

          <div className="w-screen bg-[#141414] relative flex flex-col">
            <div className="w-screen h-[120px] flex flex-row justify-between px-[80px] items-center mb-[50px]">
              <div className="text-[40px]">
                <p>{tournament.tournamentname}</p>
              </div>
              <div>
                <div className="arrow flex flex-row w-[116px] h-[42px] gap-[2px]">
                  <div className="w-[58px] h-[42px] bg-[#F5F5F5] text-black rounded-l-[20px] flex items-center justify-center">
                    <div className="arrwLeft">
                      <Arrow />
                    </div>
                  </div>
                  <div className="w-[58px] h-[42px] bg-[#F5F5F5] text-black rounded-r-[20px] flex items-center justify-center">
                    <div className="arrwLeft transform rotate-180">
                      <Arrow />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="description px-[80px] mb-[30px]">
                <div className="text-[24px] text-[#BEE702] underline">
                  <p>Description</p>
                </div>
                <div className="text-[20px] text-[#F5F5F5]">
                  <p>{tournament.description}</p>
                </div>
              </div>
              <div className="location pl-[80px] mb-[30px]">
                <div className="text-[24px] text-[#BEE702] underline">
                  <p>Detail Location</p>
                </div>
                <div className="text-[20px] text-[#F5F5F5]">
                  <p>{tournament.location}</p>
                </div>
              </div>
              <div className="sdate pl-[80px] mb-[30px]">
                <div className="text-[24px] text-[#BEE702] underline">
                  <p>Start Date</p>
                </div>
                <div className="text-[20px] text-[#F5F5F5]">
                  <p>{tournament.startdate}</p>
                </div>
              </div>
              <div className="edate pl-[80px] mb-[30px]">
                <div className="text-[24px] text-[#BEE702] underline">
                  <p>End Date</p>
                </div>
                <div className="text-[20px] text-[#F5F5F5]">
                  <p>{tournament.enddate}</p>
                </div>
              </div>
              <div className="contact pl-[80px] mb-[30px]">
                <div className="text-[24px] text-[#BEE702] underline">
                  <p>Contact Person</p>
                </div>
                <div className="text-[20px] text-[#F5F5F5]">
                  <p>08123456</p>
                </div>
              </div>
            </div>

            <div className="h-[200px] flex items-center justify-center">
              <div className="bookBtn">
                <BookBttn href="/booking" />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default DetailTurnamen;
