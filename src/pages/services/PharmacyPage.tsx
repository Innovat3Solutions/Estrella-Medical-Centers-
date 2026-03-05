import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Pill, ShieldCheck, CheckCircle2, ChevronRight, Clock, Phone, Calendar, Star, ChevronDown, Users, Truck, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n';
import { useState } from 'react';

export default function PharmacyPage() {
  const { language } = useLanguage();
  const isSpanish = language === 'es';
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const benefits = [
    {
      icon: Clock,
      titleEn: 'Same-Day Prescriptions',
      titleEs: 'Recetas el Mismo Dia',
      descEn: 'Get your medications before leaving the clinic',
      descEs: 'Obtenga sus medicamentos antes de salir de la clinica'
    },
    {
      icon: Truck,
      titleEn: 'Home Delivery Available',
      titleEs: 'Entrega a Domicilio',
      descEn: 'Medications delivered directly to your door',
      descEs: 'Medicamentos entregados directamente a su puerta'
    },
    {
      icon: RefreshCw,
      titleEn: 'Automatic Refills',
      titleEs: 'Resurtidos Automaticos',
      descEn: 'Never miss a dose with our refill reminders',
      descEs: 'Nunca pierda una dosis con nuestros recordatorios'
    },
    {
      icon: Users,
      titleEn: 'Bilingual Pharmacists',
      titleEs: 'Farmaceuticos Bilingues',
      descEn: 'Full Spanish and English medication counseling',
      descEs: 'Asesoria de medicamentos en espanol e ingles'
    }
  ];

  const services = [
    { en: 'Prescription Filling', es: 'Surtido de Recetas' },
    { en: 'Medication Counseling', es: 'Asesoria de Medicamentos' },
    { en: 'Automatic Refill Program', es: 'Programa de Resurtido Automatico' },
    { en: 'Home Medication Delivery', es: 'Entrega de Medicamentos a Domicilio' },
    { en: 'Insurance Coordination', es: 'Coordinacion con Seguros' },
    { en: 'Medicare Part D Assistance', es: 'Asistencia con Medicare Parte D' },
    { en: 'Medication Therapy Management', es: 'Manejo de Terapia con Medicamentos' },
    { en: 'Drug Interaction Screening', es: 'Revision de Interacciones de Medicamentos' },
    { en: 'Specialized Medications', es: 'Medicamentos Especializados' },
    { en: 'Diabetes Supplies', es: 'Suministros para Diabetes' },
    { en: 'Immunizations & Vaccines', es: 'Inmunizaciones y Vacunas' },
    { en: 'Over-the-Counter Consultations', es: 'Consultas de Medicamentos Sin Receta' }
  ];

  const faqs = [
    {
      questionEn: 'What are the benefits of using an in-house pharmacy?',
      questionEs: 'Cuales son los beneficios de usar una farmacia interna?',
      answerEn: 'Our in-house pharmacy eliminates the need to make a separate trip to fill your prescriptions. You can pick up your medications before leaving your appointment, ensuring you start treatment immediately. Plus, our pharmacists work directly with your doctor to resolve any insurance issues or medication concerns on the spot.',
      answerEs: 'Nuestra farmacia interna elimina la necesidad de hacer un viaje separado para surtir sus recetas. Puede recoger sus medicamentos antes de salir de su cita, asegurando que comience el tratamiento de inmediato. Ademas, nuestros farmaceuticos trabajan directamente con su medico para resolver cualquier problema de seguro o preocupaciones sobre medicamentos en el momento.'
    },
    {
      questionEn: 'How does the home medication delivery service work?',
      questionEs: 'Como funciona el servicio de entrega de medicamentos a domicilio?',
      answerEn: 'For qualifying patients, especially those with chronic conditions or mobility limitations, we offer free home delivery of medications. Our system tracks your refill dates and contacts you proactively to arrange delivery before you run out. This service is available to Medicare Advantage patients and others who qualify.',
      answerEs: 'Para pacientes que califican, especialmente aquellos con condiciones cronicas o limitaciones de movilidad, ofrecemos entrega gratuita de medicamentos a domicilio. Nuestro sistema rastrea sus fechas de resurtido y lo contacta proactivamente para coordinar la entrega antes de que se le agoten. Este servicio esta disponible para pacientes de Medicare Advantage y otros que califiquen.'
    },
    {
      questionEn: 'What is automatic refill and how do I sign up?',
      questionEs: 'Que es el resurtido automatico y como me inscribo?',
      answerEn: 'Our automatic refill program ensures you never run out of essential medications. We track when your prescriptions are due and prepare them in advance. Simply ask our pharmacist to enroll you, or mention it during your next doctor visit. We will contact you when refills are ready and can deliver them or have them waiting for pickup.',
      answerEs: 'Nuestro programa de resurtido automatico asegura que nunca se quede sin medicamentos esenciales. Rastreamos cuando vencen sus recetas y las preparamos con anticipacion. Simplemente pida a nuestro farmaceutico que lo inscriba, o mencionelo durante su proxima visita al medico. Lo contactaremos cuando los resurtidos esten listos y podemos entregarlos o tenerlos esperando para recoger.'
    },
    {
      questionEn: 'Do you accept Medicare Part D and other insurance plans?',
      questionEs: 'Aceptan Medicare Parte D y otros planes de seguro?',
      answerEn: 'Yes! We accept Medicare Part D, Medicaid, and most major insurance plans including Medicare Advantage plans. Our pharmacy team specializes in helping patients navigate their prescription coverage, find savings programs, and ensure you pay the lowest possible price for your medications.',
      answerEs: 'Si! Aceptamos Medicare Parte D, Medicaid y la mayoria de los planes de seguro principales incluyendo planes Medicare Advantage. Nuestro equipo de farmacia se especializa en ayudar a los pacientes a navegar su cobertura de recetas, encontrar programas de ahorro y asegurar que pague el precio mas bajo posible por sus medicamentos.'
    },
    {
      questionEn: 'How do the doctor and pharmacist work together for my care?',
      questionEs: 'Como trabajan juntos el medico y el farmaceutico para mi atencion?',
      answerEn: 'One of the biggest advantages of our in-house pharmacy is the direct communication between your doctor and pharmacist. If there is a question about dosage, a potential drug interaction, or an insurance coverage issue, they can resolve it immediately without you having to wait or make phone calls. This coordination leads to safer, more effective treatment.',
      answerEs: 'Una de las mayores ventajas de nuestra farmacia interna es la comunicacion directa entre su medico y farmaceutico. Si hay una pregunta sobre la dosis, una posible interaccion de medicamentos o un problema de cobertura de seguro, pueden resolverlo inmediatamente sin que tenga que esperar o hacer llamadas. Esta coordinacion conduce a un tratamiento mas seguro y efectivo.'
    },
    {
      questionEn: 'What specialized medications do you carry?',
      questionEs: 'Que medicamentos especializados tienen?',
      answerEn: 'We maintain an extensive inventory including hard-to-find medications, specialty drugs for chronic conditions like diabetes and hypertension, compounded medications when needed, and a full range of vaccines and immunizations. If we do not have something in stock, we can typically obtain it within 24-48 hours.',
      answerEs: 'Mantenemos un inventario extenso que incluye medicamentos dificiles de encontrar, medicamentos especializados para condiciones cronicas como diabetes e hipertension, medicamentos compuestos cuando se necesitan, y una gama completa de vacunas e inmunizaciones. Si no tenemos algo en existencia, generalmente podemos obtenerlo dentro de 24-48 horas.'
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
          className="absolute -right-20 -top-20 w-[500px] h-[500px] object-contain opacity-10 pointer-events-none"
        />
        <img
          src="/assets/45.png"
          alt=""
          className="absolute -left-32 bottom-0 w-[400px] h-[400px] object-contain opacity-5 pointer-events-none rotate-45"
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
            <ChevronRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
            <Link to="/services" className="hover:text-white transition-colors">
              {isSpanish ? 'Servicios' : 'Services'}
            </Link>
            <ChevronRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
            <span className="text-white font-medium">
              {isSpanish ? 'Farmacia' : 'Pharmacy'}
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
                <Pill className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                {isSpanish ? 'Farmacia Integrada' : 'Integrated Pharmacy'}
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {isSpanish ? 'Farmacia ' : 'In-House '}
                <span className="text-gradient-yellow-orange">
                  {isSpanish ? 'Interna' : 'Pharmacy'}
                </span>
              </h1>

              <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed">
                {isSpanish
                  ? 'Eliminamos la barrera entre el diagnostico y el tratamiento con nuestras farmacias internas totalmente integradas. Obtenga sus medicamentos antes de salir del edificio y comience su recuperacion de inmediato.'
                  : 'We eliminate the barrier between diagnosis and treatment with our fully integrated on-site pharmacies. Get your prescriptions filled before you leave the building and start your recovery immediately.'}
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
                <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                  <img
                    src="/assets/images/services/pharmacy-delivery.webp"
                    loading="lazy"
                    alt={isSpanish ? 'Servicio de farmacia' : 'Pharmacy service'}
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
                      <p className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--color-brand-primary)]">100K+</p>
                      <p className="text-[#64748b] text-xs sm:text-sm">{isSpanish ? 'Recetas Surtidas' : 'Prescriptions Filled'}</p>
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

      {/* The In-House Advantage & Medication Delivery Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* The In-House Advantage */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-10 shadow-lg border border-gray-100"
          >
            <ShieldCheck className="w-10 h-10 sm:w-12 sm:h-12 text-[var(--color-brand-secondary)] mb-4 sm:mb-6" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-brand-primary)] mb-3 sm:mb-4">
              {isSpanish ? 'La Ventaja de Farmacia Interna' : 'The In-House Advantage'}
            </h2>
            <p className="text-[#64748b] mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              {isSpanish
                ? 'Una causa importante del fracaso del tratamiento es la falta de adherencia a las recetas, a menudo causada por la friccion de ir a una farmacia separada. Lo resolvemos haciendo que el proceso sea completamente fluido:'
                : 'A major cause of treatment failure is prescription non-adherence, often caused by the friction of driving to a separate pharmacy. We solve this by making the process completely seamless:'}
            </p>

            <ul className="space-y-3 sm:space-y-4">
              {[
                { en: 'Zero extra travel: Walk from exam room to pharmacy counter', es: 'Cero viajes extra: Camine del consultorio al mostrador de farmacia' },
                { en: 'Direct doctor-pharmacist communication resolves issues instantly', es: 'Comunicacion directa medico-farmaceutico resuelve problemas al instante' },
                { en: 'Extensive inventory of specialized medications', es: 'Inventario extenso de medicamentos especializados' },
                { en: 'Automatic refill coordination by your care team', es: 'Coordinacion de resurtidos automaticos por su equipo de atencion' },
                { en: 'Private consultations on side effects and dosage', es: 'Consultas privadas sobre efectos secundarios y dosis' },
                { en: 'Insurance navigation and cost optimization', es: 'Navegacion de seguros y optimizacion de costos' }
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

          {/* Medication Delivery Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="gradient-blue rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-10 shadow-xl relative overflow-hidden"
          >
            <img
              src="/assets/45.png"
              alt=""
              className="absolute -right-16 -bottom-16 w-48 sm:w-64 h-48 sm:h-64 object-contain opacity-10 pointer-events-none"
            />
            <div className="relative z-10">
              <Truck className="w-10 h-10 sm:w-12 sm:h-12 text-[var(--color-brand-accent)] mb-4 sm:mb-6" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
                {isSpanish ? 'Entrega de Medicamentos a Domicilio' : 'Home Medication Delivery'}
              </h2>
              <p className="text-white/90 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                {isSpanish
                  ? 'No puede venir a la clinica? Para pacientes que califican, especialmente aquellos manejando condiciones cronicas a traves de Medicare Advantage, ofrecemos entrega de medicamentos directamente a su hogar.'
                  : "Can't make it to the clinic? For qualifying patients, especially those managing chronic conditions through Medicare Advantage, we offer direct-to-home medication delivery."}
              </p>
              <p className="text-white/90 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                {isSpanish
                  ? 'Nunca pierda una dosis. Nuestro sistema rastrea sus fechas de resurtido y lo contacta proactivamente para coordinar la entrega antes de que se le agoten medicamentos esenciales como insulina o estabilizadores de presion arterial.'
                  : 'Never miss a dose. Our system tracks your refill dates and proactively contacts you to arrange delivery before you run out of essential medications like insulin or blood pressure stabilizers.'}
              </p>

              <Link
                to="/doctors"
                className="inline-flex items-center gap-2 bg-white text-[var(--color-brand-primary)] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold hover:shadow-lg transition-all text-sm sm:text-base"
              >
                {isSpanish ? 'Hablar con un Doctor' : 'Talk to a Doctor'}
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
              {isSpanish ? 'Nuestros Servicios de Farmacia' : 'Our Pharmacy Services'}
            </h2>
            <p className="text-[#64748b] max-w-2xl mx-auto text-sm sm:text-base">
              {isSpanish
                ? 'Ofrecemos una gama completa de servicios farmaceuticos para apoyar su salud y bienestar.'
                : 'We offer a comprehensive range of pharmacy services to support your health and wellness.'}
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
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full gradient-yellow-orange text-white text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            FAQ
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-brand-primary)] mb-3 sm:mb-4">
            {isSpanish ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
          </h2>
          <p className="text-[#64748b] max-w-2xl mx-auto text-sm sm:text-base">
            {isSpanish
              ? 'Encuentre respuestas a las preguntas mas comunes sobre nuestros servicios de farmacia.'
              : 'Find answers to the most common questions about our pharmacy services.'}
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
          className="max-w-5xl mx-auto gradient-blue rounded-xl sm:rounded-2xl lg:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-16 text-center relative overflow-hidden"
        >
          <img
            src="/assets/45.png"
            alt=""
            className="absolute -right-20 -top-20 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 object-contain opacity-10 pointer-events-none"
          />
          <img
            src="/assets/45.png"
            alt=""
            className="absolute -left-20 -bottom-20 w-40 sm:w-52 md:w-64 h-40 sm:h-52 md:h-64 object-contain opacity-10 pointer-events-none rotate-45"
          />

          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
              {isSpanish ? 'Simplifique Sus Medicamentos Hoy' : 'Simplify Your Medications Today'}
            </h2>
            <p className="text-white/90 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
              {isSpanish
                ? 'Nuestro equipo de farmacia esta listo para ayudarlo a manejar sus medicamentos con facilidad y brindarle el cuidado personalizado que merece.'
                : 'Our pharmacy team is ready to help you manage your medications with ease and provide the personalized care you deserve.'}
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
