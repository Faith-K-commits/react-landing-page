import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Experience from "./components/Experience";
import Products from "./components/Products";

function App() {
  return (
    <div className="font-serif m-4 bg-white">
      <NavBar />
      <HeroSection />
      <About />
      <Experience />
      <Products />
    </div>
  );
}

export default App