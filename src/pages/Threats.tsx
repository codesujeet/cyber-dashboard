import { useState } from "react";
import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { DashboardSidebar } from "@/components/layout/DashboardSidebar";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Shield, AlertTriangle, Search, Filter } from "lucide-react";

const mockThreats = [
  {
    id: 1,
    name: "Suspicious Login Attempt",
    severity: "high",
    source: "192.168.1.100",
    status: "active",
    timestamp: "2024-02-20T10:30:00",
    description: "Multiple failed login attempts detected from unknown IP"
  },
  {
    id: 2,
    name: "Malware Detection",
    severity: "critical",
    source: "Endpoint-A23",
    status: "investigating",
    timestamp: "2024-02-20T09:15:00",
    description: "Potential ransomware activity detected on endpoint"
  },
  {
    id: 3,
    name: "Unusual Network Traffic",
    severity: "medium",
    source: "Network Scanner",
    status: "resolved",
    timestamp: "2024-02-20T08:45:00",
    description: "Abnormal outbound traffic pattern detected"
  }
];

const Threats = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300";
      case "high":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300";
      case "medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300";
      default:
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-2">Threat Monitoring</h1>
            <p className="text-muted-foreground">
              Monitor and manage active security threats across your infrastructure
            </p>
          </div>

          <div className="flex gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search threats..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>

          <div className="space-y-4">
            {mockThreats.map((threat) => (
              <Card key={threat.id} className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={cn(
                        "px-2 py-1 rounded-md text-xs font-medium",
                        getSeverityColor(threat.severity)
                      )}>
                        {threat.severity.toUpperCase()}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {new Date(threat.timestamp).toLocaleString()}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-1">{threat.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {threat.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <span>Source: {threat.source}</span>
                      <span>Status: {threat.status}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Investigate
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Threats;