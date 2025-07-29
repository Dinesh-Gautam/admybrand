import React from "react";
import { StaticImageData } from "next/image";

interface CustomerRowProps {
  image: StaticImageData;
  name: string;
  email: string;
  location: string;
  spent: string;
}

const CustomerRow = ({
  image,
  name,
  email,
  location,
  spent,
}: CustomerRowProps) => {
  return (
    <tr>
      <td className="p-2 whitespace-nowrap">
        <div className="flex items-center">
          <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
            <img
              className="rounded-full"
              src={image.src}
              width="40"
              height="40"
              alt={name}
            />
          </div>
          <div className="font-medium text-gray-800 dark:text-gray-100">
            {name}
          </div>
        </div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-left">{email}</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-left font-medium text-green-500">{spent}</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-lg text-center">{location}</div>
      </td>
    </tr>
  );
};

export default CustomerRow;
