import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Subscribe from "./components/Subscribe";
import Developers from "./components/Developers";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar/>
      <Hero/> 
      <About/>
      <Developers/>
      <Subscribe/>
      <Footer/>
    </>
  );
}

export default App;
