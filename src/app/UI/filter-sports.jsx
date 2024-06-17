"use client";

import { useState, useEffect } from "react";
import { getSports } from "../../services/sport";

const SportFilter = ({ onChange }) => {
  const [sport, setSport] = useState([]);

  useEffect(() => {
    fetchSports();
  }, []);

  const fetchSports = async () => {
    try {
      const sportData = await getSports();
      setSport(sportData);
    } catch (error) {
      console.error("Error fetching sports:", error);
    }
  };

  return (
    <div>
      <select
        onChange={(e) => onChange(e.target.value)}
        className="w-[200px] h-[50px] bg-[#F5F5F5] rounded-[50px] px-[13px] outline-none text-[#141414] text-[18px] focus:ring-2 focus:ring-[#BEE702] caret-[#BEE702]"
      >
        <option value="">Pilih Sport</option>
        {sport.map((sport) => (
          <option key={sport.sportid} value={sport.sportid}>
            {sport.sportname}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SportFilter;
