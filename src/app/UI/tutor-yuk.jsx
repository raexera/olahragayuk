"use client";

import React, { useState, useEffect, useCallback } from "react";
import FilterSports from "../UI/filter-sports";
import FilterCity from "../UI/filter-city";
import SearchPage from "../UI/search-sewayuk";
import Card from "../UI/card";
import { getCoaches, getFilteredCoaches } from "../../services/coach";
import { useNavigate } from "react-router-dom";

const TutorYuk = () => {
  const [coaches, setCoaches] = useState([]);
  const [selectedSport, setSelectedSport] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleCoachClick = useCallback(
    (coach) => {
      navigate(`/detail-sewa/${coach.coachid}`);
    },
    [navigate],
  );

  useEffect(() => {
    const fetchCoaches = async () => {
      try {
        let fetchedCoaches = [];
        if (selectedSport && selectedCity) {
          fetchedCoaches = await getFilteredCoaches(selectedCity, selectedSport);
        } else if (selectedSport) {
          fetchedCoaches = await getFilteredCoaches(null, selectedSport);
        } else if (selectedCity) {
          fetchedCoaches = await getFilteredCoaches(selectedCity, null);
        } else {
          fetchedCoaches = await getCoaches();
        }

        if (searchTerm) {
          fetchedCoaches = fetchedCoaches.filter((coach) =>
            coach.coachname.toLowerCase().includes(searchTerm.toLowerCase()),
          );
        }

        setCoaches(fetchedCoaches);
      } catch (error) {
        console.error("Error fetching coaches:", error);
      }
    };

    fetchCoaches();
  }, [selectedSport, selectedCity, searchTerm]);

  const handleFilterChangeSport = useCallback((sportId) => {
    setSelectedSport(sportId);
  }, []);

  const handleFilterChangeCity = useCallback((cityId) => {
    setSelectedCity(cityId);
  }, []);

  const handleSearch = useCallback((searchTerm) => {
    setSearchTerm(searchTerm);
  }, []);

  return (
    <section className="container mx-auto p-4 flex flex-col">
      <div className="fitur w-full h-[60px] flex flex-row items-center gap-[50px]">
        <div>
          <SearchPage onSearch={handleSearch} />
        </div>
        <div>
          <FilterSports onChange={handleFilterChangeSport} />
        </div>
        <div>
          <FilterCity onChange={handleFilterChangeCity} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {coaches.length > 0 ? (
          coaches.map((coach) => (
            <Card
              key={coach.coachid}
              image={coach.image}
              title={coach.coachname}
              description={`Location: ${coach.location}`}
              description2={`Price: ${coach.priceperhour}/hour`}
              onClick={() => handleCoachClick(coach)}
            />
          ))
        ) : (
          <p>No coaches found.</p>
        )}
      </div>
    </section>
  );
};

export default TutorYuk;