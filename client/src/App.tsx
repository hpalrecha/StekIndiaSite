import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import Solutions from "@/pages/Solutions";
import About from "@/pages/About";
import InstallerLocator from "@/pages/InstallerLocator";
import Contact from "@/pages/Contact";
import Brands from "@/pages/Brands";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/brands" component={Brands} />
        <Route path="/brands/:brand" component={Brands} />
        <Route path="/products" component={Products} />
        <Route path="/products/:category" component={Products} />
        <Route path="/solutions" component={Solutions} />
        <Route path="/solutions/:solution" component={Solutions} />
        <Route path="/about" component={About} />
        <Route path="/installer-locator" component={InstallerLocator} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
