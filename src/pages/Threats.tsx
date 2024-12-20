import { Card } from "@/components/ui/card";
import { Shield, AlertTriangle, Bug, Skull } from "lucide-react";

const threatData = [
  {
    type: "Malware Detected",
    severity: "High",
    location: "US-West",
    timestamp: "2024-02-20 14:30",
    icon: Bug,
    color: "text-red-500"
  },
  {
    type: "Suspicious Login",
    severity: "Medium",
    location: "EU-Central",
    timestamp: "2024-02-20 13:15",
    icon: AlertTriangle,
    color: "text-yellow-500"
  },
  {
    type: "DDoS Attempt",
    severity: "Critical",
    location: "Asia-East",
    timestamp: "2024-02-20 12:45",
    icon: Skull,
    color: "text-red-600"
  },
  {
    type: "Policy Violation",
    severity: "Low",
    location: "US-East",
    timestamp: "2024-02-20 11:30",
    icon: Shield,
    color: "text-orange-500"
  }
];

const Threats = () => {
  return (
    <div className="min-h-screen bg-cyber-dark">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Active Threats</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {threatData.map((threat, index) => (
            <Card key={index} className="glass-card p-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <threat.icon className={`h-5 w-5 ${threat.color}`} />
                    <h3 className="font-semibold">{threat.type}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">Location: {threat.location}</p>
                  <p className="text-sm text-muted-foreground">Detected: {threat.timestamp}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  threat.severity === 'Critical' ? 'bg-red-500/20 text-red-500' :
                  threat.severity === 'High' ? 'bg-orange-500/20 text-orange-500' :
                  threat.severity === 'Medium' ? 'bg-yellow-500/20 text-yellow-500' :
                  'bg-blue-500/20 text-blue-500'
                }`}>
                  {threat.severity}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Threats;