"use client";

import React, { useState, useEffect, useCallback } from "react";
import Sewa from "../assets/sewaLogo";
import SewaActive from "../assets/sewaLogoOn";
import Tutor from "../assets/tutorLogo";
import TutorActive from "../assets/tutorLogoOn";
import Turnamen from "../assets/turnamenLogo";
import TurnamenActive from "../assets/turnamenLogoOn";
import FilterSports from "../UI/filter-sports";
import FilterCity from "../UI/filter-city";
import SearchPage from "../UI/search-sewayuk";
import { getFields, getFilteredFields } from "../../services/field";
import SewaYuk from "../UI/sewa-yuk";

const features = [
  {
    id: 1,
    icon: Sewa,
    activeIcon: SewaActive,
    data: <SewaYuk />,
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
  const [fields, setFields] = useState([]);
  const [selectedSport, setSelectedSport] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchFields = async () => {
      try {
        let fetchedFields = [];
        if (selectedSport && selectedCity) {
          fetchedFields = await getFilteredFields(selectedCity, selectedSport);
        } else if (selectedSport) {
          fetchedFields = await getFilteredFields(null, selectedSport);
        } else if (selectedCity) {
          fetchedFields = await getFilteredFields(selectedCity, null);
        } else {
          fetchedFields = await getFields();
        }

        if (searchTerm) {
          fetchedFields = fetchedFields.filter((field) =>
            field.fieldname.toLowerCase().includes(searchTerm.toLowerCase()),
          );
        }

        setFields(fetchedFields);
      } catch (error) {
        console.error("Error fetching fields:", error);
      }
    };

    fetchFields();
  }, [selectedSport, selectedCity, searchTerm]);

  const handleFilterChangeSport = useCallback((sportId) => {
    setSelectedSport(sportId);
  }, []);

  const handleFilterChangeCity = useCallback((cityId) => {
    setSelectedCity(cityId);
  }, []);

  const handleFeatureClick = useCallback((id) => {
    setActiveFeature(id);
  }, []);

  const handleSearch = useCallback((searchTerm) => {
    setSearchTerm(searchTerm);
  }, []);

  return (
    <div className="relative flex flex-col w-screen h-full">
      {/* Top Section */}
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

      {/* Bottom Section */}
      <div className="bg-[#f5f5f5] bg-opacity-50 backdrop-blur-4 h-full mt-4 rounded-tl-[30px] rounded-tr-[30px] p-[10px] relative flex">
        <section className="container mx-auto p-4 flex flex-col">
          <div className="fitur w-full h-[60px] flex flex-row items-center gap-[50px]">
            {/* Search */}
            <div>
              <SearchPage onSearch={handleSearch} />
            </div>
            {/* Sport Filter */}
            <div>
              <FilterSports onChange={handleFilterChangeSport} />
            </div>
            {/* City Filter */}
            <div>
              <FilterCity onChange={handleFilterChangeCity} />
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
