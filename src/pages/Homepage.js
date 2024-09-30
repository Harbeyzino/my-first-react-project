import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Work from "../components/Work/Work";
import Consultant from '../components/Consultant/Consultant';
import Testimonial from '../components/Testimonial/Testimonial';
import Market from '../components/Market/Market';
import Dapixel from "../components/Dapixel/Dapixel";
import Footer from "../components/Footer/Footer";

export default function Homepage() {
    return (
        <div>
            <Header />
            <Hero />
            <Work />
            <Consultant />
            <Testimonial />
            <Market />
            <Dapixel />
            <Footer />
        </div>
    );
}
