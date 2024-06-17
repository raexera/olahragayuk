import React, { useState, useEffect } from "react";

export default function SearchPage({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      onSearch(searchTerm);
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, onSearch]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search field name..."
        className="w-[400px] h-[50px] bg-[#F5F5F5] rounded-[50px] px-[23px] outline-none text-[#141414] text-[18px] placeholder-[#717171] focus:ring-2 focus:ring-[#BEE702] caret-[#BEE702]"
      />
    </div>
  );
}
