import { LucideIcon } from 'lucide-react';
import { StaticImageData } from 'next/image';

export interface FilterState {
  [key: string]: boolean;
}

export interface User {
  name: string;
  email: string;
  image: string;
  avatar: StaticImageData;
  role: string;
}

export interface Notification {
  id: string;
  message: string;
  time: string;
  read: boolean;
  link: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  date: string;
}

export interface MenuItem {
  label: string;
  path: string;
  icon: React.FC<{ className?: string }>;
  badge?: string | number;
  submenu?: Omit<MenuItem, 'submenu' | 'icon'>[];
}
