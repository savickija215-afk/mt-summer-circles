import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Hub from "./pages/Hub";
import OfflineCamp from "./pages/OfflineCamp";
import OnlineCamp from "./pages/OnlineCamp";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/summer-2026" replace />} />
          <Route path="/summer-2026" element={<Hub />} />
          <Route path="/summer-olimp-2026" element={<OfflineCamp />} />
          <Route path="/summer-online-2026" element={<OnlineCamp />} />
          <Route path="/back-to-school-2026" element={<Navigate to="/summer-2026" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
