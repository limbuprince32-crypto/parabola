import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Pricing from "./components/Pricing.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Features from "./components/Features.jsx";
import Footer from "./components/Footer.jsx";
import About from "./components/About.jsx";
import { useState, useEffect } from "react";
import FeaturedProject from "./components/FeaturedProject.jsx";
import Touch from "./components/Touch.jsx";
import Get from "./components/Get.jsx";
const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Navbar scrolled={scrolled} />
      <Hero />
      <About/>
      <Features />
      <Pricing />
      <FeaturedProject/>
      <Testimonials />
      <Get/>
      <Touch/>
      <Footer />
    </div>
  );
};
export default App;
