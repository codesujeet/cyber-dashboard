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
        "h-[calc(100vh-4rem)] transition-all duration-300 bg-white dark:bg-black/40 border-r border-slate-200/80 dark:border-white/10",
        collapsed ? "w-20" : "w-64"
      )}
    >
      <div className="p-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="w-full flex justify-end hover:bg-slate-100 dark:hover:bg-white/5"
        >
          <ChevronLeft className={cn(
            "h-5 w-5 transition-transform text-slate-600 dark:text-slate-400",
            collapsed && "rotate-180"
          )} />
        </Button>

        <nav className="space-y-4 mt-4">
          {menuItems.map((item) => (
            <div key={item.title} className="space-y-2">
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5",
                  !collapsed ? "px-2" : "px-0 justify-center"
                )}
              >
                <item.icon className="h-5 w-5 mr-2 text-slate-600 dark:text-slate-400" />
                {!collapsed && <span className="font-medium">{item.title}</span>}
              </Button>
              
              {!collapsed && (
                <div className="pl-9 space-y-1">
                  {item.items.map((subItem) => (
                    <Button
                      key={typeof subItem === 'string' ? subItem : subItem.name}
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
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