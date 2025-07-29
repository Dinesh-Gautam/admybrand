import React from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import ChannelRow from "./ChannelRow";
import { topChannelsData } from "./TopChannelsData";
import { useSorting } from "@/hooks/useSorting";

function TopChannelsCard() {
  const { sortedData, requestSort, getSortDirection } =
    useSorting(topChannelsData);

  const handleSort = (key: any) => {
    requestSort(key);
  };

  return (
    <div className="col-span-full xl:col-span-8 shadow-xs rounded-xl glassmorphism">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">
          Top Channels
        </h2>
      </header>
      <div className="p-3">
        <div className="overflow-x-auto">
          <table className="table-auto w-full dark:text-gray-300">
            <thead className="text-xs uppercase header">
              <tr>
                <th
                  className="p-2 cursor-pointer"
                  onClick={() => handleSort("source")}
                >
                  <div className="font-semibold text-left flex items-center">
                    Source
                    <span className="ml-2">
                      {getSortDirection("source") === "asc" ? (
                        <ArrowUp size={16} />
                      ) : (
                        <ArrowDown size={16} />
                      )}
                    </span>
                  </div>
                </th>
                <th
                  className="p-2 cursor-pointer"
                  onClick={() => handleSort("visitors")}
                >
                  <div className="font-semibold text-center flex items-center">
                    Visitors
                    <span className="ml-2">
                      {getSortDirection("visitors") === "asc" ? (
                        <ArrowUp size={16} />
                      ) : (
                        <ArrowDown size={16} />
                      )}
                    </span>
                  </div>
                </th>
                <th
                  className="p-2 cursor-pointer"
                  onClick={() => handleSort("revenues")}
                >
                  <div className="font-semibold text-center flex items-center">
                    Revenues
                    <span className="ml-2">
                      {getSortDirection("revenues") === "asc" ? (
                        <ArrowUp size={16} />
                      ) : (
                        <ArrowDown size={16} />
                      )}
                    </span>
                  </div>
                </th>
                <th
                  className="p-2 cursor-pointer"
                  onClick={() => handleSort("sales")}
                >
                  <div className="font-semibold text-center flex items-center">
                    Sales
                    <span className="ml-2">
                      {getSortDirection("sales") === "asc" ? (
                        <ArrowUp size={16} />
                      ) : (
                        <ArrowDown size={16} />
                      )}
                    </span>
                  </div>
                </th>
                <th
                  className="p-2 cursor-pointer"
                  onClick={() => handleSort("conversion")}
                >
                  <div className="font-semibold text-center flex items-center">
                    Conversion
                    <span className="ml-2">
                      {getSortDirection("conversion") === "asc" ? (
                        <ArrowUp size={16} />
                      ) : (
                        <ArrowDown size={16} />
                      )}
                    </span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="text-sm font-medium divide-y divide-gray-100 dark:divide-gray-700/60">
              {sortedData.map((channel, index) => (
                <ChannelRow
                  key={index}
                  icon={channel.icon}
                  source={channel.source}
                  visitors={channel.visitors}
                  revenues={channel.revenues}
                  sales={channel.sales}
                  conversion={channel.conversion}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TopChannelsCard;
