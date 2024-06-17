"use client";

import { useState, useEffect } from "react";
import supabase from "../../lib/supabase";

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const { data, error } = await supabase
        .from("field")
        .select("*")
        .ilike("fieldname", `%${searchTerm}%`)
        .order("fieldname", { ascending: true })
        .limit(10);

      if (error) {
        throw error;
      }

      setResults(data || []);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    if (searchTerm.trim() !== "") {
      handleSearch();
    } else {
      setResults([]);
    }
  }, [searchTerm]);

  return (
    <div className="">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search field name..."
        className="w-[400px] h-[50px] bg-[#F5F5F5] rounded-[50px] px-[23px] outline-none text-[#141414] text-[18px] placeholder-[#717171] focus:ring-2 focus:ring-[#BEE702] caret-[#BEE702]"
      />
      <ul>
        {results.map((field) => (
          <li key={field.fieldid}>
            <p>Nama Lapangan: {field.fieldname}</p>
            <p>Lokasi: {field.location}</p>
            <p>Harga per Jam: {field.priceperhour}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
