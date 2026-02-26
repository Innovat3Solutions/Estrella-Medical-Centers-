import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, ShieldCheck, CheckCircle2, ChevronRight, HeartHandshake, Heart, Phone, Calendar, Star, ChevronDown, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n';
import { useState } from 'react';

export default function SeniorCarePage() {
  const { language } = useLanguage();
  const isSpanish = language === 'es';
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const benefits = [
    {
      icon: ShieldCheck,
      titleEn: 'Medicare & Medicaid Accepted',
      titleEs: 'Aceptamos Medicare y Medicaid',
      descEn: 'We work with most major insurance plans including Medicare Advantage',
      descEs: 'Trabajamos con los principales planes de seguro incluyendo Medicare Advantage'
    },
    {
      icon: Users,
      titleEn: 'Bilingual Care Team',
      titleEs: 'Equipo Bilingue',
      descEn: 'Full Spanish and English support for you and your family',
      descEs: 'Soporte completo en espanol e ingles para usted y su familia'
    },
    {
      icon: Heart,
      titleEn: 'Compassionate Care',
      titleEs: 'Atencion Compasiva',
      descEn: 'Dedicated time and attention for every senior patient',
      descEs: 'Tiempo y atencion dedicada para cada paciente mayor'
    },
    {
      icon: Award,
      titleEn: '30+ Years Experience',
      titleEs: '30+ Anos de Experiencia',
      descEn: 'Trusted by South Florida seniors since 1994',
      descEs: 'Confianza de adultos mayores del Sur de Florida desde 1994'
    }
  ];

  const services = [
    { en: 'Medicare Annual Wellness Visits', es: 'Visitas Anuales de Bienestar Medicare' },
    { en: 'Fall Prevention Programs', es: 'Programas de Prevencion de Caidas' },
    { en: 'Medication Management', es: 'Manejo de Medicamentos' },
    { en: 'Cognitive Health Screenings', es: 'Evaluaciones de Salud Cognitiva' },
    { en: 'Chronic Disease Management', es: 'Manejo de Enfermedades Cronicas' },
    { en: 'Care Coordination Services', es: 'Servicios de Coordinacion de Atencion' },
    { en: 'Home Visit Programs', es: 'Programas de Visitas a Domicilio' },
    { en: 'Transportation Assistance', es: 'Asistencia de Transporte' },
    { en: 'Diabetes Management for Seniors', es: 'Manejo de Diabetes para Adultos Mayores' },
    { en: 'Hypertension Control', es: 'Control de Hipertension' },
    { en: 'Osteoporosis Screening', es: 'Examenes de Osteoporosis' },
    { en: 'Nutritional Counseling', es: 'Asesoria Nutricional' }
  ];

  const faqs = [
    {
      questionEn: 'What is Senior Care and why is it important?',
      questionEs: 'Que es el Cuidado de Adultos Mayores y por que es importante?',
      answerEn: 'Senior Care, also known as Geriatric Care, is specialized medical care designed for adults 65 and older. As we age, our bodies change and we often manage multiple health conditions simultaneously. Geriatric specialists understand these complexities and provide comprehensive care that addresses physical, cognitive, and emotional health needs unique to seniors.',
      answerEs: 'El Cuidado de Adultos Mayores, tambien conocido como Atencion Geriatrica, es atencion medica especializada disenada para adultos de 65 anos o mas. A medida que envejecemos, nuestros cuerpos cambian y a menudo manejamos multiples condiciones de salud simultaneamente. Los especialistas geriatricos entienden estas complejidades y brindan atencion integral que aborda las necesidades de salud fisica, cognitiva y emocional unicas de los adultos mayores.'
    },
    {
      questionEn: 'Do you accept Medicare and Medicaid?',
      questionEs: 'Aceptan Medicare y Medicaid?',
      answerEn: 'Yes! Estrella Medical Centers proudly accepts Medicare, Medicaid, and most Medicare Advantage plans. We understand the importance of accessible healthcare for seniors and work to ensure you receive all the benefits your insurance provides. Our billing team can verify your coverage and explain any costs before your visit.',
      answerEs: 'Si! Estrella Medical Centers acepta con orgullo Medicare, Medicaid y la mayoria de los planes Medicare Advantage. Entendemos la importancia de la atencion medica accesible para los adultos mayores y trabajamos para asegurar que reciba todos los beneficios que su seguro proporciona. Nuestro equipo de facturacion puede verificar su cobertura y explicar cualquier costo antes de su visita.'
    },
    {
      questionEn: 'What cognitive health screenings do you offer?',
      questionEs: 'Que evaluaciones de salud cognitiva ofrecen?',
      answerEn: 'We offer comprehensive cognitive health screenings including assessments for early signs of Alzheimers disease, dementia, and other memory-related conditions. Early detection is crucial for managing these conditions effectively. Our screenings are conducted in a comfortable, supportive environment, and we involve family members in the care planning process when appropriate.',
      answerEs: 'Ofrecemos evaluaciones integrales de salud cognitiva que incluyen examenes para detectar signos tempranos de la enfermedad de Alzheimer, demencia y otras condiciones relacionadas con la memoria. La deteccion temprana es crucial para manejar estas condiciones de manera efectiva. Nuestras evaluaciones se realizan en un ambiente comodo y de apoyo, e involucramos a los familiares en el proceso de planificacion de atencion cuando es apropiado.'
    },
    {
      questionEn: 'How does your fall prevention program work?',
      questionEs: 'Como funciona su programa de prevencion de caidas?',
      answerEn: 'Our fall prevention program includes comprehensive mobility assessments, balance testing, medication reviews (as some medications can cause dizziness), home safety recommendations, and coordination with physical therapy when needed. Falls are a leading cause of injury in seniors, and prevention is key to maintaining independence and quality of life.',
      answerEs: 'Nuestro programa de prevencion de caidas incluye evaluaciones integrales de movilidad, pruebas de equilibrio, revisiones de medicamentos (ya que algunos pueden causar mareos), recomendaciones de seguridad en el hogar y coordinacion con fisioterapia cuando es necesario. Las caidas son una causa principal de lesiones en adultos mayores, y la prevencion es clave para mantener la independencia y la calidad de vida.'
    },
    {
      questionEn: 'Do you offer home visits or transportation assistance?',
      questionEs: 'Ofrecen visitas a domicilio o asistencia de transporte?',
      answerEn: 'Yes, we understand that mobility can be challenging for some seniors. We offer home visit programs for patients who have difficulty traveling to our clinics. Additionally, we can help coordinate transportation assistance through various community resources and Medicare-approved transportation services to ensure you never miss an important appointment.',
      answerEs: 'Si, entendemos que la movilidad puede ser un desafio para algunos adultos mayores. Ofrecemos programas de visitas a domicilio para pacientes que tienen dificultad para viajar a nuestras clinicas. Ademas, podemos ayudar a coordinar asistencia de transporte a traves de varios recursos comunitarios y servicios de transporte aprobados por Medicare para asegurar que nunca pierda una cita importante.'
    },
    {
      questionEn: 'How do you manage medications for seniors with multiple conditions?',
      questionEs: 'Como manejan los medicamentos para adultos mayores con multiples condiciones?',
      answerEn: 'Medication management is critical for seniors, especially those taking multiple prescriptions. Our team conducts regular medication reconciliation reviews to prevent harmful drug interactions, ensure proper dosing, and simplify medication schedules when possible. We coordinate with all your specialists and pharmacies to maintain an accurate, up-to-date medication list.',
      answerEs: 'El manejo de medicamentos es critico para los adultos mayores, especialmente aquellos que toman multiples recetas. Nuestro equipo realiza revisiones regulares de conciliacion de medicamentos para prevenir interacciones daninas, asegurar la dosificacion adecuada y simplificar los horarios de medicacion cuando sea posible. Coordinamos con todos sus especialistas y farmacias para mantener una lista de medicamentos precisa y actualizada.'
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
              {isSpanish ? 'Cuidado de Adultos Mayores' : 'Senior Care'}
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
                <HeartHandshake className="w-4 h-4 sm:w-5 sm:h-5" />
                {isSpanish ? 'Atencion Geriatrica Especializada' : 'Specialized Geriatric Care'}
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {isSpanish ? 'Cuidado de ' : 'Senior '}
                <span className="text-gradient-yellow-orange">
                  {isSpanish ? 'Adultos Mayores' : 'Care'}
                </span>
              </h1>

              <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed">
                {isSpanish
                  ? 'Los anos dorados merecen atencion de oro. Nuestro modelo de cuidado geriatrico dedica mas tiempo a cada paciente, coordinando el manejo de multiples condiciones y optimizando el bienestar para una vida mas saludable e independiente.'
                  : 'The golden years deserve golden care. Our geriatric care model dedicates more time to each patient, coordinating the management of multiple conditions and optimizing wellness for a healthier, more independent life.'}
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
                <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                  <img
                    src="/assets/images/services/senior-care.png"
                    alt={isSpanish ? 'Cuidado de adultos mayores' : 'Senior care consultation'}
                    className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                  />
                </div>
                {/* Floating Stats Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-xl"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl gradient-yellow-orange flex items-center justify-center">
                      <Star className="w-5 h-5 sm:w-7 sm:h-7 text-white fill-current" />
                    </div>
                    <div>
                      <p className="text-lg sm:text-2xl font-bold text-[var(--color-brand-primary)]">20,000+</p>
                      <p className="text-[#64748b] text-xs sm:text-sm">{isSpanish ? 'Adultos Mayores Atendidos' : 'Seniors Served'}</p>
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

      {/* When to Visit & Importance Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* When to Visit */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-10 shadow-lg border border-gray-100"
          >
            <ShieldCheck className="w-10 h-10 sm:w-12 sm:h-12 text-[var(--color-brand-secondary)] mb-4 sm:mb-6" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-brand-primary)] mb-3 sm:mb-4">
              {isSpanish ? 'Cuando Visitarnos' : 'When to Visit Us'}
            </h2>
            <p className="text-[#64748b] mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              {isSpanish
                ? 'El cuidado geriatrico va mas alla de tratar enfermedades. Se trata de mantener su independencia y calidad de vida. Programe una cita si usted o un ser querido necesita:'
                : "Geriatric care goes beyond treating illness. It's about maintaining your independence and quality of life. Schedule an appointment if you or a loved one needs:"}
            </p>

            <ul className="space-y-3 sm:space-y-4">
              {[
                { en: 'Medicare Annual Wellness Visit', es: 'Visita Anual de Bienestar Medicare' },
                { en: 'Memory concerns or cognitive changes', es: 'Preocupaciones de memoria o cambios cognitivos' },
                { en: 'Balance issues or fall risk assessment', es: 'Problemas de equilibrio o evaluacion de riesgo de caidas' },
                { en: 'Medication review and reconciliation', es: 'Revision y reconciliacion de medicamentos' },
                { en: 'Management of multiple chronic conditions', es: 'Manejo de multiples condiciones cronicas' },
                { en: 'Care coordination between specialists', es: 'Coordinacion de atencion entre especialistas' }
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

          {/* Importance Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="gradient-blue rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-10 shadow-xl relative overflow-hidden"
          >
            <img
              src="/assets/45.png"
              alt=""
              className="absolute -right-16 -bottom-16 w-64 h-64 object-contain opacity-10 pointer-events-none hidden sm:block"
            />
            <div className="relative z-10">
              <Activity className="w-10 h-10 sm:w-12 sm:h-12 text-[var(--color-brand-accent)] mb-4 sm:mb-6" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
                {isSpanish ? 'Por Que Importa el Cuidado Geriatrico' : 'Why Geriatric Care Matters'}
              </h2>
              <p className="text-white/90 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                {isSpanish
                  ? 'A medida que envejecemos, nuestras necesidades de salud se vuelven mas complejas. Los adultos mayores a menudo manejan multiples condiciones cronicas, toman varios medicamentos y enfrentan desafios unicos como el deterioro cognitivo o el riesgo de caidas.'
                  : 'As we age, our healthcare needs become more complex. Seniors often manage multiple chronic conditions, take several medications, and face unique challenges like cognitive decline or fall risk.'}
              </p>
              <p className="text-white/90 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                {isSpanish
                  ? 'Nuestro equipo de atencion geriatrica entiende estas complejidades y proporciona atencion coordinada y compasiva que ayuda a los adultos mayores a mantener su independencia y disfrutar de una mejor calidad de vida.'
                  : 'Our geriatric care team understands these complexities and provides coordinated, compassionate care that helps seniors maintain their independence and enjoy a better quality of life.'}
              </p>

              <Link
                to="/doctors"
                className="inline-flex items-center gap-2 bg-white text-[var(--color-brand-primary)] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold hover:shadow-lg transition-all text-sm sm:text-base"
              >
                {isSpanish ? 'Conocer a Nuestros Doctores' : 'Meet Our Doctors'}
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
              {isSpanish ? 'Nuestros Servicios para Adultos Mayores' : 'Our Senior Care Services'}
            </h2>
            <p className="text-[#64748b] max-w-2xl mx-auto text-sm sm:text-base">
              {isSpanish
                ? 'Ofrecemos una gama completa de servicios geriatricos disenados para mantener a los adultos mayores saludables, activos e independientes.'
                : 'We offer a comprehensive range of geriatric services designed to keep seniors healthy, active, and independent.'}
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
              ? 'Encuentre respuestas a las preguntas mas comunes sobre nuestros servicios de cuidado para adultos mayores.'
              : 'Find answers to the most common questions about our senior care services.'}
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
                <span className="font-semibold text-[var(--color-brand-primary)] pr-4 text-sm sm:text-base">
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
            className="absolute -right-20 -top-20 w-80 h-80 object-contain opacity-10 pointer-events-none hidden sm:block"
          />
          <img
            src="/assets/45.png"
            alt=""
            className="absolute -left-20 -bottom-20 w-64 h-64 object-contain opacity-10 pointer-events-none rotate-45 hidden sm:block"
          />

          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
              {isSpanish ? 'Cuidado Compasivo para Sus Anos Dorados' : 'Compassionate Care for Your Golden Years'}
            </h2>
            <p className="text-white/90 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
              {isSpanish
                ? 'Nuestro equipo de atencion geriatrica esta listo para brindarle a usted o a su ser querido la atencion dedicada y personalizada que merecen.'
                : 'Our geriatric care team is ready to provide you or your loved one with the dedicated, personalized care they deserve.'}
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
