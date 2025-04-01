
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Modules from "./pages/Modules";
import Module from "./pages/Module";
import Payment from "./pages/Payment";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { PaymentProvider } from "./context/PaymentContext";
import { PaymentGuard } from "./components/PaymentGuard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <PaymentProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/modules" element={
              <PaymentGuard>
                <Modules />
              </PaymentGuard>
            } />
            <Route path="/module/:id" element={
              <PaymentGuard>
                <Module />
              </PaymentGuard>
            } />
            <Route path="/about" element={<About />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </PaymentProvider>
  </QueryClientProvider>
);

export default App;
