"use client";

import { useState, useEffect } from "react";
import supabase from "../../lib/supabase";

const SportFilter = ({ onChange }) => {
  const [sport, setSport] = useState([]);

  useEffect(() => {
    fetchSports();
  }, []);

  const fetchSports = async () => {
    let { data: sport, error } = await supabase
      .from("sport")
      .select("sportname")
      .in("sportname", ["Basket", "Football", "Volley"]); // Filter berdasarkan sportname yang diinginkan
    if (error) console.error("Error fetching sports:", error);
    else setSport(sport);
  };

  return (
    <div>
      <select onChange={(e) => onChange(e.target.value)}>
        <option value="">Pilih Sport</option>
        {sport.map((sport, index) => (
          <option key={index} value={sport.sportname}>
            {sport.sportname}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SportFilter;
