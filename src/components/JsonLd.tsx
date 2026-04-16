export default function JsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "name": "EKA Balance",
    "image": "https://ekabalance.com/images/eka_logo.png",
    "@id": "https://ekabalance.com",
    "url": "https://ekabalance.com",
    "telephone": "+34658867133",
    "email": "contact@ekabalance.com",
    "description": "Holistic somatic therapies and integrative wellness services in Barcelona. Specializing in massage, kinesiology, nutrition, and movement therapy.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Carrer Pelai, 12",
      "addressLocality": "Barcelona",
      "postalCode": "08001",
      "addressRegion": "Catalonia",
      "addressCountry": "ES"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.3851,
      "longitude": 2.1734
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "20:00"
      }
    ],
    "sameAs": [
      "https://instagram.com/eka_balance"
    ],
    "priceRange": "$$",
    "areaServed": {
      "@type": "City",
      "name": "Barcelona"
    },
    "knowsLanguage": ["ca", "en", "es", "ru"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Wellness Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Somatic Massage",
            "description": "Deep tissue work with somatic awareness for pain relief, relaxation, and improved mobility.",
            "url": "https://ekabalance.com/services/massage"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Holistic Kinesiology",
            "description": "Holistic approach using muscle testing to identify and correct structural, chemical, and emotional imbalances.",
            "url": "https://ekabalance.com/services/kinesiology"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Nutrition Counseling",
            "description": "Personalized nutritional guidance focusing on gut health, inflammation, and energy levels.",
            "url": "https://ekabalance.com/services/nutrition"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "360° Revision",
            "description": "Comprehensive assessment of your physical and emotional state including posture, tension, and emotional balance.",
            "url": "https://ekabalance.com/360-revision"
          }
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does EKA Balance offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "EKA Balance offers somatic massage, holistic kinesiology, nutrition counseling, movement therapy (JKA/Feldenkrais), supplements (Agenyz), and comprehensive 360° health revisions."
        }
      },
      {
        "@type": "Question",
        "name": "Where is EKA Balance located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "EKA Balance is located in Barcelona, Spain, at Carrer Pelai, 12, 08001."
        }
      },
      {
        "@type": "Question",
        "name": "What languages are spoken at EKA Balance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sessions are available in English, Spanish, Catalan, and Russian."
        }
      },
      {
        "@type": "Question",
        "name": "How do I book an appointment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can book an appointment online at ekabalance.com/booking or contact us directly by phone or email."
        }
      },
      {
        "@type": "Question",
        "name": "What is a 360° Revision?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A 360° Revision is a comprehensive assessment of your current state, including posture, muscle tension, emotional stress, and biochemical balance, to create a personalized recovery roadmap."
        }
      }
    ]
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Elena Kucherova",
    "jobTitle": "Integrative Therapist",
    "worksFor": {
      "@type": "Organization",
      "name": "EKA Balance"
    },
    "url": "https://ekabalance.com/about-elena",
    "knowsLanguage": ["ca", "en", "es", "ru"]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </>
  );
}
