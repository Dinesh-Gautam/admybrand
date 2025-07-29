import React, { ReactNode } from "react";

interface ChannelRowProps {
  icon: ReactNode;
  source: string;
  visitors: string;
  revenues: string;
  sales: string;
  conversion: string;
}

const ChannelRow = ({
  icon,
  source,
  visitors,
  revenues,
  sales,
  conversion,
}: ChannelRowProps) => {
  return (
    <tr>
      <td className="p-2">
        <div className="flex items-center">
          {icon}
          <div className="text-gray-800 dark:text-gray-100">{source}</div>
        </div>
      </td>
      <td className="p-2">
        <div className="text-center">{visitors}</div>
      </td>
      <td className="p-2">
        <div className="text-center text-green-500">{revenues}</div>
      </td>
      <td className="p-2">
        <div className="text-center">{sales}</div>
      </td>
      <td className="p-2">
        <div className="text-center text-sky-500">{conversion}</div>
      </td>
    </tr>
  );
};

export default ChannelRow;
