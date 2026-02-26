import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../i18n';

// Custom unique icons for Estrella Medical Centers services

// Primary Care - Classic Stethoscope
const PrimaryCareIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 10.5v-3a6 6 0 0 1 6-6" />
    <path d="M19.5 10.5v-3a6 6 0 0 0-6-6" />
    <circle cx="4.5" cy="12.5" r="2" />
    <circle cx="19.5" cy="12.5" r="2" />
    <path d="M4.5 14.5v2a5 5 0 0 0 5 5h2" />
    <path d="M19.5 14.5v2a5 5 0 0 1-5 5h-2" />
    <circle cx="12" cy="21.5" r="1.5" />
    <path d="M12 20v-5" />
    <circle cx="12" cy="13" r="2" />
  </svg>
);

// Cardiology - Heart with EKG pulse line
const CardiologyIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
    <path d="M5 12h2l1.5 -3l2 6l2 -4l1.5 2h3" />
  </svg>
);

// Dental - Clean Tooth icon
const DentalIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2c-1.7 0-3.2.4-4.2 1.2c-.9.7-1.5 1.7-1.7 2.8c-.3 1.5.1 3.1.7 4.5c.4 1 .7 2 .9 3c.2 1.3.3 2.7.3 4v1.5c0 1.5.3 2.5 1 3c.5.3 1.2.5 2 .5c1.2 0 2-.7 2.2-1.8l.8-4.2l.8 4.2c.2 1.1 1 1.8 2.2 1.8c.8 0 1.5-.2 2-.5c.7-.5 1-1.5 1-3v-1.5c0-1.3.1-2.7.3-4c.2-1 .5-2 .9-3c.6-1.4 1-3 .7-4.5c-.2-1.1-.8-2.1-1.7-2.8c-1-.8-2.5-1.2-4.2-1.2z" />
    <path d="M9 8.5c.5.5 1.5 1 3 1s2.5-.5 3-1" />
  </svg>
);

const LaboratoryIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 3v3" />
    <path d="M15 3v3" />
    <path d="M9 6h6" />
    <path d="M8 6l-3 14h14l-3-14" />
    <path d="M6.5 15h11" />
    <circle cx="10" cy="18" r="1" />
    <circle cx="14" cy="17" r="0.5" />
    <circle cx="12" cy="12" r="0.5" />
    <circle cx="9" cy="11" r="0.5" />
    <circle cx="15" cy="13" r="0.5" />
  </svg>
);

const PharmacyIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="6" width="18" height="15" rx="2" />
    <path d="M3 11h18" />
    <path d="M12 6V3" />
    <path d="M9 3h6" />
    <path d="M10 15h4" />
    <path d="M12 13v4" />
    <path d="M7 15h.01" />
    <path d="M17 15h.01" />
  </svg>
);

const OptometryIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6.5" cy="12" r="3.5" />
    <circle cx="17.5" cy="12" r="3.5" />
    <path d="M3 12h0" />
    <path d="M21 12h0" />
    <path d="M10 12h4" />
    <path d="M6.5 8.5v0" />
    <path d="M17.5 8.5v0" />
    <circle cx="6.5" cy="12" r="1.5" />
    <circle cx="17.5" cy="12" r="1.5" />
  </svg>
);

