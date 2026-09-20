import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/WhatsAppButton";
import Hero from "./components/Hero";
import ScrollAnimator from "./components/ui/ScrollAnimator";
import Products from "./components/Products";
import About from "./components/About";
import WhyChoose from "./components/WhyChoose";
import Services from "./components/Services";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why Choose Meghna Power Over Other Suppliers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We manufacture in-house at our Narsingdi facility, giving you direct access to engineers, faster lead times, and transparent pricing. We do not resell — every unit is built and tested by our team.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer custom transformer ratings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We manufacture transformers from 25 kVA to 5000 kVA, single or three-phase, 11kV/0.4kV, 33kV/11kV, or any custom voltage ratio per your specification.",
      },
    },
    {
      "@type": "Question",
      name: "What is the lead time for a new transformer order?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard ratings: 7–14 working days. Custom-engineered units: 21–30 days depending on complexity. Rush orders can be accommodated.",
      },
    },
    {
      "@type": "Question",
      name: "Do you repair existing transformers and panels?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We repair, rewind, and refurbish transformers, CT-PT units, LT/HT panels, and PFI units. Bring the unit to our Narsingdi workshop or request a site visit.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ScrollAnimator />
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
      <WhatsAppButton />
    </>
  );
}
