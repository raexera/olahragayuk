"use client";

import React, { useState, useEffect, useCallback } from "react";
import Card from "../UI/card";
import { getFields, getFilteredFields } from "../../services/field";
import { useNavigate } from "react-router-dom";

const SewaYuk = () => {
  const [fields, setFields] = useState([]);
  const [selectedSport, setSelectedSport] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleFieldClick = useCallback(
    (field) => {
      navigate(`/detail-sewa/${field.fieldId}`);
    },
    [navigate],
  );

  useEffect(() => {
    const fetchFields = async () => {
      try {
        let fetchedFields = [];
        if (selectedSport && selectedCity) {
          fetchedFields = await getFilteredFields(selectedCity, selectedSport);
        } else if (selectedSport) {
          fetchedFields = await getFilteredFields(null, selectedSport);
        } else if (selectedCity) {
          fetchedFields = await getFilteredFields(selectedCity, null);
        } else {
          fetchedFields = await getFields();
        }

        if (searchTerm) {
          fetchedFields = fetchedFields.filter((field) =>
            field.fieldname.toLowerCase().includes(searchTerm.toLowerCase()),
          );
        }

        setFields(fetchedFields);
      } catch (error) {
        console.error("Error fetching fields:", error);
      }
    };

    fetchFields();
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
      {fields.length > 0 ? (
        fields.map((field) => (
          <Card
            key={field.fieldId}
            image={field.image}
            title={field.fieldname}
            description={`Location: ${field.location}`}
            description2={`Price: ${field.priceperhour}/hour`}
            onClick={() => handleFieldClick(field)}
          />
        ))
      ) : (
        <p>No fields found.</p>
      )}
    </div>
  );
};

export default SewaYuk;
