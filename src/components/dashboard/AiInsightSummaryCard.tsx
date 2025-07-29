import AiIcon from "@/components/icons/AiIcon";
import { TextAnimate } from "@/components/magicui/text-animate";

const AiInsightSummaryCard = () => {
  return (
    <div className="col-span-full xl:col-span-12 bg-white/100 dark:bg-black/80  shadow-xs rounded-xl glassmorphism">
      <span className="glassmorphism text-xs font-semibold absolute top-0 left-0 p-1 px-2 rounded-md  -translate-y-3 translate-x-4 z-100 !border-none shadow-sm">
        AI insights
      </span>
      <div className="p-5 flex items-start">
        <div className="w-6 h-6 contain-paint isolate">
          <AiIcon />
        </div>
        <div className="ml-4">
          <TextAnimate
            animation="blurIn"
            duration={2}
            className="text-sm font-semibold text-gray-600 dark:text-gray-200 whitespace-break-spaces"
          >
            Sales grew by 13% over the past 30 days. AI detected a peak on April
            23 driven by indirect campaigns. Refunds dropped by 22%.
          </TextAnimate>
        </div>
      </div>
    </div>
  );
};

export default AiInsightSummaryCard;
