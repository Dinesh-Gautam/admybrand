import React from "react";

interface AiAnomalyTooltipProps {
  message: string;
}

const AiAnomalyTooltip = ({ message }: AiAnomalyTooltipProps) => {
  return (
    <div className="absolute z-10 p-2 text-xs text-white bg-gray-900 rounded-md shadow-lg">
      {message}
    </div>
  );
};

export default AiAnomalyTooltip;
