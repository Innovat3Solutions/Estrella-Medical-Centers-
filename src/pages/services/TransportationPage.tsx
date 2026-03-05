import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Car, CheckCircle2, ChevronRight, Clock, Heart, Phone, Calendar, Star, ChevronDown, Users, Award, ShieldCheck, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n';
import { useState } from 'react';

export default function TransportationPage() {
  const { language } = useLanguage();
  const isSpanish = language === 'es';
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const benefits = [
    {
      icon: Clock,
      titleEn: 'Free Transportation',
      titleEs: 'Transporte Gratuito',
      descEn: 'No cost for eligible patients',
      descEs: 'Sin costo para pacientes elegibles'
    },
    {
      icon: Users,
      titleEn: 'Door-to-Door Service',
      titleEs: 'Servicio Puerta a Puerta',
      descEn: 'Picked up and dropped off at your home',
      descEs: 'Lo recogemos y dejamos en su hogar'
    },
    {
      icon: Heart,
      titleEn: 'Wheelchair Accessible',
      titleEs: 'Accesible para Sillas de Ruedas',
      descEn: 'Vehicles equipped for mobility needs',
      descEs: 'Vehículos equipados para necesidades de movilidad'
    },
    {
      icon: Award,
      titleEn: 'Reliable & On-Time',
      titleEs: 'Confiable y Puntual',
      descEn: 'Never miss an appointment',
      descEs: 'Nunca pierda una cita'
    }
  ];

  const services = [
    { en: 'Medical Appointment Transportation', es: 'Transporte a Citas Médicas' },
    { en: 'Lab & Diagnostic Testing Rides', es: 'Viajes para Pruebas de Laboratorio y Diagnóstico' },
    { en: 'Specialist Visit Transportation', es: 'Transporte a Visitas con Especialistas' },
    { en: 'Physical Therapy Rides', es: 'Viajes para Terapia Física' },
    { en: 'Pharmacy Pickup Assistance', es: 'Asistencia para Recoger Medicamentos' },
    { en: 'Wheelchair Accessible Vehicles', es: 'Vehículos Accesibles para Sillas de Ruedas' },
    { en: 'Stretcher Transportation', es: 'Transporte en Camilla' },
    { en: 'Same-Day Ride Requests', es: 'Solicitudes de Viaje el Mismo Día' },
    { en: 'Multi-Stop Appointments', es: 'Citas con Múltiples Paradas' },
    { en: 'Caregiver Accompaniment', es: 'Acompañamiento de Cuidadores' },
    { en: 'Medicare/Medicaid Transport', es: 'Transporte Medicare/Medicaid' },
    { en: 'Non-Emergency Medical Transport', es: 'Transporte Médico No Urgente' }
  ];

  const faqs = [
    {
      questionEn: 'Is transportation really free?',
      questionEs: '¿El transporte es realmente gratuito?',
      answerEn: 'Yes! Transportation to medical appointments at Estrella Medical Centers is provided at no cost to our eligible patients. Many Medicare Advantage and Medicaid plans include transportation benefits, and we help coordinate these services. Even if you do not have transportation coverage, we work to connect you with community resources.',
      answerEs: '¡Sí! El transporte a citas médicas en Estrella Medical Centers se proporciona sin costo para nuestros pacientes elegibles. Muchos planes Medicare Advantage y Medicaid incluyen beneficios de transporte, y ayudamos a coordinar estos servicios. Incluso si no tiene cobertura de transporte, trabajamos para conectarlo con recursos comunitarios.'
    },
    {
      questionEn: 'How far in advance do I need to schedule a ride?',
      questionEs: '¿Con cuánta anticipación necesito programar un viaje?',
      answerEn: 'We recommend scheduling transportation at least 48-72 hours in advance to ensure availability. However, we understand that urgent appointments arise, and we do our best to accommodate same-day requests when possible. Call our office as soon as you know you need a ride.',
      answerEs: 'Recomendamos programar el transporte con al menos 48-72 horas de anticipación para asegurar disponibilidad. Sin embargo, entendemos que surgen citas urgentes, y hacemos todo lo posible para acomodar solicitudes del mismo día cuando sea posible. Llame a nuestra oficina tan pronto como sepa que necesita un viaje.'
    },
    {
      questionEn: 'Can my caregiver or family member ride with me?',
      questionEs: '¿Puede mi cuidador o familiar viajar conmigo?',
      answerEn: 'Absolutely! We encourage caregivers and family members to accompany patients to appointments when needed. This is especially helpful for patients who need assistance during their visit or who want support understanding their medical information. Just let us know when scheduling.',
      answerEs: '¡Absolutamente! Animamos a los cuidadores y familiares a acompañar a los pacientes a las citas cuando sea necesario. Esto es especialmente útil para pacientes que necesitan asistencia durante su visita o que desean apoyo para entender su información médica. Solo avísenos al programar.'
    },
    {
      questionEn: 'What if I use a wheelchair or walker?',
      questionEs: '¿Qué pasa si uso silla de ruedas o andador?',
      answerEn: 'Our transportation network includes wheelchair-accessible vehicles equipped with ramps and secure wheelchair tie-downs. We can accommodate walkers, wheelchairs, and other mobility devices. Please let us know about your mobility needs when scheduling so we can arrange the appropriate vehicle.',
      answerEs: 'Nuestra red de transporte incluye vehículos accesibles para sillas de ruedas equipados con rampas y sujeciones seguras. Podemos acomodar andadores, sillas de ruedas y otros dispositivos de movilidad. Por favor avísenos sobre sus necesidades de movilidad al programar para que podamos organizar el vehículo apropiado.'
    },
    {
      questionEn: 'Can I get transportation to appointments outside of Estrella Medical Centers?',
      questionEs: '¿Puedo obtener transporte a citas fuera de Estrella Medical Centers?',
      answerEn: 'Transportation benefits vary by insurance plan. Many Medicare Advantage plans cover transportation to any medical appointment, not just our centers. We can help you understand your specific coverage and coordinate rides to specialists, hospitals, or other medical facilities as covered by your plan.',
      answerEs: 'Los beneficios de transporte varían según el plan de seguro. Muchos planes Medicare Advantage cubren transporte a cualquier cita médica, no solo a nuestros centros. Podemos ayudarlo a entender su cobertura específica y coordinar viajes a especialistas, hospitales u otras instalaciones médicas según lo cubra su plan.'
    },
    {
      questionEn: 'What do I do if my ride does not show up?',
      questionEs: '¿Qué hago si mi transporte no llega?',
      answerEn: 'If your scheduled ride is late or does not arrive, call our office immediately. We will contact the transportation provider and work to get you a ride as quickly as possible. We track all transportation issues to ensure reliable service for our patients.',
      answerEs: 'Si su viaje programado llega tarde o no llega, llame a nuestra oficina inmediatamente. Contactaremos al proveedor de transporte y trabajaremos para conseguirle un viaje lo más rápido posible. Rastreamos todos los problemas de transporte para asegurar un servicio confiable para nuestros pacientes.'
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
              {isSpanish ? 'Transporte' : 'Transportation'}
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
                <Car className="w-4 h-4 sm:w-5 sm:h-5" />
                {isSpanish ? 'Servicio de Apoyo' : 'Support Service'}
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {isSpanish ? 'Servicio de ' : 'Free '}
                <span className="text-gradient-yellow-orange">
                  {isSpanish ? 'Transporte' : 'Transportation'}
                </span>
              </h1>

              <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed">
                {isSpanish
                  ? 'Nunca pierda una cita médica por falta de transporte. Ofrecemos transporte gratuito y confiable puerta a puerta para que llegue a sus citas a tiempo, cada vez.'
                  : 'Never miss a medical appointment due to lack of transportation. We offer free, reliable door-to-door transportation to get you to your appointments on time, every time.'}
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
                <Link
                  to="/medical-plan"
                  className="inline-flex items-center gap-2 gradient-yellow-orange text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold text-sm sm:text-base hover:shadow-xl transition-all shadow-lg"
                >
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                  {isSpanish ? 'Agendar Cita' : 'Schedule Appointment'}
                </Link>
                <a
                  href="tel:+13059828810"
                  className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold text-sm sm:text-base transition-all border border-white/30"
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
                    src="/assets/images/premium/medical-transport-van-in-south-florida-assisting.webp"
                    loading="lazy"
                    alt={isSpanish ? 'Servicios de transporte' : 'Transportation services'}
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
                      <p className="text-lg sm:text-2xl font-bold text-[var(--color-brand-primary)]">10,000+</p>
                      <p className="text-[#64748b] text-xs sm:text-sm">{isSpanish ? 'Viajes Completados' : 'Rides Completed'}</p>
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

      {/* How It Works Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* How to Schedule */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-10 shadow-lg border border-gray-100"
          >
            <ShieldCheck className="w-10 h-10 sm:w-12 sm:h-12 text-[var(--color-brand-secondary)] mb-4 sm:mb-6" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-brand-primary)] mb-3 sm:mb-4">
              {isSpanish ? 'Cómo Funciona' : 'How It Works'}
            </h2>
            <p className="text-[#64748b] text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
              {isSpanish
                ? 'Programar transporte es fácil. Siga estos simples pasos para nunca perder una cita:'
                : 'Scheduling transportation is easy. Follow these simple steps to never miss an appointment:'}
            </p>

            <ul className="space-y-3 sm:space-y-4">
              {[
                { en: 'Call us when you schedule your appointment', es: 'Llámenos cuando programe su cita' },
                { en: 'Provide your pickup address and appointment time', es: 'Proporcione su dirección y hora de cita' },
                { en: 'Confirm your ride 24 hours before', es: 'Confirme su viaje 24 horas antes' },
                { en: 'Be ready 15 minutes before pickup time', es: 'Esté listo 15 minutos antes de la recogida' },
                { en: 'Driver will wait at your door', es: 'El conductor esperará en su puerta' },
                { en: 'Ride home after your appointment', es: 'Regrese a casa después de su cita' }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 sm:gap-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[var(--color-brand-light)] text-[var(--color-brand-primary)] flex items-center justify-center shrink-0 font-bold text-xs sm:text-sm">
                    {idx + 1}
                  </div>
                  <span className="text-[#1e293b] font-medium text-sm sm:text-base mt-0.5 sm:mt-1">
                    {isSpanish ? item.es : item.en}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* No Barriers Panel */}
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
              <MapPin className="w-10 h-10 sm:w-12 sm:h-12 text-[var(--color-brand-accent)] mb-4 sm:mb-6" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
                {isSpanish ? 'Sin Barreras Para Su Salud' : 'No Barriers to Your Health'}
              </h2>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                {isSpanish
                  ? 'La falta de transporte no debería impedirle recibir la atención médica que necesita. Muchos pacientes, especialmente adultos mayores, pierden citas importantes porque no pueden conducir o no tienen quien los lleve.'
                  : "Lack of transportation shouldn't prevent you from getting the medical care you need. Many patients, especially seniors, miss important appointments because they can't drive or don't have someone to take them."}
              </p>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                {isSpanish
                  ? 'Nuestro programa de transporte elimina esta barrera, asegurando que cada paciente pueda acceder a la atención que necesita, independientemente de su situación de transporte.'
                  : 'Our transportation program removes this barrier, ensuring every patient can access the care they need, regardless of their transportation situation.'}
              </p>

              <Link
                to="/doctors"
                className="inline-flex items-center gap-2 bg-white text-[var(--color-brand-primary)] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold text-sm sm:text-base hover:shadow-lg transition-all"
              >
                {isSpanish ? 'Programar Su Viaje' : 'Schedule Your Ride'}
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
              {isSpanish ? 'Nuestros Servicios de Transporte' : 'Our Transportation Services'}
            </h2>
            <p className="text-[#64748b] text-sm sm:text-base max-w-2xl mx-auto">
              {isSpanish
                ? 'Ofrecemos una variedad de opciones de transporte para satisfacer sus necesidades médicas.'
                : 'We offer a variety of transportation options to meet your medical needs.'}
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
              ? 'Encuentre respuestas a las preguntas más comunes sobre nuestros servicios de transporte.'
              : 'Find answers to the most common questions about our transportation services.'}
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
                <span className="font-semibold text-sm sm:text-base text-[var(--color-brand-primary)] pr-3 sm:pr-4">
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
            className="hidden sm:block absolute -right-20 -top-20 w-80 h-80 object-contain opacity-10 pointer-events-none"
          />
          <img
            src="/assets/45.png"
            alt=""
            className="hidden sm:block absolute -left-20 -bottom-20 w-64 h-64 object-contain opacity-10 pointer-events-none rotate-45"
          />

          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
              {isSpanish ? 'Nunca Pierda Una Cita' : 'Never Miss an Appointment'}
            </h2>
            <p className="text-white/90 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
              {isSpanish
                ? 'Programe su transporte gratuito hoy y llegue a sus citas médicas de manera segura y puntual.'
                : 'Schedule your free transportation today and get to your medical appointments safely and on time.'}
            </p>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <Link
                to="/medical-plan"
                className="inline-flex items-center gap-2 gradient-yellow-orange text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold text-sm sm:text-base hover:shadow-xl transition-all shadow-lg"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                {isSpanish ? 'Agendar Cita' : 'Schedule Appointment'}
              </Link>
              <a
                href="tel:+13059828810"
                className="inline-flex items-center gap-2 bg-white text-[var(--color-brand-primary)] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold text-sm sm:text-base hover:shadow-lg transition-all"
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
