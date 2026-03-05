import { PhoneCall, CalendarDays, MapPin, Mail, Clock, Shield, Heart, Star, ExternalLink, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../i18n';

export default function Footer() {
  const { language } = useLanguage();
  const isSpanish = language === 'es';

  return (
    <footer className="text-white pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-6 sm:pb-8 px-4 sm:px-6 md:px-12 lg:px-24 rounded-t-[2rem] sm:rounded-t-[2.5rem] md:rounded-t-[3rem] mt-8 sm:mt-12 relative overflow-hidden gradient-blue">
      {/* Star Emboss Background */}
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: true }}
        src="/assets/45.png"
        alt=""
        className="absolute bottom-0 right-0 w-[700px] h-[700px] object-contain pointer-events-none mix-blend-overlay"
      />
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.03 }}
        viewport={{ once: true }}
        src="/assets/45.png"
        alt=""
        className="absolute top-20 -left-20 w-[400px] h-[400px] object-contain pointer-events-none rotate-12"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top CTA Section */}
        <div className="mb-10 sm:mb-12 md:mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 border border-white/10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-5 sm:gap-6 md:gap-8">
              {/* Left side - Text */}
              <div className="text-center lg:text-left">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 tracking-tight">
                  {isSpanish ? 'Listo para Comenzar?' : 'Ready to Get Started?'}
                </h2>
                <p className="text-white/70 text-xs sm:text-sm md:text-base">
                  {isSpanish
                    ? 'Citas disponibles en 24 horas. Llámenos o reserve en línea.'
                    : 'Appointments available within 24 hours. Call us or book online.'}
                </p>
              </div>

              {/* Right side - Actions */}
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <a
                  href="tel:+13059828810"
                  className="flex items-center justify-center gap-2 sm:gap-3 bg-white text-[var(--color-brand-primary)] px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold hover:shadow-lg transition-all text-sm sm:text-base w-full sm:w-auto"
                >
                  <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>(305) 982-8810</span>
                </a>
                <Link
                  to="/medical-plan"
                  className="flex items-center justify-center gap-2 gradient-yellow-orange text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold hover:shadow-lg transition-all text-sm sm:text-base w-full sm:w-auto"
                >
                  <CalendarDays className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>{isSpanish ? 'Agendar Cita' : 'Book Appointment'}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-white/10 mb-10 sm:mb-12 md:mb-16" />

        {/* Middle Section: Logo & Links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12 md:mb-16">
          {/* Logo & Socials */}
          <div className="lg:col-span-4 space-y-4 sm:space-y-6 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start">
              <img
                src="/assets/images/logos/Logo_estrella_transparent.png"
                alt="Estrella Medical Centers"
                className="h-16 sm:h-20 md:h-24 w-auto object-contain"
              />
            </div>
            <p className="text-white/70 text-xs sm:text-sm max-w-xs mx-auto lg:mx-0 leading-relaxed">
              {isSpanish
                ? 'Donde su Salud Brilla Mas. Sirviendo al Sur de Florida con atencion primaria integral enfocada en geriatria desde 1994.'
                : 'Where Your Health Shines Brightest. Serving South Florida with comprehensive geriatric-focused primary care since 1994.'}
            </p>

            {/* Contact Info */}
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 text-white/70 text-xs sm:text-sm">
                <PhoneCall className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>+1 (305) 982-8810</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 text-white/70 text-xs sm:text-sm">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="text-[11px] sm:text-sm">info@estrellamedicalcenters.com</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 text-white/70 text-xs sm:text-sm">
                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>{isSpanish ? 'Lun-Vie: 7:30am-5pm | Sab: 8am-3pm' : 'Mon-Fri: 7:30am-5pm | Sat: 8am-3pm'}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 pt-2 sm:pt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[var(--color-brand-primary)] transition-colors">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[var(--color-brand-primary)] transition-colors">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[var(--color-brand-primary)] transition-colors">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
            <div>
              <h4 className="font-bold mb-4 sm:mb-6 text-xs sm:text-sm uppercase tracking-wider">{isSpanish ? 'Servicios' : 'Services'}</h4>
              <ul className="space-y-2 sm:space-y-4 text-xs sm:text-sm text-white/70">
                <li><Link to="/services/primary-care" className="hover:text-white transition-colors">{isSpanish ? 'Atencion Primaria' : 'Primary Care'}</Link></li>
                <li><Link to="/services/senior-care" className="hover:text-white transition-colors">{isSpanish ? 'Cuidado para Mayores' : 'Senior Care'}</Link></li>
                <li><Link to="/services/diagnostics" className="hover:text-white transition-colors">{isSpanish ? 'Diagnosticos' : 'Diagnostics'}</Link></li>
                <li><Link to="/services/pharmacy" className="hover:text-white transition-colors">{isSpanish ? 'Farmacia a Domicilio' : 'Home Pharmacy'}</Link></li>
                <li><Link to="/services/transportation" className="hover:text-white transition-colors">{isSpanish ? 'Transporte' : 'Transportation'}</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 sm:mb-6 text-xs sm:text-sm uppercase tracking-wider">{isSpanish ? 'Especialidades' : 'Specialties'}</h4>
              <ul className="space-y-2 sm:space-y-4 text-xs sm:text-sm text-white/70">
                <li><Link to="/services/cardiology" className="hover:text-white transition-colors">{isSpanish ? 'Cardiologia' : 'Cardiology'}</Link></li>
                <li><Link to="/services/endocrinology" className="hover:text-white transition-colors">{isSpanish ? 'Endocrinologia' : 'Endocrinology'}</Link></li>
                <li><Link to="/services/neurology" className="hover:text-white transition-colors">{isSpanish ? 'Neurologia' : 'Neurology'}</Link></li>
                <li><Link to="/services/podiatry" className="hover:text-white transition-colors">{isSpanish ? 'Podologia' : 'Podiatry'}</Link></li>
                <li><Link to="/services/optometry" className="hover:text-white transition-colors">{isSpanish ? 'Optometria' : 'Optometry'}</Link></li>
                <li><Link to="/services/wellness" className="hover:text-white transition-colors">{isSpanish ? 'Bienestar' : 'Wellness'}</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 sm:mb-6 text-xs sm:text-sm uppercase tracking-wider flex items-center gap-1.5">
                <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[var(--color-brand-accent)]" />
                {isSpanish ? 'Plan Medico' : 'Medical Plan'}
              </h4>
              <ul className="space-y-2 sm:space-y-4 text-xs sm:text-sm text-white/70">
                <li>
                  <Link to="/medical-plan" className="hover:text-white transition-colors flex items-center gap-1.5">
                    {isSpanish ? 'Plan Medico Estrella' : 'Estrella Medical Plan'}
                  </Link>
                </li>
                <li>
                  <a
                    href="https://affiliate.estrellamedicalplans.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <Users className="w-3 h-3" />
                    {isSpanish ? 'Ser Afiliado' : 'Become an Affiliate'}
                  </a>
                </li>
                <li>
                  <a
                    href="https://app.estrellamedicalplans.com/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <ExternalLink className="w-3 h-3" />
                    {isSpanish ? 'Portal de Afiliados' : 'Affiliate Portal'}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 sm:mb-6 text-xs sm:text-sm uppercase tracking-wider">{isSpanish ? 'Ubicaciones' : 'Locations'}</h4>
              <ul className="space-y-2 sm:space-y-4 text-xs sm:text-sm text-white/70">
                <li><a href="#locations" className="hover:text-white transition-colors flex items-center gap-1.5 sm:gap-2"><MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> Flagler</a></li>
                <li><a href="#locations" className="hover:text-white transition-colors flex items-center gap-1.5 sm:gap-2"><MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> Kendall</a></li>
                <li><a href="#locations" className="hover:text-white transition-colors flex items-center gap-1.5 sm:gap-2"><MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> Plantation</a></li>
                <li><a href="#locations" className="hover:text-white transition-colors flex items-center gap-1.5 sm:gap-2"><MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> Pembroke Pines</a></li>
                <li><a href="#locations" className="hover:text-white transition-colors flex items-center gap-1.5 sm:gap-2"><MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> Doral</a></li>
                <li><a href="#locations" className="hover:text-white transition-colors flex items-center gap-1.5 sm:gap-2"><MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> Hialeah</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 sm:mb-6 text-xs sm:text-sm uppercase tracking-wider">{isSpanish ? 'Sobre Nosotros' : 'About Us'}</h4>
              <ul className="space-y-2 sm:space-y-4 text-xs sm:text-sm text-white/70">
                <li><Link to="/about" className="hover:text-white transition-colors">{isSpanish ? 'Nuestra Historia' : 'Our Story'}</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">{isSpanish ? 'Mision y Vision' : 'Mission & Vision'}</Link></li>
                <li><Link to="/doctors" className="hover:text-white transition-colors">{isSpanish ? 'Nuestros Doctores' : 'Our Doctors'}</Link></li>
                <li><Link to="/medical-plan" className="hover:text-white transition-colors">{isSpanish ? 'Plan Medico' : 'Medical Plan'}</Link></li>
                <li><a href="mailto:niurka@estrellamedicalcenters.com" className="hover:text-white transition-colors">{isSpanish ? 'Carreras' : 'Careers'}</a></li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="border-white/10 mb-6 sm:mb-8" />

        {/* Compliance Section */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[10px] sm:text-xs text-white/60 mb-3 sm:mb-4">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>{isSpanish ? 'Proveedor de Medicare' : 'Medicare Provider'}</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
              <span>ADA Accessible</span>
            </div>
          </div>
          <p className="text-center text-[10px] sm:text-xs text-white/50 max-w-4xl mx-auto leading-relaxed px-2">
            {isSpanish
              ? 'Estrella Medical Centers cumple con las leyes federales de derechos civiles aplicables y no discrimina por motivos de raza, color, origen nacional, edad, discapacidad o sexo. Estrella Medical Centers cumple con la Ley de Portabilidad y Responsabilidad del Seguro Medico (HIPAA) de 1996.'
              : 'Estrella Medical Centers complies with applicable Federal civil rights laws and does not discriminate on the basis of race, color, national origin, age, disability, or sex. Estrella Medical Centers complies with the Health Insurance Portability and Accountability Act (HIPAA) of 1996.'}
          </p>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 text-[10px] sm:text-xs text-white/50 pt-4 sm:pt-6 border-t border-white/10">
          <p className="text-center md:text-left">&copy; {new Date().getFullYear()} Estrella Medical Centers. {isSpanish ? 'Todos los derechos reservados.' : 'All rights reserved.'}</p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6">
            <a href="#" className="hover:text-white transition-colors">{isSpanish ? 'Privacidad' : 'Privacy'}</a>
            <a href="#" className="hover:text-white transition-colors">{isSpanish ? 'Terminos' : 'Terms'}</a>
            <a href="#" className="hover:text-white transition-colors">HIPAA</a>
            <a href="#" className="hover:text-white transition-colors">{isSpanish ? 'Accesibilidad' : 'Accessibility'}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
