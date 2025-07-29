import React from "react";
import { ArrowDown, ArrowUp, ChevronLeft, ChevronRight } from "lucide-react";
import ChannelRow from "./ChannelRow";
import { topChannelsData } from "./TopChannelsData";
import { useSorting } from "@/hooks/useSorting";
import { usePagination } from "@/hooks/usePagination";
import { motion, AnimatePresence } from "motion/react";
import { FadeIn } from "@/components/magicui/FadeIn";

function TopChannelsCard() {
  const { sortedData, requestSort, getSortDirection } =
    useSorting(topChannelsData);
  const {
    paginatedData,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    goToPage,
  } = usePagination(sortedData, 6);

  const handleSort = (key: any) => {
    requestSort(key);
  };

  return (
    <FadeIn className="col-span-full xl:col-span-8 shadow-xs rounded-xl glassmorphism">
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
            <motion.tbody
              layout
              className="text-sm font-medium divide-y divide-gray-100 dark:divide-gray-700/60"
            >
              <AnimatePresence>
                {paginatedData.map((channel, index) => (
                  <ChannelRow
                    key={channel.source}
                    icon={channel.icon}
                    source={channel.source}
                    visitors={channel.visitors}
                    revenues={channel.revenues}
                    sales={channel.sales}
                    conversion={channel.conversion}
                  />
                ))}
              </AnimatePresence>
            </motion.tbody>
          </table>
        </div>
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 rounded-md disabled:opacity-50"
          >
            <ChevronLeft size={"1rem"} />
          </button>
          <span className="text-xs font-semibold">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 rounded-md disabled:opacity-50"
          >
            <ChevronRight size={"1rem"} />
          </button>
        </div>
      </div>
    </FadeIn>
  );
}

export default TopChannelsCard;
