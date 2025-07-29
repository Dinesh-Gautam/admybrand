import React from "react";
import CustomerRow from "./CustomerRow";
import { customersData } from "./CustomersData";

function DashboardCard10() {
  return (
    <div className="col-span-full xl:col-span-6 bg-white dark:bg-gray-800 shadow-xs rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">
          Customers
        </h2>
      </header>
      <div className="p-3">
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead className="text-xs font-semibold uppercase text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700/50">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Name</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Email</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Spent</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Country</div>
                </th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-100 dark:divide-gray-700/60">
              {customersData.map((customer) => (
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

export default DashboardCard10;
