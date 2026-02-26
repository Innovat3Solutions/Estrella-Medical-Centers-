import { ChevronDown, ChevronRight, CalendarDays, Menu, X, Globe, Phone, Star } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from '../i18n';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const isSpanish = language === 'es';

  // Handle scroll to locations section
  const scrollToLocations = (e: MouseEvent | any) => {
    e.preventDefault();

    // If we're on the home page, scroll directly
    if (location.pathname === '/') {
      const element = document.getElementById('locations');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page first, then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById('locations');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const navItems = [
    {
      name: isSpanish ? 'Plan Medico Estrella' : 'Estrella Medical Plan',
      href: '/medical-plan',
      subItems: null,
      highlight: true,
      external: false,
    },
    {
      name: t.header.medicalServices,
      href: '/services',
      subItems: [
        { name: isSpanish ? 'Atencion Primaria' : 'Primary Care', href: '/services/primary-care' },
        { name: isSpanish ? 'Cuidado de Mayores' : 'Senior Care', href: '/services/senior-care' },
        { name: isSpanish ? 'Cardiologia' : 'Cardiology', href: '/services/cardiology' },
        { name: isSpanish ? 'Endocrinologia' : 'Endocrinology', href: '/services/endocrinology' },
        { name: isSpanish ? 'Neurologia' : 'Neurology', href: '/services/neurology' },
        { name: isSpanish ? 'Podologia' : 'Podiatry', href: '/services/podiatry' },
        { name: isSpanish ? 'Servicios Dentales' : 'Dental Care', href: '/services/dental' },
        { name: isSpanish ? 'Optometria' : 'Optometry', href: '/services/optometry' },
      ],
      highlight: false,
      external: false,
    },
    {
      name: t.header.otherServices,
      href: '/services',
      subItems: [
        { name: isSpanish ? 'Diagnosticos en Clinica' : 'On-Site Diagnostics', href: '/services/diagnostics' },
        { name: isSpanish ? 'Prevencion y Bienestar' : 'Preventive & Wellness', href: '/services/wellness' },
        { name: isSpanish ? 'Farmacia Interna' : 'In-House Pharmacy', href: '/services/pharmacy' },
        { name: isSpanish ? 'Trabajo Social' : 'Social Work', href: '/services/social-work' },
        { name: isSpanish ? 'Transporte' : 'Transportation', href: '/services/transportation' },
        { name: isSpanish ? 'Nutricion' : 'Nutrition', href: '/services/nutrition' },
      ],
      highlight: false,
      external: false,
    },
    {
      name: t.header.ourDoctors,
      href: '/doctors',
      subItems: null,
      highlight: false,
      external: false,
    },
    {
      name: t.header.ourCenters,
      href: '/#locations',
      subItems: null,
      highlight: false,
      external: false,
      isLocations: true,
    },
    {
      name: t.header.aboutUs,
      href: '/about',
      subItems: null,
      highlight: false,
      external: false,
    },
  ];

  const renderNavItem = (item: typeof navItems[0]) => (
    <div key={item.name} className="relative group">
      {item.subItems ? (
        <>
          <button className="flex items-center gap-1.5 text-sm font-semibold text-[#1e293b] hover:text-[var(--color-brand-primary)] transition-colors py-2.5 px-4">
            {item.name}
            <ChevronDown className="w-3.5 h-3.5 text-[#64748b] group-hover:rotate-180 transition-transform duration-300" />
          </button>
          <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-3 min-w-[220px] flex flex-col gap-1">
              {item.subItems.map((sub, idx) => (
                <Link
                  key={idx}
                  to={sub.href}
                  className="px-4 py-2.5 hover:bg-gray-50 rounded-xl text-sm text-[#64748b] hover:text-[var(--color-brand-primary)] font-medium transition-colors"
                >
                  {sub.name}
                </Link>
              ))}
            </div>
          </div>
        </>
      ) : (
        <a
          href={item.href}
          onClick={(item as any).isLocations ? scrollToLocations : undefined}
          target={item.external ? '_blank' : undefined}
          rel={item.external ? 'noopener noreferrer' : undefined}
          className={`flex items-center text-sm font-semibold transition-all py-2.5 px-4 rounded-full ${
            item.highlight
              ? 'gradient-yellow-orange text-white hover:shadow-lg shadow-md'
              : 'text-[#1e293b] hover:text-[var(--color-brand-primary)]'
          }`}
        >
          {item.name}
        </a>
      )}
    </div>
  );

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setExpandedMenu(null);
  };

  const MobileMenuPortal = () => {
    if (!mobileMenuOpen) return null;

    return createPortal(
      <>
        {/* Overlay */}
        <div
          className="fixed inset-0 bg-black/50"
          style={{ zIndex: 99999 }}
          onClick={closeMobileMenu}
        />

        {/* Menu Panel */}
        <div
          className="fixed top-0 right-0 h-full w-[300px] max-w-[85vw] bg-white shadow-2xl flex flex-col"
          style={{ zIndex: 100000 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 flex-shrink-0">
            <img
              src="/assets/images/logos/Logo_estrella_transparent.png"
              alt="Estrella Medical Centers"
              className="h-12 w-auto"
            />
            <button
              onClick={closeMobileMenu}
              className="p-2 -mr-2 rounded-full hover:bg-gray-100"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto">
            {/* Estrella Medical Plan - Featured */}
            <div className="p-5 border-b border-gray-200">
              <Link
                to="/medical-plan"
                onClick={closeMobileMenu}
                className="block gradient-yellow-orange text-white p-4 rounded-xl text-center font-bold shadow-lg"
              >
                <Star className="w-5 h-5 inline-block mr-2 -mt-0.5" />
                {isSpanish ? 'Plan Médico Estrella' : 'Estrella Medical Plan'}
              </Link>
            </div>

            {/* Navigation */}
            <nav className="py-2">
              {/* Medical Services */}
              <div className="border-b border-gray-100">
                <button
                  onClick={() => setExpandedMenu(expandedMenu === 'medical' ? null : 'medical')}
                  className="flex items-center justify-between w-full px-5 py-4 text-left"
                >
                  <span className="font-semibold text-gray-900">{t.header.medicalServices}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${expandedMenu === 'medical' ? 'rotate-180' : ''}`} />
                </button>
                {expandedMenu === 'medical' && (
                  <div className="bg-gray-50 px-5 py-3 space-y-1">
                    {navItems[1].subItems?.map((sub, idx) => (
                      <Link
                        key={idx}
                        to={sub.href}
                        onClick={closeMobileMenu}
                        className="block py-2.5 px-3 text-gray-600 hover:text-[var(--color-brand-primary)] hover:bg-white rounded-lg text-sm"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Other Services */}
              <div className="border-b border-gray-100">
                <button
                  onClick={() => setExpandedMenu(expandedMenu === 'other' ? null : 'other')}
                  className="flex items-center justify-between w-full px-5 py-4 text-left"
                >
                  <span className="font-semibold text-gray-900">{t.header.otherServices}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${expandedMenu === 'other' ? 'rotate-180' : ''}`} />
                </button>
                {expandedMenu === 'other' && (
                  <div className="bg-gray-50 px-5 py-3 space-y-1">
                    {navItems[2].subItems?.map((sub, idx) => (
                      <Link
                        key={idx}
                        to={sub.href}
                        onClick={closeMobileMenu}
                        className="block py-2.5 px-3 text-gray-600 hover:text-[var(--color-brand-primary)] hover:bg-white rounded-lg text-sm"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Our Doctors */}
              <Link
                to="/doctors"
                onClick={closeMobileMenu}
                className="flex items-center justify-between px-5 py-4 border-b border-gray-100"
              >
                <span className="font-semibold text-gray-900">{t.header.ourDoctors}</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </Link>

              {/* Our Centers */}
              <a
                href="/#locations"
                onClick={(e) => {
                  scrollToLocations(e);
                  closeMobileMenu();
                }}
                className="flex items-center justify-between px-5 py-4 border-b border-gray-100"
              >
                <span className="font-semibold text-gray-900">{t.header.ourCenters}</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </a>

              {/* About Us */}
              <Link
                to="/about"
                onClick={closeMobileMenu}
                className="flex items-center justify-between px-5 py-4 border-b border-gray-100"
              >
                <span className="font-semibold text-gray-900">{t.header.aboutUs}</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </Link>
            </nav>
          </div>

          {/* Bottom Actions */}
          <div className="border-t border-gray-200 p-5 space-y-3 bg-gray-50 flex-shrink-0">
            {/* Language Toggle */}
            <div className="flex rounded-lg overflow-hidden border border-gray-200">
              <button
                onClick={() => setLanguage('en')}
                className={`flex-1 py-2.5 text-sm font-medium transition-colors ${
                  language === 'en'
                    ? 'bg-[var(--color-brand-primary)] text-white'
                    : 'bg-white text-gray-700'
                }`}
              >
                🇺🇸 English
              </button>
              <button
                onClick={() => setLanguage('es')}
                className={`flex-1 py-2.5 text-sm font-medium transition-colors ${
                  language === 'es'
                    ? 'bg-[var(--color-brand-primary)] text-white'
                    : 'bg-white text-gray-700'
                }`}
              >
                🇪🇸 Español
              </button>
            </div>

            {/* Call Now */}
            <a
              href="tel:+13059828810"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full border-2 border-[var(--color-brand-primary)] text-[var(--color-brand-primary)] font-semibold"
            >
              <Phone className="w-5 h-5" />
              (305) 982-8810
            </a>

            {/* Schedule Appointment */}
            <a
              href="https://estrella-plan.lovable.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full gradient-blue text-white py-3 rounded-full font-semibold"
            >
              <CalendarDays className="w-5 h-5" />
              {t.header.scheduleAppointment}
            </a>
          </div>
        </div>
      </>,
      document.body
    );
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full py-4 px-6 md:px-8 lg:px-12 xl:px-16 bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 shadow-sm"
      >
        <div className="max-w-[1600px] mx-auto flex items-center justify-between gap-8">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="/assets/images/logos/Logo_estrella_transparent.png"
              alt="Estrella Medical Centers"
              className="h-14 md:h-16 lg:h-[72px] w-auto"
            />
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map(renderNavItem)}
          </nav>

          {/* Right Actions - Desktop */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-full border border-gray-200 text-sm font-medium text-[#1e293b] hover:bg-gray-50 transition-colors"
              >
                <Globe className="w-4 h-4 text-[var(--color-brand-primary)]" />
                <span>{language.toUpperCase()}</span>
                <ChevronDown className={`w-3 h-3 text-[#64748b] transition-transform ${langMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {langMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden min-w-[140px] z-50"
                  >
                    <button
                      onClick={() => { setLanguage('en'); setLangMenuOpen(false); }}
                      className={`w-full px-4 py-3 text-left text-sm font-medium hover:bg-gray-50 transition-colors flex items-center gap-3 ${language === 'en' ? 'text-[var(--color-brand-primary)] bg-[var(--color-brand-light)]' : 'text-[#1e293b]'}`}
                    >
                      <span className="text-lg">🇺🇸</span>
                      English
                    </button>
                    <button
                      onClick={() => { setLanguage('es'); setLangMenuOpen(false); }}
                      className={`w-full px-4 py-3 text-left text-sm font-medium hover:bg-gray-50 transition-colors flex items-center gap-3 ${language === 'es' ? 'text-[var(--color-brand-primary)] bg-[var(--color-brand-light)]' : 'text-[#1e293b]'}`}
                    >
                      <span className="text-lg">🇪🇸</span>
                      Español
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Schedule Button */}
            <a
              href="https://estrella-plan.lovable.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 gradient-blue hover:shadow-lg text-white px-6 py-3 rounded-full font-semibold text-sm transition-all"
            >
              <CalendarDays className="w-4 h-4" />
              {t.header.scheduleAppointment}
            </a>
          </div>

          {/* Mobile Controls */}
          <div className="flex lg:hidden items-center gap-3">
            {/* Language switcher for mobile */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1 px-2 py-2 rounded-full border border-gray-200 text-sm font-medium text-[#1e293b] hover:bg-gray-50 transition-colors"
              >
                <Globe className="w-4 h-4 text-[var(--color-brand-primary)]" />
                <span className="text-xs">{language.toUpperCase()}</span>
              </button>

              <AnimatePresence>
                {langMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden min-w-[140px] z-50"
                  >
                    <button
                      onClick={() => { setLanguage('en'); setLangMenuOpen(false); }}
                      className={`w-full px-4 py-3 text-left text-sm font-medium hover:bg-gray-50 transition-colors flex items-center gap-3 ${language === 'en' ? 'text-[var(--color-brand-primary)] bg-[var(--color-brand-light)]' : 'text-[#1e293b]'}`}
                    >
                      <span className="text-lg">🇺🇸</span>
                      English
                    </button>
                    <button
                      onClick={() => { setLanguage('es'); setLangMenuOpen(false); }}
                      className={`w-full px-4 py-3 text-left text-sm font-medium hover:bg-gray-50 transition-colors flex items-center gap-3 ${language === 'es' ? 'text-[var(--color-brand-primary)] bg-[var(--color-brand-light)]' : 'text-[#1e293b]'}`}
                    >
                      <span className="text-lg">🇪🇸</span>
                      Español
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Menu className="w-6 h-6 text-[#1e293b]" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu - Rendered via Portal */}
      <MobileMenuPortal />
    </>
  );
}
