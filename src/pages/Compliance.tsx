import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  ShieldCheck, 
  FileCheck, 
  AlertCircle, 
  Clock,
  CheckCircle2,
  XCircle
} from "lucide-react";

const complianceData = {
  overallScore: 94,
  frameworks: [
    {
      name: "ISO 27001",
      progress: 96,
      status: "Compliant",
      lastAudit: "2024-01-15",
      nextAudit: "2024-07-15",
      controls: 114,
      compliantControls: 109,
    },
    {
      name: "GDPR",
      progress: 92,
      status: "Compliant",
      lastAudit: "2024-02-01",
      nextAudit: "2024-08-01",
      controls: 87,
      compliantControls: 80,
    },
    {
      name: "SOC 2",
      progress: 88,
      status: "In Progress",
      lastAudit: "2024-01-30",
      nextAudit: "2024-07-30",
      controls: 64,
      compliantControls: 56,
    }
  ],
  recentFindings: [
    {
      title: "Access Control Policy Update Required",
      severity: "Medium",
      framework: "ISO 27001",
      dueDate: "2024-03-15",
    },
    {
      title: "Data Retention Documentation Missing",
      severity: "High",
      framework: "GDPR",
      dueDate: "2024-03-01",
    },
    {
      title: "Incident Response Plan Review",
      severity: "Low",
      framework: "SOC 2",
      dueDate: "2024-03-30",
    }
  ]
};

const Compliance = () => {
  return (
    <div className="min-h-screen bg-cyber-dark">
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Compliance Dashboard</h1>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-6 w-6 text-cyber-green" />
            <span className="text-xl font-bold">{complianceData.overallScore}%</span>
            <span className="text-sm text-muted-foreground">Overall Score</span>
          </div>
        </div>

        {/* Compliance Frameworks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {complianceData.frameworks.map((framework, index) => (
            <Card key={index} className="glass-card p-4">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold">{framework.name}</h3>
                    <span className={`inline-flex items-center gap-1 text-sm ${
                      framework.status === 'Compliant' ? 'text-cyber-green' : 'text-yellow-500'
                    }`}>
                      {framework.status === 'Compliant' ? 
                        <CheckCircle2 className="h-4 w-4" /> : 
                        <Clock className="h-4 w-4" />
                      }
                      {framework.status}
                    </span>
                  </div>
                  <span className="text-xl font-bold">{framework.progress}%</span>
                </div>
                
                <Progress value={framework.progress} className="h-2" />
                
                <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <div>
                    <p>Controls: {framework.controls}</p>
                    <p>Compliant: {framework.compliantControls}</p>
                  </div>
                  <div>
                    <p>Last Audit: {framework.lastAudit}</p>
                    <p>Next Audit: {framework.nextAudit}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Recent Findings */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Recent Findings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {complianceData.recentFindings.map((finding, index) => (
              <Card key={index} className="glass-card p-4">
                <div className="space-y-2">
                  <div className="flex items-start justify-between">
                    <h3 className="font-medium">{finding.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      finding.severity === 'High' ? 'bg-red-500/20 text-red-500' :
                      finding.severity === 'Medium' ? 'bg-yellow-500/20 text-yellow-500' :
                      'bg-blue-500/20 text-blue-500'
                    }`}>
                      {finding.severity}
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p>Framework: {finding.framework}</p>
                    <p>Due Date: {finding.dueDate}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compliance;