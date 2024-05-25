import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card = ({ image, title, description }) => {
  return (
    <div className="flex flex-col items-center bg-white shadow-md rounded-lg overflow-hidden">
      <Image
        src={image}
        alt={title}
        width={300}
        height={200}
        className="w-full object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Card;
