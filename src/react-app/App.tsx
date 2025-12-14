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
import VIPUltraPremium from "@/react-app/pages/VIPUltraPremium";

// Individual Service Pages
import MassatgePage from "@/react-app/pages/MassatgePage";
import KinesiologiaPage from "@/react-app/pages/KinesiologiaPage";
import NutricioPage from "@/react-app/pages/NutricioPage";

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
      {/* Revisió 360° routes redirect to external app */}

      {/* Individual Service Pages */}
      <Route path="/serveis/massatge" element={<MassatgePage />} />
      <Route path="/serveis/kinesiologia" element={<KinesiologiaPage />} />
      <Route path="/serveis/nutritio" element={<NutricioPage />} />
      <Route path="/vip" element={<VIPUltraPremium />} />

      {/* Personal Services */}
      <Route path="/serveis-personalitzats" element={<PersonalizedServices />} />
      <Route path="/serveis/treballadors-oficina" element={<OfficeWorkers />} />
      <Route path="/serveis/musics" element={<Musicians />} />
      <Route path="/serveis/esportistes" element={<Athletes />} />
      <Route path="/serveis/artistes" element={<Artists />} />
      <Route path="/serveis/estudiants" element={<Students />} />

      {/* Personalized Onboarding Pages */}
      <Route path="/per-a-estudiants" element={<StudentsPersonalized />} />
      <Route path="/per-a-treballadors-oficina" element={<OfficeWorkersPersonalized />} />
      <Route path="/per-a-musics" element={<MusiciansPersonalized />} />
      <Route path="/per-a-esportistes" element={<AthletesPersonalized />} />
      <Route path="/per-a-pares" element={<ParentsPersonalized />} />

      {/* Contact */}
      <Route path="/contacte" element={<ContactPage />} />

      {/* About Elena */}
      <Route path="/sobre-elena" element={<AboutElena />} />

      {/* Booking */}
      <Route path="/booking" element={<BookingPage />} />

      {/* Discovery Form */}
      <Route path="/descobriment" element={<DiscoveryForm />} />
      <Route path="/primer-cop" element={<FirstTimeVisitor />} />

      {/* Cases */}
      <Route path="/casos" element={<Casos />} />
      <Route path="/casos/:id" element={<CasoDetail />} />

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
