import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, ShieldCheck, CheckCircle2, ChevronRight, Clock, Heart, Phone, Calendar, Star, ChevronDown, Users, Award, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n';
import { useState } from 'react';

export default function OptometryPage() {
  const { language } = useLanguage();
  const isSpanish = language === 'es';
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const benefits = [
    {
      icon: Clock,
      titleEn: 'Same-Week Appointments',
      titleEs: 'Citas en la Misma Semana',
      descEn: 'Get your eye exam scheduled quickly',
      descEs: 'Programe su examen de la vista rapidamente'
    },
    {
      icon: Users,
      titleEn: 'Bilingual Eye Care Team',
      titleEs: 'Equipo Bilingue de Vision',
      descEn: 'Full Spanish and English support',
      descEs: 'Soporte completo en espanol e ingles'
    },
    {
      icon: Heart,
      titleEn: 'Comprehensive Eye Exams',
      titleEs: 'Examenes Oculares Completos',
      descEn: 'Complete vision and eye health assessment',
      descEs: 'Evaluacion completa de vision y salud ocular'
    },
    {
      icon: Award,
      titleEn: 'Advanced Diagnostic Equipment',
      titleEs: 'Equipo de Diagnostico Avanzado',
      descEn: 'State-of-the-art technology for accurate results',
      descEs: 'Tecnologia de punta para resultados precisos'
    }
  ];

  const services = [
    { en: 'Comprehensive Eye Exams', es: 'Examenes Oculares Completos' },
    { en: 'Prescription Eyeglasses', es: 'Lentes Recetados' },
    { en: 'Contact Lens Fitting', es: 'Adaptacion de Lentes de Contacto' },
    { en: 'Glaucoma Screening', es: 'Deteccion de Glaucoma' },
    { en: 'Diabetic Eye Exams', es: 'Examenes Oculares para Diabeticos' },
    { en: 'Cataract Detection', es: 'Deteccion de Cataratas' },
    { en: 'Macular Degeneration Screening', es: 'Deteccion de Degeneracion Macular' },
    { en: 'Dry Eye Treatment', es: 'Tratamiento de Ojo Seco' },
    { en: 'Pediatric Eye Exams', es: 'Examenes Oculares Pediatricos' },
    { en: 'Senior Eye Care', es: 'Cuidado Ocular para Adultos Mayores' },
    { en: 'Eye Pressure Testing', es: 'Prueba de Presion Ocular' },
    { en: 'Visual Field Testing', es: 'Prueba de Campo Visual' }
  ];

  const faqs = [
    {
      questionEn: 'How often should I have an eye exam?',
      questionEs: 'Con que frecuencia debo hacerme un examen de la vista?',
      answerEn: 'Adults should have a comprehensive eye exam every 1-2 years, depending on age and risk factors. If you have diabetes, high blood pressure, or a family history of eye disease, annual exams are recommended. Seniors (65+) should have yearly exams to monitor for age-related conditions like cataracts, glaucoma, and macular degeneration.',
      answerEs: 'Los adultos deben hacerse un examen ocular completo cada 1-2 anos, dependiendo de la edad y factores de riesgo. Si tiene diabetes, presion arterial alta o antecedentes familiares de enfermedades oculares, se recomiendan examenes anuales. Los adultos mayores (65+) deben hacerse examenes anuales para monitorear condiciones relacionadas con la edad como cataratas, glaucoma y degeneracion macular.'
    },
    {
      questionEn: 'What is included in a comprehensive eye exam?',
      questionEs: 'Que incluye un examen ocular completo?',
      answerEn: 'A comprehensive eye exam includes visual acuity testing, refraction assessment for glasses or contacts, eye pressure measurement (glaucoma screening), dilated eye examination to check the retina and optic nerve, and screening for conditions like cataracts and macular degeneration. We also assess your overall eye health and discuss any vision concerns.',
      answerEs: 'Un examen ocular completo incluye prueba de agudeza visual, evaluacion de refraccion para lentes o contactos, medicion de presion ocular (deteccion de glaucoma), examen con dilatacion para revisar la retina y nervio optico, y deteccion de condiciones como cataratas y degeneracion macular. Tambien evaluamos su salud ocular general y discutimos cualquier preocupacion de vision.'
    },
    {
      questionEn: 'Why are diabetic eye exams important?',
      questionEs: 'Por que son importantes los examenes oculares para diabeticos?',
      answerEn: 'Diabetes can cause diabetic retinopathy, a condition where high blood sugar damages blood vessels in the retina. This can lead to vision loss if not detected early. Annual diabetic eye exams allow us to catch changes before they affect your vision and coordinate with your primary care doctor to manage your overall health.',
      answerEs: 'La diabetes puede causar retinopatia diabetica, una condicion donde el azucar alta dana los vasos sanguineos de la retina. Esto puede causar perdida de vision si no se detecta temprano. Los examenes oculares anuales para diabeticos nos permiten detectar cambios antes de que afecten su vision y coordinar con su medico de atencion primaria para manejar su salud general.'
    },
    {
      questionEn: 'What are the early signs of glaucoma?',
      questionEs: 'Cuales son los signos tempranos del glaucoma?',
      answerEn: 'Glaucoma is often called the silent thief of sight because it typically has no early symptoms. By the time you notice vision changes, significant damage may have occurred. This is why regular eye pressure checks and comprehensive exams are crucial. Risk factors include age over 60, family history, diabetes, and high eye pressure.',
      answerEs: 'El glaucoma a menudo se llama el ladron silencioso de la vista porque tipicamente no tiene sintomas tempranos. Para cuando note cambios en la vision, puede haber ocurrido dano significativo. Por eso los chequeos regulares de presion ocular y examenes completos son cruciales. Los factores de riesgo incluyen edad mayor de 60, antecedentes familiares, diabetes y presion ocular alta.'
    },
    {
      questionEn: 'Do you accept Medicare for eye exams?',
      questionEs: 'Aceptan Medicare para examenes de la vista?',
      answerEn: 'Yes! Estrella Medical Centers accepts Medicare for medical eye exams, including diabetic eye exams, glaucoma screening, and cataract evaluations. Medicare Part B covers eye exams for medical conditions. We also accept most major insurance plans and Medicare Advantage plans. Our team can verify your coverage before your visit.',
      answerEs: 'Si! Estrella Medical Centers acepta Medicare para examenes oculares medicos, incluyendo examenes para diabeticos, deteccion de glaucoma y evaluaciones de cataratas. Medicare Parte B cubre examenes oculares para condiciones medicas. Tambien aceptamos la mayoria de planes de seguro y planes Medicare Advantage. Nuestro equipo puede verificar su cobertura antes de su visita.'
    },
    {
      questionEn: 'When should seniors schedule eye exams?',
      questionEs: 'Cuando deben los adultos mayores programar examenes de la vista?',
      answerEn: 'Seniors should have annual comprehensive eye exams. After age 65, the risk of cataracts, glaucoma, macular degeneration, and other eye conditions increases significantly. Early detection through regular exams can help preserve vision and maintain quality of life. If you notice sudden changes in vision, floaters, or flashes of light, contact us immediately.',
      answerEs: 'Los adultos mayores deben hacerse examenes oculares completos anuales. Despues de los 65 anos, el riesgo de cataratas, glaucoma, degeneracion macular y otras condiciones oculares aumenta significativamente. La deteccion temprana mediante examenes regulares puede ayudar a preservar la vision y mantener la calidad de vida. Si nota cambios repentinos en la vision, moscas flotantes o destellos de luz, contactenos inmediatamente.'
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
              {isSpanish ? 'Optometria' : 'Optometry'}
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
                <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                {isSpanish ? 'Cuidado de la Vista' : 'Vision Care'}
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {isSpanish ? 'Servicios de ' : ''}
                <span className="text-gradient-yellow-orange">
                  {isSpanish ? 'Optometria' : 'Optometry'}
                </span>
                {!isSpanish && ' Services'}
              </h1>

              <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed">
                {isSpanish
                  ? 'Proteja su vision con examenes oculares completos y deteccion temprana de enfermedades. Nuestros optometristas se especializan en el cuidado de la vista para diabeticos, adultos mayores y toda la familia.'
                  : 'Protect your vision with comprehensive eye exams and early disease detection. Our optometrists specialize in eye care for diabetics, seniors, and the whole family.'}
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
                <Link
                  to="/medical-plan"
                  className="inline-flex items-center gap-2 gradient-yellow-orange text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold hover:shadow-xl transition-all shadow-lg text-sm sm:text-base"
                >
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                  {isSpanish ? 'Agendar Examen' : 'Schedule Eye Exam'}
                </Link>
                <a
                  href="tel:+13059828810"
                  className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold transition-all border border-white/30 text-sm sm:text-base"
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
                    src="/assets/images/services/optometry-exam.webp"
                    loading="lazy"
                    alt={isSpanish ? 'Examen de optometria' : 'Optometry examination'}
                    className="w-full h-[300px] sm:h-[350px] lg:h-[500px] object-cover"
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
                      <p className="text-lg sm:text-2xl font-bold text-[var(--color-brand-primary)]">20,000+</p>
                      <p className="text-[#64748b] text-xs sm:text-sm">{isSpanish ? 'Examenes de Vista' : 'Eye Exams Performed'}</p>
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

      {/* Warning Signs & Eye Health Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Warning Signs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-10 shadow-lg border border-gray-100"
          >
            <AlertTriangle className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[var(--color-brand-secondary)] mb-4 sm:mb-6" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-brand-primary)] mb-3 sm:mb-4">
              {isSpanish ? 'Senales de Advertencia' : 'Warning Signs'}
            </h2>
            <p className="text-[#64748b] mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              {isSpanish
                ? 'No ignore estos sintomas. Pueden indicar condiciones oculares serias que requieren atencion inmediata:'
                : "Don't ignore these symptoms. They may indicate serious eye conditions that require immediate attention:"}
            </p>

            <ul className="space-y-3 sm:space-y-4">
              {[
                { en: 'Sudden blurry or distorted vision', es: 'Vision borrosa o distorsionada repentina' },
                { en: 'Flashes of light or floating spots', es: 'Destellos de luz o puntos flotantes' },
                { en: 'Eye pain or persistent redness', es: 'Dolor ocular o enrojecimiento persistente' },
                { en: 'Gradual loss of peripheral vision', es: 'Perdida gradual de vision periferica' },
                { en: 'Difficulty seeing at night', es: 'Dificultad para ver de noche' },
                { en: 'Frequent headaches or eye strain', es: 'Dolores de cabeza frecuentes o fatiga visual' }
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

          {/* Eye Health Panel */}
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
              <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[var(--color-brand-accent)] mb-4 sm:mb-6" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
                {isSpanish ? 'Proteja Su Salud Ocular' : 'Protect Your Eye Health'}
              </h2>
              <p className="text-white/90 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                {isSpanish
                  ? 'Sus ojos son ventanas a su salud general. Muchas condiciones sistemicas como diabetes, hipertension y colesterol alto pueden detectarse primero durante un examen ocular completo. La deteccion temprana de enfermedades oculares como glaucoma, cataratas y degeneracion macular puede prevenir la perdida de vision.'
                  : 'Your eyes are windows to your overall health. Many systemic conditions like diabetes, high blood pressure, and high cholesterol can be detected first during a comprehensive eye exam. Early detection of eye diseases like glaucoma, cataracts, and macular degeneration can prevent vision loss.'}
              </p>
              <p className="text-white/90 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                {isSpanish
                  ? 'Para adultos mayores, los examenes regulares son especialmente importantes. Mas del 90% de la perdida de vision relacionada con la edad se puede prevenir o tratar con deteccion temprana.'
                  : 'For seniors, regular exams are especially important. Over 90% of age-related vision loss can be prevented or treated with early detection.'}
              </p>

              <Link
                to="/doctors"
                className="inline-flex items-center gap-2 bg-white text-[var(--color-brand-primary)] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold hover:shadow-lg transition-all text-sm sm:text-base"
              >
                {isSpanish ? 'Conocer a Nuestros Optometristas' : 'Meet Our Optometrists'}
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
              {isSpanish ? 'Nuestros Servicios de Optometria' : 'Our Optometry Services'}
            </h2>
            <p className="text-[#64748b] max-w-2xl mx-auto text-sm sm:text-base">
              {isSpanish
                ? 'Ofrecemos una gama completa de servicios de cuidado ocular para pacientes de todas las edades, desde examenes de rutina hasta deteccion de enfermedades.'
                : 'We offer a comprehensive range of eye care services for patients of all ages, from routine exams to disease detection.'}
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
              ? 'Encuentre respuestas a las preguntas mas comunes sobre nuestros servicios de optometria y salud ocular.'
              : 'Find answers to the most common questions about our optometry services and eye health.'}
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
            className="absolute -right-20 -top-20 w-80 h-80 object-contain opacity-10 pointer-events-none hidden sm:block"
          />
          <img
            src="/assets/45.png"
            alt=""
            className="absolute -left-20 -bottom-20 w-64 h-64 object-contain opacity-10 pointer-events-none rotate-45 hidden sm:block"
          />

          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
              {isSpanish ? 'Proteja Su Vision Hoy' : 'Protect Your Vision Today'}
            </h2>
            <p className="text-white/90 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
              {isSpanish
                ? 'No espere hasta tener problemas de vision. Programe su examen ocular completo hoy y de el primer paso hacia una salud ocular de por vida.'
                : "Don't wait until you have vision problems. Schedule your comprehensive eye exam today and take the first step toward lifelong eye health."}
            </p>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <Link
                to="/medical-plan"
                className="inline-flex items-center gap-2 gradient-yellow-orange text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold hover:shadow-xl transition-all shadow-lg text-sm sm:text-base"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                {isSpanish ? 'Agendar Examen de la Vista' : 'Schedule Eye Exam'}
              </Link>
              <a
                href="tel:+13059828810"
                className="inline-flex items-center gap-2 bg-white text-[var(--color-brand-primary)] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold hover:shadow-lg transition-all text-sm sm:text-base"
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
