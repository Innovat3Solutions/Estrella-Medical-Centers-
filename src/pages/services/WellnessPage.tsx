import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, ShieldCheck, CheckCircle2, ChevronRight, Heart, Phone, Calendar, Star, ChevronDown, Users, Award, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n';
import { useState } from 'react';

export default function WellnessPage() {
  const { language } = useLanguage();
  const isSpanish = language === 'es';
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const benefits = [
    {
      icon: ShieldCheck,
      titleEn: 'Preventive Focus',
      titleEs: 'Enfoque Preventivo',
      descEn: 'Catch health issues before they become problems',
      descEs: 'Detecte problemas de salud antes de que se agraven'
    },
    {
      icon: Users,
      titleEn: 'Personalized Plans',
      titleEs: 'Planes Personalizados',
      descEn: 'Wellness programs tailored to your lifestyle',
      descEs: 'Programas de bienestar adaptados a su estilo de vida'
    },
    {
      icon: Heart,
      titleEn: 'Holistic Approach',
      titleEs: 'Enfoque Integral',
      descEn: 'Mind, body, and nutrition working together',
      descEs: 'Mente, cuerpo y nutricion trabajando juntos'
    },
    {
      icon: Award,
      titleEn: 'Expert Guidance',
      titleEs: 'Orientacion Experta',
      descEn: 'Certified wellness specialists on your team',
      descEs: 'Especialistas certificados en bienestar en su equipo'
    }
  ];

  const services = [
    { en: 'Annual Wellness Visits', es: 'Visitas Anuales de Bienestar' },
    { en: 'Preventive Screenings', es: 'Examenes Preventivos' },
    { en: 'Immunizations & Vaccines', es: 'Inmunizaciones y Vacunas' },
    { en: 'Weight Management Programs', es: 'Programas de Control de Peso' },
    { en: 'Nutrition Counseling', es: 'Asesoria Nutricional' },
    { en: 'Lifestyle Coaching', es: 'Coaching de Estilo de Vida' },
    { en: 'Health Risk Assessments', es: 'Evaluaciones de Riesgo de Salud' },
    { en: 'Mental Health Screenings', es: 'Evaluaciones de Salud Mental' },
    { en: 'Physical Therapy', es: 'Terapia Fisica' },
    { en: 'IV Vitamin Therapy', es: 'Terapia de Vitaminas IV' },
    { en: 'Cholesterol Management', es: 'Control de Colesterol' },
    { en: 'Stress Management Programs', es: 'Programas de Manejo del Estres' }
  ];

  const faqs = [
    {
      questionEn: 'What is included in an Annual Wellness Visit?',
      questionEs: 'Que incluye una Visita Anual de Bienestar?',
      answerEn: 'An Annual Wellness Visit includes a comprehensive health risk assessment, review of your medical and family history, height, weight, and blood pressure measurements, personalized health advice, screening schedules for your age group, and advance care planning. This visit focuses on prevention and maintaining your overall health rather than treating specific illnesses.',
      answerEs: 'Una Visita Anual de Bienestar incluye una evaluacion integral de riesgos de salud, revision de su historial medico y familiar, mediciones de altura, peso y presion arterial, consejos de salud personalizados, programas de examenes para su grupo de edad y planificacion de atencion anticipada. Esta visita se enfoca en la prevencion y el mantenimiento de su salud general en lugar de tratar enfermedades especificas.'
    },
    {
      questionEn: 'How often should I get preventive screenings?',
      questionEs: 'Con que frecuencia debo hacerme examenes preventivos?',
      answerEn: 'The frequency of preventive screenings depends on your age, gender, family history, and risk factors. Generally, adults should have annual wellness visits with routine blood work. Specific screenings like mammograms, colonoscopies, and bone density tests have recommended schedules based on guidelines. Our team will create a personalized screening schedule for you.',
      answerEs: 'La frecuencia de los examenes preventivos depende de su edad, genero, historial familiar y factores de riesgo. Generalmente, los adultos deben tener visitas anuales de bienestar con analisis de sangre de rutina. Examenes especificos como mamografias, colonoscopias y pruebas de densidad osea tienen programas recomendados basados en guias. Nuestro equipo creara un programa de examenes personalizado para usted.'
    },
    {
      questionEn: 'What vaccines do adults need?',
      questionEs: 'Que vacunas necesitan los adultos?',
      answerEn: 'Adults need several vaccines to stay protected. These include annual flu shots, Tdap (tetanus, diphtheria, pertussis) boosters every 10 years, shingles vaccine for those 50+, pneumonia vaccines for adults 65+ or those with certain conditions, and COVID-19 vaccines as recommended. We review your vaccination history and recommend any needed updates.',
      answerEs: 'Los adultos necesitan varias vacunas para mantenerse protegidos. Estas incluyen vacunas anuales contra la gripe, refuerzos de Tdap (tetanos, difteria, tos ferina) cada 10 anos, vacuna contra el herpes zoster para mayores de 50 anos, vacunas contra la neumonia para adultos de 65+ o con ciertas condiciones, y vacunas COVID-19 segun lo recomendado. Revisamos su historial de vacunacion y recomendamos las actualizaciones necesarias.'
    },
    {
      questionEn: 'How does your weight management program work?',
      questionEs: 'Como funciona su programa de control de peso?',
      answerEn: 'Our weight management program is comprehensive and personalized. It includes an initial health assessment, metabolic testing, customized nutrition plans, regular check-ins with our wellness team, behavioral counseling, and when appropriate, medical interventions. We focus on sustainable lifestyle changes rather than quick fixes, helping you achieve and maintain a healthy weight long-term.',
      answerEs: 'Nuestro programa de control de peso es integral y personalizado. Incluye una evaluacion de salud inicial, pruebas metabolicas, planes de nutricion personalizados, seguimientos regulares con nuestro equipo de bienestar, asesoria conductual y, cuando es apropiado, intervenciones medicas. Nos enfocamos en cambios de estilo de vida sostenibles en lugar de soluciones rapidas, ayudandole a alcanzar y mantener un peso saludable a largo plazo.'
    },
    {
      questionEn: 'What is IV Vitamin Therapy and what are its benefits?',
      questionEs: 'Que es la Terapia de Vitaminas IV y cuales son sus beneficios?',
      answerEn: 'IV Vitamin Therapy delivers essential vitamins, minerals, and nutrients directly into your bloodstream for maximum absorption. Benefits include increased energy levels, improved immune function, better hydration, faster recovery from illness or exercise, and enhanced overall wellness. Our medical team customizes each IV blend based on your specific health needs and goals.',
      answerEs: 'La Terapia de Vitaminas IV administra vitaminas, minerales y nutrientes esenciales directamente en su torrente sanguineo para una absorcion maxima. Los beneficios incluyen mayores niveles de energia, mejor funcion inmunologica, mejor hidratacion, recuperacion mas rapida de enfermedades o ejercicio, y bienestar general mejorado. Nuestro equipo medico personaliza cada mezcla IV segun sus necesidades y objetivos de salud especificos.'
    },
    {
      questionEn: 'Does insurance cover preventive wellness services?',
      questionEs: 'El seguro cubre los servicios de bienestar preventivo?',
      answerEn: 'Yes, most insurance plans, including Medicare and Medicaid, cover preventive wellness services at no additional cost to you. This includes annual wellness visits, many screenings, and immunizations. Some specialized services like IV therapy or weight management programs may have different coverage. Our billing team will verify your benefits and explain any costs before your visit.',
      answerEs: 'Si, la mayoria de los planes de seguro, incluyendo Medicare y Medicaid, cubren los servicios de bienestar preventivo sin costo adicional para usted. Esto incluye visitas anuales de bienestar, muchos examenes e inmunizaciones. Algunos servicios especializados como la terapia IV o programas de control de peso pueden tener diferente cobertura. Nuestro equipo de facturacion verificara sus beneficios y explicara cualquier costo antes de su visita.'
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
          className="absolute -right-20 -top-20 w-[500px] h-[500px] object-contain opacity-10 pointer-events-none hidden sm:block"
        />
        <img
          src="/assets/45.png"
          alt=""
          className="absolute -left-32 bottom-0 w-[400px] h-[400px] object-contain opacity-5 pointer-events-none rotate-45 hidden sm:block"
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
              {isSpanish ? 'Prevencion y Bienestar' : 'Preventive & Wellness'}
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
                <Leaf className="w-4 h-4 sm:w-5 sm:h-5" />
                {isSpanish ? 'Cuidado Preventivo' : 'Preventive Care'}
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                {isSpanish ? 'Prevencion y ' : 'Preventive & '}
                <span className="text-gradient-yellow-orange">
                  {isSpanish ? 'Bienestar' : 'Wellness'}
                </span>
              </h1>

              <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed">
                {isSpanish
                  ? 'La mejor medicina es la prevencion. Nuestros programas de bienestar integral estan disenados para ayudarle a mantener una salud optima, prevenir enfermedades y vivir su mejor vida cada dia.'
                  : 'The best medicine is prevention. Our comprehensive wellness programs are designed to help you maintain optimal health, prevent disease, and live your best life every day.'}
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
              className="lg:w-1/2 hidden sm:block"
            >
              <div className="relative">
                <div className="rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                  <img
                    src="/assets/images/services/wellness.webp"
                    loading="lazy"
                    alt={isSpanish ? 'Servicios de bienestar y prevencion' : 'Wellness and preventive services'}
                    className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-cover"
                  />
                </div>
                {/* Floating Stats Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-4 sm:-bottom-6 -left-2 sm:-left-6 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 shadow-xl"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl gradient-yellow-orange flex items-center justify-center">
                      <Star className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white fill-current" />
                    </div>
                    <div>
                      <p className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--color-brand-primary)]">95%</p>
                      <p className="text-[#64748b] text-xs sm:text-sm">{isSpanish ? 'Satisfaccion del Paciente' : 'Patient Satisfaction'}</p>
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

      {/* Our Approach & Wellness Philosophy Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Our Approach */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-lg border border-gray-100"
          >
            <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-[var(--color-brand-secondary)] mb-4 sm:mb-6" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-brand-primary)] mb-3 sm:mb-4">
              {isSpanish ? 'Nuestro Enfoque' : 'Our Approach'}
            </h2>
            <p className="text-[#64748b] text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
              {isSpanish
                ? 'Creemos que el bienestar es mas que la ausencia de enfermedad. Es un estado activo de salud fisica, mental y emocional. Nuestro enfoque incluye:'
                : "We believe wellness is more than the absence of illness. It's an active state of physical, mental, and emotional health. Our approach includes:"}
            </p>

            <ul className="space-y-3 sm:space-y-4">
              {[
                { en: 'Comprehensive health assessments and baseline testing', es: 'Evaluaciones de salud integrales y pruebas de referencia' },
                { en: 'Personalized nutrition and exercise recommendations', es: 'Recomendaciones personalizadas de nutricion y ejercicio' },
                { en: 'Stress management and mental wellness support', es: 'Manejo del estres y apoyo de bienestar mental' },
                { en: 'Preventive screenings based on your risk factors', es: 'Examenes preventivos basados en sus factores de riesgo' },
                { en: 'Ongoing monitoring and plan adjustments', es: 'Monitoreo continuo y ajustes al plan' },
                { en: 'Integration with your primary care team', es: 'Integracion con su equipo de atencion primaria' }
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

          {/* Wellness Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="gradient-blue rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-xl relative overflow-hidden"
          >
            <img
              src="/assets/45.png"
              alt=""
              className="absolute -right-16 -bottom-16 w-64 h-64 object-contain opacity-10 pointer-events-none hidden sm:block"
            />
            <div className="relative z-10">
              <Leaf className="w-10 h-10 sm:w-12 sm:h-12 text-[var(--color-brand-accent)] mb-4 sm:mb-6" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
                {isSpanish ? 'Nuestra Filosofia de Bienestar' : 'Our Wellness Philosophy'}
              </h2>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                {isSpanish
                  ? 'La prevencion es la piedra angular de una vida larga y saludable. Al identificar factores de riesgo temprano y hacer cambios proactivos en el estilo de vida, puede evitar muchas enfermedades cronicas y disfrutar de una mejor calidad de vida.'
                  : 'Prevention is the cornerstone of a long, healthy life. By identifying risk factors early and making proactive lifestyle changes, you can avoid many chronic diseases and enjoy a better quality of life.'}
              </p>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                {isSpanish
                  ? 'Nuestro equipo de bienestar trabaja con usted para crear un plan integral que aborde la nutricion, el ejercicio, el manejo del estres y la salud mental, todo adaptado a sus objetivos y circunstancias unicas.'
                  : 'Our wellness team works with you to create a comprehensive plan that addresses nutrition, exercise, stress management, and mental health, all tailored to your unique goals and circumstances.'}
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
              {isSpanish ? 'Servicios de Bienestar' : 'Wellness Services'}
            </h2>
            <p className="text-[#64748b] text-sm sm:text-base max-w-2xl mx-auto">
              {isSpanish
                ? 'Ofrecemos una amplia gama de servicios preventivos y de bienestar para ayudarle a alcanzar y mantener una salud optima.'
                : 'We offer a wide range of preventive and wellness services to help you achieve and maintain optimal health.'}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5"
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
          <p className="text-[#64748b] text-sm sm:text-base max-w-2xl mx-auto">
            {isSpanish
              ? 'Encuentre respuestas a las preguntas mas comunes sobre nuestros servicios de prevencion y bienestar.'
              : 'Find answers to the most common questions about our preventive and wellness services.'}
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
                    <div className="px-4 sm:px-6 pb-4 sm:pb-5 text-[#64748b] text-sm sm:text-base leading-relaxed border-t border-gray-100 pt-3 sm:pt-4">
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
          className="max-w-5xl mx-auto gradient-blue rounded-xl sm:rounded-2xl lg:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-16 text-center relative overflow-hidden"
        >
          <img
            src="/assets/45.png"
            alt=""
            className="absolute -right-20 -top-20 w-80 h-80 object-contain opacity-10 pointer-events-none hidden sm:block"
          />
          <img
            src="/assets/45.png"
            alt=""
            className="absolute -left-20 -bottom-20 w-64 h-64 object-contain opacity-10 pointer-events-none rotate-45 hidden sm:block"
          />

          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
              {isSpanish ? 'Invierta en Su Bienestar Hoy' : 'Invest in Your Wellness Today'}
            </h2>
            <p className="text-white/90 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
              {isSpanish
                ? 'De el primer paso hacia una vida mas saludable. Nuestro equipo de bienestar esta listo para crear un plan personalizado solo para usted.'
                : 'Take the first step toward a healthier life. Our wellness team is ready to create a personalized plan just for you.'}
            </p>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <Link
                to="/medical-plan"
                className="inline-flex items-center gap-2 gradient-yellow-orange text-white px-6 sm:px-8 py-2.5 sm:py-3 md:py-4 rounded-full font-bold hover:shadow-xl transition-all shadow-lg text-sm sm:text-base"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                {isSpanish ? 'Agendar Cita' : 'Schedule Appointment'}
              </Link>
              <a
                href="tel:+13059828810"
                className="inline-flex items-center gap-2 bg-white text-[var(--color-brand-primary)] px-6 sm:px-8 py-2.5 sm:py-3 md:py-4 rounded-full font-bold hover:shadow-lg transition-all text-sm sm:text-base"
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
