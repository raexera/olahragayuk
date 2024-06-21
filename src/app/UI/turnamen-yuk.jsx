"use client";

import React, { useState, useEffect, useCallback } from "react";
import FilterSports from "../UI/filter-sports";
import FilterCity from "../UI/filter-city";
import SearchPage from "../UI/search-sewayuk";
import Card from "../UI/card";
import { getTournaments, getFilteredTournaments } from "../../services/tournament";
import { useNavigate } from "react-router-dom";

const TurnamenYuk = () => {
  const [tournaments, setTournaments] = useState([]);
  const [selectedSport, setSelectedSport] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleTournamentClick = useCallback(
    (tournament) => {
      navigate(`/detail-turnamen/${tournament.tournamentid}`);
    },
    [navigate],
  );

  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        let fetchedTournaments = [];
        if (selectedSport && selectedCity) {
          fetchedTournaments = await getFilteredTournaments(selectedCity, selectedSport);
        } else if (selectedSport) {
          fetchedTournaments = await getFilteredTournaments(null, selectedSport);
        } else if (selectedCity) {
          fetchedTournaments = await getFilteredTournaments(selectedCity, null);
        } else {
          fetchedTournaments = await getTournaments();
        }

        if (searchTerm) {
          fetchedTournaments = fetchedTournaments.filter((tournament) =>
            tournament.tournamentname.toLowerCase().includes(searchTerm.toLowerCase()),
          );
        }

        setTournaments(fetchedTournaments);
      } catch (error) {
        console.error("Error fetching tournaments:", error);
      }
    };

    fetchTournaments();
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
        {tournaments.length > 0 ? (
          tournaments.map((tournament) => (
            <Card
              key={tournament.tournamentid}
              image={tournament.image}
              title={tournament.tournamentname}
              description={`Location: ${tournament.location}`}
              description2={`Start Date: ${tournament.startdate}`}
              onClick={() => handleTournamentClick(tournament)}
            />
          ))
        ) : (
          <p>No tournaments found.</p>
        )}
      </div>
    </section>
  );
};

export default TurnamenYuk;
