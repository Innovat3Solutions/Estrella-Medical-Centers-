import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Microscope, Activity, ShieldCheck, CheckCircle2, ChevronRight, Clock, Phone, Calendar, Star, ChevronDown, Zap, FileCheck, Beaker } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n';
import { useState } from 'react';

export default function DiagnosticsPage() {
  const { language } = useLanguage();
  const isSpanish = language === 'es';
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const benefits = [
    {
      icon: Clock,
      titleEn: 'Same-Day Results',
      titleEs: 'Resultados el Mismo Dia',
      descEn: 'Most lab results available within hours',
      descEs: 'La mayoria de resultados disponibles en horas'
    },
    {
      icon: Beaker,
      titleEn: 'On-Site Laboratory',
      titleEs: 'Laboratorio en el Centro',
      descEn: 'No need to visit external facilities',
      descEs: 'Sin necesidad de visitar instalaciones externas'
    },
    {
      icon: Zap,
      titleEn: 'Rapid Testing',
      titleEs: 'Pruebas Rapidas',
      descEn: 'Quick turnaround for urgent needs',
      descEs: 'Respuesta rapida para necesidades urgentes'
    },
    {
      icon: FileCheck,
      titleEn: 'Digital Results Portal',
      titleEs: 'Portal Digital de Resultados',
      descEn: 'Access your results online anytime',
      descEs: 'Acceda a sus resultados en linea en cualquier momento'
    }
  ];

  const services = [
    { en: 'Complete Blood Count (CBC)', es: 'Conteo Sanguineo Completo (CBC)' },
    { en: 'Comprehensive Metabolic Panel', es: 'Panel Metabolico Completo' },
    { en: 'A1C Testing (Diabetes)', es: 'Prueba de A1C (Diabetes)' },
    { en: 'Cholesterol & Lipid Panel', es: 'Panel de Colesterol y Lipidos' },
    { en: 'Thyroid Function Tests', es: 'Pruebas de Funcion Tiroidea' },
    { en: 'Urinalysis', es: 'Analisis de Orina' },
    { en: 'EKG/ECG Testing', es: 'Pruebas de EKG/ECG' },
    { en: 'Digital X-Ray Imaging', es: 'Radiografias Digitales' },
    { en: 'Ultrasound (Abdominal)', es: 'Ultrasonido (Abdominal)' },
    { en: 'Vascular Ultrasound', es: 'Ultrasonido Vascular' },
    { en: 'Liver & Kidney Panels', es: 'Paneles de Higado y Rinon' },
    { en: 'Vitamin D & B12 Testing', es: 'Pruebas de Vitamina D y B12' }
  ];

  const faqs = [
    {
      questionEn: 'Do I need to fast before my blood work?',
      questionEs: 'Necesito ayunar antes de mi analisis de sangre?',
      answerEn: 'It depends on the type of test. For fasting blood glucose, lipid panels, and comprehensive metabolic panels, you typically need to fast for 8-12 hours before your appointment. Water is usually allowed. Our staff will inform you when scheduling if fasting is required for your specific tests.',
      answerEs: 'Depende del tipo de prueba. Para glucosa en ayunas, paneles de lipidos y paneles metabolicos completos, generalmente necesita ayunar de 8 a 12 horas antes de su cita. Normalmente se permite el agua. Nuestro personal le informara al programar si se requiere ayuno para sus pruebas especificas.'
    },
    {
      questionEn: 'How quickly will I receive my lab results?',
      questionEs: 'Que tan rapido recibire mis resultados de laboratorio?',
      answerEn: 'Most routine blood work results are available within 24-48 hours, and many same-day. Rapid tests like glucose and certain screenings can be ready in minutes. More specialized tests may take 3-5 business days. Results are shared through our secure digital portal and reviewed by your doctor.',
      answerEs: 'La mayoria de los resultados de analisis de sangre de rutina estan disponibles en 24-48 horas, y muchos el mismo dia. Las pruebas rapidas como glucosa y ciertos examenes pueden estar listas en minutos. Las pruebas mas especializadas pueden tomar de 3 a 5 dias habiles. Los resultados se comparten a traves de nuestro portal digital seguro y son revisados por su medico.'
    },
    {
      questionEn: 'What imaging services do you offer on-site?',
      questionEs: 'Que servicios de imagenes ofrecen en el centro?',
      answerEn: 'Our medical centers are equipped with digital X-ray machines and diagnostic ultrasound equipment. We can perform abdominal ultrasounds, vascular studies, and standard X-rays for bones, joints, and chest imaging. For advanced imaging like MRI or CT scans, we provide referrals to trusted partner facilities.',
      answerEs: 'Nuestros centros medicos estan equipados con maquinas de rayos X digitales y equipos de ultrasonido diagnostico. Podemos realizar ultrasonidos abdominales, estudios vasculares y rayos X estandar para huesos, articulaciones e imagenes de torax. Para imagenes avanzadas como MRI o tomografias, proporcionamos referencias a instalaciones asociadas confiables.'
    },
    {
      questionEn: 'Do I need a doctor\'s order for lab work?',
      questionEs: 'Necesito una orden medica para los analisis de laboratorio?',
      answerEn: 'Yes, most laboratory tests require a doctor\'s order. However, if you are an established patient at Estrella Medical Centers, your primary care physician can order tests during your visit or remotely through our patient portal. New patients can schedule a consultation to determine which tests are appropriate.',
      answerEs: 'Si, la mayoria de las pruebas de laboratorio requieren una orden medica. Sin embargo, si es un paciente establecido en Estrella Medical Centers, su medico de atencion primaria puede ordenar pruebas durante su visita o de forma remota a traves de nuestro portal de pacientes. Los nuevos pacientes pueden programar una consulta para determinar que pruebas son apropiadas.'
    },
    {
      questionEn: 'Does insurance cover diagnostic testing?',
      questionEs: 'El seguro cubre las pruebas de diagnostico?',
      answerEn: 'Most insurance plans, including Medicare and Medicaid, cover medically necessary diagnostic testing. Preventive screenings are often covered at 100% under the Affordable Care Act. Our billing team will verify your coverage before testing and explain any potential out-of-pocket costs.',
      answerEs: 'La mayoria de los planes de seguro, incluyendo Medicare y Medicaid, cubren las pruebas de diagnostico medicamente necesarias. Los examenes preventivos a menudo estan cubiertos al 100% bajo la Ley de Cuidado de Salud Asequible. Nuestro equipo de facturacion verificara su cobertura antes de las pruebas y explicara cualquier costo de bolsillo potencial.'
    },
    {
      questionEn: 'What is an A1C test and why is it important?',
      questionEs: 'Que es una prueba de A1C y por que es importante?',
      answerEn: 'The A1C test measures your average blood sugar levels over the past 2-3 months. It is a crucial tool for diagnosing diabetes and prediabetes, and for monitoring how well diabetes is being managed. Unlike daily glucose tests, A1C gives a broader picture of your blood sugar control and helps your doctor adjust your treatment plan.',
      answerEs: 'La prueba de A1C mide sus niveles promedio de azucar en sangre durante los ultimos 2-3 meses. Es una herramienta crucial para diagnosticar diabetes y prediabetes, y para monitorear que tan bien se esta manejando la diabetes. A diferencia de las pruebas diarias de glucosa, A1C brinda una imagen mas amplia de su control de azucar en sangre y ayuda a su medico a ajustar su plan de tratamiento.'
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
              {isSpanish ? 'Laboratorio y Diagnostico' : 'Diagnostics'}
            </span>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 space-y-4 sm:space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/20 text-white text-xs sm:text-sm font-semibold">
                <Microscope className="w-4 h-4 sm:w-5 sm:h-5" />
                {isSpanish ? 'Laboratorio en el Centro' : 'On-Site Laboratory'}
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                {isSpanish ? 'Laboratorio y ' : 'On-Site '}
                <span className="text-gradient-yellow-orange">
                  {isSpanish ? 'Diagnostico' : 'Diagnostics'}
                </span>
              </h1>

              <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed">
                {isSpanish
                  ? 'No conduzca por toda la ciudad para hacerse examenes de sangre y radiografias. Nuestros centros estan completamente equipados con laboratorios, equipos de ultrasonido y rayos X de ultima generacion para obtener resultados rapidos y precisos.'
                  : 'Don\'t drive across town for bloodwork and X-rays. Our centers are fully equipped with state-of-the-art labs, ultrasound equipment, and digital X-rays to get fast, accurate results all in one convenient location.'}
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
                <div className="rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                  <img
                    src="/assets/images/services/diagnostics.png"
                    alt={isSpanish ? 'Servicios de laboratorio y diagnostico' : 'Laboratory and diagnostic services'}
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
                      <p className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--color-brand-primary)]">24-48h</p>
                      <p className="text-[#64748b] text-xs sm:text-sm">{isSpanish ? 'Resultados Rapidos' : 'Fast Results'}</p>
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
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-8 lg:gap-12">
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

      {/* Available Testing & Fast Results Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* Available Testing */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-10 shadow-lg border border-gray-100"
          >
            <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[var(--color-brand-secondary)] mb-4 sm:mb-6" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-brand-primary)] mb-3 sm:mb-4">
              {isSpanish ? 'Pruebas Disponibles' : 'Available Testing'}
            </h2>
            <p className="text-[#64748b] text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
              {isSpanish
                ? 'Los diagnosticos rapidos significan planes de tratamiento mas veloces. Ofrecemos todo, desde examenes preventivos hasta evaluaciones de cuidados urgentes, todo bajo un mismo techo.'
                : 'Rapid diagnostics mean faster treatment plans. We offer everything from preventive screenings to urgent care evaluations, all under one roof.'}
            </p>

            <ul className="space-y-3 sm:space-y-4">
              {[
                { en: 'Complete Blood Count (CBC) and metabolic panels', es: 'Conteo Sanguineo Completo (CBC) y paneles metabolicos' },
                { en: 'A1C testing for diabetes monitoring', es: 'Pruebas de A1C para monitoreo de diabetes' },
                { en: 'Cholesterol and lipid screening', es: 'Examenes de colesterol y lipidos' },
                { en: 'Diagnostic ultrasound (vascular and abdominal)', es: 'Ultrasonido diagnostico (vascular y abdominal)' },
                { en: 'Digital X-rays for bones and joints', es: 'Rayos X digitales para huesos y articulaciones' },
                { en: 'EKG testing for heart health', es: 'Pruebas de EKG para salud cardiaca' }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 sm:gap-4">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[var(--color-brand-light)] text-[var(--color-brand-primary)] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <span className="text-[#1e293b] text-sm sm:text-base font-medium">
                    {isSpanish ? item.es : item.en}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Fast Results Panel */}
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
              <Activity className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[var(--color-brand-accent)] mb-4 sm:mb-6" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
                {isSpanish ? 'Resultados Rapidos y Precisos' : 'Fast & Accurate Results'}
              </h2>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                {isSpanish
                  ? 'Atras quedaron los dias de esperar semanas para obtener resultados e intentar enviar por fax documentos ilegibles. Nuestro portal digital le permite a usted y a su medico revisar imagenes y resultados instantaneamente.'
                  : 'Gone are the days of waiting weeks for results and trying to fax illegible paperwork. Our digital portal allows you and your doctor to review imaging and results instantaneously.'}
              </p>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                {isSpanish
                  ? 'Con nuestro laboratorio en el centro, la mayoria de los resultados de rutina estan disponibles en 24-48 horas. Las pruebas rapidas como glucosa pueden estar listas en minutos, permitiendo que su medico tome decisiones informadas durante su visita.'
                  : 'With our on-site laboratory, most routine results are available within 24-48 hours. Rapid tests like glucose can be ready in minutes, allowing your doctor to make informed decisions during your visit.'}
              </p>

              <Link
                to="/doctors"
                className="inline-flex items-center gap-2 bg-white text-[var(--color-brand-primary)] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold text-sm sm:text-base hover:shadow-lg transition-all"
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
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full gradient-yellow-orange text-white text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              {isSpanish ? 'Servicios Completos' : 'Complete Services'}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-brand-primary)] mb-3 sm:mb-4">
              {isSpanish ? 'Nuestros Servicios de Diagnostico' : 'Our Diagnostic Services'}
            </h2>
            <p className="text-[#64748b] text-sm sm:text-base max-w-2xl mx-auto">
              {isSpanish
                ? 'Ofrecemos una gama completa de pruebas de laboratorio y servicios de imagenes para satisfacer todas sus necesidades de diagnostico.'
                : 'We offer a comprehensive range of laboratory testing and imaging services to meet all your diagnostic needs.'}
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
          <p className="text-[#64748b] text-sm sm:text-base max-w-2xl mx-auto">
            {isSpanish
              ? 'Encuentre respuestas a las preguntas mas comunes sobre nuestros servicios de laboratorio y diagnostico.'
              : 'Find answers to the most common questions about our laboratory and diagnostic services.'}
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
              {isSpanish ? 'Obtenga Sus Resultados Hoy' : 'Get Your Results Today'}
            </h2>
            <p className="text-white/90 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
              {isSpanish
                ? 'Nuestro laboratorio en el centro y equipo de diagnostico estan listos para brindarle resultados rapidos y precisos. Programe su cita hoy.'
                : 'Our on-site laboratory and diagnostic team are ready to provide you with fast, accurate results. Schedule your appointment today.'}
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
