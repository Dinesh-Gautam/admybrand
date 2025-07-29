import React from "react";
import {
  ArrowRightIcon,
  MessagesIcon,
  TrashIcon,
  UsersIcon,
} from "@/components/icons";

export enum ActivityType {
  Mention,
  Remove,
  Publish,
  Subscribe,
  Suspend,
}

export interface Activity {
  id: string;
  type: ActivityType;
  user: string;
  post: string;
  time: string;
}

const ICONS_MAP = {
  [ActivityType.Mention]: MessagesIcon,
  [ActivityType.Remove]: TrashIcon,
  [ActivityType.Publish]: ArrowRightIcon,
  [ActivityType.Subscribe]: UsersIcon,
  [ActivityType.Suspend]: TrashIcon,
};

const BG_COLOR_MAP = {
  [ActivityType.Mention]: "bg-violet-500",
  [ActivityType.Remove]: "bg-red-500",
  [ActivityType.Publish]: "bg-green-500",
  [ActivityType.Subscribe]: "bg-sky-500",
  [ActivityType.Suspend]: "bg-violet-500",
};

export default function ActivityItem({ activity }: { activity: Activity }) {
  const { type, user, post } = activity;
  const Icon = ICONS_MAP[type];
  const bgColor = BG_COLOR_MAP[type];

  return (
    <li className="flex px-2">
      <div className={`w-9 h-9 rounded-full shrink-0 my-2 mr-3 ${bgColor}`}>
        <Icon className="w-9 h-9 fill-current text-white" />
      </div>
      <div className="grow flex items-center border-b border-gray-100 dark:border-gray-700/60 text-sm py-2">
        <div className="grow flex justify-between">
          <div className="self-center">
            <a
              className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white"
              href="#0"
            >
              {user}
            </a>{" "}
            mentioned{" "}
            <a
              className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white"
              href="#0"
            >
              {post}
            </a>{" "}
            in a new post
          </div>
          <div className="shrink-0 self-end ml-2">
            <a
              className="font-medium text-violet-500 hover:text-violet-600 dark:hover:text-violet-400"
              href="#0"
            >
              View<span className="hidden sm:inline"> {"->"}</span>
            </a>
          </div>
        </div>
      </div>
    </li>
  );
}
