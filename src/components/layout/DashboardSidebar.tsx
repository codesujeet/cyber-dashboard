import { useState } from "react";
import { 
  Shield, 
  Lock, 
  UserCheck, 
  AlertTriangle,
  ChevronLeft,
  BarChart3,
  Shield as ShieldIcon,
  Database,
  UserCog
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const menuItems = [
  {
    title: "Risk Overview",
    icon: BarChart3,
    items: ["Threats", "Vulnerabilities", "Compliance", "Assets"]
  },
  {
    title: "Detections & Controls",
    icon: ShieldIcon,
    items: ["SecOps", "Security Scanner", "Risk Manager"]
  },
  {
    title: "Data Protection",
    icon: Database,
    items: ["DLP", "Key Management", "Certificates"]
  },
  {
    title: "Zero Trust",
    icon: UserCog,
    items: ["Access Policy", "VPC Controls", "IAP"]
  }
];

export const DashboardSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside 
      className={cn(
        "h-[calc(100vh-4rem)] border-r border-white/10 bg-black/40 transition-all duration-300",
        collapsed ? "w-20" : "w-64"
      )}
    >
      <div className="p-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="w-full flex justify-end"
        >
          <ChevronLeft className={cn(
            "h-5 w-5 transition-transform",
            collapsed && "rotate-180"
          )} />
        </Button>

        <nav className="space-y-4 mt-4">
          {menuItems.map((item) => (
            <div key={item.title} className="space-y-2">
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start",
                  !collapsed ? "px-2" : "px-0 justify-center"
                )}
              >
                <item.icon className="h-5 w-5 mr-2" />
                {!collapsed && <span>{item.title}</span>}
              </Button>
              
              {!collapsed && (
                <div className="pl-9 space-y-1">
                  {item.items.map((subItem) => (
                    <Button
                      key={subItem}
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start text-sm text-muted-foreground hover:text-foreground"
                    >
                      {subItem}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
};