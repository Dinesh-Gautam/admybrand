"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";
import AiIcon from "@/components/icons/AiIcon";
import {
  ArrowUp,
  MessageCircle,
  TrendingDown,
  TrendingUp,
  Server,
  LucideIcon,
  X,
} from "lucide-react";
import { useState } from "react";

interface Item {
  id: number;
  name: string;
  description: string;
  time: string;
  icon: LucideIcon;
  color?: string;
}

const notifications: Item[] = [
  {
    id: 1,
    name: "Conversions jumped by 12% in India",
    description: "Campaign B is outperforming A.",
    time: "15m ago",
    icon: TrendingUp,
    color: "#00C9A7",
  },
  {
    id: 2,
    name: "Sales dipped unusually low on mobile",
    description: "Last week's mobile sales were 30% lower than average.",
    time: "10m ago",
    icon: TrendingDown,
    color: "#FFB800",
  },
  {
    id: 3,
    name: "New message from a high-value customer",
    description: "John Doe just sent you a message.",
    time: "5m ago",
    icon: MessageCircle,
    color: "#FF3D71",
  },
  {
    id: 4,
    name: "Server usage is reaching its limit",
    description: "CPU usage is at 90%.",
    time: "2m ago",
    icon: Server,
    color: "#1E86FF",
  },
  // AI-like suggestions
  {
    id: 5,
    name: "AI recommends increasing ad budget",
    description: "Boost your budget by 15% to maximize reach this week.",
    time: "Just now",
    icon: ArrowUp,
    color: "#6C63FF",
  },
  {
    id: 6,
    name: "AI detected trending keywords",
    description:
      "Consider adding 'Eco-friendly' to your campaign for higher engagement.",
    time: "1m ago",
    icon: TrendingUp,
    color: "#00C9A7",
  },
  {
    id: 7,
    name: "AI suggests new audience segment",
    description: "Target users aged 25-34 for better conversion rates.",
    time: "3m ago",
    icon: MessageCircle,
    color: "#FF3D71",
  },
  {
    id: 8,
    name: "AI flagged unusual traffic spike",
    description: "Website visits increased by 40% in the last hour.",
    time: "7m ago",
    icon: ArrowUp,
    color: "#6C63FF",
  },
  {
    id: 9,
    name: "AI recommends creative refresh",
    description:
      "Your ad creatives are showing signs of fatigue. Try updating images.",
    time: "12m ago",
    icon: Server,
    color: "#1E86FF",
  },
];

const Notification = ({
  name,
  description,
  time,
  icon: Icon,
  color,
  onClose,
}: Item & { onClose: () => void }) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full cursor-pointer  rounded-2xl p-4",
        // light styles
        "bg-white/70 ",
        // dark styles
        "transform-gpu dark:bg-black/10 dark:[border:1px_solid_rgba(255,255,255,.05)] "
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-full"
          style={{
            color: color,
          }}
        >
          <Icon className="size-5 text-inherit" />
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-xs font-normal dark:text-white/60 max-w-[98%]">
            {description}
          </p>
        </div>
      </div>
      <button
        onClick={onClose}
        className="absolute top-2 right-2 p-1 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 transition-colors"
      >
        <X className="h-4 w-4" />
      </button>
      <div className="absolute right-2 bottom-2">
        <AiIcon className="h-5 w-5 mt-0.5" />
      </div>
    </figure>
  );
};

export function SmartAlertsFeed({
  className,
  onClose,
}: {
  className?: string;
  onClose?: () => void;
}) {
  const [notificationsState, setNotificationsState] =
    useState<Item[]>(notifications);

  const handleRemoveNotification = (index: number) => {
    setNotificationsState((prevState) =>
      prevState.filter((_, i) => i !== index)
    );
  };

  return (
    <div
      className={cn(
        "relative flex h-full w-full flex-col overflow-hidden p-4 px-6 ",
        className
      )}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Smart Alerts</h2>
        {onClose && (
          <button
            onClick={onClose}
            className="p-1 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>
      <AnimatedList
        delay={Math.round(Math.random() * 5000 + 100)}
        className="flex flex-col gap-2"
      >
        {notificationsState && notificationsState.length > 0 ? (
          notificationsState.map((item, idx) => (
            <Notification
              {...item}
              key={item.id}
              onClose={() => handleRemoveNotification(idx)}
            />
          ))
        ) : (
          <div className="text-gray-500 dark:text-gray-300 text-sm text-center">
            No notifications available.
          </div>
        )}
      </AnimatedList>
    </div>
  );
}
