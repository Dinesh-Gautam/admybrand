import React from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import CustomerRow from "./CustomerRow";
import { customersData } from "./CustomersData";
import { useSorting } from "@/hooks/useSorting";

function CustomersTableCard() {
  const { sortedData, requestSort, getSortDirection } =
    useSorting(customersData);

  const handleSort = (key: any) => {
    requestSort(key);
  };
  return (
    <div className="col-span-full xl:col-span-6 shadow-xs rounded-xl glassmorphism">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">
          Customers
        </h2>
      </header>
      <div className="p-3">
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead className="text-xs font-semibold uppercase header">
              <tr>
                <th
                  className="p-2 whitespace-nowrap cursor-pointer"
                  onClick={() => handleSort("name")}
                >
                  <div className="font-semibold text-left flex items-center">
                    Name
                    <span className="ml-2">
                      {getSortDirection("name") === "asc" ? (
                        <ArrowUp size={16} />
                      ) : (
                        <ArrowDown size={16} />
                      )}
                    </span>
                  </div>
                </th>
                <th
                  className="p-2 whitespace-nowrap cursor-pointer"
                  onClick={() => handleSort("email")}
                >
                  <div className="font-semibold text-left flex items-center">
                    Email
                    <span className="ml-2">
                      {getSortDirection("email") === "asc" ? (
                        <ArrowUp size={16} />
                      ) : (
                        <ArrowDown size={16} />
                      )}
                    </span>
                  </div>
                </th>
                <th
                  className="p-2 whitespace-nowrap cursor-pointer"
                  onClick={() => handleSort("spent")}
                >
                  <div className="font-semibold text-left flex items-center">
                    Spent
                    <span className="ml-2">
                      {getSortDirection("spent") === "asc" ? (
                        <ArrowUp size={16} />
                      ) : (
                        <ArrowDown size={16} />
                      )}
                    </span>
                  </div>
                </th>
                <th
                  className="p-2 whitespace-nowrap cursor-pointer"
                  onClick={() => handleSort("location")}
                >
                  <div className="font-semibold text-center flex items-center">
                    Country
                    <span className="ml-2">
                      {getSortDirection("location") === "asc" ? (
                        <ArrowUp size={16} />
                      ) : (
                        <ArrowDown size={16} />
                      )}
                    </span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-100 dark:divide-gray-700/60">
              {sortedData.map((customer) => (
                <CustomerRow
                  key={customer.id}
                  image={customer.image}
                  name={customer.name}
                  email={customer.email}
                  location={customer.location}
                  spent={customer.spent}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CustomersTableCard;
