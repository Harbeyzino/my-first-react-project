import React from "react"
import Header from "../components/Header/Header";
import AboutHero from "../components/About-Hero/AboutHero";
import DaPixel from '../components/Dapixel/Dapixel'
import Footer from '../components/Footer/Footer'
import Section2 from "../components/AboutSection2/Section2";
import Section3 from "../components/ContactSection/Section3";


export default function About() {
  return (
    <div>
        <Header />
        <AboutHero />
        <Section2 />
        <Section3 />
        <DaPixel />
        <Footer />
    </div>
  );
}
