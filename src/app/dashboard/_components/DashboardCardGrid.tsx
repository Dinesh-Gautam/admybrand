import PlusSalesCard from "@/components/dashboard/AcmePlusSalesCard";
import AdvancedSalesCard from "@/components/dashboard/AcmeAdvancedSalesCard";
import ProfessionalSalesCard from "@/components/dashboard/AcmeProfessionalSalesCard";
import DirectVsIndirectCard from "@/components/dashboard/DirectVsIndirectCard";
import RealtimeValueCard from "@/components/dashboard/RealtimeValueCard";
import TopCountriesCard from "@/components/dashboard/TopCountriesCard";
import TopChannelsCard from "@/components/dashboard/TopChannelsCard";
import SalesOverTimeCard from "@/components/dashboard/SalesOverTimeCard";
import SalesVsRefundsCard from "@/components/dashboard/SalesVsRefundsCard";
import CustomersTableCard from "@/components/dashboard/CustomersTableCard";
import RefundReasonsCard from "@/components/dashboard/RefundReasonsCard";
import RecentActivityCard from "@/components/dashboard/RecentActivityCard";
import IncomeExpensesCard from "@/components/dashboard/IncomeExpensesCard";
import AiInsightSummaryCard from "@/components/dashboard/AiInsightSummaryCard";
import React from "react";

const DashboardCardGrid = () => {
  return (
    <div className="grid grid-cols-12 gap-6">
      <AiInsightSummaryCard />
      {/* Sales Performance */}
      <PlusSalesCard />
      <AdvancedSalesCard />
      <ProfessionalSalesCard />

      {/* Real-time Data */}
      <RealtimeValueCard />

      {/* Sales Analysis */}
      <SalesOverTimeCard />
      <SalesVsRefundsCard />
      <DirectVsIndirectCard />

      {/* Acquisition */}
      <TopChannelsCard />
      <TopCountriesCard />

      {/* Customer Activity */}
      <CustomersTableCard />
      <RecentActivityCard />

      {/* Financials */}
      <IncomeExpensesCard />
      <RefundReasonsCard />
    </div>
  );
};

export default DashboardCardGrid;
