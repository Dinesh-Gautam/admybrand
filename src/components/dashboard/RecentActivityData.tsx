import { Activity, ActivityType } from "@/components/dashboard/ActivityItem";

export const RECENT_ACTIVITY_DATA: Activity[] = [
  {
    id: "1",
    type: ActivityType.Mention,
    user: "Nick Mark",
    post: "Sara Smith",
    time: "2024-07-29T10:00:00Z",
  },
  {
    id: "2",
    type: ActivityType.Remove,
    user: "Nick Mark",
    post: "Post Name",
    time: "2024-07-29T09:30:00Z",
  },
  {
    id: "3",
    type: ActivityType.Publish,
    user: "Patrick Sullivan",
    post: "post",
    time: "2024-07-29T08:00:00Z",
  },
  {
    id: "4",
    type: ActivityType.Subscribe,
    user: "240+",
    post: "Newsletter #1",
    time: "2024-07-28T14:00:00Z",
  },
  {
    id: "5",
    type: ActivityType.Suspend,
    user: "Nick Mark",
    post: "Post Name",
    time: "2024-07-28T11:00:00Z",
  },
];
