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
import DynoBrand from "@/pages/DynoBrand";
import LunarayBrand from "@/pages/LunarayBrand";
import Blog from "@/pages/Blog";
import Admin from "@/pages/Admin";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/admin">
        <Admin />
      </Route>
      <Route>
        <Layout>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/brands" component={Brands} />
            <Route path="/brands/dyno" component={DynoBrand} />
            <Route path="/brands/lunarray" component={LunarayBrand} />
            <Route path="/brands/:brand" component={Brands} />
            <Route path="/products" component={Products} />
            <Route path="/products/:category" component={Products} />
            <Route path="/solutions" component={Solutions} />
            <Route path="/solutions/:solution" component={Solutions} />
            <Route path="/about" component={About} />
            <Route path="/installer-locator" component={InstallerLocator} />
            <Route path="/contact" component={Contact} />
            <Route path="/blog" component={Blog} />
            <Route path="/blog/:slug" component={Blog} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Route>
    </Switch>
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
