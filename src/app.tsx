import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Research,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

import Footer from "./components/footer";

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
          <Contact />
          <StarsCanvas />
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
