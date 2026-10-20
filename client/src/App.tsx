import { Switch, Route, Redirect } from "wouter";
import { PlaceholderPage } from "@/components/layout/PlaceholderPage";
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
import ForceshieldBrand from "@/pages/ForceshieldBrand";
import StekWindowBrand from "@/pages/StekWindowBrand";
import FormulaBrand from "@/pages/FormulaBrand";
import FormulaPrep from "@/pages/FormulaPrep";
import FormulaInstall from "@/pages/FormulaInstall";
import FormulaMaintain from "@/pages/FormulaMaintain";
import Blog from "@/pages/Blog";
import Admin from "@/pages/Admin";
import ProductDetail from "@/pages/ProductDetail";
import WindowFilmDetail from "@/pages/WindowFilmDetail";
import BecomeInstaller from "@/pages/BecomeInstaller";
import TrainingProgram from "@/pages/TrainingProgram";
import InstallerPortal from "@/pages/InstallerPortal";
import PreCutSoftware from "@/pages/PreCutSoftware";
import Studio3D from "@/pages/Studio3D";
import Partnerships from "@/pages/Partnerships";
import Sustainability from "@/pages/Sustainability";
import NotFound from "@/pages/not-found";
import Verify from "@/pages/Verify";
import P91CarCare from "@/pages/P91CarCare";

function Router() {
  return (
    <Switch>
      <Route path="/admin">
        <Admin />
      </Route>
      {/* Public warranty verification — standalone, outside the marketing Layout */}
      <Route path="/verify/:code" component={Verify} />
      <Route path="/verify" component={Verify} />
      <Route>
        <Layout>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/brands" component={Brands} />
            <Route path="/brands/dyno" component={DynoBrand} />
            <Route path="/brands/lunaray" component={LunarayBrand} />
            <Route path="/brands/forceshield" component={ForceshieldBrand} />
            <Route path="/brands/stek" component={StekWindowBrand} />
            <Route path="/brands/formula" component={FormulaBrand} />
            <Route path="/brands/formula/prep" component={FormulaPrep} />
            <Route path="/brands/formula/install" component={FormulaInstall} />
            <Route path="/brands/formula/maintain" component={FormulaMaintain} />
            <Route path="/brands/:brand" component={Brands} />
            <Route path="/products" component={Products} />
            <Route path="/products/:category" component={Products} />
            <Route path="/products/window-film/:productSlug" component={WindowFilmDetail} />
            <Route path="/products/:category/:productSlug" component={ProductDetail} />
            <Route path="/solutions" component={Solutions} />
            <Route path="/solutions/:solution" component={Solutions} />
            <Route path="/about" component={About} />
            <Route path="/installer-locator" component={InstallerLocator} />
            <Route path="/contact" component={Contact} />
            <Route path="/blog" component={Blog} />
            <Route path="/blog/:slug" component={Blog} />

            {/* Resources Mega-Menu Pages */}
            <Route path="/installer-portal" component={InstallerPortal} />
            <Route path="/pre-cut-software" component={PreCutSoftware} />
            <Route path="/3d-studio" component={Studio3D} />
            <Route path="/become-installer" component={BecomeInstaller} />
            <Route path="/training-program" component={TrainingProgram} />
            <Route path="/sustainability" component={Sustainability} />
            <Route path="/partnerships" component={Partnerships} />
            <Route path="/partner/p91carcare" component={P91CarCare} />
            <Route path="/p91-car-care">
              <Redirect to="/partner/p91carcare" />
            </Route>

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
