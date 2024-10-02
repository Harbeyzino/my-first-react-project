import React from "react";
import Header from "../components/Header/Header";
import Dapixel from "../components/Dapixel/Dapixel";
import Footer from "../components/Footer/Footer";
import Industries from "../components/Industries/Industries";
import Industrie2 from "../components/Industries2/Industries2";
import Industries3 from "../components/Industries3/Industries3";
import Testimonial from "../components/Testimonial/Testimonial";
import Industries4 from "../components/Industries4/Industries4";
import Section3 from "../components/ContactSection/Section3";
import Industries5 from "../components/Industries5/Industrie5";


export default function Industrie() {
    return (
        <div>
            <Header />
            <Industries />
            <Industrie2 />
            <Industries3 />
            <Testimonial />
            <Industries4 />
            <Section3 />
            <Industries5 />
            <Dapixel />
            <Footer />
        </div>
    );
}