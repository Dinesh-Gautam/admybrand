import {
  DashboardIcon,
  ECommerceIcon,
  CommunityIcon,
  FinanceIcon,
  JobBoardIcon,
  TasksIcon,
  MessagesIcon,
  InboxIcon,
  CalendarIcon,
  CampaignsIcon,
  SettingsIcon,
  UtilityIcon,
} from "@/components/icons";
import { PATHS } from "./paths";

export const MENU_ITEMS = [
  {
    label: "Dashboard",
    path: PATHS.DASHBOARD,
    icon: DashboardIcon,
  },
  {
    label: "Messages",
    path: "/messages",
    icon: MessagesIcon,
    badge: 4,
  },
  {
    label: "Inbox",
    path: "/inbox",
    icon: InboxIcon,
  },
  {
    label: "Calendar",
    path: "/calendar",
    icon: CalendarIcon,
  },
  {
    label: "Campaigns",
    path: "/campaigns",
    icon: CampaignsIcon,
  },
  {
    label: "Settings",
    path: "/settings",
    icon: SettingsIcon,
    submenu: [
      { label: "My Account", path: "/settings/my-account" },
      { label: "My Notifications", path: "/settings/my-notifications" },
      { label: "Connected Apps", path: "/settings/connected-apps" },
      { label: "Plans", path: "/settings/plans" },
      { label: "Billing & Invoices", path: "/settings/billing-invoices" },
      { label: "Give Feedback", path: "/settings/give-feedback" },
    ],
  },
  {
    label: "Utility",
    path: "/utility",
    icon: UtilityIcon,
    submenu: [
      { label: "Changelog", path: "/utility/changelog" },
      { label: "Roadmap", path: "/utility/roadmap" },
      { label: "FAQs", path: "/utility/faqs" },
      { label: "Empty State", path: "/utility/empty-state" },
      { label: "404", path: "/utility/404" },
    ],
  },
];
