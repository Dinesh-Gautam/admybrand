import React from "react";
import ActivityItem, { Activity } from "@/components/dashboard/ActivityItem";
import { RECENT_ACTIVITY_DATA } from "@/components/dashboard/RecentActivityData";

export default function RecentActivity() {
  const todayActivities = RECENT_ACTIVITY_DATA.slice(0, 3);
  const yesterdayActivities = RECENT_ACTIVITY_DATA.slice(3);

  return (
    <div className="p-3">
      <div>
        <header className="text-xs uppercase font-semibold p-2 header">
          Today
        </header>
        <ul className="my-1">
          {todayActivities.map((activity) => (
            <ActivityItem key={activity.id} activity={activity} />
          ))}
        </ul>
      </div>
      <div>
        <header className="text-xs uppercase font-semibold p-2 header">
          Yesterday
        </header>
        <ul className="my-1">
          {yesterdayActivities.map((activity) => (
            <ActivityItem key={activity.id} activity={activity} />
          ))}
        </ul>
      </div>
    </div>
  );
}