// Six popular services with images and detailed info
const popularServices = [
  {
    id: 'primary-care',
    Icon: PrimaryCareIcon,
    titleEn: 'Primary Care',
    titleEs: 'Atencion Primaria',
    descEn: 'Comprehensive health management and preventive care',
    descEs: 'Manejo integral de salud y cuidado preventivo',
    detailEn: 'Our primary care physicians serve as your first point of contact for all health concerns. We focus on preventive care, chronic disease management, and building lasting relationships with our patients. With our 24-hour appointment guarantee, you never have to wait to see your doctor.',
    detailEs: 'Nuestros medicos de atencion primaria son su primer punto de contacto para todas las preocupaciones de salud. Nos enfocamos en cuidado preventivo, manejo de enfermedades cronicas y construir relaciones duraderas con nuestros pacientes. Con nuestra garantia de cita en 24 horas, nunca tendra que esperar para ver a su doctor.',
    image: '/assets/images/services/primary-care.png',
    href: '/services/primary-care',
  },
  {
    id: 'cardiology',
    Icon: CardiologyIcon,
    titleEn: 'Cardiology',
    titleEs: 'Cardiologia',
    descEn: 'Heart health specialists for comprehensive cardiac care',
    descEs: 'Especialistas en salud del corazon para atencion cardiaca integral',
    detailEn: 'Our cardiology team provides comprehensive heart care, from preventive screenings and EKGs to ongoing management of cardiovascular conditions like hypertension and heart disease. We use advanced diagnostic technology to monitor your heart health.',
    detailEs: 'Nuestro equipo de cardiologia proporciona atencion cardiaca integral, desde examenes preventivos y EKGs hasta el manejo continuo de condiciones cardiovasculares como hipertension y enfermedades del corazon. Usamos tecnologia de diagnostico avanzada para monitorear la salud de su corazon.',
    image: '/assets/images/services/cardiology.png',
    href: '/services/cardiology',
  },
  {
    id: 'dental',
    Icon: DentalIcon,
    titleEn: 'Dental Care',
    titleEs: 'Cuidado Dental',
    descEn: 'Complete oral health services for the whole family',
    descEs: 'Servicios completos de salud oral para toda la familia',
    detailEn: 'Oral health is deeply connected to overall physical wellness. We provide routine preventative cleanings, digital X-rays, fillings, crowns, root canals, extractions, and dentures. Our dental team ensures your smile stays healthy and bright.',
    detailEs: 'La salud bucal esta profundamente conectada con el bienestar fisico general. Brindamos limpiezas preventivas de rutina, rayos X digitales, empastes, coronas, tratamientos de conducto, extracciones y dentaduras. Nuestro equipo dental asegura que su sonrisa se mantenga saludable y brillante.',
    image: '/assets/images/services/dental.png',
    href: '/services/dental',
  },
  {
    id: 'laboratory',
    Icon: LaboratoryIcon,
    titleEn: 'Laboratory',
    titleEs: 'Laboratorio',
    descEn: 'On-site diagnostic testing with rapid results',
    descEs: 'Pruebas diagnosticas en sitio con resultados rapidos',
    detailEn: 'Our state-of-the-art on-site laboratory provides comprehensive blood work, diabetes monitoring, cholesterol screening, and infection detection. Get fast, accurate results without leaving our facility, making your healthcare experience more convenient.',
    detailEs: 'Nuestro laboratorio de ultima generacion en sitio proporciona analisis de sangre completos, monitoreo de diabetes, examenes de colesterol y deteccion de infecciones. Obtenga resultados rapidos y precisos sin salir de nuestras instalaciones.',
    image: '/assets/images/services/laboratory.png',
    href: '/services/laboratory',
  },
  {
    id: 'pharmacy',
    Icon: PharmacyIcon,
    titleEn: 'Home Pharmacy',
    titleEs: 'Farmacia a Domicilio',
    descEn: 'Medications delivered directly to your home',
    descEs: 'Medicamentos entregados directamente a su hogar',
    detailEn: 'Our integrated pharmacy delivers medications directly to your home, improving medication adherence and convenience for elderly patients. We handle insurance coordination and provide medication management to ensure you never miss a dose.',
    detailEs: 'Nuestra farmacia integrada entrega medicamentos directamente a su hogar, mejorando la adherencia a medicamentos y conveniencia para pacientes mayores. Manejamos la coordinacion con seguros y proporcionamos manejo de medicamentos.',
    image: '/assets/images/services/home-pharmacy.png',
    href: '/services/pharmacy',
  },
  {
    id: 'optometry',
    Icon: OptometryIcon,
    titleEn: 'Optometry',
    titleEs: 'Optometria',
    descEn: 'Comprehensive eye care and vision services',
    descEs: 'Cuidado ocular integral y servicios de vision',
    detailEn: 'Our optometry team provides comprehensive eye care including vision exams, glaucoma screening, diabetic eye exams, and prescription eyewear. Early detection of eye conditions helps preserve your vision for years to come.',
    detailEs: 'Nuestro equipo de optometria proporciona cuidado ocular integral incluyendo examenes de vision, deteccion de glaucoma, examenes oculares para diabeticos y lentes recetados. La deteccion temprana de condiciones oculares ayuda a preservar su vision.',
    image: '/assets/images/services/optometry.png',
    href: '/services/optometry',
  },
];

