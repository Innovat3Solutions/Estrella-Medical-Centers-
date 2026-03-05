import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Smile, ShieldCheck, CheckCircle2, ChevronRight, Clock, Heart, Phone, Calendar, Star, ChevronDown, Users, Award, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n';
import { useState } from 'react';

export default function DentalPage() {
  const { language } = useLanguage();
  const isSpanish = language === 'es';
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const benefits = [
    {
      icon: Clock,
      titleEn: 'Same-Week Appointments',
      titleEs: 'Citas en la Misma Semana',
      descEn: 'Get seen quickly for cleanings and urgent dental needs',
      descEs: 'Sea atendido rapidamente para limpiezas y necesidades dentales urgentes'
    },
    {
      icon: Users,
      titleEn: 'Bilingual Dental Team',
      titleEs: 'Equipo Dental Bilingue',
      descEn: 'Full Spanish and English support throughout your visit',
      descEs: 'Soporte completo en espanol e ingles durante su visita'
    },
    {
      icon: Heart,
      titleEn: 'Gentle & Comfortable Care',
      titleEs: 'Cuidado Gentil y Comodo',
      descEn: 'Modern techniques for a pain-free experience',
      descEs: 'Tecnicas modernas para una experiencia sin dolor'
    },
    {
      icon: Award,
      titleEn: 'Comprehensive Services',
      titleEs: 'Servicios Integrales',
      descEn: 'From cleanings to dentures, all under one roof',
      descEs: 'Desde limpiezas hasta dentaduras, todo bajo un mismo techo'
    }
  ];

  const services = [
    { en: 'Routine Cleanings & Checkups', es: 'Limpiezas y Chequeos de Rutina' },
    { en: 'Digital X-Rays', es: 'Radiografias Digitales' },
    { en: 'Tooth-Colored Fillings', es: 'Empastes del Color del Diente' },
    { en: 'Dental Crowns', es: 'Coronas Dentales' },
    { en: 'Root Canal Therapy', es: 'Terapia de Conducto Radicular' },
    { en: 'Tooth Extractions', es: 'Extracciones Dentales' },
    { en: 'Dentures & Partials', es: 'Dentaduras y Parciales' },
    { en: 'Dental Bridges', es: 'Puentes Dentales' },
    { en: 'Gum Disease Treatment', es: 'Tratamiento de Enfermedad de Encias' },
    { en: 'Oral Cancer Screenings', es: 'Examenes de Cancer Oral' },
    { en: 'Fluoride Treatments', es: 'Tratamientos de Fluoruro' },
    { en: 'Deep Cleanings (Scaling)', es: 'Limpiezas Profundas (Raspado)' }
  ];

  const faqs = [
    {
      questionEn: 'How often should I visit the dentist for a checkup?',
      questionEs: 'Con que frecuencia debo visitar al dentista para un chequeo?',
      answerEn: 'The American Dental Association recommends visiting your dentist at least twice a year for routine checkups and cleanings. However, if you have gum disease, diabetes, or other health conditions, your dentist may recommend more frequent visits. Regular checkups help catch problems early when they are easier and less expensive to treat.',
      answerEs: 'La Asociacion Dental Americana recomienda visitar a su dentista al menos dos veces al ano para chequeos y limpiezas de rutina. Sin embargo, si tiene enfermedad de las encias, diabetes u otras condiciones de salud, su dentista puede recomendar visitas mas frecuentes. Los chequeos regulares ayudan a detectar problemas temprano cuando son mas faciles y menos costosos de tratar.'
    },
    {
      questionEn: 'What is the connection between oral health and overall health?',
      questionEs: 'Cual es la conexion entre la salud oral y la salud general?',
      answerEn: 'Your oral health is directly connected to your overall health. Gum disease has been linked to heart disease, diabetes, stroke, and respiratory infections. Bacteria from your mouth can enter your bloodstream and affect other parts of your body. Maintaining good oral hygiene is an important part of your overall wellness plan.',
      answerEs: 'Su salud oral esta directamente conectada con su salud general. La enfermedad de las encias se ha relacionado con enfermedades cardiacas, diabetes, derrames cerebrales e infecciones respiratorias. Las bacterias de su boca pueden entrar en su torrente sanguineo y afectar otras partes de su cuerpo. Mantener una buena higiene oral es una parte importante de su plan de bienestar general.'
    },
    {
      questionEn: 'Do dental cleanings hurt?',
      questionEs: 'Las limpiezas dentales duelen?',
      answerEn: 'Professional dental cleanings should not be painful. You may feel some pressure or mild discomfort, especially if you have sensitive teeth or have not had a cleaning in a while. Our dental team uses gentle techniques and can apply numbing gel if needed. If you experience anxiety, let us know and we will take extra steps to ensure your comfort.',
      answerEs: 'Las limpiezas dentales profesionales no deberian ser dolorosas. Puede sentir algo de presion o molestia leve, especialmente si tiene dientes sensibles o no ha tenido una limpieza en un tiempo. Nuestro equipo dental usa tecnicas gentiles y puede aplicar gel anestesico si es necesario. Si experimenta ansiedad, haganos saber y tomaremos pasos adicionales para asegurar su comodidad.'
    },
    {
      questionEn: 'What should I do if I have a dental emergency?',
      questionEs: 'Que debo hacer si tengo una emergencia dental?',
      answerEn: 'For dental emergencies such as severe toothache, knocked-out tooth, broken tooth, or dental abscess, call our office immediately. We reserve time slots for urgent cases and will do our best to see you the same day. If you experience facial swelling with difficulty breathing or swallowing, go to the emergency room as this could be life-threatening.',
      answerEs: 'Para emergencias dentales como dolor de muelas severo, diente caido, diente roto o absceso dental, llame a nuestra oficina inmediatamente. Reservamos espacios de tiempo para casos urgentes y haremos todo lo posible para verlo el mismo dia. Si experimenta hinchazon facial con dificultad para respirar o tragar, vaya a la sala de emergencias ya que esto podria ser potencialmente mortal.'
    },
    {
      questionEn: 'Do you accept dental insurance and Medicare?',
      questionEs: 'Aceptan seguro dental y Medicare?',
      answerEn: 'Yes! Estrella Medical Centers accepts most major dental insurance plans. We also work with patients who have Medicare Advantage plans that include dental benefits. Our billing team can verify your coverage before your appointment and explain your out-of-pocket costs. We believe quality dental care should be accessible to everyone.',
      answerEs: 'Si! Estrella Medical Centers acepta la mayoria de los planes de seguro dental principales. Tambien trabajamos con pacientes que tienen planes Medicare Advantage que incluyen beneficios dentales. Nuestro equipo de facturacion puede verificar su cobertura antes de su cita y explicar sus costos de bolsillo. Creemos que el cuidado dental de calidad debe ser accesible para todos.'
    },
    {
      questionEn: 'How can I prevent cavities and gum disease?',
      questionEs: 'Como puedo prevenir las caries y la enfermedad de las encias?',
      answerEn: 'Prevention is the foundation of good oral health. Brush your teeth twice daily with fluoride toothpaste, floss daily, limit sugary foods and drinks, and visit your dentist regularly for professional cleanings. Avoid tobacco products which significantly increase your risk of gum disease and oral cancer. We can also provide personalized prevention tips based on your specific needs.',
      answerEs: 'La prevencion es la base de una buena salud oral. Cepille sus dientes dos veces al dia con pasta dental con fluoruro, use hilo dental diariamente, limite los alimentos y bebidas azucaradas, y visite a su dentista regularmente para limpiezas profesionales. Evite los productos de tabaco que aumentan significativamente su riesgo de enfermedad de las encias y cancer oral. Tambien podemos proporcionar consejos de prevencion personalizados basados en sus necesidades especificas.'
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
              {isSpanish ? 'Cuidado Dental' : 'Dental Care'}
            </span>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 space-y-4 sm:space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/20 text-white text-xs sm:text-sm font-semibold">
                <Smile className="w-4 h-4 sm:w-5 sm:h-5" />
                {isSpanish ? 'Servicio de Salud Oral' : 'Oral Health Service'}
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                {isSpanish ? 'Cuidado ' : 'Dental '}
                <span className="text-gradient-yellow-orange">
                  {isSpanish ? 'Dental' : 'Care'}
                </span>
              </h1>

              <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed">
                {isSpanish
                  ? 'Su salud oral esta directamente conectada con su bienestar general. Ofrecemos servicios dentales completos, desde limpiezas preventivas hasta odontologia restauradora, todo en un ambiente comodo y acogedor.'
                  : 'Your oral health is directly connected to your overall wellness. We provide comprehensive dental services, from preventive cleanings to restorative dentistry, all in a comfortable and welcoming environment.'}
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
                <Link
                  to="/medical-plan"
                  className="inline-flex items-center gap-2 gradient-yellow-orange text-white px-6 sm:px-8 py-2.5 sm:py-3 md:py-4 rounded-full font-bold text-sm sm:text-base hover:shadow-xl transition-all shadow-lg"
                >
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                  {isSpanish ? 'Agendar Cita' : 'Schedule Appointment'}
                </Link>
                <a
                  href="tel:+13059828810"
                  className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-6 sm:px-8 py-2.5 sm:py-3 md:py-4 rounded-full font-bold text-sm sm:text-base transition-all border border-white/30"
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
                    src="/assets/images/services/dental-checkup.webp"
                    loading="lazy"
                    alt={isSpanish ? 'Chequeo dental profesional' : 'Professional dental checkup'}
                    className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-cover"
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
                      <p className="text-[#64748b] text-xs sm:text-sm">{isSpanish ? 'Sonrisas Atendidas' : 'Smiles Served'}</p>
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
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-12 lg:gap-16">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-2 sm:gap-3 text-white"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <benefit.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-brand-accent)]" />
                </div>
                <div>
                  <p className="font-bold text-xs sm:text-sm whitespace-nowrap">
                    {isSpanish ? benefit.titleEs : benefit.titleEn}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Warning Signs & Prevention Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* Warning Signs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-10 shadow-lg border border-gray-100"
          >
            <AlertTriangle className="w-10 h-10 sm:w-12 sm:h-12 text-[var(--color-brand-secondary)] mb-4 sm:mb-6" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-brand-primary)] mb-3 sm:mb-4">
              {isSpanish ? 'Senales de Advertencia' : 'Warning Signs'}
            </h2>
            <p className="text-sm sm:text-base text-[#64748b] mb-6 sm:mb-8 leading-relaxed">
              {isSpanish
                ? 'No ignore estos sintomas dentales. El dolor de muelas rara vez desaparece solo y puede indicar problemas serios que requieren atencion inmediata:'
                : "Don't ignore these dental symptoms. Tooth pain rarely goes away on its own and may indicate serious problems that require immediate attention:"}
            </p>

            <ul className="space-y-3 sm:space-y-4">
              {[
                { en: 'Persistent toothache or throbbing pain', es: 'Dolor de muelas persistente o punzante' },
                { en: 'Extreme sensitivity to hot or cold foods', es: 'Sensibilidad extrema a alimentos calientes o frios' },
                { en: 'Swollen, red, or bleeding gums', es: 'Encias hinchadas, rojas o sangrantes' },
                { en: 'Loose teeth or receding gum lines', es: 'Dientes flojos o lineas de encias retraidas' },
                { en: 'Persistent bad breath despite brushing', es: 'Mal aliento persistente a pesar de cepillarse' },
                { en: 'Pain when chewing or biting down', es: 'Dolor al masticar o morder' }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 sm:gap-4">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[var(--color-brand-light)] text-[var(--color-brand-primary)] flex items-center justify-center shrink-0 mt-0.5">
                    <AlertTriangle className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <span className="text-sm sm:text-base text-[#1e293b] font-medium">
                    {isSpanish ? item.es : item.en}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Preventive Care */}
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
              <ShieldCheck className="w-10 h-10 sm:w-12 sm:h-12 text-[var(--color-brand-accent)] mb-4 sm:mb-6" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
                {isSpanish ? 'Cuidado Preventivo' : 'Preventive Care'}
              </h2>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-4 sm:mb-6">
                {isSpanish
                  ? 'La prevencion es la clave para una sonrisa saludable de por vida. La Asociacion Dental Americana recomienda limpiezas profesionales cada 6 meses. La placa se convierte en sarro en solo 48 horas y el cepillado no puede remover el sarro.'
                  : 'Prevention is the key to a lifetime of healthy smiles. The American Dental Association recommends professional cleanings every 6 months. Plaque turns into tartar within just 48 hours, and brushing alone cannot remove tartar buildup.'}
              </p>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-6 sm:mb-8">
                {isSpanish
                  ? 'Las radiografias digitales nos permiten detectar caries en sus etapas mas tempranas, antes de que causen dolor o requieran tratamientos mas extensos como conductos radiculares o extracciones.'
                  : 'Digital X-rays allow us to detect cavities in their earliest stages, before they cause pain or require more extensive treatments like root canals or extractions.'}
              </p>

              <Link
                to="/doctors"
                className="inline-flex items-center gap-2 bg-white text-[var(--color-brand-primary)] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold text-sm sm:text-base hover:shadow-lg transition-all"
              >
                {isSpanish ? 'Conocer a Nuestros Dentistas' : 'Meet Our Dentists'}
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
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full gradient-yellow-orange text-white text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              {isSpanish ? 'Servicios Completos' : 'Complete Services'}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-brand-primary)] mb-3 sm:mb-4">
              {isSpanish ? 'Nuestros Servicios Dentales' : 'Our Dental Services'}
            </h2>
            <p className="text-sm sm:text-base text-[#64748b] max-w-2xl mx-auto">
              {isSpanish
                ? 'Ofrecemos una gama completa de servicios dentales para mantener su sonrisa saludable y brillante en cada etapa de la vida.'
                : 'We offer a comprehensive range of dental services to keep your smile healthy and bright at every stage of life.'}
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
                <span className="font-semibold text-sm sm:text-base text-[#1e293b]">
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
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full gradient-yellow-orange text-white text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            FAQ
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-brand-primary)] mb-3 sm:mb-4">
            {isSpanish ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] max-w-2xl mx-auto">
            {isSpanish
              ? 'Encuentre respuestas a las preguntas mas comunes sobre nuestros servicios de cuidado dental.'
              : 'Find answers to the most common questions about our dental care services.'}
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
                <span className="font-semibold text-sm sm:text-base text-[var(--color-brand-primary)] pr-4">
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
                    <div className="px-4 sm:px-6 pb-4 sm:pb-5 text-sm sm:text-base text-[#64748b] leading-relaxed border-t border-gray-100 pt-3 sm:pt-4">
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
              {isSpanish ? 'Su Sonrisa Saludable Comienza Aqui' : 'Your Healthy Smile Starts Here'}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
              {isSpanish
                ? 'Nuestro equipo dental esta listo para ayudarle a lograr y mantener la sonrisa que siempre ha deseado. Programe su cita hoy.'
                : 'Our dental team is ready to help you achieve and maintain the smile you have always wanted. Schedule your appointment today.'}
            </p>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <Link
                to="/medical-plan"
                className="inline-flex items-center gap-2 gradient-yellow-orange text-white px-6 sm:px-8 py-2.5 sm:py-3 md:py-4 rounded-full font-bold text-sm sm:text-base hover:shadow-xl transition-all shadow-lg"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                {isSpanish ? 'Agendar Cita' : 'Schedule Appointment'}
              </Link>
              <a
                href="tel:+13059828810"
                className="inline-flex items-center gap-2 bg-white text-[var(--color-brand-primary)] px-6 sm:px-8 py-2.5 sm:py-3 md:py-4 rounded-full font-bold text-sm sm:text-base hover:shadow-lg transition-all"
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
