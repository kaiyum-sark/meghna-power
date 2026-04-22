import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import About from "./components/About";
import WhyChoose from "./components/WhyChoose";
import Services from "./components/Services";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <About />
        <WhyChoose />
        <Services />
        <FAQ />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
