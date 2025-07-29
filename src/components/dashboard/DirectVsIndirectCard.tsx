import BarChart from "@/components/charts/BarChart01";
import { FadeIn } from "@/components/magicui/FadeIn";
import { directVsIndirectChartData } from "@/constants/dashboard";

function DirectVsIndirectCard() {
  return (
    <FadeIn className="flex flex-col col-span-full sm:col-span-6 shadow-xs rounded-xl glassmorphism">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">
          Direct VS Indirect
        </h2>
      </header>
      <BarChart
        data={directVsIndirectChartData as any}
        width={595}
        height={248}
      />
    </FadeIn>
  );
}

export default DirectVsIndirectCard;
