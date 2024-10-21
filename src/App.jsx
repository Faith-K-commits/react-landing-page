import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Experience from "./components/Experience";
import Products from "./components/Products";
import CallToAction from "./components/CallToAction";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="font-serif m-4 bg-slate-50">
      <NavBar />
      <HeroSection />
      <About />
      <Experience />
      <Products />
      <CallToAction />
      <Contact />
    </div>
  );
}

export default App