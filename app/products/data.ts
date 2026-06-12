export type Spec = { label: string; value: string };
export type RatingRow = { rating: string; phases: string; hv: string; lv: string; loss: string };
export type Application = { title: string; desc: string };
export type FAQ = { q: string; a: string };

export type ProductData = {
  slug: string;
  name: string;
  tag: string;
  image: string;
  title: string;
  metaDesc: string;
  h1: string;
  intro: string[];
  specs: Spec[];
  ratingsTable?: RatingRow[];
  applications: Application[];
  faqs: FAQ[];
};

export const products: ProductData[] = [
  {
    slug: "power-transformer",
    name: "Power Transformer",
    tag: "Core Product",
    image: "/transformer.png",
    title: "Power Transformer Manufacturer Bangladesh",
    metaDesc:
      "Custom distribution & power transformers 25–5000 kVA. BPDB-approved, in-house manufactured at Narsingdi, Bangladesh. Request a free quote.",
    h1: "Power Transformer Manufacturer in Bangladesh",
    intro: [
      "Meghna Power has been designing and manufacturing distribution and power transformers from our Chowala, Narsingdi facility for over 15 years. Every transformer we build is engineered in-house — from core lamination and winding through vacuum drying, oil impregnation, and high-voltage testing — before it leaves our factory. That end-to-end control means you get a unit built to your exact specification with no middlemen and no compromises on material grade or workmanship.",
      "We manufacture single-phase and three-phase transformers from 25 kVA to 5000 kVA, covering the full range of distribution voltage ratios used across Bangladesh: 11kV/0.4kV for factory supply, 33kV/11kV for primary substations, and custom ratios on request. All units are built to IEC 60076 standards and comply with BPDB procurement specifications, making them eligible for use in BPDB-regulated substations and industrial grids without separate approval.",
      "Whether you need a standard distribution transformer for a garment factory connection point or a large power transformer for a primary substation, our engineering team will size and quote your requirement within 24 hours. We also handle complete installation, oil commissioning, and on-site testing — giving you a single responsible contractor from manufacture through handover.",
    ],
    specs: [
      { label: "Rating range", value: "25 kVA – 5000 kVA" },
      { label: "Phases", value: "Single-phase & Three-phase" },
      { label: "Primary voltage", value: "11kV / 33kV (custom on request)" },
      { label: "Secondary voltage", value: "0.4kV / 11kV (custom on request)" },
      { label: "Cooling", value: "ONAN / ONAF" },
      { label: "Insulation class", value: "Class A, Class F" },
      { label: "Vector group", value: "Dyn11, YNyn0 (others on request)" },
      { label: "Tap changer", value: "Off-circuit OLTC, ±2×2.5%" },
      { label: "Standards", value: "IEC 60076, BPDB specification" },
      { label: "Testing", value: "Routine test at our Narsingdi facility" },
    ],
    ratingsTable: [
      { rating: "25 kVA", phases: "3-Phase", hv: "11 kV", lv: "0.4 kV", loss: "~100 W" },
      { rating: "50 kVA", phases: "3-Phase", hv: "11 kV", lv: "0.4 kV", loss: "~170 W" },
      { rating: "100 kVA", phases: "3-Phase", hv: "11 kV", lv: "0.4 kV", loss: "~280 W" },
      { rating: "250 kVA", phases: "3-Phase", hv: "11 kV", lv: "0.4 kV", loss: "~580 W" },
      { rating: "500 kVA", phases: "3-Phase", hv: "11 kV", lv: "0.4 kV", loss: "~950 W" },
      { rating: "1000 kVA", phases: "3-Phase", hv: "11 kV", lv: "0.4 kV", loss: "~1500 W" },
      { rating: "2000 kVA", phases: "3-Phase", hv: "33 kV", lv: "11 kV", loss: "~2800 W" },
      { rating: "5000 kVA", phases: "3-Phase", hv: "33 kV", lv: "11 kV", loss: "~5800 W" },
    ],
    applications: [
      {
        title: "Textile & Garment Factories",
        desc: "Primary power supply for production floors, dyeing lines, and utility buildings requiring 11kV to 0.4kV step-down.",
      },
      {
        title: "BPDB & DESCO Substations",
        desc: "BPDB-compliant units deployed in utility distribution substations across Narsingdi, Dhaka, and surrounding districts.",
      },
      {
        title: "Cold Storage Facilities",
        desc: "Dedicated transformer feeds for refrigeration compressor banks where stable voltage is critical to equipment life.",
      },
      {
        title: "Construction & Infrastructure",
        desc: "Temporary and permanent power supply transformers for large construction sites, highways, and bridge projects.",
      },
      {
        title: "Hospitals & Healthcare",
        desc: "Low-loss transformers with reliable no-load performance for critical healthcare facility power systems.",
      },
      {
        title: "Industrial Parks",
        desc: "Central substation transformers supplying multiple tenants from a shared 33kV or 11kV grid connection.",
      },
    ],
    faqs: [
      {
        q: "What kVA ratings do you manufacture?",
        a: "We manufacture transformers from 25 kVA to 5000 kVA in standard increments. Ratings outside this range or non-standard voltage ratios can be produced on request — contact us with your specification and we will confirm feasibility within 24 hours.",
      },
      {
        q: "Are your transformers BPDB-approved?",
        a: "Yes. Our transformers are built to BPDB procurement specifications and our facility is registered as a BPDB-approved vendor. Units supplied for BPDB projects come with the required routine test certificates and inspection clearance.",
      },
      {
        q: "What is the typical lead time?",
        a: "Standard ratings (100–500 kVA) typically take 3–4 weeks from order confirmation. Larger units (1000–5000 kVA) require 5–8 weeks depending on core material availability. We confirm your specific lead time at the time of quotation.",
      },
      {
        q: "Do you provide installation and commissioning?",
        a: "Yes. Our field team handles full installation including oil filling, HV cable termination, protective relay wiring, and commissioning tests. We also provide a one-year on-site warranty from the date of commissioning.",
      },
    ],
  },

  {
    slug: "ct-pt-unit",
    name: "CT-PT Unit",
    tag: "Metering",
    image: "/ct_pt.png",
    title: "CT-PT Unit Manufacturer Bangladesh | Meghna Power",
    metaDesc:
      "Current & Potential Transformer assemblies for LT/HT metering panels. Accurate, BPDB-compliant, manufactured in Narsingdi. Get a quote today.",
    h1: "CT-PT Unit Manufacturer in Bangladesh",
    intro: [
      "A correctly specified and accurately wound Current Transformer or Potential Transformer is the foundation of any reliable metering or protection system. Meghna Power manufactures CT-PT units at our Chowala, Narsingdi workshop, winding each unit in-house to achieve tight ratio accuracy and low burden. Our units are widely used in Low-Tension and High-Tension metering panels across industrial facilities, utility connections, and BPDB/DESCO substation installations throughout Bangladesh.",
      "Our Current Transformers are manufactured in accuracy classes 0.5, 1.0, and 3.0 for metering, and 5P10, 5P20 for protection. Potential Transformers are available for primary voltages from 415V to 33kV, with standard accuracy classes 0.5 and 1.0. Every unit undergoes ratio error, phase displacement, and burden testing before dispatch — we do not ship units that fail to meet their declared class.",
      "We supply CT-PT units individually or as assembled metering cubicle sets, ready for direct installation into your LT or HT panel. When the metering panel is also being fabricated by Meghna Power, CT-PT units are matched and installed as part of the complete panel build — reducing co-ordination effort and ensuring the metering circuit is tested as a system before delivery.",
    ],
    specs: [
      { label: "CT accuracy class", value: "0.5, 1.0, 3.0 (metering); 5P10, 5P20 (protection)" },
      { label: "PT accuracy class", value: "0.5, 1.0" },
      { label: "Primary voltage (PT)", value: "415V to 33kV" },
      { label: "CT primary current", value: "5A to 3000A (standard)" },
      { label: "CT secondary current", value: "1A or 5A" },
      { label: "Burden", value: "5 VA to 30 VA" },
      { label: "Insulation level", value: "0.66kV to 33kV class" },
      { label: "Frequency", value: "50 Hz" },
      { label: "Standards", value: "IEC 61869-2 (CT), IEC 61869-3 (PT)" },
      { label: "Testing", value: "Ratio error, phase displacement, burden test on every unit" },
    ],
    applications: [
      {
        title: "Industrial HT Metering Panels",
        desc: "CT-PT sets integrated into 11kV metering cubicles for BPDB commercial demand metering at factory connection points.",
      },
      {
        title: "LT Distribution Boards",
        desc: "Revenue metering CTs for LT panels where sub-metering or utility billing accuracy is required.",
      },
      {
        title: "Substation Protection",
        desc: "High-accuracy protection class CTs for differential, over-current, and earth fault relay schemes in primary substations.",
      },
      {
        title: "Power Quality Monitoring",
        desc: "Metering-class CTs feeding power quality analysers and energy management systems in smart factory applications.",
      },
      {
        title: "Capacitor Bank Control",
        desc: "CTs providing load current signal to automatic PFI panel controllers for reactive power compensation.",
      },
      {
        title: "Generator Synchronisation Panels",
        desc: "Precision PTs for bus voltage sensing in generator synchronisation and paralleling control panels.",
      },
    ],
    faqs: [
      {
        q: "What accuracy classes are available?",
        a: "For current transformers we supply metering class 0.5, 1.0, and 3.0, and protection class 5P10 and 5P20. Potential transformers are available in accuracy class 0.5 and 1.0. Higher accuracy (class 0.2S) is available on request for revenue-grade applications.",
      },
      {
        q: "Can you supply CT-PT units as part of a complete panel?",
        a: "Yes. When Meghna Power is fabricating the metering panel, CT-PT units are selected, wired, and tested as part of the complete assembly. The finished panel is dispatched with test certificates covering the full metering circuit.",
      },
      {
        q: "How do you verify ratio accuracy before dispatch?",
        a: "Every CT and PT is tested on our in-house ratio bridge for ratio error and phase displacement at 25%, 100%, and 120% of rated current or voltage. Units that do not meet their declared accuracy class are rewound — we do not ship non-compliant units.",
      },
      {
        q: "Do you supply replacement CTs for existing panels?",
        a: "Yes. Provide us the existing CT nameplate data (ratio, class, burden, terminal markings) and we will supply a drop-in replacement. We can match most standard and non-standard ratios within 2–3 working days for commonly wound sizes.",
      },
    ],
  },

  {
    slug: "auto-pfi-panel",
    name: "Auto PFI Panel",
    tag: "Energy Saving",
    image: "/pfi.png",
    title: "Auto PFI Panel Manufacturer Bangladesh | Meghna Power",
    metaDesc:
      "Automatic Power Factor Improvement panels that cut electricity bills and protect equipment. Narsingdi-manufactured, BPDB-compliant. Get a quote.",
    h1: "Auto PFI Panel — Power Factor Improvement in Bangladesh",
    intro: [
      "A poor power factor is one of the most common — and most avoidable — causes of high electricity bills in Bangladeshi industry. When your power factor falls below the utility threshold (typically 0.90 for BPDB commercial connections), you are billed for reactive power demand that your equipment draws but does not convert into useful work. Meghna Power's Automatic Power Factor Improvement (Auto PFI) panels continuously monitor your load and switch capacitor banks in and out to maintain a target power factor of 0.95 or higher — automatically, without operator intervention.",
      "Our Auto PFI panels are built around proven automatic power factor relays driving thyristor or contactor-switched capacitor banks sized to your load profile. We design each panel to your specific contract demand and measured reactive power requirement, so you are not paying for more capacitance than you need. The result is a lower maximum demand reading, reduced kVAr charges on your electricity bill, and less heat in your cables, switchgear, and transformer — extending equipment life across your whole installation.",
      "Panels are manufactured in our Narsingdi workshop, housed in powder-coated mild-steel enclosures with IP42 or IP54 protection, and delivered pre-wired and factory-tested. Our team can handle complete installation including CT wiring, commissioning of the power factor relay, and verification of power factor improvement against your recent utility bills.",
    ],
    specs: [
      { label: "Supply voltage", value: "415V, 3-phase, 50Hz" },
      { label: "Capacitor bank steps", value: "4 to 14 steps (custom)" },
      { label: "Step size", value: "10 kVAr to 100 kVAr per step" },
      { label: "Total kVAr range", value: "50 kVAr to 1000 kVAr" },
      { label: "Switching", value: "Contactor or thyristor (transient-free)" },
      { label: "Controller", value: "Automatic PF relay, target PF 0.90–0.99 settable" },
      { label: "Protection", value: "Over-voltage, over-temperature, harmonic overload" },
      { label: "Enclosure", value: "Powder-coated MS, IP42 / IP54" },
      { label: "Display", value: "Digital PF meter, kVAr meter, step indicator" },
      { label: "Standards", value: "IEC 60831, BPDB compliant" },
    ],
    applications: [
      {
        title: "Textile & Spinning Mills",
        desc: "Large motor loads in weaving and spinning create significant reactive demand. PFI panels bring factory power factor within BPDB billing thresholds.",
      },
      {
        title: "Cold Storage & Refrigeration",
        desc: "Compressor motors are heavy inductive loads. Automatic step switching keeps PF above 0.95 even as compressor duty cycles vary.",
      },
      {
        title: "Garment Factories",
        desc: "Mixed loads across cutting, sewing, and finishing floors result in a varying power factor. Auto PFI panels handle this variation in real time.",
      },
      {
        title: "Commercial Buildings",
        desc: "Shopping centres, office towers, and hotels benefit from PFI where chiller and lift motor loads pull power factor below utility requirements.",
      },
      {
        title: "Steel & Foundry Plants",
        desc: "Arc furnaces and induction heating create large reactive current spikes. Fast-switching thyristor PFI panels control reactive demand effectively.",
      },
      {
        title: "Pumping Stations",
        desc: "Water treatment and irrigation pump stations running multiple induction motors benefit from centralised reactive compensation.",
      },
    ],
    faqs: [
      {
        q: "How much can I save on my electricity bill?",
        a: "Savings depend on your current power factor and utility tariff. Industries moving from a power factor of 0.75 to 0.98 typically see maximum demand charges fall by 20–30%, with additional savings from reduced I²R losses in their distribution system. We can estimate your specific savings from your last three utility bills.",
      },
      {
        q: "What is the difference between contactor-switched and thyristor-switched panels?",
        a: "Contactor switching is lower cost and suitable for most industrial loads. Thyristor (solid-state) switching is faster and transient-free, making it appropriate for loads with rapid power factor fluctuations such as arc furnaces or variable-speed drives.",
      },
      {
        q: "Will a PFI panel cause problems with my variable frequency drives?",
        a: "Standard fixed capacitor banks can interact badly with VFDs, but our auto PFI panels are designed with detuning reactors (typically 7% or 14%) when VFDs or other harmonic-generating loads are present. This prevents resonance and capacitor overload.",
      },
      {
        q: "How long does installation take?",
        a: "For a standard industrial installation, our team can complete wiring, commissioning, and power factor verification in one working day. Larger multi-panel installations may take 2–3 days. We work around your production schedule where possible.",
      },
    ],
  },

  {
    slug: "lt-ht-panel",
    name: "LT & HT Panel",
    tag: "Switchgear",
    image: "/lt.png",
    title: "LT & HT Panel Manufacturer Bangladesh | Meghna Power",
    metaDesc:
      "Low-Tension distribution boards and High-Tension switchgear, BPDB-compliant, manufactured in Narsingdi Bangladesh. Custom panels, fast delivery.",
    h1: "LT & HT Switchgear Panel Manufacturer in Bangladesh",
    intro: [
      "Switchgear panels are the control and protection heart of any electrical installation. Meghna Power designs and manufactures Low-Tension (LT) Main Distribution Boards and High-Tension (HT) switchgear panels from our Narsingdi facility, covering the full distribution chain from 33kV primary intake through to 415V final distribution. Every panel is custom-engineered to your single-line diagram, built in our workshop, and tested before shipment.",
      "Our LT panels range from simple Main Distribution Boards with MCCB incomer and outgoing MCB feeders, through to complex bus-coupler panels with automatic changeover, power monitoring, and SCADA connectivity. For HT applications, we fabricate 11kV and 33kV indoor vacuum circuit breaker (VCB) panels and ring main units to BPDB and DESCO standards, including relay coordination settings verified by our protection engineers.",
      "All panels are built in powder-coated mild-steel or stainless-steel enclosures designed for the operating environment — whether that is a factory production floor, a rooftop utility room, or an outdoor substation building. We use equipment from recognised brands throughout: ACBs and MCCBs from Schneider Electric, ABB, or Siemens; VCBs from established HT equipment manufacturers; and multifunction meters with Modbus output where energy management integration is required.",
    ],
    specs: [
      { label: "LT panel voltage", value: "415V, 3-phase, 50Hz" },
      { label: "LT panel rating", value: "Up to 6300A busbar" },
      { label: "HT panel voltage", value: "11kV / 33kV" },
      { label: "HT switching", value: "Vacuum Circuit Breaker (VCB), SF6 RMU" },
      { label: "Protection", value: "Overcurrent, earth fault, differential (HT); MCB, MCCB, RCCB (LT)" },
      { label: "Metering", value: "Multifunction meter with Modbus; CT-PT integrated" },
      { label: "Enclosure", value: "Powder-coated MS / SS; IP42 standard, IP54 on request" },
      { label: "Busbar material", value: "Electrolytic copper, silver-plated joints" },
      { label: "Cable entry", value: "Bottom or top, gland plates provided" },
      { label: "Standards", value: "IEC 61439, IEC 62271, BPDB/DESCO specification" },
    ],
    applications: [
      {
        title: "Industrial Main Distribution",
        desc: "MDB and sub-distribution panels feeding motor control centres, lighting panels, and utility services in factories.",
      },
      {
        title: "BPDB Utility Substations",
        desc: "11kV VCB panels and metering cubicles built to BPDB specifications for utility distribution substations.",
      },
      {
        title: "Commercial Buildings",
        desc: "Main LT switchboards with RCCB protection, energy meters, and automatic power factor correction for offices and shopping centres.",
      },
      {
        title: "Textile Mills",
        desc: "Motor control centres with DOL, star-delta, and soft-starter outgoings serving large spinning and weaving machinery.",
      },
      {
        title: "Hospitals",
        desc: "Critical power distribution panels with ATS/AMF control for generator changeover and essential load separation.",
      },
      {
        title: "Solar & Renewable Integration",
        desc: "Grid-tie interconnection panels for solar PV systems, including export limiting and anti-islanding protection.",
      },
    ],
    faqs: [
      {
        q: "Do you design custom panels from a single-line diagram?",
        a: "Yes. Provide us your single-line diagram (or a load schedule if you need our engineers to prepare the SLD), and we will produce a full panel design drawing for approval before fabrication begins. Design drawings are included in the supply price.",
      },
      {
        q: "What brands of switchgear do you use?",
        a: "We use ACBs and MCCBs from Schneider Electric, ABB, and Siemens. For HT VCBs we source from established manufacturers and can specify the brand on request. We do not use unbranded or uncertified switchgear components.",
      },
      {
        q: "Are your HT panels BPDB-approved?",
        a: "Our HT panels are built to BPDB and DESCO design specifications and have been accepted on multiple utility-owned substation projects. Where formal BPDB vendor registration is required for a particular project, we can provide our registration documentation.",
      },
      {
        q: "Can you retrofit or upgrade an existing panel?",
        a: "Yes. We regularly carry out upgrades to existing LT boards — busbar extension, addition of outgoing ways, replacement of failed components, or installation of metering and monitoring equipment. For HT panels, we provide on-site assessment and recommend the safest upgrade path.",
      },
    ],
  },

  {
    slug: "industrial-exhaust-fan",
    name: "Industrial Exhaust Fan",
    tag: "Ventilation",
    image: "/industrial_exhaust_fan.png",
    title: "Industrial Exhaust Fan Manufacturer Bangladesh",
    metaDesc:
      "Heavy-duty industrial exhaust fans for factories, substations & enclosures. Continuous operation, IP55 motors. Manufactured in Narsingdi, Bangladesh.",
    h1: "Industrial Exhaust Fan Manufacturer in Bangladesh",
    intro: [
      "Adequate ventilation is a safety and efficiency requirement in every industrial and electrical installation. In transformer substations, inadequate airflow accelerates insulation ageing and shortens equipment life. In factories, poor ventilation raises ambient temperature, reduces worker productivity, and can create fire and fume hazards. Meghna Power manufactures heavy-duty industrial exhaust fans designed specifically for the continuous, unattended operation required in these environments.",
      "Our fans are built around cast aluminium impellers and heavy-gauge galvanised or powder-coated steel housings, sized from 300mm to 900mm diameter. Motors are rated for continuous duty — Class F insulation, IP55 enclosure — and are selected to maintain rated airflow even when ambient temperatures reach 50°C, conditions common in Bangladeshi industrial facilities during summer. All fans are statically and dynamically balanced before dispatch to eliminate vibration and reduce bearing wear.",
      "We supply exhaust fans for wall mounting, roof mounting, and duct installation, and can provide louvred intake grilles, motorised dampers, and speed controllers to complete the ventilation system. For transformer and switchgear rooms where very high reliability is needed, we can supply fans with automatic thermal overload protection and remote alarm output for integration with your substation monitoring system.",
    ],
    specs: [
      { label: "Diameter range", value: "300mm – 900mm" },
      { label: "Airflow range", value: "1,500 – 45,000 m³/h" },
      { label: "Motor rating", value: "0.18 kW – 5.5 kW" },
      { label: "Supply voltage", value: "220V single-phase / 415V 3-phase, 50Hz" },
      { label: "Motor insulation class", value: "Class F" },
      { label: "Motor enclosure", value: "IP55" },
      { label: "Fan housing", value: "Galvanised steel or powder-coated MS" },
      { label: "Impeller", value: "Cast aluminium, dynamically balanced" },
      { label: "Mounting", value: "Wall, roof, or duct inline" },
      { label: "Ambient rating", value: "Up to 50°C continuous operation" },
    ],
    applications: [
      {
        title: "Transformer & Switchgear Rooms",
        desc: "Forced ventilation for substation buildings and transformer enclosures where heat must be expelled to maintain equipment ratings.",
      },
      {
        title: "Garment & Textile Factories",
        desc: "High-volume wall-mounted fans for production floor ventilation, fume extraction from dyeing processes, and exhaust from dryers.",
      },
      {
        title: "Warehouses & Storage",
        desc: "Roof-mounted exhaust fans for large-volume air change in goods storage, reducing humidity and maintaining product quality.",
      },
      {
        title: "Generator Rooms",
        desc: "Dedicated exhaust fans for genset enclosures, removing combustion heat and exhaust gases to maintain engine efficiency.",
      },
      {
        title: "Cold Storage Plant Rooms",
        desc: "Ventilation for refrigeration plant rooms, preventing heat accumulation around compressors and condensers.",
      },
      {
        title: "Commercial Kitchens",
        desc: "High-static-pressure extraction fans for kitchen canopy systems in restaurants, hotels, and institutional catering facilities.",
      },
    ],
    faqs: [
      {
        q: "How do I select the right fan size for my room?",
        a: "Fan selection depends on the room volume, required air changes per hour, and static pressure of the duct system. Share your room dimensions and any known heat load with our team and we will calculate the required airflow and recommend a suitable model.",
      },
      {
        q: "What is the difference between axial and centrifugal fans?",
        a: "Axial fans (propeller type) are suited to high-volume, low-static-pressure applications such as wall ventilation of large rooms. Centrifugal fans handle higher static pressure and are better for ducted systems where air must travel significant distances or through filtration. We supply both types.",
      },
      {
        q: "Can you supply fans for hazardous areas?",
        a: "For ATEX or Zone-classified hazardous areas we can source and supply spark-proof (non-sparking impeller) and explosion-proof motor variants. Please specify the zone classification and hazardous gas group when enquiring.",
      },
      {
        q: "Do the fans carry a warranty?",
        a: "All fans carry a 12-month warranty from date of supply covering manufacturing defects. Motor failures due to incorrect installation or operation outside rated conditions are excluded. Our team can advise on correct installation to protect your warranty.",
      },
    ],
  },

  {
    slug: "solar-system",
    name: "Solar System",
    tag: "Renewable",
    image: "/solar.png",
    title: "Industrial Solar System Installation Bangladesh",
    metaDesc:
      "Grid-tied & off-grid solar for factories and commercial facilities in Bangladesh. Full installation from panels to inverters. Free site assessment.",
    h1: "Industrial Solar System Installation in Bangladesh",
    intro: [
      "Bangladesh's electricity costs have risen sharply over the last decade, and the industrial sector is bearing the largest burden. Solar power offers a straightforward route to cutting your daytime electricity purchase costs — in most industrial applications, a well-designed rooftop solar system will pay back its capital cost in 4 to 6 years and continue producing electricity effectively for 25 years or more. Meghna Power designs, supplies, and installs grid-tied and off-grid solar power systems for industrial and commercial facilities across Bangladesh, handling everything from initial site assessment and energy audit through system design, supply, installation, and net metering application.",
      "Our grid-tied systems feed solar generation directly into your LV distribution system during daylight hours, displacing grid import and reducing your kWh consumption charge. Where BPDB or DESCO net metering approval is available, excess generation during low-load periods can be exported, earning credit against your bill. For facilities where uninterruptible power during grid outages is required, we design hybrid systems with battery storage — sized to maintain critical loads through a typical outage duration.",
      "We source panels from Tier 1 manufacturers with verified performance warranties, and inverters from established grid-tie and hybrid inverter brands with proven track records in the Bangladeshi climate. Our installation team is experienced with both flat rooftop mounting and pitched structures, and our electrical engineers handle the full interconnection design including protection relay coordination for safe anti-islanding.",
    ],
    specs: [
      { label: "System types", value: "Grid-tied, off-grid, hybrid (with battery)" },
      { label: "System capacity", value: "10 kWp to 1 MWp" },
      { label: "Solar panels", value: "Tier 1 monocrystalline, 400W–700W per panel" },
      { label: "Panel warranty", value: "25-year linear power output warranty" },
      { label: "Inverter type", value: "String, central, or hybrid (battery-compatible)" },
      { label: "Battery (hybrid)", value: "Lithium iron phosphate (LFP), 2–10 hour backup" },
      { label: "Mounting", value: "Flat rooftop (ballasted or penetrating), ground mount" },
      { label: "Monitoring", value: "Real-time generation, consumption, and export metering" },
      { label: "Grid connection", value: "BPDB/DESCO net metering application handled" },
      { label: "Standards", value: "IEC 61730 (panels), IEC 62109 (inverters), BERC net metering" },
    ],
    applications: [
      {
        title: "Garment & Textile Factories",
        desc: "Large flat rooftops are ideal for solar. A 500 kWp system on a mid-sized garment factory can offset 40–60% of daytime grid demand.",
      },
      {
        title: "Cold Storage Facilities",
        desc: "High daytime electricity consumption for refrigeration aligns well with solar generation profiles, maximising self-consumption.",
      },
      {
        title: "Commercial & Office Buildings",
        desc: "Rooftop solar reduces air-conditioning and lighting bills during peak tariff hours, with net metering credit for weekends and holidays.",
      },
      {
        title: "Industrial Parks & EPZs",
        desc: "Common-area solar installations for export processing zones, with shared generation metered across tenant connections.",
      },
      {
        title: "Agricultural & Irrigation",
        desc: "Off-grid solar pump systems for irrigation in areas with unreliable grid supply or no grid connection available.",
      },
      {
        title: "Healthcare Facilities",
        desc: "Hybrid solar with battery backup ensures critical equipment continues operating during grid outages without relying on generator fuel.",
      },
    ],
    faqs: [
      {
        q: "How much roof space does a solar system require?",
        a: "As a rule of thumb, a 1 kWp solar system requires approximately 6–8 square metres of shadow-free roof area. A 100 kWp system needs around 600–800 m². We carry out a roof assessment as part of our free site survey to confirm available area and any shading constraints.",
      },
      {
        q: "How long does a grid-tied system take to install?",
        a: "A typical industrial rooftop system of 50–200 kWp takes 2–4 weeks from arrival of materials on site. The net metering application to BPDB or DESCO runs in parallel and typically takes 4–8 weeks for approval. We manage both timelines on your behalf.",
      },
      {
        q: "What happens to my solar system during a power cut?",
        a: "Standard grid-tied inverters shut down automatically during a grid outage for safety. If you need power during outages, we design a hybrid system with battery storage that maintains critical loads through a configured battery bank, with the solar array recharging the batteries during daylight.",
      },
      {
        q: "What is the expected return on investment?",
        a: "For a typical industrial grid-tied system in Bangladesh, the simple payback period is 4–6 years depending on your electricity tariff, generation yield, and self-consumption ratio. After payback, the system produces effectively free electricity for 20+ additional years. We prepare a detailed financial model as part of our proposal.",
      },
    ],
  },
];

export const productMap = new Map<string, ProductData>(products.map((p) => [p.slug, p]));

export const productSlugs = products.map((p) => p.slug);
