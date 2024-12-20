import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { DashboardSidebar } from "@/components/layout/DashboardSidebar";
import { RiskOverviewPanel } from "@/components/dashboard/RiskOverviewPanel";

const Index = () => {
  return (
    <div className="min-h-screen bg-cyber-dark">
      <DashboardHeader />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6">
          <RiskOverviewPanel />
        </main>
      </div>
    </div>
  );
};

export default Index;