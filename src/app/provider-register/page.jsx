"use client";

import React, { useState } from "react";
import supabase from "../../lib/supabase";

const ProviderRegister = () => {
  const [companyName, setCompanyName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [fieldname, setFieldname] = useState("");
  const [location, setLocation] = useState("");
  const [priceperhour, setPriceperhour] = useState("");
  const [cityid, setCityid] = useState("");
  const [sportid, setSportid] = useState("");
  const [description, setDescription] = useState("");
  const [photoFile, setPhotoFile] = useState(null);

  const handleOptionCityChange = (event) => {
    setCityid(event.target.value); // Mengupdate state dengan nilai pilihan yang baru
  };
  const handleOptionSportChange = (event) => {
    setSportid(event.target.value); // Mengupdate state dengan nilai pilihan yang baru
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data: insertDatafieldprovider, error: insertErrorfieldprovider } =
        await supabase.from("fieldprovider").insert([
          {
            companyname: companyName,
            address,
            phone,
            email,
          },
        ]);

      if (insertErrorfieldprovider) {
        throw insertErrorfieldprovider;
      }

      const { data: insertDatafield, error: insertErrorfield } = await supabase
        .from("field")
        .insert([
          {
            fieldname,
            location,
            priceperhour,
            cityid,
            sportid,
            description,
          },
        ]);

      if (insertErrorfield) {
        throw insertErrorfield;
      }

      // Reset formulir setelah sukses menyimpan
      setCompanyName("");
      setAddress("");
      setPhone("");
      setEmail("");
      setFieldname("");
      setLocation("");
      setPriceperhour("");
      setCityid("");
      setSportid("");
      setDescription("");
      setPhotoFile("");

      // Tampilkan pesan sukses atau arahkan pengguna ke halaman lain
      alert("Data saved successfully!");
      window.location.href = "/profile";
    } catch (error) {
      console.error("Error saving data:", error.message);
      // Tampilkan pesan kesalahan atau tindakan yang sesuai
      alert(`Error saving data: ${error.message}`);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setPhotoFile(file);
  };

  return (
    <div className="relative w-screen h-full flex items-center bg-[#F5F5F5]">
      <div className="w-full h-full flex justify-center items-center mt-[100px]">
        <div className="w-[30%] h-full p-4 m-2 bg-white rounded-xl shadow-lg text-black">
          <div className="font-bold underline text-black mb-10">
            <h1>Field Registration</h1>
          </div>

          <form onSubmit={handleSubmit}>
            <div>
              <h1>Company Name</h1>
              <input
                type="text"
                name="companyName"
                id="companyName"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="sm:text-sm mb-2 rounded-lg block w-full p-2 bg-slate-200 placeholder-slate-600 text-black focus:ring-blue-500 focus:border-blue-500"
                placeholder="Company Name"
                required
              />

              <h1>Field Name</h1>
              <input
                type="text"
                name="fieldname"
                id="fieldname"
                value={fieldname}
                onChange={(e) => setFieldname(e.target.value)}
                className="sm:text-sm mb-2 rounded-lg block w-full p-2 bg-slate-200 placeholder-slate-600 text-black focus:ring-blue-500 focus:border-blue-500"
                placeholder="Field Name"
                required
              />

              <h1>Sport Type</h1>
              <select
                value={sportid}
                onChange={handleOptionSportChange}
                className="sm:text-sm mb-2 rounded-lg block w-full p-2 bg-slate-200 placeholder-slate-600 text-black focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Select sport</option>
                <option value="1">Basket</option>{" "}
                <option value="2">Football</option>{" "}
                <option value="3">Badminton</option>{" "}
              </select>

              <h1>City</h1>
              <select
                value={cityid}
                onChange={handleOptionCityChange}
                className="sm:text-sm mb-2 rounded-lg block w-full p-2 bg-slate-200 placeholder-slate-600 text-black focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Select city</option>
                <option value="1">Jakarta</option>{" "}
                <option value="2">Bandung</option>{" "}
                <option value="3">Surabaya</option>{" "}
              </select>

              <h1>Address Company</h1>
              <input
                type="text"
                name="address"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="sm:text-sm mb-2 rounded-lg block w-full p-2 bg-slate-200 placeholder-slate-600 text-black focus:ring-blue-500 focus:border-blue-500"
                placeholder="Address"
                required
              />

              <h1>Location Field</h1>
              <input
                type="text"
                name="location"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="sm:text-sm mb-2 rounded-lg block w-full p-2 bg-slate-200 placeholder-slate-600 text-black focus:ring-blue-500 focus:border-blue-500"
                placeholder="Location Field"
                required
              />

              <h1>Price List per Hour</h1>
              <input
                type="number"
                name="priceperhour"
                id="priceperhour"
                value={priceperhour}
                onChange={(e) => setPriceperhour(e.target.value)}
                className="sm:text-sm mb-2 rounded-lg block w-full p-2 bg-slate-200 placeholder-slate-600 text-black focus:ring-blue-500 focus:border-blue-500"
                placeholder="Price List"
                required
              />

              <h1>Phone Number</h1>
              <input
                type="number"
                name="phone"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="sm:text-sm mb-2 rounded-lg block w-full p-2 bg-slate-200 placeholder-slate-600 text-black focus:ring-blue-500 focus:border-blue-500"
                placeholder="Phone Number"
                required
              />

              <h1>Email</h1>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="sm:text-sm mb-2 rounded-lg block w-full p-2 bg-slate-200 placeholder-slate-600 text-black focus:ring-blue-500 focus:border-blue-500"
                placeholder="Email"
                required
              />

              <h1>Description</h1>
              <textarea
                name="description"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="sm:text-sm mb-2 rounded-lg block w-full p-2 bg-slate-200 placeholder-slate-600 text-black focus:ring-blue-500 focus:border-blue-500"
                placeholder="Description"
                required
              ></textarea>

              <h1>Photos Field</h1>
              <input
                type="file"
                name="photo"
                id="photo"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer slate-200 dark:text-gray-400 focus:outline-none"
                required
              />

              <div className="flex item-center justify-center">
                <button
                  type="submit"
                  className="mt-5 w-20 p-2 bg-lime-400 text-white rounded-lg hover:bg-white hover:text-black"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProviderRegister;
