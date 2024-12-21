import { BarChart3, Shield, AlertTriangle, Activity } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockThreatData = [
  { name: 'Jan', threats: 65 },
  { name: 'Feb', threats: 59 },
  { name: 'Mar', threats: 80 },
  { name: 'Apr', threats: 81 },
  { name: 'May', threats: 56 },
  { name: 'Jun', threats: 55 },
];

const stats = [
  {
    title: "Active Threats",
    value: "247",
    change: "+12%",
    icon: Shield,
    color: "text-cyber-blue"
  },
  {
    title: "Critical Vulnerabilities",
    value: "89",
    change: "-5%",
    icon: AlertTriangle,
    color: "text-cyber-green"
  },
  {
    title: "System Health",
    value: "94%",
    change: "+2%",
    icon: Activity,
    color: "text-purple-500"
  }
];

export const RiskOverviewPanel = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="glass-card p-6 hover:bg-white/90 dark:hover:bg-black/50 transition-colors">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-medium">{stat.title}</p>
                <h3 className="text-2xl font-bold mt-2">{stat.value}</h3>
                <p className={cn(
                  "text-sm mt-1 font-medium",
                  stat.change.startsWith("+") ? "text-emerald-600 dark:text-cyber-green" : "text-red-600 dark:text-red-500"
                )}>
                  {stat.change} from last week
                </p>
              </div>
              <stat.icon className={cn("h-6 w-6", stat.color)} />
            </div>
          </Card>
        ))}
      </div>

      <Card className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Threat Trend Analysis</h3>
          <select className="bg-background border rounded-md px-2 py-1 text-sm">
            <option>Last 6 months</option>
            <option>Last year</option>
            <option>All time</option>
          </select>
        </div>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockThreatData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="name" className="text-xs" />
              <YAxis className="text-xs" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--background))',
                  border: '1px solid hsl(var(--border))'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="threats" 
                stroke="hsl(var(--primary))" 
                strokeWidth={2}
                dot={{ fill: 'hsl(var(--primary))' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
};