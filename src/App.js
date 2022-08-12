import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import './style.css'
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card />
    </div>
  );
};

export default App;