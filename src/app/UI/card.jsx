import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card = ({ href, image, title, description, description2, onClick, isSelected }) => {
  return (
    <Link href={href}>
      <div
        onClick={onClick}
        // className={`flex flex-col items-center bg-white shadow-md rounded-lg overflow-hidden cursor-pointer border-4 ${
        //   isSelected ? "border-blue-500" : "border-transparent"
        // }`}
        className="py-[10px] h-full W-full flex flex-col items-center bg-white shadow-md rounded-lg overflow-hidden cursor-pointer border-4 border-transparent hover:border-[#BEE702] transition duration-300 ease-in-out"
      >
        <div className="w-[90%] h-[80%] rounded-lg border border-[#141414]">
          <Image
            src={image}
            alt={title}
            width={300}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full px-[25px] pt-[10px] flex flex-col gap-[2px]">
          <div>
            <p className="text-xl font-bold text-[#BEE702]">{title}</p>
          </div>
          <div>
            <p className="text-[#141414]">{description}</p>
            <p className="text-[#141414]">{description2}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
