import React from "react";
import RecentActivity from "./RecentActivity";
import { FadeIn } from "@/components/magicui/FadeIn";

function RecentActivityCard() {
  return (
    <FadeIn className="col-span-full xl:col-span-6 shadow-xs rounded-xl glassmorphism">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">
          Recent Activity
        </h2>
      </header>
      <RecentActivity />
    </FadeIn>
  );
}

export default RecentActivityCard;
