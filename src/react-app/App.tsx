import { BrowserRouter as Router, Routes, Route } from "react-router";
import { HelmetProvider } from 'react-helmet-async';
import { SupabaseAuthProvider } from './contexts/SupabaseAuthContext.tsx';
import { Cursor } from './components/MotionPrimitives';
import ErrorBoundary from './components/ErrorBoundary';
import ScrollToTop from './components/ScrollToTop';
import { BookingProvider } from './components/BookingProvider';
import { LanguageProvider } from './contexts/LanguageContext.tsx';
import { DiscountProvider } from './contexts/DiscountContext.tsx';

// Page Imports
import HomePage from "@/react-app/pages/Home";
import Services from "@/react-app/pages/Services";
import Revision360Page from "@/react-app/pages/Revision360Page";
import VIPUltraPremium from "@/react-app/pages/VIPUltraPremium";

// Individual Service Pages
import MassatgePage from "@/react-app/pages/MassatgePage";
import KinesiologiaPage from "@/react-app/pages/KinesiologiaPage";
import NutricioPage from "@/react-app/pages/NutricioPage";
import AgenyzPage from "@/react-app/pages/AgenyzPage";

// Personal Services (Landing Pages)
import PersonalizedServices from "@/react-app/pages/PersonalizedServices";
import OfficeWorkers from "@/react-app/pages/PersonalizedServices/OfficeWorkers";
import Musicians from "@/react-app/pages/PersonalizedServices/Musicians";
import Athletes from "@/react-app/pages/PersonalizedServices/Athletes";
import Artists from "@/react-app/pages/PersonalizedServices/Artists";
import Students from "@/react-app/pages/PersonalizedServices/Students";

// Personalized Pages (Detailed)
import StudentsPersonalized from "@/react-app/pages/PersonalizedPages/Students";
import OfficeWorkersPersonalized from "@/react-app/pages/PersonalizedPages/OfficeWorkers";
import MusiciansPersonalized from "@/react-app/pages/PersonalizedPages/Musicians";
import AthletesPersonalized from "@/react-app/pages/PersonalizedPages/Athletes";
import ParentsPersonalized from "@/react-app/pages/PersonalizedPages/Parents";

// Contact Page
import ContactPage from "@/react-app/pages/Contact";

// About Elena Page
import AboutElena from "@/react-app/pages/AboutElena";

// Booking Page
import BookingPage from "@/react-app/pages/BookingPage";

// Discovery Form
import DiscoveryForm from "@/react-app/pages/DiscoveryForm";
import FirstTimeVisitor from './pages/FirstTimeVisitor';

// Cases Page
import Casos from './pages/Casos';
import CasoDetail from './pages/CasoDetail';

// Discounts Page
import Discounts from "@/react-app/pages/Discounts";

// Legal Pages
import PrivacyPolicy from "@/react-app/pages/PrivacyPolicy";
import CookiePolicy from "@/react-app/pages/CookiePolicy";
import TermsOfService from "@/react-app/pages/TermsOfService";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<Services />} />
      <Route path="/360-revision" element={<Revision360Page />} />

      {/* Individual Service Pages */}
      <Route path="/services/massage" element={<MassatgePage />} />
      <Route path="/services/kinesiology" element={<KinesiologiaPage />} />
      <Route path="/services/nutrition" element={<NutricioPage />} />
      <Route path="/agenyz" element={<AgenyzPage />} />
      <Route path="/vip" element={<VIPUltraPremium />} />

      {/* Personal Services */}
      <Route path="/personalized-services" element={<PersonalizedServices />} />
      <Route path="/services/office-workers" element={<OfficeWorkers />} />
      <Route path="/services/musicians" element={<Musicians />} />
      <Route path="/services/athletes" element={<Athletes />} />
      <Route path="/services/artists" element={<Artists />} />
      <Route path="/services/students" element={<Students />} />

      {/* Personalized Onboarding Pages */}
      <Route path="/for-students" element={<StudentsPersonalized />} />
      <Route path="/for-office-workers" element={<OfficeWorkersPersonalized />} />
      <Route path="/for-musicians" element={<MusiciansPersonalized />} />
      <Route path="/for-athletes" element={<AthletesPersonalized />} />
      <Route path="/for-parents" element={<ParentsPersonalized />} />

      {/* Contact */}
      <Route path="/contact" element={<ContactPage />} />

      {/* About Elena */}
      <Route path="/about-elena" element={<AboutElena />} />

      {/* Booking */}
      <Route path="/booking" element={<BookingPage />} />

      {/* Discovery Form */}
      <Route path="/discovery" element={<DiscoveryForm />} />
      <Route path="/first-time" element={<FirstTimeVisitor />} />

      {/* Cases */}
      <Route path="/cases" element={<Casos />} />
      <Route path="/cases/:id" element={<CasoDetail />} />

      {/* Discounts */}
      <Route path="/discounts" element={<Discounts />} />

      {/* Legal Pages */}
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/cookie-policy" element={<CookiePolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
    </Routes>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <SupabaseAuthProvider>
          <LanguageProvider>
            <DiscountProvider>
              <Cursor className="bg-blue-500" />
              <Router>
                <BookingProvider>
                  <ScrollToTop />
                  <AppRoutes />
                </BookingProvider>
              </Router>
            </DiscountProvider>
          </LanguageProvider>
        </SupabaseAuthProvider>
      </ErrorBoundary>
    </HelmetProvider>
  );
}
