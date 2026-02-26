import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, CheckCircle2, ChevronRight, Heart, Phone, Calendar, Star, ChevronDown, Users, Award, AlertTriangle, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n';
import { useState } from 'react';

export default function NeurologyPage() {
  const { language } = useLanguage();
  const isSpanish = language === 'es';
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const benefits = [
    {
      icon: Brain,
      titleEn: 'Expert Neurologists',
      titleEs: 'Neurologos Expertos',
      descEn: 'Board-certified specialists in brain and nerve disorders',
      descEs: 'Especialistas certificados en trastornos del cerebro y nervios'
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
      titleEn: 'Compassionate Treatment',
      titleEs: 'Tratamiento Compasivo',
      descEn: 'Personalized care plans for your neurological needs',
      descEs: 'Planes de atencion personalizados para sus necesidades neurologicas'
    },
    {
      icon: Award,
      titleEn: 'Advanced Diagnostics',
      titleEs: 'Diagnosticos Avanzados',
      descEn: 'State-of-the-art neurological testing and imaging',
      descEs: 'Pruebas neurologicas e imagenes de ultima generacion'
    }
  ];

  const services = [
    { en: 'Headache & Migraine Treatment', es: 'Tratamiento de Dolores de Cabeza y Migranas' },
    { en: 'Diabetic Neuropathy Care', es: 'Cuidado de Neuropatia Diabetica' },
    { en: 'Peripheral Neuropathy Management', es: 'Manejo de Neuropatia Periferica' },
    { en: 'Memory Disorder Evaluation', es: 'Evaluacion de Trastornos de Memoria' },
    { en: 'Dementia & Alzheimer Care', es: 'Cuidado de Demencia y Alzheimer' },
    { en: 'Stroke Prevention & Recovery', es: 'Prevencion y Recuperacion de Derrames' },
    { en: 'Seizure & Epilepsy Management', es: 'Manejo de Convulsiones y Epilepsia' },
    { en: 'Parkinson Disease Treatment', es: 'Tratamiento de Enfermedad de Parkinson' },
    { en: 'Movement Disorder Therapy', es: 'Terapia de Trastornos del Movimiento' },
    { en: 'Nerve Pain Management', es: 'Manejo del Dolor de Nervios' },
    { en: 'Brain Health Assessments', es: 'Evaluaciones de Salud Cerebral' },
    { en: 'Neurological Consultations', es: 'Consultas Neurologicas' }
  ];

  const warningSignsList = [
    { en: 'Chronic or severe headaches and migraines', es: 'Dolores de cabeza cronicos o severos y migranas' },
    { en: 'Numbness, tingling, or burning in hands and feet', es: 'Entumecimiento, hormigueo o ardor en manos y pies' },
    { en: 'Memory loss or confusion', es: 'Perdida de memoria o confusion' },
    { en: 'Tremors or involuntary movements', es: 'Temblores o movimientos involuntarios' },
    { en: 'Difficulty walking or balance problems', es: 'Dificultad para caminar o problemas de equilibrio' },
    { en: 'Sudden vision changes or dizziness', es: 'Cambios repentinos de vision o mareos' }
  ];

  const faqs = [
    {
      questionEn: 'What conditions does a neurologist treat?',
      questionEs: 'Que condiciones trata un neurologo?',
      answerEn: 'Neurologists diagnose and treat conditions affecting the brain, spinal cord, and nervous system. This includes headaches and migraines, neuropathy (nerve damage), memory disorders like dementia and Alzheimer disease, stroke, seizures and epilepsy, Parkinson disease, multiple sclerosis, and chronic nerve pain. We provide comprehensive care for both common and complex neurological conditions.',
      answerEs: 'Los neurologos diagnostican y tratan condiciones que afectan el cerebro, la medula espinal y el sistema nervioso. Esto incluye dolores de cabeza y migranas, neuropatia (dano a los nervios), trastornos de memoria como demencia y enfermedad de Alzheimer, derrames cerebrales, convulsiones y epilepsia, enfermedad de Parkinson, esclerosis multiple y dolor cronico de nervios. Proporcionamos atencion integral para condiciones neurologicas comunes y complejas.'
    },
    {
      questionEn: 'What is diabetic neuropathy and how is it treated?',
      questionEs: 'Que es la neuropatia diabetica y como se trata?',
      answerEn: 'Diabetic neuropathy is nerve damage caused by high blood sugar levels over time. Symptoms include numbness, tingling, burning sensations, and pain in the feet and hands. Treatment focuses on controlling blood sugar, managing pain with medications, physical therapy, and lifestyle modifications. Early detection and proper diabetes management can prevent or slow progression of this condition.',
      answerEs: 'La neuropatia diabetica es un dano a los nervios causado por niveles altos de azucar en la sangre con el tiempo. Los sintomas incluyen entumecimiento, hormigueo, sensaciones de ardor y dolor en los pies y manos. El tratamiento se enfoca en controlar el azucar en la sangre, manejar el dolor con medicamentos, terapia fisica y modificaciones del estilo de vida. La deteccion temprana y el manejo adecuado de la diabetes pueden prevenir o retardar la progresion de esta condicion.'
    },
    {
      questionEn: 'When should I see a neurologist for headaches?',
      questionEs: 'Cuando debo ver a un neurologo por dolores de cabeza?',
      answerEn: 'You should see a neurologist if you experience frequent headaches (more than 2-3 per week), severe migraines that interfere with daily life, headaches that wake you from sleep, sudden severe headaches, headaches with neurological symptoms like vision changes or weakness, or if over-the-counter medications are not effective. Our neurologists can identify the cause and create a personalized treatment plan.',
      answerEs: 'Debe ver a un neurologo si experimenta dolores de cabeza frecuentes (mas de 2-3 por semana), migranas severas que interfieren con la vida diaria, dolores de cabeza que lo despiertan del sueno, dolores de cabeza severos repentinos, dolores de cabeza con sintomas neurologicos como cambios de vision o debilidad, o si los medicamentos de venta libre no son efectivos. Nuestros neurologos pueden identificar la causa y crear un plan de tratamiento personalizado.'
    },
    {
      questionEn: 'What are the early signs of dementia or Alzheimer disease?',
      questionEs: 'Cuales son los signos tempranos de demencia o enfermedad de Alzheimer?',
      answerEn: 'Early signs include memory loss that disrupts daily life, difficulty planning or solving problems, confusion with time or place, trouble understanding visual images, new problems with words in speaking or writing, misplacing things frequently, decreased judgment, withdrawal from social activities, and changes in mood or personality. If you notice these signs in yourself or a loved one, early evaluation is important for proper diagnosis and treatment planning.',
      answerEs: 'Los signos tempranos incluyen perdida de memoria que interrumpe la vida diaria, dificultad para planificar o resolver problemas, confusion con el tiempo o lugar, problemas para entender imagenes visuales, nuevos problemas con palabras al hablar o escribir, extraviar cosas frecuentemente, disminucion del juicio, alejamiento de actividades sociales y cambios en el estado de animo o personalidad. Si nota estos signos en usted o un ser querido, la evaluacion temprana es importante para un diagnostico adecuado y planificacion del tratamiento.'
    },
    {
      questionEn: 'How can I reduce my risk of stroke?',
      questionEs: 'Como puedo reducir mi riesgo de derrame cerebral?',
      answerEn: 'Stroke prevention involves managing key risk factors: controlling high blood pressure, managing diabetes, maintaining healthy cholesterol levels, not smoking, limiting alcohol, exercising regularly, eating a heart-healthy diet, and maintaining a healthy weight. Our neurologists work with your primary care team to create a comprehensive stroke prevention plan, especially if you have risk factors or a family history of stroke.',
      answerEs: 'La prevencion de derrames cerebrales implica manejar factores de riesgo clave: controlar la presion arterial alta, manejar la diabetes, mantener niveles saludables de colesterol, no fumar, limitar el alcohol, hacer ejercicio regularmente, comer una dieta saludable para el corazon y mantener un peso saludable. Nuestros neurologos trabajan con su equipo de atencion primaria para crear un plan integral de prevencion de derrames, especialmente si tiene factores de riesgo o antecedentes familiares de derrame cerebral.'
    },
    {
      questionEn: 'Do you accept Medicare for neurology services?',
      questionEs: 'Aceptan Medicare para servicios de neurologia?',
      answerEn: 'Yes! Estrella Medical Centers accepts Medicare, Medicaid, and most major insurance plans for neurology services. We also work with various Medicare Advantage plans. Our billing team can verify your coverage before your appointment and explain any costs. We believe everyone deserves access to quality neurological care.',
      answerEs: 'Si! Estrella Medical Centers acepta Medicare, Medicaid y la mayoria de los planes de seguro principales para servicios de neurologia. Tambien trabajamos con varios planes Medicare Advantage. Nuestro equipo de facturacion puede verificar su cobertura antes de su cita y explicar cualquier costo. Creemos que todos merecen acceso a atencion neurologica de calidad.'
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
              {isSpanish ? 'Neurologia' : 'Neurology'}
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
                <Brain className="w-4 h-4 sm:w-5 sm:h-5" />
                {isSpanish ? 'Servicio Especializado' : 'Specialized Service'}
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                {isSpanish ? 'Cuidado ' : 'Expert '}
                <span className="text-gradient-yellow-orange">
                  {isSpanish ? 'Neurologico' : 'Neurology'}
                </span>
                {isSpanish ? ' Experto' : ' Care'}
              </h1>

              <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed">
                {isSpanish
                  ? 'Nuestros neurologos proporcionan diagnostico y tratamiento compasivo para condiciones que afectan el cerebro, la medula espinal y el sistema nervioso. Desde migranas hasta neuropatia y trastornos de memoria, estamos aqui para ayudarle a recuperar su calidad de vida.'
                  : 'Our neurologists provide compassionate diagnosis and treatment for conditions affecting the brain, spinal cord, and nervous system. From migraines to neuropathy and memory disorders, we are here to help you regain your quality of life.'}
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
                    src="/assets/images/services/neurology.png"
                    alt={isSpanish ? 'Consulta de neurologia' : 'Neurology consultation'}
                    className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-cover"
                  />
                </div>
                {/* Floating Stats Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 shadow-xl"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl gradient-yellow-orange flex items-center justify-center">
                      <Star className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white fill-current" />
                    </div>
                    <div>
                      <p className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--color-brand-primary)]">30+</p>
                      <p className="text-[#64748b] text-xs sm:text-sm">{isSpanish ? 'Anos de Experiencia' : 'Years Experience'}</p>
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
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-8 lg:gap-12 xl:gap-16">
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

      {/* Warning Signs & Treatment Approach Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* Warning Signs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-lg border border-gray-100"
          >
            <AlertTriangle className="w-10 h-10 sm:w-12 sm:h-12 text-[var(--color-brand-secondary)] mb-4 sm:mb-6" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-brand-primary)] mb-3 sm:mb-4">
              {isSpanish ? 'Senales de Alerta Neurologicas' : 'Neurological Warning Signs'}
            </h2>
            <p className="text-sm sm:text-base text-[#64748b] mb-6 sm:mb-8 leading-relaxed">
              {isSpanish
                ? 'Reconocer los sintomas neurologicos temprano puede marcar la diferencia en su tratamiento. Contactenos si experimenta alguno de estos sintomas:'
                : 'Recognizing neurological symptoms early can make a difference in your treatment. Contact us if you experience any of these symptoms:'}
            </p>

            <ul className="space-y-3 sm:space-y-4">
              {warningSignsList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 sm:gap-4">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[var(--color-brand-light)] text-[var(--color-brand-primary)] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <span className="text-sm sm:text-base text-[#1e293b] font-medium">
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
            className="gradient-blue rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-xl relative overflow-hidden"
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
              <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-4 sm:mb-6">
                {isSpanish
                  ? 'Creemos en un enfoque integral para la atencion neurologica. Combinamos diagnosticos avanzados con planes de tratamiento personalizados que abordan sus sintomas especificos, estilo de vida y objetivos de salud.'
                  : 'We believe in a comprehensive approach to neurological care. We combine advanced diagnostics with personalized treatment plans that address your specific symptoms, lifestyle, and health goals.'}
              </p>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-6 sm:mb-8">
                {isSpanish
                  ? 'Ya sea que este tratando migranas cronicas, manejando neuropatia diabetica o buscando apoyo para un trastorno de memoria, nuestro equipo trabaja de cerca con usted y su familia para proporcionar educacion, apoyo y la atencion mas efectiva disponible.'
                  : 'Whether you are managing chronic migraines, dealing with diabetic neuropathy, or seeking support for a memory disorder, our team works closely with you and your family to provide education, support, and the most effective care available.'}
              </p>

              <Link
                to="/doctors"
                className="inline-flex items-center gap-2 bg-white text-[var(--color-brand-primary)] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold text-sm sm:text-base hover:shadow-lg transition-all"
              >
                {isSpanish ? 'Conocer a Nuestros Neurologos' : 'Meet Our Neurologists'}
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
              {isSpanish ? 'Nuestros Servicios de Neurologia' : 'Our Neurology Services'}
            </h2>
            <p className="text-sm sm:text-base text-[#64748b] max-w-2xl mx-auto">
              {isSpanish
                ? 'Ofrecemos servicios neurologicos integrales para diagnosticar y tratar una amplia gama de condiciones que afectan el sistema nervioso.'
                : 'We offer comprehensive neurology services to diagnose and treat a wide range of conditions affecting the nervous system.'}
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
              ? 'Encuentre respuestas a las preguntas mas comunes sobre nuestros servicios de neurologia y condiciones neurologicas.'
              : 'Find answers to the most common questions about our neurology services and neurological conditions.'}
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
              {isSpanish ? 'Tome Control de Su Salud Neurologica' : 'Take Control of Your Neurological Health'}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
              {isSpanish
                ? 'No deje que las condiciones neurologicas afecten su calidad de vida. Nuestro equipo de neurologos expertos esta listo para ayudarle a encontrar alivio y mejorar su bienestar.'
                : 'Do not let neurological conditions affect your quality of life. Our team of expert neurologists is ready to help you find relief and improve your well-being.'}
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
