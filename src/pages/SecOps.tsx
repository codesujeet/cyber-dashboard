import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Activity, AlertTriangle, Server } from "lucide-react";

const SecOps = () => {
  return (
    <div className="min-h-screen bg-cyber-dark p-6">
      <h1 className="text-3xl font-bold mb-6 text-cyber-blue">Security Operations Center</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-black/40 border-cyber-blue/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="text-cyber-blue" />
              Active Incidents
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Critical Alerts</span>
                <span className="text-red-500">3</span>
              </div>
              <div className="flex items-center justify-between">
                <span>High Priority</span>
                <span className="text-orange-500">7</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Medium Priority</span>
                <span className="text-yellow-500">12</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/40 border-cyber-blue/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="text-cyber-green" />
              System Health
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Firewall Status</span>
                <span className="text-cyber-green">Active</span>
              </div>
              <div className="flex items-center justify-between">
                <span>IDS/IPS</span>
                <span className="text-cyber-green">Operational</span>
              </div>
              <div className="flex items-center justify-between">
                <span>SIEM Status</span>
                <span className="text-cyber-green">Running</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/40 border-cyber-blue/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Server className="text-cyber-blue" />
              Infrastructure Monitoring
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Servers Online</span>
                <span className="text-cyber-green">45/45</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Network Load</span>
                <span className="text-yellow-500">78%</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Storage Usage</span>
                <span className="text-orange-500">82%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SecOps;