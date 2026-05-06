import { useEffect } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Landing from "@/pages/Landing";
import ForStudents from "@/pages/ForStudents";
import ForEmployers from "@/pages/ForEmployers";
import ForColleges from "@/pages/ForColleges";
import Assessment from "@/pages/Assessment";
import Marketplace from "@/pages/Marketplace";
import StudentDashboard from "@/pages/StudentDashboard";
import EmployerDashboard from "@/pages/EmployerDashboard";
import Pricing from "@/pages/Pricing";
import About from "@/pages/About";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/for-students" component={ForStudents} />
      <Route path="/for-employers" component={ForEmployers} />
      <Route path="/for-colleges" component={ForColleges} />
      <Route path="/assessment" component={Assessment} />
      <Route path="/marketplace" component={Marketplace} />
      <Route path="/dashboard/student" component={StudentDashboard} />
      <Route path="/dashboard/employer" component={EmployerDashboard} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
        <Sonner richColors position="bottom-right" />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