export default function Specialties() {
  const { language, t } = useLanguage();
  const isSpanish = language === 'es';
  const [activeService, setActiveService] = useState(0);

  const currentService = popularServices[activeService];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Star Emboss Background */}
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.03 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        src="/assets/45.png"
        alt=""
        className="absolute top-0 -right-20 w-[500px] h-[500px] object-contain pointer-events-none"
      />
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.02 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.5 }}
        src="/assets/45.png"
        alt=""
        className="absolute bottom-0 -left-32 w-[400px] h-[400px] object-contain pointer-events-none -rotate-12"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 gradient-blue text-white"
          >
            {t.specialties.badge}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-brand-primary)] mb-4 sm:mb-6 tracking-tight"
          >
            {t.specialties.title}{' '}
            <span className="gradient-text">{t.specialties.titleHighlight}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#64748b] leading-relaxed text-base sm:text-lg max-w-3xl mx-auto px-2"
          >
            {t.specialties.description}
          </motion.p>
        </div>

        {/* Main Content - Services List + Image */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12">
          {/* Left Side - Service List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-3"
          >
            {popularServices.map((service, index) => {
              const isActive = activeService === index;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setActiveService(index)}
                  className={`flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl cursor-pointer transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-[var(--color-brand-primary-lighter)] via-[var(--color-brand-primary-light)] to-[var(--color-brand-primary)] text-white shadow-lg scale-[1.02]'
                      : 'bg-white border border-gray-100 hover:border-[var(--color-brand-primary)]/30 hover:shadow-md'
                  }`}
                >
                  <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl transition-colors shrink-0 ${
                    isActive
                      ? 'bg-white/25'
                      : 'bg-[var(--color-brand-light)]'
                  }`}>
                    <service.Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${
                      isActive ? 'text-white' : 'text-[var(--color-brand-primary)]'
                    }`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-semibold text-sm sm:text-base ${
                      isActive ? 'text-white' : 'text-[var(--color-brand-primary)]'
                    }`}>
                      {isSpanish ? service.titleEs : service.titleEn}
                    </h3>
                    <p className={`text-xs sm:text-sm line-clamp-2 ${
                      isActive ? 'text-white/90' : 'text-[#64748b]'
                    }`}>
                      {isSpanish ? service.descEs : service.descEn}
                    </p>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${
                    isActive ? 'text-white translate-x-1' : 'text-gray-400'
                  }`} />
                </motion.div>
              );
            })}
          </motion.div>

          {/* Right Side - Image & Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="sticky top-32">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentService.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl overflow-hidden border border-gray-100"
                  style={{ boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)' }}
                >
                  {/* Image - No overlay */}
                  <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                    <img
                      src={currentService.image}
                      alt={isSpanish ? currentService.titleEs : currentService.titleEn}
                      className="w-full h-full object-cover object-center drop-shadow-lg"
                      onError={(e) => {
                        // Fallback if image doesn't exist
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.classList.add('flex', 'items-center', 'justify-center');
                          const fallback = document.createElement('div');
                          fallback.className = 'text-center p-8';
                          fallback.innerHTML = `
                            <div class="w-20 h-20 mx-auto mb-4 rounded-2xl bg-[var(--color-brand-light)] flex items-center justify-center">
                              <span class="text-4xl text-[var(--color-brand-primary)]">📷</span>
                            </div>
                            <p class="text-[#64748b] text-sm">Image coming soon</p>
                          `;
                          parent.appendChild(fallback);
                        }
                      }}
                    />
                    {/* Service Badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                        <currentService.Icon className="w-5 h-5 text-[var(--color-brand-primary)]" />
                        <span className="font-semibold text-[var(--color-brand-primary)]">
                          {isSpanish ? currentService.titleEs : currentService.titleEn}
                        </span>
                      </div>
                    </div>
                    {/* Estrella Logo */}
                    <img
                      src="/assets/images/logos/Logo_estrella.png"
                      alt=""
                      className="absolute bottom-4 right-4 w-20 h-auto z-20 opacity-90"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-6 md:p-8">
                    <p className="text-[#64748b] leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                      {isSpanish ? currentService.detailEs : currentService.detailEn}
                    </p>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                      <Link
                        to={currentService.href}
                        className="flex-1 gradient-blue text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-full font-semibold text-center flex items-center justify-center gap-2 hover:shadow-lg transition-all shadow-lg text-sm sm:text-base"
                        style={{ boxShadow: '0 8px 20px rgba(59,130,246,0.35)' }}
                      >
                        {isSpanish ? 'Mas Informacion' : 'Learn More'}
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                      <Link
                        to="/medical-plan"
                        className="flex-1 gradient-yellow-orange text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-full font-semibold text-center flex items-center justify-center gap-2 hover:shadow-lg transition-all shadow-lg text-sm sm:text-base"
                        style={{ boxShadow: '0 8px 20px rgba(249,115,22,0.35)' }}
                      >
                        <Calendar className="w-4 h-4" />
                        {isSpanish ? 'Agendar Cita' : 'Book Appointment'}
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
