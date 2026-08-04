import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";

// Route-level code splitting: only Home ships in the initial bundle.
// Every other page loads on demand, shrinking first-load JS for better LCP/INP.
const About = lazy(() => import("./pages/About"));
const ITConsulting = lazy(() => import("./pages/ITConsulting"));
const StaffingSolutions = lazy(() => import("./pages/StaffingSolutions"));
const Industries = lazy(() => import("./pages/Industries"));
const LearningSolutions = lazy(() => import("./pages/LearningSolutions"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const Careers = lazy(() => import("./pages/Careers"));
const Contact = lazy(() => import("./pages/Contact"));
const Company = lazy(() => import("./pages/Company"));
const NotFound = lazy(() => import("./pages/NotFound"));

function RouteFallback() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-void">
      <div className="w-8 h-8 border-2 border-line border-t-blue rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/it-consulting" element={<ITConsulting />} />
            <Route path="/staffing-solutions" element={<StaffingSolutions />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/learning-solutions" element={<LearningSolutions />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/company" element={<Company />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}
