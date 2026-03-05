/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './i18n';
import Home from './pages/Home';
import DoctorsPage from './pages/DoctorsPage';
import AboutPage from './pages/AboutPage';
import MedicalPlanPage from './pages/MedicalPlanPage';
import ThankYouPage from './pages/ThankYouPage';
import PrimaryCarePage from './pages/services/PrimaryCarePage';
import CardiologyPage from './pages/services/CardiologyPage';
import DentalPage from './pages/services/DentalPage';
import PharmacyPage from './pages/services/PharmacyPage';
import SeniorCarePage from './pages/services/SeniorCarePage';
import DiagnosticsPage from './pages/services/DiagnosticsPage';
import EndocrinologyPage from './pages/services/EndocrinologyPage';
import NeurologyPage from './pages/services/NeurologyPage';
import PodiatryPage from './pages/services/PodiatryPage';
import OptometryPage from './pages/services/OptometryPage';
import WellnessPage from './pages/services/WellnessPage';
import SocialWorkPage from './pages/services/SocialWorkPage';
import NutritionPage from './pages/services/NutritionPage';
import TransportationPage from './pages/services/TransportationPage';

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/services/primary-care" element={<PrimaryCarePage />} />
          <Route path="/services/cardiology" element={<CardiologyPage />} />
          <Route path="/services/dental" element={<DentalPage />} />
          <Route path="/services/pharmacy" element={<PharmacyPage />} />
          <Route path="/services/senior-care" element={<SeniorCarePage />} />
          <Route path="/services/diagnostics" element={<DiagnosticsPage />} />
          <Route path="/services/endocrinology" element={<EndocrinologyPage />} />
          <Route path="/services/neurology" element={<NeurologyPage />} />
          <Route path="/services/podiatry" element={<PodiatryPage />} />
          <Route path="/services/optometry" element={<OptometryPage />} />
          <Route path="/services/wellness" element={<WellnessPage />} />
          <Route path="/services/social-work" element={<SocialWorkPage />} />
          <Route path="/services/nutrition" element={<NutritionPage />} />
          <Route path="/services/transportation" element={<TransportationPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/medical-plan" element={<MedicalPlanPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}
