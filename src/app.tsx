import { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import {
  About,
  Experience,
  Hero,
  Navbar,
  Research,
  Tech,
  Works,
} from "./components";

import Footer from "./components/footer";

const Contact = lazy(() =>
  import("./components/contact").then((module) => ({ default: module.Contact })),
);
const StarsCanvas = lazy(() => import("./components/canvas/stars"));

// App
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {/* HERO SECTION */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar hide={false} />
          <Hero />
        </div>

        {/* MAIN SECTIONS */}
        <About />
        <Experience />
        <Tech />
        <Works />
        <Research />

        {/* CONTACT */}
        <div className="relative z-0">
          <Suspense fallback={<div className="min-h-[420px]" />}>
            <Contact />
            <StarsCanvas />
          </Suspense>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
