import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Shield, 
  Lock, 
  UserCheck, 
  AlertTriangle,
  ChevronLeft,
  BarChart3,
  Shield as ShieldIcon,
  Database,
  UserCog,
  Scan,
  Bug
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const menuItems = [
  {
    title: "Risk Overview",
    icon: BarChart3,
    items: [
      { name: "Threats", path: "/threats" },
      { name: "Vulnerabilities", path: "/vulnerabilities" },
      { name: "Compliance", path: "/compliance" },
      { name: "Assets", path: "/assets" }
    ]
  },
  {
    title: "Detections & Controls",
    icon: ShieldIcon,
    items: [
      { name: "SecOps", path: "/secops" },
      { name: "Security Scanner", path: "/security-scanner" },
      { name: "Risk Manager", path: "/risk-manager" }
    ]
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
  const navigate = useNavigate();

  const handleItemClick = (path: string) => {
    if (path) {
      navigate(path);
    }
  };

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
                      key={typeof subItem === 'string' ? subItem : subItem.name}
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start text-sm text-muted-foreground hover:text-foreground"
                      onClick={() => typeof subItem === 'object' && handleItemClick(subItem.path)}
                    >
                      {typeof subItem === 'string' ? subItem : subItem.name}
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