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
import Card from "./card";
import { getFields, getFilteredFields } from "../../services/field";

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
  const [fields, setFields] = useState([]);
  const [selectedSport, setSelectedSport] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    fetchFields();
  }, []);

  const fetchFields = async () => {
    try {
      let fetchedFields = [];
      if (selectedSport && selectedCity) {
        fetchedFields = await getFilteredFields(selectedCity, selectedSport);
      } else {
        fetchedFields = await getFields();
      }
      setFields(fetchedFields);
    } catch (error) {
      console.error("Error fetching fields:", error);
    }
  };

  const handleFilterChangeSport = (sportId) => {
    setSelectedSport(sportId);
  };

  const handleFilterChangeCity = (cityId) => {
    setSelectedCity(cityId);
  };

  const handleFeatureClick = (id) => {
    setActiveFeature(id);
  };

  return (
    <div className="relative flex flex-col w-screen h-screen">
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
      <div className="bg-[#f5f5f5] bg-opacity-50 backdrop-blur-4 h-full mt-4 rounded-tl-[30px] rounded-tr-[30px] p-[10px]">
        <section className="container mx-auto p-4">
          <div>
            {/* Search */}
            <div>
              <h1>Field Search</h1>
              <SearchField />
            </div>
            {/* Sport Filter */}
            <div>
              <h1>Filter by Sports</h1>
              <FilterSports onChange={handleFilterChangeSport} />
            </div>
            {/* City Filter */}
            <div>
              <h1>Filter by City</h1>
              <FilterCity onChange={handleFilterChangeCity} />
            </div>
          </div>
          {/* Fields List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {fields.length > 0 ? (
              fields.map((field) => (
                <Card
                  key={field.fieldid}
                  image={field.image || "/path/to/default/image.jpg"}
                  title={field.fieldname}
                  description={`Location: ${field.location}, Price: $${field.priceperhour}/hr`}
                />
              ))
            ) : (
              <p>No fields found.</p>
            )}
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
