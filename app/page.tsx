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

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://meghnapower.biz/#business",
  name: "Meghna Power",
  description:
    "Manufacturer and repair specialist for substations and electrical equipment including transformers, CT-PT units, Auto PFI panels, LT/HT switchgear, and industrial exhaust fans.",
  url: "https://meghnapower.biz",
  logo: "https://meghnapower.biz/logo.png",
  image: "https://meghnapower.biz/transformer.png",
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
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "47",
    bestRating: "5",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Rahim Uddin" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      name: "Excellent build quality",
      reviewBody: "Excellent build quality, zero issues for 3 years.",
      publisher: { "@type": "Organization", name: "Narsingdi Textile" },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Jahangir Alam" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      name: "Precision-made CT-PT units",
      reviewBody: "CT-PT units are precision-made, pricing better than Dhaka suppliers.",
      publisher: { "@type": "Organization", name: "Dhaka Construction" },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Salma Begum" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      name: "Power factor improved dramatically",
      reviewBody: "Auto PFI panel brought power factor from 0.72 to 0.98, bills dropped 25%.",
      publisher: { "@type": "Organization", name: "Narsingdi Cold Storage" },
    },
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
          image: "https://meghnapower.biz/transformer.png",
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
          image: "https://meghnapower.biz/ct_pt.png",
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
          image: "https://meghnapower.biz/pfi.png",
          brand: { "@type": "Brand", name: "Meghna Power" },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "LT & HT Panel",
          description:
            "Low-Tension distribution boards and High-Tension switchgear for complete power distribution from primary substation input to final load points. BPDB compliant.",
          image: "https://meghnapower.biz/lt.png",
          brand: { "@type": "Brand", name: "Meghna Power" },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Solar System",
          description:
            "Grid-tied and off-grid solar power systems for industrial and commercial facilities. Full installation from panels to inverters and metering.",
          image: "https://meghnapower.biz/solar.png",
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
          image: "https://meghnapower.biz/industrial_exhaust_fan.png",
          brand: { "@type": "Brand", name: "Meghna Power" },
        },
      },
    ],
  },
};

const manufacturer = { "@type": "Organization", name: "Meghna Power", url: "https://meghnapower.biz" };
const brand = { "@type": "Brand", name: "Meghna Power" };

const productSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Power Transformer",
    description:
      "High-efficiency distribution and power transformers for industrial use. Custom ratings from 25 kVA to 5000 kVA, single or three-phase, 11kV/0.4kV and 33kV/11kV ratios.",
    image: "https://meghnapower.biz/transformer.png",
    brand,
    manufacturer,
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "CT-PT Unit",
    description:
      "Current Transformer and Potential Transformer assemblies for accurate metering and protection in LT/HT panels.",
    image: "https://meghnapower.biz/ct_pt.png",
    brand,
    manufacturer,
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Auto PFI Panel",
    description:
      "Automatic Power Factor Improvement panels that reduce reactive power, cut energy bills, and protect equipment from harmonic distortion.",
    image: "https://meghnapower.biz/pfi.png",
    brand,
    manufacturer,
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "LT & HT Panel",
    description:
      "Low-Tension distribution boards and High-Tension switchgear for complete power distribution. BPDB compliant design and construction.",
    image: "https://meghnapower.biz/lt.png",
    brand,
    manufacturer,
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Industrial Exhaust Fan",
    description:
      "Heavy-duty ventilation fans for factories, substations, and industrial enclosures. Built for continuous high-temperature operation.",
    image: "https://meghnapower.biz/industrial_exhaust_fan.png",
    brand,
    manufacturer,
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Solar System",
    description:
      "Grid-tied and off-grid solar power systems for industrial and commercial facilities. Full installation from panels to inverters and net metering.",
    image: "https://meghnapower.biz/solar.png",
    brand,
    manufacturer,
  },
];

const reviewSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: { "@type": "LocalBusiness", "@id": "https://meghnapower.biz/#business" },
    author: { "@type": "Person", name: "Rahim Uddin", jobTitle: "Factory Manager" },
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    name: "Excellent build quality",
    reviewBody: "Excellent build quality, zero issues for 3 years.",
    publisher: { "@type": "Organization", name: "Narsingdi Textile" },
  },
  {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: { "@type": "LocalBusiness", "@id": "https://meghnapower.biz/#business" },
    author: { "@type": "Person", name: "Jahangir Alam", jobTitle: "Electrical Engineer" },
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    name: "Precision-made CT-PT units",
    reviewBody: "CT-PT units are precision-made, pricing better than Dhaka suppliers.",
    publisher: { "@type": "Organization", name: "Dhaka Construction" },
  },
  {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: { "@type": "LocalBusiness", "@id": "https://meghnapower.biz/#business" },
    author: { "@type": "Person", name: "Salma Begum", jobTitle: "Owner" },
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    name: "Power factor improved dramatically",
    reviewBody: "Auto PFI panel brought power factor from 0.72 to 0.98, bills dropped 25%.",
    publisher: { "@type": "Organization", name: "Narsingdi Cold Storage" },
  },
];

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
      {productSchemas.map((schema) => (
        <script
          key={schema.name}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      {reviewSchemas.map((schema) => (
        <script
          key={schema.author.name}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
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
