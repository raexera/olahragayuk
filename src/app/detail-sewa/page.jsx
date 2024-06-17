"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Arrow from "../assets/arrow";
import { BookBttn } from "../UI/button";
import { getFields } from "../../services/field";

const DetailSewa = ({ image, title }) => {
  const [fields, setFields] = useState([]);

  useEffect(() => {
    const fetchFields = async () => {
      try {
        let fetchedFields = [];
        fetchedFields = await getFields();
        setFields(fetchedFields);
      } catch (error) {
        console.error("Error fetching fields:", error);
      }
    };

    fetchFields();
  }, []);

  return (
    <div className="relative flex flex-col">
      {fields.map((field) => (
        <div key={field.fieldid}>
          <div className="w-screen h-[780px] bg-[#BBBBBB] relative flex items-center justify-center pt-[60px] ">
            <div className="w-[1340px] h-[600px] rounded-[12px] bg-[#F5F5F5] border-black border-[1px] flex items-center justify-center">
              <Image src={image} alt={title} width={1340} height={600} />
            </div>
          </div>

          <div className="test"></div>

          <div className="w-screen bg-[#141414] relative flex flex-col">
            <div className="w-screen h-[120px] flex flex-row justify-between px-[80px] items-center mb-[50px]">
              <div className="text-[40px]">
                <p>{field.fieldname}</p>
              </div>
              <div>
                <div className="arrow flex flex-row w-[116px] h-[42px] gap-[2px]">
                  <div className="w-[58px] h-[42px] bg-[#F5F5F5] text-black rounded-l-[20px] flex items-center justify-center">
                    <div className="arrwLeft">
                      <Arrow />
                    </div>
                  </div>
                  <div className="w-[58px] h-[42px] bg-[#F5F5F5] text-black rounded-r-[20px] flex items-center justify-center">
                    <div className="arrwLeft transform rotate-180">
                      <Arrow />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="description px-[80px] mb-[30px]">
                <div className="text-[24px] text-[#BEE702] underline">
                  <p>Description</p>
                </div>
                <div className="text-[20px] text-[#F5F5F5]">
                  <p>{field.description}</p>
                </div>
              </div>
              <div className="location pl-[80px] mb-[30px]">
                <div className="text-[24px] text-[#BEE702] underline">
                  <p>Detail Location</p>
                </div>
                <div className="text-[20px] text-[#F5F5F5]">
                  <p>{field.location}</p>
                </div>
              </div>
              <div className="price pl-[80px] mb-[30px]">
                <div className="text-[24px] text-[#BEE702] underline">
                  <p>Price List</p>
                </div>
                <div className="text-[20px] text-[#F5F5F5]">
                  <p>{field.priceperhour} /Hour</p>
                </div>
              </div>
              <div className="contact pl-[80px] mb-[30px]">
                <div className="text-[24px] text-[#BEE702] underline">
                  <p>Contact Person</p>
                </div>
                <div className="text-[20px] text-[#F5F5F5]">
                  <p>Thomas : 08123456</p>
                </div>
              </div>
            </div>

            <div className="h-[200px] flex items-center justify-center">
              <div className="bookBtn">
                <BookBttn href="/booking" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetailSewa;
