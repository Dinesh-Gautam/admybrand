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
import { FilterState } from "@/components/DropdownFilter";

interface DashboardCardGridProps {
  filters: FilterState;
}

const DashboardCardGrid = ({ filters }: DashboardCardGridProps) => {
  return (
    <div className="grid grid-cols-12 gap-6">
      <AiInsightSummaryCard />
      {/* Sales Performance */}
      <PlusSalesCard />
      <AdvancedSalesCard />
      <ProfessionalSalesCard />

      {/* Real-time Data */}
      {filters.RealTimeValue && <RealtimeValueCard />}

      {/* Sales Analysis */}
      {filters.SalesOverTime && <SalesOverTimeCard />}
      {filters.SalesRefunds && <SalesVsRefundsCard />}
      {filters.DirectorIndirect && <DirectVsIndirectCard />}

      {/* Acquisition */}
      {filters.RefundReasons && <RefundReasonsCard />}
      {filters.Topcahnnels && <TopChannelsCard />}

      {/* Customer Activity */}
      {filters.Customers && <CustomersTableCard />}
      {filters.TopCountries && <TopCountriesCard />}
      {filters.RecentActivity && <RecentActivityCard />}

      {/* Financials */}
      {filters.IncomeExpenses && <IncomeExpensesCard />}
    </div>
  );
};

export default DashboardCardGrid;
