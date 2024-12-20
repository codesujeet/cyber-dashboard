import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scan, Bug, Shield, AlertTriangle } from "lucide-react";
import { useState } from "react";

const SecurityScanner = () => {
  const [scanning, setScanning] = useState(false);

  const startScan = () => {
    setScanning(true);
    // Simulate scan completion after 3 seconds
    setTimeout(() => setScanning(false), 3000);
  };

  return (
    <div className="min-h-screen bg-cyber-dark p-6">
      <h1 className="text-3xl font-bold mb-6 text-cyber-blue">Security Scanner</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-black/40 border-cyber-blue/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Scan className="text-cyber-blue" />
              Network Scanner
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Button 
                onClick={startScan}
                disabled={scanning}
                className="w-full bg-cyber-blue hover:bg-cyber-blue/80"
              >
                {scanning ? "Scanning..." : "Start Network Scan"}
              </Button>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span>Last Scan</span>
                  <span>2 hours ago</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Vulnerabilities Found</span>
                  <span className="text-red-500">12</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/40 border-cyber-blue/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bug className="text-cyber-green" />
              Vulnerability Assessment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Critical</span>
                <span className="text-red-500">3</span>
              </div>
              <div className="flex items-center justify-between">
                <span>High</span>
                <span className="text-orange-500">5</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Medium</span>
                <span className="text-yellow-500">8</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Low</span>
                <span className="text-green-500">15</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SecurityScanner;