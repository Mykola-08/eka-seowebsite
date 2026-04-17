const SITE = "https://ekabalance.com";
export default function JsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": SITE,
    name: "EKA Balance",
    url: SITE,
    telephone: "+34658867133",
    email: "contact@ekabalance.com",
    description:
      "Holistic somatic therapies and integrative wellness services in Barcelona. Specializing in massage, kinesiology, nutrition, and movement therapy.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Carrer Pelai, 12",
      addressLocality: "Barcelona",
      postalCode: "08001",
      addressRegion: "Catalonia",
      addressCountry: "ES",
    },
    geo: { "@type": "GeoCoordinates", latitude: 41.3851, longitude: 2.1734 },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "20:00",
      },
    ],
    sameAs: ["https://instagram.com/eka_balance"],
    priceRange: "$$",
    areaServed: { "@type": "City", name: "Barcelona" },
    knowsLanguage: ["ca", "en", "es", "ru"],
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE}/booking`,
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
      result: { "@type": "Reservation", name: "Session booking" },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Wellness Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Somatic Massage",
            description:
              "Deep tissue work with somatic awareness for pain relief, relaxation, and improved mobility.",
            url: `${SITE}/services/massage`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Holistic Kinesiology",
            description:
              "Holistic approach using muscle testing to identify and correct structural, chemical, and emotional imbalances.",
            url: `${SITE}/services/kinesiology`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Nutrition Counseling",
            description:
              "Personalized nutritional guidance focusing on gut health, inflammation, and energy levels.",
            url: `${SITE}/services/nutrition`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "360° Revision",
            description:
              "Comprehensive assessment of your physical and emotional state including posture, tension, and emotional balance.",
            url: `${SITE}/360-revision`,
          },
        },
      ],
    },
  };
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE}#website`,
    url: SITE,
    name: "EKA Balance",
    publisher: { "@id": SITE },
    inLanguage: ["ca", "en", "es", "ru"],
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE}/discovery?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What services does EKA Balance offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "EKA Balance offers somatic massage, holistic kinesiology, nutrition counseling, movement therapy (JKA/Feldenkrais), supplements (Agenyz), and comprehensive 360° health revisions.",
        },
      },
      {
        "@type": "Question",
        name: "Where is EKA Balance located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "EKA Balance is located in Barcelona, Spain, at Carrer Pelai, 12, 08001. Online sessions are also available.",
        },
      },
      {
        "@type": "Question",
        name: "What languages are spoken at EKA Balance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sessions are available in English, Spanish, Catalan, and Russian.",
        },
      },
      {
        "@type": "Question",
        name: "How do I book an appointment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Book online at ekabalance.com/booking, via WhatsApp, or by phone at +34 658 867 133.",
        },
      },
      {
        "@type": "Question",
        name: "What is a 360° Revision?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A 360° Revision is a comprehensive assessment of your current state — including posture, muscle tension, emotional stress, and biochemical balance — used to build a personalized recovery roadmap.",
        },
      },
      {
        "@type": "Question",
        name: "How long is a typical session?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sessions typically run 60–90 minutes. A first-time 360° Revision lasts up to 120 minutes to allow a complete assessment.",
        },
      },
      {
        "@type": "Question",
        name: "What is the cancellation policy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Appointments can be rescheduled or cancelled free of charge up to 24 hours in advance. Within 24 hours, the session fee is charged.",
        },
      },
      {
        "@type": "Question",
        name: "Are online sessions available?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Nutrition counseling, 360° Revisions, and follow-ups can be delivered online. Massage and hands-on work are in-person only.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer packages or discounts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Multi-session packages, first-time offers, and VIP memberships are available. See ekabalance.com/discounts for current promotions.",
        },
      },
      {
        "@type": "Question",
        name: "Who is EKA Balance for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Adults dealing with stress, chronic pain, posture issues, or burnout; athletes and musicians seeking performance and recovery; office workers and students; and families. Tailored programs exist for each audience.",
        },
      },
    ],
  };
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Elena Kucherova",
    jobTitle: "Integrative Therapist",
    worksFor: { "@type": "Organization", name: "EKA Balance", url: SITE },
    url: `${SITE}/about-elena`,
    image: `${SITE}/images/therapist_photo.jpg`,
    knowsLanguage: ["ca", "en", "es", "ru"],
    knowsAbout: [
      "Kinesiology",
      "Somatic Massage",
      "Nutrition",
      "Feldenkrais Method",
      "Movement Therapy",
      "Integrative Wellness",
    ],
    sameAs: ["https://instagram.com/eka_balance"],
  };
  const speakable = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE}#webpage`,
    url: SITE,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", ".apple-subtitle", ".heading-3"],
    },
  };
  const schemas = [localBusiness, website, faqSchema, personSchema, speakable];
  return (
    <>
      {" "}
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}{" "}
    </>
  );
}
