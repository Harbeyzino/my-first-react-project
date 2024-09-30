import React from "react";
import Header from "../components/Header/Header";
import Dapixel from "../components/Dapixel/Dapixel";
import Footer from "../components/Footer/Footer";
import Services from "../components/ServiceHero/Services";
import Services2 from "../components/Services2/Services2";
import FreeMeetingSection from "../components/FreeMeetingSection/FreeMeetingSection";
import Section3 from "../components/ContactSection/Section3";


export default function Service() {
    return (
        <div>
            <Header />
            <Services />
            <Services2 />
            <FreeMeetingSection />
            <Section3 />
            <Dapixel /> 
            <Footer />
        </div>
    );
}
