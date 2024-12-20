import { Card } from "@/components/ui/card";
import { Bug, AlertTriangle, ShieldAlert, AlertOctagon } from "lucide-react";

const vulnerabilityData = [
  {
    name: "SQL Injection Risk",
    severity: "Critical",
    system: "Authentication Service",
    lastScan: "2024-02-20 15:45",
    icon: AlertOctagon,
    color: "text-red-600",
    cve: "CVE-2024-1234"
  },
  {
    name: "Outdated SSL Certificate",
    severity: "High",
    system: "API Gateway",
    lastScan: "2024-02-20 14:20",
    icon: ShieldAlert,
    color: "text-red-500",
    cve: "CVE-2024-5678"
  },
  {
    name: "Unpatched Dependencies",
    severity: "Medium",
    system: "Frontend App",
    lastScan: "2024-02-20 13:10",
    icon: Bug,
    color: "text-yellow-500",
    cve: "CVE-2024-9012"
  },
  {
    name: "Weak Password Policy",
    severity: "Low",
    system: "User Management",
    lastScan: "2024-02-20 12:30",
    icon: AlertTriangle,
    color: "text-orange-500",
    cve: "CVE-2024-3456"
  }
];

const Vulnerabilities = () => {
  return (
    <div className="min-h-screen bg-cyber-dark">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">System Vulnerabilities</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {vulnerabilityData.map((vuln, index) => (
            <Card key={index} className="glass-card p-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <vuln.icon className={`h-5 w-5 ${vuln.color}`} />
                    <h3 className="font-semibold">{vuln.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">System: {vuln.system}</p>
                  <p className="text-sm text-muted-foreground">CVE: {vuln.cve}</p>
                  <p className="text-sm text-muted-foreground">Last Scan: {vuln.lastScan}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  vuln.severity === 'Critical' ? 'bg-red-500/20 text-red-500' :
                  vuln.severity === 'High' ? 'bg-orange-500/20 text-orange-500' :
                  vuln.severity === 'Medium' ? 'bg-yellow-500/20 text-yellow-500' :
                  'bg-blue-500/20 text-blue-500'
                }`}>
                  {vuln.severity}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vulnerabilities;