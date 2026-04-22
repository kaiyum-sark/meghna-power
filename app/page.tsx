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

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://meghnapower.com.bd/#business",
  name: "Meghna Power",
  description:
    "Manufacturer and repair specialist for substations and electrical equipment including transformers, CT-PT units, Auto PFI panels, LT/HT switchgear, and industrial exhaust fans.",
  url: "https://meghnapower.com.bd",
  logo: "https://meghnapower.com.bd/logo.png",
  image: "https://meghnapower.com.bd/transformer.png",
  telephone: "+880",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Chowala",
    addressLocality: "Narsingdi",
    addressCountry: "BD",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 23.9144,
    longitude: 90.7153,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  foundingDate: "2009",
  numberOfEmployees: { "@type": "QuantitativeValue", value: 50 },
  knowsAbout: [
    "Power Transformer Manufacturing",
    "CT-PT Units",
    "Auto PFI Panels",
    "LT Panel",
    "HT Switchgear",
    "Substation Erection",
    "Transformer Rewinding",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Electrical Equipment Products",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Power Transformer",
          description:
            "High-efficiency distribution and power transformers for industrial and utility applications. Custom ratings from 25 kVA to 5000 kVA.",
          image: "https://meghnapower.com.bd/transformer.png",
          brand: { "@type": "Brand", name: "Meghna Power" },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "CT-PT Unit",
          description:
            "Current Transformer and Potential Transformer assemblies for accurate measurement and protection in metering panels.",
          image: "https://meghnapower.com.bd/ct_pt.png",
          brand: { "@type": "Brand", name: "Meghna Power" },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Auto PFI Panel",
          description:
            "Automatic Power Factor Improvement panels that reduce reactive power, cut energy bills, and protect equipment.",
          image: "https://meghnapower.com.bd/pfi.png",
          brand: { "@type": "Brand", name: "Meghna Power" },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "LT Panel",
          description:
            "Low-Tension distribution boards and panels for safe power distribution across industrial facilities.",
          image: "https://meghnapower.com.bd/lt.png",
          brand: { "@type": "Brand", name: "Meghna Power" },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "HT Panel",
          description:
            "High-Tension switchgear and panels for primary power distribution in substations, compliant with BPDB specifications.",
          image: "https://meghnapower.com.bd/ht.png",
          brand: { "@type": "Brand", name: "Meghna Power" },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Industrial Exhaust Fan",
          description:
            "Heavy-duty ventilation fans for factories, substations, and industrial enclosures built for continuous operation.",
          image: "https://meghnapower.com.bd/industrial_exhaust_fan.png",
          brand: { "@type": "Brand", name: "Meghna Power" },
        },
      },
    ],
  },
};

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
