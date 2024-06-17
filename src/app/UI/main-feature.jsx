"use client";

import React, { useState, useEffect } from "react";
import Sewa from "../assets/sewaLogo";
import SewaActive from "../assets/sewaLogoOn";
import Tutor from "../assets/tutorLogo";
import TutorActive from "../assets/tutorLogoOn";
import Turnamen from "../assets/turnamenLogo";
import TurnamenActive from "../assets/turnamenLogoOn";
import FilterSports from "./filter-sports";
import FilterCity from "./filter-city";
import SearchField from "./search-sewayuk";
import supabase from "../../lib/supabase";

const features = [
  {
    id: 1,
    icon: Sewa,
    activeIcon: SewaActive,
    data: "Data untuk Fitur 1",
  },
  {
    id: 2,
    icon: Tutor,
    activeIcon: TutorActive,
    data: "Data untuk Fitur 2",
  },
  {
    id: 3,
    icon: Turnamen,
    activeIcon: TurnamenActive,
    data: "Data untuk Fitur 3",
  },
];

const MainFeature = () => {
  const [activeFeature, setActiveFeature] = useState(features[0].id);
  const [filteredDataSport, setFilteredDataSport] = useState([]);
  const [filteredDataCity, setFilteredDataCity] = useState([]);

  const handleFilterChangeSport = async (selectedSport) => {
    let { data: filteredDataSport, error } = await supabase
      .from("sport")
      .select("*")
      .eq("sportname", selectedSport);
    if (error) console.error("Error filtering sports:", error);
    else setFilteredDataSport(filteredDataSport);
  };

  const handleFilterChangeCity = async (selectedCity) => {
    let { data: filteredDataCity, error } = await supabase
      .from("city")
      .select("*")
      .eq("cityname", selectedCity);
    if (error) console.error("Error filtering city:", error);
    else setFilteredDataCity(filteredDataCity);
  };

  const handleFeatureClick = (id) => {
    setActiveFeature(id);
  };

  return (
    <div className="relative flex flex-col w-screen h-screen">
      {/* Bagian Atas */}
      <div className="flex flex-row w-full h-[200px] items-center justify-center gap-[50px]">
        {features.map((feature) => (
          <div
            key={feature.id}
            onClick={() => handleFeatureClick(feature.id)}
            style={{ cursor: "pointer" }}
          >
            {activeFeature === feature.id ? (
              <feature.activeIcon style={{ width: "50px", height: "50px" }} />
            ) : (
              <feature.icon style={{ width: "50px", height: "50px" }} />
            )}
          </div>
        ))}
      </div>

      {/* Bagian Bawah*/}
      <div className="bg-[#f5f5f5] bg-opacity-50 backdrop-blur-4 h-full mt-4 rounded-tl-[30px] rounded-tr-[30px] p-[10px] relative flex">
        <section className="container mx-auto p-4 flex flex-col">
          <div className="fitur w-full h-[60px] flex flex-row  items-center gap-[50px]">
            {/* search */}
            <div>
              <SearchField />
            </div>
            {/* city */}
            <div>
              <FilterCity onChange={handleFilterChangeCity} />
              <ul>
                {filteredDataCity.map((city) => (
                  <li key={city.cityid}>{city.cityname}</li>
                ))}
              </ul>
            </div>
            {/* sport */}
            <div>
              <FilterSports onChange={handleFilterChangeSport} />
              <ul>
                {filteredDataSport.map((sport) => (
                  <li key={sport.sportid}>{sport.sportname}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex mb-8">
            {features.find((feature) => feature.id === activeFeature).data}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainFeature;
