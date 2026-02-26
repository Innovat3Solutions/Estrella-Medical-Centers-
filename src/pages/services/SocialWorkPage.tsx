import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { UserCheck, CheckCircle2, ChevronRight, Clock, Heart, Phone, Calendar, Star, ChevronDown, Users, Award, ShieldCheck, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n';
import { useState } from 'react';

export default function SocialWorkPage() {
  const { language } = useLanguage();
  const isSpanish = language === 'es';
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const benefits = [
    {
      icon: Clock,
      titleEn: 'Same-Day Assistance',
      titleEs: 'Asistencia el Mismo Dia',
      descEn: 'Immediate support when you need it most',
      descEs: 'Apoyo inmediato cuando más lo necesita'
    },
    {
      icon: Users,
      titleEn: 'Bilingual Support',
      titleEs: 'Apoyo Bilingüe',
      descEn: 'Full Spanish and English assistance',
      descEs: 'Asistencia completa en español e inglés'
    },
    {
      icon: Heart,
      titleEn: 'Compassionate Care',
      titleEs: 'Atención Compasiva',
      descEn: 'We treat you like family',
      descEs: 'Lo tratamos como familia'
    },
    {
      icon: Award,
      titleEn: 'Community Connections',
      titleEs: 'Conexiones Comunitarias',
      descEn: 'Access to local resources and programs',
      descEs: 'Acceso a recursos y programas locales'
    }
  ];

  const services = [
    { en: 'Medicare & Medicaid Enrollment', es: 'Inscripción en Medicare y Medicaid' },
    { en: 'Insurance Navigation', es: 'Navegación de Seguros' },
    { en: 'Benefits Verification', es: 'Verificación de Beneficios' },
    { en: 'Community Resource Referrals', es: 'Referencias a Recursos Comunitarios' },
    { en: 'Food Assistance Programs', es: 'Programas de Asistencia Alimentaria' },
    { en: 'Housing Support Services', es: 'Servicios de Apoyo de Vivienda' },
    { en: 'Utility Assistance Programs', es: 'Programas de Asistencia de Servicios Públicos' },
    { en: 'Caregiver Support', es: 'Apoyo para Cuidadores' },
    { en: 'Mental Health Resources', es: 'Recursos de Salud Mental' },
    { en: 'Crisis Intervention', es: 'Intervención en Crisis' },
    { en: 'Advance Directives Assistance', es: 'Asistencia con Directivas Anticipadas' },
    { en: 'Care Coordination', es: 'Coordinación de Atención' }
  ];

  const faqs = [
    {
      questionEn: 'What does a Social Worker do at Estrella Medical Centers?',
      questionEs: '¿Qué hace un Trabajador Social en Estrella Medical Centers?',
      answerEn: 'Our social workers help patients navigate the healthcare system, connect with community resources, enroll in insurance programs, access food and housing assistance, and provide emotional support during difficult health situations. They serve as advocates for patients and their families.',
      answerEs: 'Nuestros trabajadores sociales ayudan a los pacientes a navegar el sistema de salud, conectar con recursos comunitarios, inscribirse en programas de seguro, acceder a asistencia alimentaria y de vivienda, y brindar apoyo emocional durante situaciones de salud difíciles. Sirven como defensores de los pacientes y sus familias.'
    },
    {
      questionEn: 'How can a Social Worker help me with insurance?',
      questionEs: '¿Cómo puede ayudarme un Trabajador Social con el seguro?',
      answerEn: 'Our social workers can help you understand your insurance benefits, enroll in Medicare or Medicaid if eligible, navigate the Health Insurance Marketplace, verify coverage before appointments, and appeal denied claims. They ensure you receive all the benefits you are entitled to.',
      answerEs: 'Nuestros trabajadores sociales pueden ayudarlo a entender sus beneficios de seguro, inscribirse en Medicare o Medicaid si es elegible, navegar el Mercado de Seguros de Salud, verificar cobertura antes de las citas y apelar reclamos denegados. Se aseguran de que reciba todos los beneficios a los que tiene derecho.'
    },
    {
      questionEn: 'Do I need an appointment to see a Social Worker?',
      questionEs: '¿Necesito una cita para ver a un Trabajador Social?',
      answerEn: 'While appointments are recommended to ensure dedicated time with our social worker, we also accept walk-ins for urgent situations. You can request a social work consultation through your primary care provider or call our office directly to schedule.',
      answerEs: 'Aunque se recomiendan las citas para asegurar tiempo dedicado con nuestro trabajador social, también aceptamos visitas sin cita para situaciones urgentes. Puede solicitar una consulta de trabajo social a través de su médico de atención primaria o llamar directamente a nuestra oficina para programar.'
    },
    {
      questionEn: 'What community resources can you connect me with?',
      questionEs: '¿Con qué recursos comunitarios pueden conectarme?',
      answerEn: 'We can connect you with food pantries, Meals on Wheels, housing assistance programs, utility assistance (LIHEAP), transportation services, adult day care programs, home health agencies, mental health services, support groups, and many other local resources based on your specific needs.',
      answerEs: 'Podemos conectarlo con despensas de alimentos, Meals on Wheels, programas de asistencia de vivienda, asistencia de servicios públicos (LIHEAP), servicios de transporte, programas de guardería para adultos, agencias de salud en el hogar, servicios de salud mental, grupos de apoyo y muchos otros recursos locales según sus necesidades específicas.'
    },
    {
      questionEn: 'Is there a cost for social work services?',
      questionEs: '¿Hay un costo por los servicios de trabajo social?',
      answerEn: 'Social work services at Estrella Medical Centers are provided at no additional cost to our patients. These services are included as part of our comprehensive care model. Our goal is to remove barriers to care and help you access all available resources.',
      answerEs: 'Los servicios de trabajo social en Estrella Medical Centers se brindan sin costo adicional para nuestros pacientes. Estos servicios están incluidos como parte de nuestro modelo de atención integral. Nuestro objetivo es eliminar barreras a la atención y ayudarlo a acceder a todos los recursos disponibles.'
    },
    {
      questionEn: 'Can you help my family members as caregivers?',
      questionEs: '¿Pueden ayudar a mis familiares como cuidadores?',
      answerEn: 'Absolutely. Caregiving can be overwhelming, and we offer support for family caregivers including respite care resources, caregiver support groups, stress management techniques, and connections to adult day care programs. We believe in supporting the whole family unit.',
      answerEs: 'Absolutamente. El cuidado puede ser abrumador, y ofrecemos apoyo para cuidadores familiares incluyendo recursos de cuidado de relevo, grupos de apoyo para cuidadores, técnicas de manejo del estrés y conexiones con programas de guardería para adultos. Creemos en apoyar a toda la unidad familiar.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f4f7fb] font-sans text-[#1e293b]">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 gradient-blue opacity-95" />
        <img
          src="/assets/45.png"
          alt=""
          className="hidden sm:block absolute -right-20 -top-20 w-[500px] h-[500px] object-contain opacity-10 pointer-events-none"
        />
        <img
          src="/assets/45.png"
          alt=""
          className="hidden sm:block absolute -left-32 bottom-0 w-[400px] h-[400px] object-contain opacity-5 pointer-events-none rotate-45"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 md:py-20 lg:py-28">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-xs sm:text-sm text-white/70 mb-6 sm:mb-8"
          >
            <Link to="/" className="hover:text-white transition-colors">
              {isSpanish ? 'Inicio' : 'Home'}
            </Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/services" className="hover:text-white transition-colors">
              {isSpanish ? 'Servicios' : 'Services'}
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white font-medium">
              {isSpanish ? 'Trabajo Social' : 'Social Work'}
            </span>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 space-y-4 sm:space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/20 text-white text-xs sm:text-sm font-semibold">
                <UserCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                {isSpanish ? 'Servicio de Apoyo' : 'Support Service'}
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {isSpanish ? 'Trabajo ' : 'Social '}
                <span className="text-gradient-yellow-orange">
                  {isSpanish ? 'Social' : 'Work'}
                </span>
              </h1>

              <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed">
                {isSpanish
                  ? 'Nuestros trabajadores sociales están aquí para ayudarlo a navegar el sistema de salud, conectarlo con recursos comunitarios y asegurarse de que tenga el apoyo que necesita para vivir una vida saludable.'
                  : 'Our social workers are here to help you navigate the healthcare system, connect you with community resources, and ensure you have the support you need to live a healthy life.'}
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
                <Link
                  to="/medical-plan"
                  className="inline-flex items-center gap-2 gradient-yellow-orange text-white px-6 sm:px-8 py-2.5 sm:py-3 md:py-4 rounded-full font-bold hover:shadow-xl transition-all shadow-lg text-sm sm:text-base"
                >
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                  {isSpanish ? 'Agendar Cita' : 'Schedule Appointment'}
                </Link>
                <a
                  href="tel:+13059828810"
                  className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-6 sm:px-8 py-2.5 sm:py-3 md:py-4 rounded-full font-bold transition-all border border-white/30 text-sm sm:text-base"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  (305) 982-8810
                </a>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden sm:block lg:w-1/2"
            >
              <div className="relative">
                <div className="rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                  <img
                    src="/assets/images/premium/social-worker-sitting-beside-elder.png"
                    alt={isSpanish ? 'Servicios de trabajo social' : 'Social work services'}
                    className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                  />
                </div>
                {/* Floating Stats Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-4 sm:-bottom-6 -left-2 sm:-left-6 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-5 shadow-xl"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl gradient-yellow-orange flex items-center justify-center">
                      <Star className="w-5 h-5 sm:w-7 sm:h-7 text-white fill-current" />
                    </div>
                    <div>
                      <p className="text-lg sm:text-2xl font-bold text-[var(--color-brand-primary)]">5,000+</p>
                      <p className="text-[#64748b] text-xs sm:text-sm">{isSpanish ? 'Familias Asistidas' : 'Families Assisted'}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Highlight Bar */}
      <section className="py-6 sm:py-8 px-4 sm:px-6 md:px-12 lg:px-24 bg-gradient-to-r from-[var(--color-brand-primary)] via-[var(--color-brand-primary-light)] to-[var(--color-brand-primary)]">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-12 lg:gap-16">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-2 sm:gap-3 text-white"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <benefit.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-brand-accent)]" />
                </div>
                <div>
                  <p className="font-bold text-xs sm:text-sm">
                    {isSpanish ? benefit.titleEs : benefit.titleEn}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* How We Help Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* How We Help */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-10 shadow-lg border border-gray-100"
          >
            <ShieldCheck className="w-10 h-10 sm:w-12 sm:h-12 text-[var(--color-brand-secondary)] mb-4 sm:mb-6" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-brand-primary)] mb-3 sm:mb-4">
              {isSpanish ? 'Cómo Le Ayudamos' : 'How We Help'}
            </h2>
            <p className="text-[#64748b] mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              {isSpanish
                ? 'Nuestros trabajadores sociales brindan apoyo integral para asegurar que usted y su familia tengan acceso a todos los recursos disponibles:'
                : 'Our social workers provide comprehensive support to ensure you and your family have access to all available resources:'}
            </p>

            <ul className="space-y-3 sm:space-y-4">
              {[
                { en: 'Navigate complex insurance enrollment', es: 'Navegar inscripciones de seguros complejas' },
                { en: 'Connect you with food and housing assistance', es: 'Conectarlo con asistencia alimentaria y de vivienda' },
                { en: 'Provide emotional support during health challenges', es: 'Brindar apoyo emocional durante desafíos de salud' },
                { en: 'Coordinate care between multiple providers', es: 'Coordinar atención entre múltiples proveedores' },
                { en: 'Help with advance care planning', es: 'Ayudar con planificación de atención anticipada' },
                { en: 'Support family caregivers', es: 'Apoyar a cuidadores familiares' }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 sm:gap-4">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[var(--color-brand-light)] text-[var(--color-brand-primary)] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <span className="text-[#1e293b] font-medium text-sm sm:text-base">
                    {isSpanish ? item.es : item.en}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Your Advocate Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="gradient-blue rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-10 shadow-xl relative overflow-hidden"
          >
            <img
              src="/assets/45.png"
              alt=""
              className="hidden sm:block absolute -right-16 -bottom-16 w-64 h-64 object-contain opacity-10 pointer-events-none"
            />
            <div className="relative z-10">
              <Handshake className="w-10 h-10 sm:w-12 sm:h-12 text-[var(--color-brand-accent)] mb-4 sm:mb-6" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
                {isSpanish ? 'Su Defensor en el Sistema de Salud' : 'Your Healthcare Advocate'}
              </h2>
              <p className="text-white/90 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                {isSpanish
                  ? 'El sistema de salud puede ser confuso y abrumador. Nuestros trabajadores sociales actúan como sus defensores, asegurándose de que entienda sus opciones y reciba la atención que merece.'
                  : 'The healthcare system can be confusing and overwhelming. Our social workers act as your advocates, ensuring you understand your options and receive the care you deserve.'}
              </p>
              <p className="text-white/90 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                {isSpanish
                  ? 'Ya sea que necesite ayuda para entender una factura médica, apelar una denegación de seguro o encontrar recursos comunitarios, estamos aquí para ayudarlo en cada paso del camino.'
                  : 'Whether you need help understanding a medical bill, appealing an insurance denial, or finding community resources, we are here to help you every step of the way.'}
              </p>

              <Link
                to="/doctors"
                className="inline-flex items-center gap-2 bg-white text-[var(--color-brand-primary)] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold hover:shadow-lg transition-all text-sm sm:text-base"
              >
                {isSpanish ? 'Conocer a Nuestro Equipo' : 'Meet Our Team'}
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full gradient-yellow-orange text-white text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              {isSpanish ? 'Servicios Completos' : 'Complete Services'}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-brand-primary)] mb-3 sm:mb-4">
              {isSpanish ? 'Nuestros Servicios de Trabajo Social' : 'Our Social Work Services'}
            </h2>
            <p className="text-[#64748b] max-w-2xl mx-auto text-sm sm:text-base">
              {isSpanish
                ? 'Ofrecemos una amplia gama de servicios de trabajo social para ayudarlo a navegar el sistema de salud y acceder a recursos comunitarios.'
                : 'We offer a comprehensive range of social work services to help you navigate the healthcare system and access community resources.'}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5"
          >
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.03 }}
                className="bg-[#f8fafc] border border-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4 hover:bg-white hover:shadow-md hover:border-[var(--color-brand-primary-light)] transition-all group"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl gradient-blue flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <span className="font-semibold text-[#1e293b] text-sm sm:text-base">
                  {isSpanish ? service.es : service.en}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full gradient-yellow-orange text-white text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            FAQ
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-brand-primary)] mb-3 sm:mb-4">
            {isSpanish ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
          </h2>
          <p className="text-[#64748b] max-w-2xl mx-auto text-sm sm:text-base">
            {isSpanish
              ? 'Encuentre respuestas a las preguntas más comunes sobre nuestros servicios de trabajo social.'
              : 'Find answers to the most common questions about our social work services.'}
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-xl sm:rounded-2xl shadow-md border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-[var(--color-brand-primary)] pr-3 sm:pr-4 text-sm sm:text-base">
                  {isSpanish ? faq.questionEs : faq.questionEn}
                </span>
                <ChevronDown
                  className={`w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-brand-secondary)] shrink-0 transition-transform ${
                    openFaq === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openFaq === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 sm:px-6 pb-4 sm:pb-5 text-[#64748b] leading-relaxed border-t border-gray-100 pt-3 sm:pt-4 text-sm sm:text-base">
                      {isSpanish ? faq.answerEs : faq.answerEn}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto gradient-blue rounded-xl sm:rounded-2xl lg:rounded-3xl p-6 sm:p-10 lg:p-16 text-center relative overflow-hidden"
        >
          <img
            src="/assets/45.png"
            alt=""
            className="hidden sm:block absolute -right-20 -top-20 w-80 h-80 object-contain opacity-10 pointer-events-none"
          />
          <img
            src="/assets/45.png"
            alt=""
            className="hidden sm:block absolute -left-20 -bottom-20 w-64 h-64 object-contain opacity-10 pointer-events-none rotate-45"
          />

          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
              {isSpanish ? 'Estamos Aquí Para Ayudarle' : "We're Here to Help"}
            </h2>
            <p className="text-white/90 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
              {isSpanish
                ? 'Nuestro equipo de trabajo social está listo para conectarlo con los recursos que necesita. No tiene que navegar el sistema de salud solo.'
                : "Our social work team is ready to connect you with the resources you need. You don't have to navigate the healthcare system alone."}
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
              <Link
                to="/medical-plan"
                className="inline-flex items-center justify-center gap-2 gradient-yellow-orange text-white px-6 sm:px-8 py-2.5 sm:py-3 md:py-4 rounded-full font-bold hover:shadow-xl transition-all shadow-lg text-sm sm:text-base"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                {isSpanish ? 'Agendar Cita' : 'Schedule Appointment'}
              </Link>
              <a
                href="tel:+13059828810"
                className="inline-flex items-center justify-center gap-2 bg-white text-[var(--color-brand-primary)] px-6 sm:px-8 py-2.5 sm:py-3 md:py-4 rounded-full font-bold hover:shadow-lg transition-all text-sm sm:text-base"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                {isSpanish ? 'Llamar Ahora' : 'Call Now'}
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
