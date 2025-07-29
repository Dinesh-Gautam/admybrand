import React from "react";
import ChannelRow from "./ChannelRow";
import { topChannelsData } from "./TopChannelsData";

function TopChannelsCard() {
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
                <th className="p-2">
                  <div className="font-semibold text-left">Source</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Visitors</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Revenues</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Sales</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Conversion</div>
                </th>
              </tr>
            </thead>
            <tbody className="text-sm font-medium divide-y divide-gray-100 dark:divide-gray-700/60">
              {topChannelsData.map((channel, index) => (
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
