import AppDownload from "./components/AppDownload";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Partners from "./components/Partners";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";

export default function HomePage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-800 overflow-x-hidden font-sans">
            <Navbar />
            <Hero />
            <Partners />
            <Services />
            <HowItWorks />
            <Features />
            <Stats />
            <Offers />
            <Pricing />
            <Testimonials />
            <AppDownload />
            <FAQ />
            <Contact />
            <Footer />
        </main>
    );
}
