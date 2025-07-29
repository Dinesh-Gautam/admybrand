import React from "react";
import AiIcon from "../icons/AiIcon";

interface AiPersonaBadgeProps {
  persona: string;
}

const AiPersonaBadge: React.FC<AiPersonaBadgeProps> = ({ persona }) => {
  const getPersonaStyles = (persona: string) => {
    switch (persona) {
      case "High-value":
        return "bg-green-500/10 text-green-600 border-green-500/30 shadow-md shadow-green-500/10";
      case "Likely to churn":
        return "bg-red-500/10 text-red-600 border-red-500/30 shadow-md shadow-red-500/10";
      case "Engaged but low spending":
        return "bg-yellow-500/10 text-yellow-600 border-yellow-500/30 shadow-md shadow-yellow-500/10";
      default:
        return "bg-gray-500/10 text-gray-600 border-gray-500/30 shadow-md shadow-gray-500/10";
    }
  };

  return (
    <div
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getPersonaStyles(
        persona
      )} `}
    >
      {persona}
    </div>
  );
};

export default AiPersonaBadge;
