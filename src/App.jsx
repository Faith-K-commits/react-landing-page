import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";

function App() {
  return (
    <div className="font-serif m-4 bg-white">
      <NavBar />
      <HeroSection />
      <About />
    </div>
  );
}

export default App