import React from "react"
import Header from "../components/Header/Header";
import BlogHero from "../components/Blog-Hero/BlogHero";
import MarketingAgent from "../components/MarketingAgent/MarketingAgent";
import DaPixel from '../components/Dapixel/Dapixel'
import Footer from '../components/Footer/Footer'

export default function Blog() {
  return (
    <div>
        <Header />
        <BlogHero />
        <MarketingAgent />
        <DaPixel />
        <Footer />
    </div>
  );
}
