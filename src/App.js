import React from "react";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Clients from "./components/HappyClients/Clients";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import ProgressSection from "./components/ProgressSection/ProgressSection";
import Team from "./components/Team/Team";
import Works from "./components/Works/Works";
function App() {
  return (
    <>
    <Header/>
    <Hero/>
    <Team/>
    <ProgressSection/>
    <Clients/>
    <Works/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
