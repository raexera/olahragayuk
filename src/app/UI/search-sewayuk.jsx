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
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Masukkan nama lapangan..."
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
