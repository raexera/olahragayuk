"use client";

import { useState, useEffect } from "react";
import { getCities } from "../../services/city";

const CityFilter = ({ onChange }) => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetchCities();
  }, []);

  const fetchCities = async () => {
    try {
      const citiesData = await getCities();
      setCities(citiesData);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  return (
    <div>
      <select
        onChange={(e) => onChange(e.target.value)}
        className="w-[200px] h-[50px] bg-[#F5F5F5] rounded-[50px] px-[13px] outline-none text-[#141414] text-[18px] focus:ring-2 focus:ring-[#BEE702] caret-[#BEE702]"
      >
        <option value="">Pilih city</option>
        {cities.map((city) => (
          <option key={city.cityid} value={city.cityid}>
            {city.cityname}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CityFilter;
