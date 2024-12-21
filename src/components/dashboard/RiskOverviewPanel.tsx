import { BarChart3, Shield, AlertTriangle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const stats = [
  {
    title: "Total Threats",
    value: "247",
    change: "+12%",
    icon: Shield,
    color: "text-cyber-blue"
  },
  {
    title: "Vulnerabilities",
    value: "89",
    change: "-5%",
    icon: AlertTriangle,
    color: "text-cyber-green"
  },
  {
    title: "Compliance Score",
    value: "94%",
    change: "+2%",
    icon: BarChart3,
    color: "text-purple-500"
  }
];

export const RiskOverviewPanel = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="glass-card p-6 dark:bg-black/40 bg-white/40">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
                <h3 className="text-2xl font-bold mt-2">{stat.value}</h3>
                <p className={cn(
                  "text-sm mt-1",
                  stat.change.startsWith("+") ? "text-cyber-green" : "text-red-500"
                )}>
                  {stat.change} from last week
                </p>
              </div>
              <stat.icon className={cn("h-6 w-6", stat.color)} />
            </div>
          </Card>
        ))}
      </div>

      <Card className="glass-card p-6 dark:bg-black/40 bg-white/40">
        <h3 className="text-lg font-semibold mb-4">Threat Distribution</h3>
        <div className="h-[300px] flex items-center justify-center text-muted-foreground">
          Threat map visualization will go here
        </div>
      </Card>
    </div>
  );
};