import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Cases from "./pages/Cases";
import CaseDetail from "./pages/CaseDetail";
import Upload from "./pages/Upload";
import Matches from "./pages/Matches";
import ReportMissing from "./pages/ReportMissing";
import ReportFound from "./pages/ReportFound";
import Notifications from "./pages/Notifications";
import PoliceLogin from "./pages/PoliceLogin";
import PoliceDashboard from "./pages/PoliceDashboard";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/cases/:id" element={<CaseDetail />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/report/missing" element={<ReportMissing />} />
          <Route path="/report/found" element={<ReportFound />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/police/login" element={<PoliceLogin />} />
          <Route path="/police/dashboard" element={<PoliceDashboard />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
