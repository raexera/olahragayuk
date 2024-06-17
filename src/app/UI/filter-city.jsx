"use client";

import { useState, useEffect } from "react";
import supabase from "../../lib/supabase";

const CityFilter = ({ onChange }) => {
  const [city, setcity] = useState([]);

  useEffect(() => {
    fetchcities();
  }, []);

  const fetchcities = async () => {
    let { data: city, error } = await supabase
      .from("city")
      .select("cityname")
      .in("cityname", ["Jakarta", "Bandung", "Surabaya"]); // Filter berdasarkan cityname yang diinginkan
    if (error) console.error("Error fetching cities:", error);
    else setcity(city);
  };

  return (
    <div>
      <select
        onChange={(e) => onChange(e.target.value)}
        className="w-[200px] h-[50px] bg-[#F5F5F5] rounded-[50px] px-[13px] outline-none text-[#141414] text-[18px] focus:ring-2 focus:ring-[#BEE702] caret-[#BEE702]"
      >
        <option value="">City</option>

        {city.map((city, index) => (
          <option key={index} value={city.cityname}>
            {city.cityname}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CityFilter;
