import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import TopNav from "@/components/TopNav";

const Index = () => {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    if (navOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [navOpen]);

  return (
    <div className="relative min-h-screen">
      <TopNav navOpen={navOpen} setNavOpen={setNavOpen} />

      {/* Backdrop overlay when nav is open */}
      {navOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setNavOpen(false)} // optional: clicking the backdrop closes nav
        />
      )}

      {/* Main content */}
      <div className="relative z-30">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
