import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { HeartPulse, CheckCircle2, ChevronRight, Clock, Heart, Phone, Calendar, Star, ChevronDown, Users, Award, AlertTriangle, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n';
import { useState } from 'react';

export default function CardiologyPage() {
  const { language } = useLanguage();
  const isSpanish = language === 'es';
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const benefits = [
    {
      icon: Clock,
      titleEn: 'Same-Week Cardiac Testing',
      titleEs: 'Pruebas Cardiacas en la Misma Semana',
      descEn: 'Get EKGs and echocardiograms without long waits',
      descEs: 'Obtenga EKGs y ecocardiogramas sin largas esperas'
    },
    {
      icon: Users,
      titleEn: 'Bilingual Cardiology Team',
      titleEs: 'Equipo de Cardiologia Bilingue',
      descEn: 'Full Spanish and English cardiac care',
      descEs: 'Atencion cardiaca completa en espanol e ingles'
    },
    {
      icon: Heart,
      titleEn: 'Comprehensive Heart Care',
      titleEs: 'Cuidado Cardiaco Integral',
      descEn: 'From prevention to post-heart attack recovery',
      descEs: 'Desde prevencion hasta recuperacion post-infarto'
    },
    {
      icon: Award,
      titleEn: 'Board-Certified Cardiologists',
      titleEs: 'Cardiologos Certificados',
      descEn: 'Expert physicians with decades of experience',
      descEs: 'Medicos expertos con decadas de experiencia'
    }
  ];

  const services = [
    { en: 'EKG/ECG Testing', es: 'Pruebas de EKG/ECG' },
    { en: 'Echocardiograms', es: 'Ecocardiogramas' },
    { en: 'Holter Monitoring', es: 'Monitoreo Holter' },
    { en: 'Event Monitoring', es: 'Monitoreo de Eventos' },
    { en: 'Hypertension Management', es: 'Control de Hipertension' },
    { en: 'Cholesterol Control', es: 'Control de Colesterol' },
    { en: 'Heart Disease Prevention', es: 'Prevencion de Enfermedades Cardiacas' },
    { en: 'Arrhythmia Diagnosis', es: 'Diagnostico de Arritmias' },
    { en: 'Post-Heart Attack Care', es: 'Cuidado Post-Infarto' },
    { en: 'Stress Testing', es: 'Pruebas de Esfuerzo' },
    { en: 'Lipid Management', es: 'Manejo de Lipidos' },
    { en: 'Cardiac Risk Assessment', es: 'Evaluacion de Riesgo Cardiaco' }
  ];

  const faqs = [
    {
      questionEn: 'What is the difference between an EKG and an Echocardiogram?',
      questionEs: 'Cual es la diferencia entre un EKG y un Ecocardiograma?',
      answerEn: 'An EKG (Electrocardiogram) measures the electrical activity of your heart and can detect irregular rhythms, heart attacks, and other electrical problems. An Echocardiogram uses ultrasound to create images of your heart, showing its structure, how well it pumps blood, and detecting valve problems or heart enlargement. Both tests are non-invasive and often used together for comprehensive heart evaluation.',
      answerEs: 'Un EKG (Electrocardiograma) mide la actividad electrica de su corazon y puede detectar ritmos irregulares, ataques cardiacos y otros problemas electricos. Un Ecocardiograma utiliza ultrasonido para crear imagenes de su corazon, mostrando su estructura, que tan bien bombea sangre, y detectando problemas de valvulas o agrandamiento del corazon. Ambas pruebas son no invasivas y a menudo se usan juntas para una evaluacion cardiaca completa.'
    },
    {
      questionEn: 'What is Holter monitoring and when is it needed?',
      questionEs: 'Que es el monitoreo Holter y cuando se necesita?',
      answerEn: 'Holter monitoring is a continuous 24-48 hour recording of your heart rhythm using a portable device you wear. It is prescribed when symptoms like palpitations, dizziness, or fainting occur intermittently and may not show up during a brief office EKG. The extended monitoring helps capture irregular heartbeats that happen sporadically throughout your daily activities.',
      answerEs: 'El monitoreo Holter es una grabacion continua de 24-48 horas del ritmo de su corazon usando un dispositivo portatil que usted usa. Se prescribe cuando sintomas como palpitaciones, mareos o desmayos ocurren intermitentemente y pueden no aparecer durante un EKG breve en la oficina. El monitoreo extendido ayuda a capturar latidos irregulares que ocurren esporadicamente durante sus actividades diarias.'
    },
    {
      questionEn: 'How can I lower my cholesterol without medication?',
      questionEs: 'Como puedo bajar mi colesterol sin medicamentos?',
      answerEn: 'Lifestyle changes can significantly impact cholesterol levels. Focus on eating heart-healthy foods rich in fiber (oats, beans, fruits), reducing saturated fats, exercising at least 150 minutes weekly, maintaining a healthy weight, and quitting smoking. However, some patients with genetic predisposition or very high levels may still need medication. Our cardiologists will create a personalized plan based on your specific situation.',
      answerEs: 'Los cambios en el estilo de vida pueden impactar significativamente los niveles de colesterol. Enfoquese en comer alimentos saludables para el corazon ricos en fibra (avena, frijoles, frutas), reducir grasas saturadas, hacer ejercicio al menos 150 minutos semanales, mantener un peso saludable y dejar de fumar. Sin embargo, algunos pacientes con predisposicion genetica o niveles muy altos aun pueden necesitar medicamentos. Nuestros cardiologos crearan un plan personalizado basado en su situacion especifica.'
    },
    {
      questionEn: 'What blood pressure numbers are considered dangerous?',
      questionEs: 'Que numeros de presion arterial se consideran peligrosos?',
      answerEn: 'Normal blood pressure is below 120/80 mmHg. Elevated blood pressure is 120-129 systolic with less than 80 diastolic. Stage 1 hypertension is 130-139/80-89, and Stage 2 is 140+/90+. A hypertensive crisis requiring immediate medical attention is above 180/120. Even mildly elevated readings over time significantly increase your risk of heart attack, stroke, and kidney disease.',
      answerEs: 'La presion arterial normal es menos de 120/80 mmHg. La presion arterial elevada es 120-129 sistolica con menos de 80 diastolica. La hipertension Etapa 1 es 130-139/80-89, y la Etapa 2 es 140+/90+. Una crisis hipertensiva que requiere atencion medica inmediata es superior a 180/120. Incluso lecturas ligeramente elevadas con el tiempo aumentan significativamente su riesgo de ataque cardiaco, derrame cerebral y enfermedad renal.'
    },
    {
      questionEn: 'What happens after a heart attack? What care do I need?',
      questionEs: 'Que sucede despues de un ataque cardiaco? Que cuidado necesito?',
      answerEn: 'Post-heart attack care involves cardiac rehabilitation, medication management (blood thinners, beta-blockers, statins), lifestyle modifications, and regular monitoring. Our team coordinates your recovery with follow-up echocardiograms, stress tests, and ongoing risk factor management. We focus on preventing future events while helping you regain strength and confidence in your heart health.',
      answerEs: 'El cuidado post-infarto incluye rehabilitacion cardiaca, manejo de medicamentos (anticoagulantes, betabloqueadores, estatinas), modificaciones del estilo de vida y monitoreo regular. Nuestro equipo coordina su recuperacion con ecocardiogramas de seguimiento, pruebas de esfuerzo y manejo continuo de factores de riesgo. Nos enfocamos en prevenir eventos futuros mientras le ayudamos a recuperar fuerza y confianza en la salud de su corazon.'
    },
    {
      questionEn: 'Do you accept Medicare for cardiology services?',
      questionEs: 'Aceptan Medicare para servicios de cardiologia?',
      answerEn: 'Yes! Estrella Medical Centers accepts Medicare, Medicaid, and most major insurance plans for all cardiology services including EKGs, echocardiograms, Holter monitoring, and specialist consultations. Our billing team can verify your coverage and explain any out-of-pocket costs before your appointment.',
      answerEs: 'Si! Estrella Medical Centers acepta Medicare, Medicaid y la mayoria de los planes de seguro principales para todos los servicios de cardiologia, incluyendo EKGs, ecocardiogramas, monitoreo Holter y consultas con especialistas. Nuestro equipo de facturacion puede verificar su cobertura y explicar cualquier costo de bolsillo antes de su cita.'
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
              {isSpanish ? 'Cardiologia' : 'Cardiology'}
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
                <HeartPulse className="w-4 h-4" />
                {isSpanish ? 'Especialidad Medica' : 'Medical Specialty'}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {isSpanish ? 'Cuidado del ' : 'Heart '}
                <span className="text-gradient-yellow-orange">
                  {isSpanish ? 'Corazon' : 'Care'}
                </span>
              </h1>

              <p className="text-white/90 text-base sm:text-lg leading-relaxed">
                {isSpanish
                  ? 'Su corazon nunca deja de trabajar por usted, y nosotros tampoco. Nuestros cardiologos expertos utilizan lo ultimo en diagnostico no invasivo para identificar, manejar y tratar enfermedades cardiovasculares con precision y compasion.'
                  : 'Your heart never stops working for you, and neither do we. Our expert cardiologists utilize the latest in non-invasive diagnostic capabilities to identify, manage, and treat cardiovascular diseases with precision and compassion.'}
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
                    src="/assets/images/services/cardiology-exam.webp"
                    loading="lazy"
                    alt={isSpanish ? 'Examen de cardiologia' : 'Cardiology examination'}
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
                      <p className="text-xl sm:text-2xl font-bold text-[var(--color-brand-primary)]">15,000+</p>
                      <p className="text-[#64748b] text-xs sm:text-sm">{isSpanish ? 'Pruebas Cardiacas' : 'Cardiac Tests'}</p>
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

      {/* Warning Signs & Treatment Options Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Warning Signs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg border border-gray-100"
          >
            <AlertTriangle className="w-10 h-10 sm:w-12 sm:h-12 text-red-500 mb-4 sm:mb-6" />
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--color-brand-primary)] mb-3 sm:mb-4">
              {isSpanish ? 'Senales de Advertencia' : 'Warning Signs'}
            </h2>
            <p className="text-[#64748b] mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              {isSpanish
                ? 'La enfermedad cardiovascular a menudo es silenciosa. NO ignore estos sintomas. Programe una consulta de inmediato si experimenta:'
                : 'Cardiovascular disease can often be silent. DO NOT ignore these symptoms. Schedule a consultation immediately if you experience:'}
            </p>

            <ul className="space-y-3 sm:space-y-4">
              {[
                { en: 'Chest pain or prolonged discomfort (angina)', es: 'Dolor o molestia prolongada en el pecho (angina)' },
                { en: 'Shortness of breath during normal activities', es: 'Falta de aliento durante actividades normales' },
                { en: 'Heart palpitations or irregular heartbeats', es: 'Palpitaciones o latidos cardiacos irregulares' },
                { en: 'Dizziness, lightheadedness, or fainting', es: 'Mareos, aturdimiento o desmayos' },
                { en: 'Swelling in legs, ankles, or feet (Edema)', es: 'Hinchazon en piernas, tobillos o pies (Edema)' },
                { en: 'Family history of heart disease', es: 'Antecedentes familiares de enfermedad cardiaca' }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 sm:gap-4">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <span className="text-[#1e293b] font-medium text-sm sm:text-base">
                    {isSpanish ? item.es : item.en}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Treatment Options */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="gradient-blue rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl relative overflow-hidden"
          >
            <img
              src="/assets/45.png"
              alt=""
              className="absolute -right-16 -bottom-16 w-48 sm:w-64 h-48 sm:h-64 object-contain opacity-10 pointer-events-none"
            />
            <div className="relative z-10">
              <Activity className="w-10 h-10 sm:w-12 sm:h-12 text-[var(--color-brand-accent)] mb-4 sm:mb-6" />
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
                {isSpanish ? 'Opciones de Tratamiento' : 'Treatment Options'}
              </h2>
              <p className="text-white/90 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                {isSpanish
                  ? 'Nos enorgullecemos de ofrecer capacidades cardiovasculares completas directamente en nuestros centros, asegurando que no tenga que viajar lejos para pruebas criticas y atencion especializada.'
                  : 'We pride ourselves on comprehensive cardiovascular capabilities located right in our centers, ensuring you do not have to travel far for critical testing and specialized care.'}
              </p>
              <p className="text-white/90 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                {isSpanish
                  ? 'Desde diagnostico preventivo hasta rehabilitacion post-infarto, nuestro equipo de cardiologia coordina cada aspecto de la salud de su corazon con tecnologia de vanguardia y atencion compasiva.'
                  : 'From preventive diagnostics to post-heart attack rehabilitation, our cardiology team coordinates every aspect of your heart health with cutting-edge technology and compassionate care.'}
              </p>

              <Link
                to="/doctors"
                className="inline-flex items-center gap-2 bg-white text-[var(--color-brand-primary)] px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold hover:shadow-lg transition-all text-sm sm:text-base"
              >
                {isSpanish ? 'Conocer a Nuestros Cardiologos' : 'Meet Our Cardiologists'}
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
              {isSpanish ? 'Nuestros Servicios de Cardiologia' : 'Our Cardiology Services'}
            </h2>
            <p className="text-[#64748b] max-w-2xl mx-auto text-sm sm:text-base px-2">
              {isSpanish
                ? 'Ofrecemos una gama completa de servicios de cardiologia para proteger y mejorar la salud de su corazon.'
                : 'We offer a comprehensive range of cardiology services to protect and improve your heart health.'}
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
              ? 'Encuentre respuestas a las preguntas mas comunes sobre la salud del corazon y nuestros servicios de cardiologia.'
              : 'Find answers to the most common questions about heart health and our cardiology services.'}
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
            src="/assets/45.png"
            alt=""
            className="absolute -right-20 -top-20 w-48 sm:w-80 h-48 sm:h-80 object-contain opacity-10 pointer-events-none"
          />
          <img
            src="/assets/45.png"
            alt=""
            className="absolute -left-20 -bottom-20 w-40 sm:w-64 h-40 sm:h-64 object-contain opacity-10 pointer-events-none rotate-45"
          />

          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
              {isSpanish ? 'Proteja Su Corazon Hoy' : 'Protect Your Heart Today'}
            </h2>
            <p className="text-white/90 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
              {isSpanish
                ? 'Nuestro equipo de cardiologia esta listo para brindarle la atencion experta y compasiva que su corazon merece. No espere a que aparezcan los sintomas.'
                : 'Our cardiology team is ready to provide you with the expert, compassionate care your heart deserves. Do not wait for symptoms to appear.'}
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
