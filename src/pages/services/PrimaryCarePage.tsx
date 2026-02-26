import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, ShieldCheck, CheckCircle2, ChevronRight, Stethoscope, Clock, Heart, Phone, Calendar, Star, ChevronDown, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n';
import { useState } from 'react';

export default function PrimaryCarePage() {
  const { language } = useLanguage();
  const isSpanish = language === 'es';
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const benefits = [
    {
      icon: Clock,
      titleEn: '24-Hour Appointment Guarantee',
      titleEs: 'Cita Garantizada en 24 Horas',
      descEn: 'Never wait more than a day to see your doctor',
      descEs: 'Nunca espere mas de un dia para ver a su medico'
    },
    {
      icon: Users,
      titleEn: 'Bilingual Care Team',
      titleEs: 'Equipo Bilingue',
      descEn: 'Full Spanish and English support',
      descEs: 'Soporte completo en espanol e ingles'
    },
    {
      icon: Heart,
      titleEn: 'Personalized Treatment',
      titleEs: 'Tratamiento Personalizado',
      descEn: 'Care plans tailored to your unique needs',
      descEs: 'Planes de atencion adaptados a sus necesidades'
    },
    {
      icon: Award,
      titleEn: '30+ Years Experience',
      titleEs: '30+ Anos de Experiencia',
      descEn: 'Trusted by South Florida families since 1994',
      descEs: 'Confianza de familias del Sur de Florida desde 1994'
    }
  ];

  const services = [
    { en: 'Annual Physical Exams', es: 'Examenes Fisicos Anuales' },
    { en: 'Chronic Disease Management', es: 'Manejo de Enfermedades Cronicas' },
    { en: 'Diabetes Care & Monitoring', es: 'Cuidado y Monitoreo de Diabetes' },
    { en: 'Hypertension Management', es: 'Control de Hipertension' },
    { en: 'Preventive Screenings', es: 'Examenes Preventivos' },
    { en: 'Immunizations & Vaccines', es: 'Inmunizaciones y Vacunas' },
    { en: 'Routine Blood Work', es: 'Analisis de Sangre de Rutina' },
    { en: 'Health Risk Assessments', es: 'Evaluaciones de Riesgo de Salud' },
    { en: 'Medication Management', es: 'Manejo de Medicamentos' },
    { en: 'Specialist Referrals', es: 'Referencias a Especialistas' },
    { en: 'Weight Management', es: 'Control de Peso' },
    { en: 'Mental Health Screenings', es: 'Evaluaciones de Salud Mental' }
  ];

  const faqs = [
    {
      questionEn: 'What is a Primary Care Physician and why do I need one?',
      questionEs: 'Que es un Medico de Atencion Primaria y por que lo necesito?',
      answerEn: 'A Primary Care Physician (PCP) is your main healthcare provider who manages your overall health. They coordinate all aspects of your care, from preventive screenings to managing chronic conditions, and refer you to specialists when needed. Having a PCP who knows your complete health history leads to better outcomes and more personalized care.',
      answerEs: 'Un Medico de Atencion Primaria (PCP) es su proveedor principal de salud que administra su bienestar general. Coordinan todos los aspectos de su atencion, desde examenes preventivos hasta el manejo de condiciones cronicas, y lo refieren a especialistas cuando es necesario. Tener un PCP que conoce su historial de salud completo conduce a mejores resultados y atencion mas personalizada.'
    },
    {
      questionEn: 'How often should I see my Primary Care doctor?',
      questionEs: 'Con que frecuencia debo ver a mi medico de Atencion Primaria?',
      answerEn: 'Adults should have at least one annual wellness visit, even when feeling healthy. If you have chronic conditions like diabetes or hypertension, you may need quarterly visits. Seniors (65+) often benefit from more frequent check-ups. Your doctor will recommend a schedule based on your individual health needs.',
      answerEs: 'Los adultos deben tener al menos una visita anual de bienestar, incluso cuando se sienten saludables. Si tiene condiciones cronicas como diabetes o hipertension, puede necesitar visitas trimestrales. Los adultos mayores (65+) a menudo se benefician de chequeos mas frecuentes. Su medico recomendara un horario basado en sus necesidades de salud individuales.'
    },
    {
      questionEn: 'What should I bring to my first appointment?',
      questionEs: 'Que debo llevar a mi primera cita?',
      answerEn: 'Please bring your insurance card, photo ID, a list of current medications (including supplements), any relevant medical records or test results, and a list of questions or concerns you want to discuss. If you have a family health history, that information is also very helpful.',
      answerEs: 'Por favor traiga su tarjeta de seguro, identificacion con foto, una lista de medicamentos actuales (incluyendo suplementos), cualquier registro medico o resultado de pruebas relevantes, y una lista de preguntas o preocupaciones que desee discutir. Si tiene un historial de salud familiar, esa informacion tambien es muy util.'
    },
    {
      questionEn: 'Do you accept Medicare and Medicaid?',
      questionEs: 'Aceptan Medicare y Medicaid?',
      answerEn: 'Yes! Estrella Medical Centers proudly accepts Medicare, Medicaid, and most major insurance plans. We also work with various Medicare Advantage plans. Our billing team can verify your coverage before your visit and explain any costs involved.',
      answerEs: 'Si! Estrella Medical Centers acepta con orgullo Medicare, Medicaid y la mayoria de los planes de seguro principales. Tambien trabajamos con varios planes Medicare Advantage. Nuestro equipo de facturacion puede verificar su cobertura antes de su visita y explicar cualquier costo involucrado.'
    },
    {
      questionEn: 'Can I get same-day appointments for urgent issues?',
      questionEs: 'Puedo obtener citas el mismo dia para problemas urgentes?',
      answerEn: 'Absolutely. We offer our 24-Hour Appointment Guarantee, meaning you will be seen within 24 hours for urgent health concerns. For true emergencies, please call 911 or go to your nearest emergency room. For urgent but non-emergency issues, call us and we will fit you in.',
      answerEs: 'Absolutamente. Ofrecemos nuestra Garantia de Cita en 24 Horas, lo que significa que sera atendido dentro de 24 horas para preocupaciones de salud urgentes. Para emergencias verdaderas, llame al 911 o vaya a la sala de emergencias mas cercana. Para problemas urgentes pero no de emergencia, llamenos y lo atenderemos.'
    },
    {
      questionEn: 'What preventive services are included in a wellness visit?',
      questionEs: 'Que servicios preventivos estan incluidos en una visita de bienestar?',
      answerEn: 'A comprehensive wellness visit includes a physical examination, blood pressure and vital signs check, age-appropriate cancer screenings, diabetes and cholesterol testing, immunization updates, mental health screening, and personalized lifestyle counseling. We also review your medications and coordinate any specialist care you may need.',
      answerEs: 'Una visita de bienestar integral incluye un examen fisico, verificacion de presion arterial y signos vitales, examenes de cancer apropiados para la edad, pruebas de diabetes y colesterol, actualizaciones de vacunas, evaluacion de salud mental y asesoramiento personalizado sobre estilo de vida. Tambien revisamos sus medicamentos y coordinamos cualquier atencion especializada que pueda necesitar.'
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
          src="/Assets/45.png"
          alt=""
          className="absolute -right-20 -top-20 w-[500px] h-[500px] object-contain opacity-10 pointer-events-none"
        />
        <img
          src="/Assets/45.png"
          alt=""
          className="absolute -left-32 bottom-0 w-[400px] h-[400px] object-contain opacity-5 pointer-events-none rotate-45"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 md:py-20 lg:py-28">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-white/70 mb-6 sm:mb-8 flex-wrap"
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
              {isSpanish ? 'Atencion Primaria' : 'Primary Care'}
            </span>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-semibold">
                <Stethoscope className="w-4 h-4" />
                {isSpanish ? 'Servicio Medico Principal' : 'Core Medical Service'}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {isSpanish ? 'Atencion ' : 'Primary '}
                <span className="text-gradient-yellow-orange">
                  {isSpanish ? 'Primaria' : 'Care'}
                </span>
              </h1>

              <p className="text-white/90 text-base sm:text-lg leading-relaxed">
                {isSpanish
                  ? 'Su medico de atencion primaria es su socio central en salud. Nos enfocamos en prevencion, bienestar y manejo continuo de su salud, asegurando que los problemas potenciales se aborden antes de que se conviertan en emergencias.'
                  : 'Your primary care physician is your central partner in health. We focus on prevention, wellness, and continuous care management, ensuring potential issues are addressed before they become emergencies.'}
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4">
                <Link
                  to="/medical-plan"
                  className="inline-flex items-center justify-center gap-2 gradient-yellow-orange text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:shadow-xl transition-all shadow-lg text-sm sm:text-base"
                >
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                  {isSpanish ? 'Agendar Cita' : 'Schedule Appointment'}
                </Link>
                <a
                  href="tel:+13059828810"
                  className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold transition-all border border-white/30 text-sm sm:text-base"
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
                <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl border-2 sm:border-4 border-white/20">
                  <img
                    src="/assets/images/services/primary-care-medical-consultation.png"
                    alt={isSpanish ? 'Consulta de atencion primaria' : 'Primary care consultation'}
                    className="w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-cover"
                  />
                </div>
                {/* Floating Stats Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-4 sm:-bottom-6 -left-2 sm:-left-6 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-5 shadow-lg sm:shadow-xl hidden md:block"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl gradient-yellow-orange flex items-center justify-center">
                      <Star className="w-5 h-5 sm:w-7 sm:h-7 text-white fill-current" />
                    </div>
                    <div>
                      <p className="text-xl sm:text-2xl font-bold text-[var(--color-brand-primary)]">50,000+</p>
                      <p className="text-[#64748b] text-xs sm:text-sm">{isSpanish ? 'Pacientes Atendidos' : 'Patients Served'}</p>
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
          <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-12 lg:gap-16">
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

      {/* When to Visit & Prevention Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* When to Visit */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg border border-gray-100"
          >
            <ShieldCheck className="w-10 h-10 sm:w-12 sm:h-12 text-[var(--color-brand-secondary)] mb-4 sm:mb-6" />
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--color-brand-primary)] mb-3 sm:mb-4">
              {isSpanish ? 'Cuando Visitarnos' : 'When to Visit Us'}
            </h2>
            <p className="text-[#64748b] mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              {isSpanish
                ? 'La atencion primaria no es solo para cuando esta enfermo. Es la base de su salud a largo plazo. Programe una cita si necesita:'
                : "Primary care isn't just for when you're sick. It's the foundation of your long-term health. Schedule an appointment if you need:"}
            </p>

            <ul className="space-y-3 sm:space-y-4">
              {[
                { en: 'Annual physical exams and wellness checkups', es: 'Examenes fisicos anuales y chequeos de bienestar' },
                { en: 'Management of chronic conditions (Diabetes, Hypertension)', es: 'Manejo de condiciones cronicas (Diabetes, Hipertension)' },
                { en: 'Persistent symptoms like fatigue or recurring pain', es: 'Sintomas persistentes como fatiga o dolor recurrente' },
                { en: 'Immunizations and routine blood work', es: 'Vacunas y analisis de sangre de rutina' },
                { en: 'Referrals to specialists', es: 'Referencias a especialistas' },
                { en: 'Unexplained weight changes', es: 'Cambios de peso inexplicables' }
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

          {/* Prevention Importance */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="gradient-blue rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl relative overflow-hidden"
          >
            <img
              src="/Assets/45.png"
              alt=""
              className="absolute -right-16 -bottom-16 w-48 sm:w-64 h-48 sm:h-64 object-contain opacity-10 pointer-events-none"
            />
            <div className="relative z-10">
              <Activity className="w-10 h-10 sm:w-12 sm:h-12 text-[var(--color-brand-accent)] mb-4 sm:mb-6" />
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
                {isSpanish ? 'La Importancia de la Prevencion' : 'The Importance of Prevention'}
              </h2>
              <p className="text-white/90 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                {isSpanish
                  ? 'Detectar anomalias de salud temprano mejora drasticamente los resultados del tratamiento. Al establecer una linea base con su medico de atencion primaria, podemos detectar facilmente tendencias preocupantes en su presion arterial, colesterol o marcadores inflamatorios a lo largo de los anos.'
                  : 'Catching health anomalies early dramatically improves treatment outcomes. By establishing a baseline with your primary care provider, we can easily spot concerning trends in your blood pressure, cholesterol, or inflammatory markers over the years.'}
              </p>
              <p className="text-white/90 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                {isSpanish
                  ? 'Ya sea que se sienta perfectamente saludable o este tratando de controlar una condicion existente, una relacion activa con su medico es la mejor inversion que puede hacer en su longevidad.'
                  : 'Whether you feel perfectly healthy or are managing an existing condition, an active relationship with your doctor is the greatest investment you can make in your longevity.'}
              </p>

              <Link
                to="/doctors"
                className="inline-flex items-center gap-2 bg-white text-[var(--color-brand-primary)] px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold hover:shadow-lg transition-all text-sm sm:text-base"
              >
                {isSpanish ? 'Conocer a Nuestros Doctores' : 'Meet Our Doctors'}
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24 bg-white">
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
              {isSpanish ? 'Nuestros Servicios' : 'Our Services'}
            </h2>
            <p className="text-[#64748b] max-w-2xl mx-auto text-sm sm:text-base px-2">
              {isSpanish
                ? 'Ofrecemos una gama completa de servicios de atencion primaria para mantenerlo saludable en cada etapa de la vida.'
                : 'We offer a comprehensive range of primary care services to keep you healthy at every stage of life.'}
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
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
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
          <p className="text-[#64748b] max-w-2xl mx-auto text-sm sm:text-base px-2">
            {isSpanish
              ? 'Encuentre respuestas a las preguntas mas comunes sobre nuestros servicios de atencion primaria.'
              : 'Find answers to the most common questions about our primary care services.'}
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
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto gradient-blue rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-16 text-center relative overflow-hidden"
        >
          <img
            src="/Assets/45.png"
            alt=""
            className="absolute -right-20 -top-20 w-48 sm:w-80 h-48 sm:h-80 object-contain opacity-10 pointer-events-none"
          />
          <img
            src="/Assets/45.png"
            alt=""
            className="absolute -left-20 -bottom-20 w-40 sm:w-64 h-40 sm:h-64 object-contain opacity-10 pointer-events-none rotate-45"
          />

          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
              {isSpanish ? 'Comience Su Viaje de Salud Hoy' : 'Start Your Health Journey Today'}
            </h2>
            <p className="text-white/90 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
              {isSpanish
                ? 'Nuestro equipo de atencion primaria esta listo para brindarle la atencion compasiva y personalizada que usted merece.'
                : 'Our primary care team is ready to provide you with the compassionate, personalized care you deserve.'}
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
              <Link
                to="/medical-plan"
                className="inline-flex items-center justify-center gap-2 gradient-yellow-orange text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:shadow-xl transition-all shadow-lg text-sm sm:text-base"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                {isSpanish ? 'Agendar Cita' : 'Schedule Appointment'}
              </Link>
              <a
                href="tel:+13059828810"
                className="inline-flex items-center justify-center gap-2 bg-white text-[var(--color-brand-primary)] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:shadow-lg transition-all text-sm sm:text-base"
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
