import { PATHS } from "@/constants/paths";
import { redirect } from "next/navigation";

export default function Home() {
  return redirect(PATHS.DASHBOARD);
}
