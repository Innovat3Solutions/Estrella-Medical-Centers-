import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, ShieldCheck, CheckCircle2, ChevronRight, Clock, Heart, Phone, Calendar, Star, ChevronDown, Users, Award, Footprints } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n';
import { useState } from 'react';

export default function PodiatryPage() {
  const { language } = useLanguage();
  const isSpanish = language === 'es';
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const benefits = [
    {
      icon: Clock,
      titleEn: 'Same-Week Appointments',
      titleEs: 'Citas en la Misma Semana',
      descEn: 'Quick access to foot and ankle specialists',
      descEs: 'Acceso rapido a especialistas en pies y tobillos'
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
      titleEn: 'Comprehensive Foot Care',
      titleEs: 'Cuidado Integral del Pie',
      descEn: 'From diabetic care to custom orthotics',
      descEs: 'Desde cuidado diabetico hasta ortesis personalizadas'
    },
    {
      icon: Award,
      titleEn: 'Advanced Treatments',
      titleEs: 'Tratamientos Avanzados',
      descEn: 'Latest techniques for optimal recovery',
      descEs: 'Ultimas tecnicas para una recuperacion optima'
    }
  ];

  const services = [
    { en: 'Diabetic Foot Care', es: 'Cuidado del Pie Diabetico' },
    { en: 'Wound Care & Healing', es: 'Cuidado y Curacion de Heridas' },
    { en: 'Bunion Treatment', es: 'Tratamiento de Juanetes' },
    { en: 'Hammertoe Correction', es: 'Correccion de Dedos en Martillo' },
    { en: 'Plantar Fasciitis Treatment', es: 'Tratamiento de Fascitis Plantar' },
    { en: 'Ingrown Toenail Care', es: 'Cuidado de Unas Encarnadas' },
    { en: 'Custom Orthotics', es: 'Ortesis Personalizadas' },
    { en: 'Foot & Ankle Injuries', es: 'Lesiones de Pie y Tobillo' },
    { en: 'Heel Pain Treatment', es: 'Tratamiento del Dolor de Talon' },
    { en: 'Arthritis Management', es: 'Manejo de Artritis en Pies' },
    { en: 'Fungal Nail Treatment', es: 'Tratamiento de Hongos en Unas' },
    { en: 'Sports Injury Rehabilitation', es: 'Rehabilitacion de Lesiones Deportivas' }
  ];

  const faqs = [
    {
      questionEn: 'What is a podiatrist and when should I see one?',
      questionEs: 'Que es un podiatra y cuando debo consultar uno?',
      answerEn: 'A podiatrist is a medical specialist focused on diagnosing and treating conditions of the foot, ankle, and lower leg. You should see a podiatrist if you experience persistent foot pain, have diabetes (for regular foot exams), notice changes in your toenails, have difficulty walking, or suffer from recurring foot problems like bunions or heel pain.',
      answerEs: 'Un podiatra es un especialista medico enfocado en diagnosticar y tratar condiciones del pie, tobillo y parte inferior de la pierna. Debe consultar a un podiatra si experimenta dolor persistente en el pie, tiene diabetes (para examenes regulares), nota cambios en sus unas, tiene dificultad para caminar o sufre de problemas recurrentes como juanetes o dolor de talon.'
    },
    {
      questionEn: 'Why is diabetic foot care so important?',
      questionEs: 'Por que es tan importante el cuidado del pie diabetico?',
      answerEn: 'Diabetes can cause nerve damage (neuropathy) and poor circulation in your feet, making it harder to feel injuries and slower to heal. Small cuts or blisters can quickly become serious infections. Regular podiatric care helps prevent complications, detects problems early, and can prevent amputations. We recommend diabetic patients have foot exams at least twice a year.',
      answerEs: 'La diabetes puede causar dano a los nervios (neuropatia) y mala circulacion en los pies, dificultando sentir lesiones y retrasando la curacion. Pequenos cortes o ampollas pueden convertirse rapidamente en infecciones serias. El cuidado podiatrico regular ayuda a prevenir complicaciones, detecta problemas temprano y puede prevenir amputaciones. Recomendamos que los pacientes diabeticos tengan examenes de pies al menos dos veces al ano.'
    },
    {
      questionEn: 'What causes plantar fasciitis and how is it treated?',
      questionEs: 'Que causa la fascitis plantar y como se trata?',
      answerEn: 'Plantar fasciitis is inflammation of the thick band of tissue running across the bottom of your foot. It is often caused by overuse, improper footwear, weight gain, or flat feet. Treatment includes stretching exercises, custom orthotics, physical therapy, anti-inflammatory medications, and in some cases, cortisone injections or advanced therapies like shockwave treatment.',
      answerEs: 'La fascitis plantar es la inflamacion de la banda gruesa de tejido que corre a lo largo de la planta del pie. A menudo es causada por uso excesivo, calzado inadecuado, aumento de peso o pies planos. El tratamiento incluye ejercicios de estiramiento, ortesis personalizadas, terapia fisica, medicamentos antiinflamatorios y, en algunos casos, inyecciones de cortisona o terapias avanzadas como tratamiento con ondas de choque.'
    },
    {
      questionEn: 'Do you accept Medicare for podiatry services?',
      questionEs: 'Aceptan Medicare para servicios de podologia?',
      answerEn: 'Yes! Estrella Medical Centers accepts Medicare, Medicaid, and most major insurance plans for podiatry services. Medicare typically covers medically necessary foot care, including diabetic foot exams, treatment of foot injuries, and management of foot conditions affecting your ability to walk. Our team can verify your specific coverage before your appointment.',
      answerEs: 'Si! Estrella Medical Centers acepta Medicare, Medicaid y la mayoria de los planes de seguro principales para servicios de podologia. Medicare generalmente cubre el cuidado del pie medicamente necesario, incluyendo examenes de pie diabetico, tratamiento de lesiones del pie y manejo de condiciones que afectan su capacidad para caminar. Nuestro equipo puede verificar su cobertura especifica antes de su cita.'
    },
    {
      questionEn: 'What are custom orthotics and who needs them?',
      questionEs: 'Que son las ortesis personalizadas y quien las necesita?',
      answerEn: 'Custom orthotics are specially designed shoe inserts made from molds of your feet. They correct biomechanical foot issues, provide support, and redistribute pressure. People who benefit include those with flat feet, high arches, plantar fasciitis, diabetes, arthritis, or anyone experiencing chronic foot, knee, hip, or back pain related to foot mechanics.',
      answerEs: 'Las ortesis personalizadas son plantillas especialmente disenadas hechas a partir de moldes de sus pies. Corrigen problemas biomecanicos del pie, brindan soporte y redistribuyen la presion. Las personas que se benefician incluyen aquellos con pies planos, arcos altos, fascitis plantar, diabetes, artritis, o cualquier persona que experimente dolor cronico en pies, rodillas, caderas o espalda relacionado con la mecanica del pie.'
    },
    {
      questionEn: 'How can I prevent foot problems as I age?',
      questionEs: 'Como puedo prevenir problemas de pies a medida que envejezco?',
      answerEn: 'Prevention is key to maintaining healthy feet throughout life. Wear properly fitting shoes with good support, inspect your feet daily for cuts or changes, keep your feet clean and moisturized, trim toenails straight across, maintain a healthy weight, stay active with low-impact exercises, and see a podiatrist regularly, especially if you have diabetes or circulation issues.',
      answerEs: 'La prevencion es clave para mantener pies saludables durante toda la vida. Use zapatos que le queden bien con buen soporte, inspeccione sus pies diariamente en busca de cortes o cambios, mantenga sus pies limpios e hidratados, corte las unas de los pies en linea recta, mantenga un peso saludable, mantengase activo con ejercicios de bajo impacto y visite a un podiatra regularmente, especialmente si tiene diabetes o problemas de circulacion.'
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
              {isSpanish ? 'Podologia' : 'Podiatry'}
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
                <Footprints className="w-4 h-4 sm:w-5 sm:h-5" />
                {isSpanish ? 'Especialidad Medica' : 'Medical Specialty'}
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {isSpanish ? 'Cuidado de ' : 'Foot & Ankle '}
                <span className="text-gradient-yellow-orange">
                  {isSpanish ? 'Pies y Tobillos' : 'Care'}
                </span>
              </h1>

              <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed">
                {isSpanish
                  ? 'Su movilidad es nuestra prioridad. Nuestros especialistas en podologia brindan atencion experta para todas las condiciones del pie y tobillo, desde cuidado diabetico hasta lesiones deportivas, ayudandole a mantenerse activo y sin dolor.'
                  : 'Your mobility is our priority. Our podiatry specialists provide expert care for all foot and ankle conditions, from diabetic care to sports injuries, helping you stay active and pain-free.'}
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
                <Link
                  to="/medical-plan"
                  className="inline-flex items-center gap-2 gradient-yellow-orange text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold hover:shadow-xl transition-all shadow-lg text-sm sm:text-base"
                >
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                  {isSpanish ? 'Agendar Cita' : 'Schedule Appointment'}
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
                    src="/assets/images/services/podiatry.webp"
                    loading="lazy"
                    alt={isSpanish ? 'Especialista en podologia examinando un pie' : 'Podiatry specialist examining a foot'}
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
                      <p className="text-xl sm:text-2xl font-bold text-[var(--color-brand-primary)]">15,000+</p>
                      <p className="text-[#64748b] text-xs sm:text-sm">{isSpanish ? 'Pacientes Tratados' : 'Patients Treated'}</p>
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
                  <p className="font-bold text-xs sm:text-sm whitespace-normal sm:whitespace-nowrap">
                    {isSpanish ? benefit.titleEs : benefit.titleEn}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* When to Visit & Treatment Approach Section */}
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
            <p className="text-[#64748b] text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
              {isSpanish
                ? 'No ignore el dolor de pies. Muchas condiciones empeoran sin tratamiento. Programe una cita si experimenta:'
                : "Don't ignore foot pain. Many conditions worsen without treatment. Schedule an appointment if you experience:"}
            </p>

            <ul className="space-y-3 sm:space-y-4">
              {[
                { en: 'Persistent heel or arch pain', es: 'Dolor persistente en el talon o arco' },
                { en: 'Diabetes and need regular foot exams', es: 'Diabetes y necesita examenes regulares de pies' },
                { en: 'Bunions, hammertoes, or toe deformities', es: 'Juanetes, dedos en martillo o deformidades' },
                { en: 'Ingrown toenails or nail infections', es: 'Unas encarnadas o infecciones de unas' },
                { en: 'Foot or ankle injuries and sprains', es: 'Lesiones de pie o tobillo y esguinces' },
                { en: 'Numbness, tingling, or poor circulation', es: 'Entumecimiento, hormigueo o mala circulacion' }
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

          {/* Treatment Approach */}
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
                {isSpanish ? 'Nuestro Enfoque de Tratamiento' : 'Our Treatment Approach'}
              </h2>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                {isSpanish
                  ? 'Creemos en un enfoque integral para la salud del pie. Comenzamos con un examen exhaustivo para identificar la causa raiz de su problema, no solo los sintomas. Luego desarrollamos un plan de tratamiento personalizado que puede incluir terapias conservadoras, ortesis personalizadas o procedimientos avanzados.'
                  : 'We believe in a comprehensive approach to foot health. We start with a thorough examination to identify the root cause of your problem, not just the symptoms. Then we develop a personalized treatment plan that may include conservative therapies, custom orthotics, or advanced procedures.'}
              </p>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                {isSpanish
                  ? 'Para pacientes diabeticos, ofrecemos examenes regulares de pies y educacion para prevenir complicaciones serias. Nuestro objetivo es mantenerlo movil, activo y libre de dolor a cualquier edad.'
                  : 'For diabetic patients, we offer regular foot screenings and education to prevent serious complications. Our goal is to keep you mobile, active, and pain-free at any age.'}
              </p>

              <Link
                to="/doctors"
                className="inline-flex items-center gap-2 bg-white text-[var(--color-brand-primary)] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold hover:shadow-lg transition-all text-sm sm:text-base"
              >
                {isSpanish ? 'Conocer a Nuestros Especialistas' : 'Meet Our Specialists'}
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
              {isSpanish ? 'Nuestros Servicios de Podologia' : 'Our Podiatry Services'}
            </h2>
            <p className="text-[#64748b] text-sm sm:text-base max-w-2xl mx-auto">
              {isSpanish
                ? 'Ofrecemos una amplia gama de servicios de podologia para tratar todas las condiciones del pie y tobillo.'
                : 'We offer a comprehensive range of podiatry services to treat all foot and ankle conditions.'}
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
          <p className="text-[#64748b] text-sm sm:text-base max-w-2xl mx-auto">
            {isSpanish
              ? 'Encuentre respuestas a las preguntas mas comunes sobre el cuidado de los pies y nuestros servicios de podologia.'
              : 'Find answers to the most common questions about foot care and our podiatry services.'}
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
              {isSpanish ? 'De el Primer Paso Hacia Pies Saludables' : 'Take the First Step to Healthy Feet'}
            </h2>
            <p className="text-white/90 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
              {isSpanish
                ? 'Nuestro equipo de podologia esta listo para ayudarle a recuperar su movilidad y vivir sin dolor. No espere mas para cuidar sus pies.'
                : 'Our podiatry team is ready to help you regain your mobility and live pain-free. Do not wait any longer to care for your feet.'}
            </p>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <Link
                to="/medical-plan"
                className="inline-flex items-center gap-2 gradient-yellow-orange text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold hover:shadow-xl transition-all shadow-lg text-sm sm:text-base"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                {isSpanish ? 'Agendar Cita' : 'Schedule Appointment'}
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
