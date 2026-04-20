import type { Locale } from '@/lib/i18n';

const SITE = "https://ekabalance.com";
export default function JsonLd(_props: { locale?: Locale } = {}) {
  void _props;
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HealthAndBeautyBusiness"],
    "@id": `${SITE}#business`,
    name: "EKA Balance",
    alternateName: "EKA Balance Barcelona",
    url: SITE,
    telephone: "+34658867133",
    email: "contact@ekabalance.com",
    description:
      "Holistic wellness center in central Barcelona specialising in therapeutic massage, kinesiology, nutrition counseling, and personalized recovery programs. Sessions in English, Spanish, Catalan, and Russian.",
    image: [
      `${SITE}/images/therapist_photo.jpg`,
      `${SITE}/images/og-default.jpg`,
    ],
    logo: `${SITE}/images/logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Carrer Pelai, 12",
      addressLocality: "Barcelona",
      postalCode: "08001",
      addressRegion: "Catalonia",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.3851,
      longitude: 2.1734,
    },
    hasMap: "https://maps.google.com/?q=Carrer+Pelai+12+Barcelona",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "20:00",
      },
    ],
    sameAs: [
      "https://instagram.com/eka_balance",
    ],
    priceRange: "$$",
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    areaServed: [
      { "@type": "City", name: "Barcelona" },
      { "@type": "City", name: "Rubí" },
    ],
    knowsLanguage: [
      { "@type": "Language", name: "Catalan", alternateName: "ca" },
      { "@type": "Language", name: "English", alternateName: "en" },
      { "@type": "Language", name: "Spanish", alternateName: "es" },
      { "@type": "Language", name: "Russian", alternateName: "ru" },
    ],
    founder: {
      "@type": "Person",
      name: "Elena Kucherova",
      url: `${SITE}/about-elena`,
    },
    potentialAction: [
      {
        "@type": "ReserveAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE}/booking`,
          actionPlatform: [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/MobileWebPlatform",
          ],
        },
        result: { "@type": "Reservation", name: "Therapy session booking" },
      },
      {
        "@type": "CommunicateAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://wa.me/34658867133",
        },
        name: "Chat on WhatsApp",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "EKA Balance Wellness Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": `${SITE}/services/massage#service`,
            name: "Therapeutic Massage",
            description:
              "Professional therapeutic massage including deep tissue, relaxation, and somatic techniques. Relieves chronic pain, muscular tension, and stress. Sessions 60–120 min.",
            url: `${SITE}/services/massage`,
            provider: { "@id": `${SITE}#business` },
            areaServed: { "@type": "City", name: "Barcelona" },
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "EUR",
            price: "60",
            minPrice: "60",
            maxPrice: "120",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": `${SITE}/services/kinesiology#service`,
            name: "Holistic Kinesiology",
            description:
              "Applied kinesiology using muscle testing to identify and correct structural, biochemical, and emotional imbalances. Personalised to each client's needs.",
            url: `${SITE}/services/kinesiology`,
            provider: { "@id": `${SITE}#business` },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": `${SITE}/services/nutrition#service`,
            name: "Nutrition Counseling",
            description:
              "Functional nutrition coaching for gut health, inflammation control, and energy optimisation. Personalised dietary strategy with follow-up sessions.",
            url: `${SITE}/services/nutrition`,
            provider: { "@id": `${SITE}#business` },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": `${SITE}/360-revision#service`,
            name: "360° Health Revision",
            description:
              "Comprehensive body-mind assessment covering posture, muscle tension, emotional stress, and biochemical balance. Produces a personalised recovery roadmap.",
            url: `${SITE}/360-revision`,
            provider: { "@id": `${SITE}#business` },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Family Constellations",
            description:
              "Systemic family constellation sessions to uncover and heal inherited relational and emotional patterns.",
            url: `${SITE}/services/constelaciones`,
            provider: { "@id": `${SITE}#business` },
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
    description: "Holistic wellness center in Barcelona – therapeutic massage, kinesiology, nutrition, and 360° health revisions.",
    publisher: { "@id": `${SITE}#business` },
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
          text: "EKA Balance offers therapeutic massage (deep tissue, relaxation, somatic), holistic kinesiology, nutrition counseling, movement therapy (Feldenkrais/JKA method), family constellations, natural supplements (Agenyz), and comprehensive 360° health revisions. Specialised programs exist for athletes, musicians, office workers, students, artists, parents, and families.",
        },
      },
      {
        "@type": "Question",
        name: "Where is EKA Balance located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "EKA Balance is located at Carrer Pelai, 12, 08001 Barcelona — near Plaça Universitat, easily accessible by metro (L1/L2). Online sessions are also available for nutrition counseling, kinesiology follow-ups, and 360° revisions.",
        },
      },
      {
        "@type": "Question",
        name: "What languages are sessions available in?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sessions at EKA Balance are conducted in English, Spanish (Castellano), Catalan, and Russian. You can choose your preferred language when booking.",
        },
      },
      {
        "@type": "Question",
        name: "How do I book an appointment at EKA Balance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can book online at ekabalance.com/booking, via WhatsApp at +34 658 867 133, or by email at contact@ekabalance.com. New clients are encouraged to start with a 360° Revision or a first-time discovery session.",
        },
      },
      {
        "@type": "Question",
        name: "What is a 360° Revision?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A 360° Revision is a comprehensive 90–120 minute assessment of your physical, emotional, and biochemical state. It covers posture analysis, muscle tension mapping, emotional stress patterns, and nutritional balance to produce a personalised recovery roadmap and therapy recommendations.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a typical session last?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Standard therapeutic massage and kinesiology sessions run 60 or 90 minutes. A first-time 360° Revision lasts 90–120 minutes. Nutrition counseling sessions are 60 minutes. You can choose session length when booking.",
        },
      },
      {
        "@type": "Question",
        name: "What is the cancellation policy at EKA Balance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Appointments can be rescheduled or cancelled free of charge up to 24 hours before the session. Cancellations within 24 hours incur the full session fee. Please contact us via WhatsApp as early as possible if you need to cancel.",
        },
      },
      {
        "@type": "Question",
        name: "Are online sessions available?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Nutrition counseling, 360° Revisions, kinesiology consultations, and follow-up sessions can be delivered online via video call. Hands-on therapies such as massage and Feldenkrais movement work are available in-person only.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer packages, memberships, or discounts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. EKA Balance offers multi-session packages, a first-time discount for new clients, and an exclusive VIP Inner Circle membership with priority access, personalised health monitoring, and preferential rates. See ekabalance.com/discounts for current offers.",
        },
      },
      {
        "@type": "Question",
        name: "Who is EKA Balance suitable for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "EKA Balance serves adults, families, children, athletes, musicians, artists, office workers, students, and parents. Specialised programs address chronic stress, back and neck pain, burnout, postural issues, sports recovery, performance anxiety, learning difficulties in children, and parental exhaustion.",
        },
      },
      {
        "@type": "Question",
        name: "What is holistic kinesiology and how does it work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Holistic kinesiology uses manual muscle testing as a biofeedback tool to detect imbalances in the body's structural, biochemical, and emotional systems. The practitioner applies gentle corrections — such as acupressure points, nutritional recommendations, or movement cues — to restore balance and relieve symptoms.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between therapeutic massage and relaxation massage?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Therapeutic massage targets specific musculoskeletal problems (chronic pain, postural tension, injury recovery) using deeper pressure, myofascial release, and trigger point techniques. Relaxation massage focuses on general stress relief, improved circulation, and mental calm using flowing, lighter strokes. EKA Balance offers both, often combining techniques within a single session.",
        },
      },
      {
        "@type": "Question",
        name: "Is kinesiology covered by health insurance in Spain?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Holistic kinesiology is not typically covered by Spanish public health insurance (Seguridad Social). Some private health insurers may partially cover complementary therapies — check your policy. EKA Balance provides receipts for all sessions that you can submit to your insurer.",
        },
      },
    ],
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE}/about-elena#person`,
    name: "Elena Kucherova",
    givenName: "Elena",
    familyName: "Kucherova",
    jobTitle: "Integrative Therapist & Kinesiologist",
    worksFor: {
      "@type": "Organization",
      name: "EKA Balance",
      url: SITE,
    },
    url: `${SITE}/about-elena`,
    image: `${SITE}/images/therapist_photo.jpg`,
    knowsLanguage: [
      { "@type": "Language", name: "Catalan" },
      { "@type": "Language", name: "English" },
      { "@type": "Language", name: "Spanish" },
      { "@type": "Language", name: "Russian" },
    ],
    knowsAbout: [
      "Holistic Kinesiology",
      "Somatic Massage",
      "Functional Nutrition",
      "Feldenkrais Method",
      "Family Constellations",
      "Somatic Movement Therapy",
      "Integrative Wellness",
      "Myofascial Release",
      "Emotional Kinesiology",
    ],
    description:
      "Elena Kucherova is an integrative therapist and founder of EKA Balance in Barcelona. She specialises in holistic kinesiology, somatic massage, functional nutrition, Feldenkrais method, and family constellations. She works with clients in four languages.",
    sameAs: ["https://instagram.com/eka_balance"],
  };

  const speakable = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE}#webpage`,
    url: SITE,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", ".apple-subtitle", ".heading-3", "[data-speakable]"],
    },
  };
  const schemas = [localBusiness, website, faqSchema, personSchema, speakable];
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
