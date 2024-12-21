import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import Threats from "./pages/Threats";
import Vulnerabilities from "./pages/Vulnerabilities";
import Compliance from "./pages/Compliance";
import SecOps from "./pages/SecOps";
import SecurityScanner from "./pages/SecurityScanner";
import RiskManager from "./pages/RiskManager";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" attribute="class">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/threats" element={<Threats />} />
            <Route path="/vulnerabilities" element={<Vulnerabilities />} />
            <Route path="/compliance" element={<Compliance />} />
            <Route path="/secops" element={<SecOps />} />
            <Route path="/security-scanner" element={<SecurityScanner />} />
            <Route path="/risk-manager" element={<RiskManager />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;