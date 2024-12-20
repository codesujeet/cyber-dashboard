import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, BarChart2, PieChart, TrendingUp } from "lucide-react";

const RiskManager = () => {
  return (
    <div className="min-h-screen bg-cyber-dark p-6">
      <h1 className="text-3xl font-bold mb-6 text-cyber-blue">Risk Manager</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-black/40 border-cyber-blue/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="text-cyber-blue" />
              Risk Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Overall Risk Score</span>
                <span className="text-orange-500">7.5/10</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Active Risks</span>
                <span className="text-red-500">24</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Mitigated Risks</span>
                <span className="text-green-500">45</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/40 border-cyber-blue/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart2 className="text-cyber-green" />
              Risk Categories
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Operational</span>
                <span className="text-red-500">High</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Financial</span>
                <span className="text-yellow-500">Medium</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Compliance</span>
                <span className="text-orange-500">High</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Strategic</span>
                <span className="text-yellow-500">Medium</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/40 border-cyber-blue/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="text-cyber-blue" />
              Risk Trends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>This Month</span>
                <span className="text-red-500">↑ 12%</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Last Month</span>
                <span className="text-green-500">↓ 8%</span>
              </div>
              <div className="flex items-center justify-between">
                <span>This Quarter</span>
                <span className="text-yellow-500">↑ 3%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RiskManager;