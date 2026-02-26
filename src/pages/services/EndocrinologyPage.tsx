import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, ShieldCheck, CheckCircle2, ChevronRight, Clock, Heart, Phone, Calendar, Star, ChevronDown, Users, Award, Droplet } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n';
import { useState } from 'react';

export default function EndocrinologyPage() {
  const { language } = useLanguage();
  const isSpanish = language === 'es';
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const benefits = [
    {
      icon: Clock,
      titleEn: 'Comprehensive A1C Monitoring',
      titleEs: 'Monitoreo Integral de A1C',
      descEn: 'Regular testing to track your diabetes control',
      descEs: 'Pruebas regulares para controlar su diabetes'
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
      titleEn: 'Personalized Treatment Plans',
      titleEs: 'Planes de Tratamiento Personalizados',
      descEn: 'Customized care for your hormonal health',
      descEs: 'Atencion personalizada para su salud hormonal'
    },
    {
      icon: Award,
      titleEn: 'Advanced Insulin Therapy',
      titleEs: 'Terapia de Insulina Avanzada',
      descEn: 'Modern approaches to diabetes management',
      descEs: 'Enfoques modernos para el manejo de diabetes'
    }
  ];

  const services = [
    { en: 'Type 1 Diabetes Management', es: 'Manejo de Diabetes Tipo 1' },
    { en: 'Type 2 Diabetes Care', es: 'Cuidado de Diabetes Tipo 2' },
    { en: 'Thyroid Disorder Treatment', es: 'Tratamiento de Trastornos de Tiroides' },
    { en: 'Hormone Imbalance Therapy', es: 'Terapia de Desequilibrio Hormonal' },
    { en: 'A1C Testing & Monitoring', es: 'Pruebas y Monitoreo de A1C' },
    { en: 'Insulin Pump Management', es: 'Manejo de Bomba de Insulina' },
    { en: 'Weight Management Programs', es: 'Programas de Control de Peso' },
    { en: 'Metabolic Syndrome Treatment', es: 'Tratamiento del Sindrome Metabolico' },
    { en: 'Nutrition Counseling', es: 'Asesoria Nutricional' },
    { en: 'Glucose Monitoring Education', es: 'Educacion en Monitoreo de Glucosa' },
    { en: 'Thyroid Function Testing', es: 'Pruebas de Funcion Tiroidea' },
    { en: 'Hormonal Health Screenings', es: 'Examenes de Salud Hormonal' }
  ];

  const faqs = [
    {
      questionEn: 'What is the difference between Type 1 and Type 2 diabetes?',
      questionEs: 'Cual es la diferencia entre diabetes Tipo 1 y Tipo 2?',
      answerEn: 'Type 1 diabetes is an autoimmune condition where the body cannot produce insulin, typically diagnosed in childhood or young adulthood. Type 2 diabetes occurs when the body becomes resistant to insulin or does not produce enough, often developing later in life and frequently linked to lifestyle factors. Both conditions require careful management, but treatment approaches differ significantly.',
      answerEs: 'La diabetes Tipo 1 es una condicion autoinmune donde el cuerpo no puede producir insulina, tipicamente diagnosticada en la infancia o juventud. La diabetes Tipo 2 ocurre cuando el cuerpo se vuelve resistente a la insulina o no produce suficiente, a menudo desarrollandose mas tarde en la vida y frecuentemente relacionada con factores de estilo de vida. Ambas condiciones requieren manejo cuidadoso, pero los enfoques de tratamiento difieren significativamente.'
    },
    {
      questionEn: 'How often should I have my A1C levels checked?',
      questionEs: 'Con que frecuencia debo revisar mis niveles de A1C?',
      answerEn: 'For most people with diabetes, A1C testing is recommended every 3 months if your blood sugar is not well controlled, or every 6 months if you have stable control. Your endocrinologist will recommend a testing schedule based on your individual situation. A1C provides a picture of your average blood sugar over the past 2-3 months.',
      answerEs: 'Para la mayoria de las personas con diabetes, se recomienda la prueba de A1C cada 3 meses si su azucar en sangre no esta bien controlada, o cada 6 meses si tiene control estable. Su endocrinologo recomendara un horario de pruebas basado en su situacion individual. El A1C proporciona una imagen de su azucar en sangre promedio durante los ultimos 2-3 meses.'
    },
    {
      questionEn: 'What are common signs of thyroid problems?',
      questionEs: 'Cuales son los signos comunes de problemas de tiroides?',
      answerEn: 'Common signs of thyroid issues include unexplained weight changes, fatigue, sensitivity to cold or heat, hair loss, dry skin, mood changes, irregular heartbeat, and changes in menstrual cycles for women. An overactive thyroid (hyperthyroidism) and underactive thyroid (hypothyroidism) have different symptoms. If you experience these symptoms, a simple blood test can check your thyroid function.',
      answerEs: 'Los signos comunes de problemas de tiroides incluyen cambios de peso inexplicables, fatiga, sensibilidad al frio o calor, perdida de cabello, piel seca, cambios de humor, latidos irregulares del corazon y cambios en los ciclos menstruales para mujeres. Una tiroides hiperactiva (hipertiroidismo) y una tiroides poco activa (hipotiroidismo) tienen sintomas diferentes. Si experimenta estos sintomas, un simple analisis de sangre puede verificar su funcion tiroidea.'
    },
    {
      questionEn: 'Can diabetes be managed without insulin?',
      questionEs: 'Se puede manejar la diabetes sin insulina?',
      answerEn: 'Many people with Type 2 diabetes can manage their condition through lifestyle changes, oral medications, and non-insulin injectables. However, Type 1 diabetes always requires insulin therapy. For Type 2, treatment depends on how well your blood sugar is controlled. Our team works with you to find the most effective, least invasive treatment approach for your specific situation.',
      answerEs: 'Muchas personas con diabetes Tipo 2 pueden manejar su condicion a traves de cambios en el estilo de vida, medicamentos orales e inyectables no insulinicos. Sin embargo, la diabetes Tipo 1 siempre requiere terapia de insulina. Para el Tipo 2, el tratamiento depende de que tan bien este controlada su azucar en sangre. Nuestro equipo trabaja con usted para encontrar el enfoque de tratamiento mas efectivo y menos invasivo para su situacion especifica.'
    },
    {
      questionEn: 'How can I improve my metabolic health?',
      questionEs: 'Como puedo mejorar mi salud metabolica?',
      answerEn: 'Improving metabolic health involves a comprehensive approach including regular physical activity, a balanced diet rich in whole foods, maintaining a healthy weight, getting adequate sleep, managing stress, and avoiding smoking. Our nutrition counseling and weight management programs can help you develop sustainable habits. Regular monitoring of blood sugar, cholesterol, and blood pressure is also essential.',
      answerEs: 'Mejorar la salud metabolica implica un enfoque integral que incluye actividad fisica regular, una dieta equilibrada rica en alimentos integrales, mantener un peso saludable, dormir adecuadamente, manejar el estres y evitar fumar. Nuestros programas de asesoria nutricional y control de peso pueden ayudarlo a desarrollar habitos sostenibles. El monitoreo regular de azucar en sangre, colesterol y presion arterial tambien es esencial.'
    },
    {
      questionEn: 'What should I expect at my first endocrinology appointment?',
      questionEs: 'Que debo esperar en mi primera cita de endocrinologia?',
      answerEn: 'Your first visit will include a comprehensive review of your medical history, current symptoms, and any previous test results. We will perform a physical examination and may order blood tests to check hormone levels, thyroid function, or blood sugar. Based on findings, we will create a personalized treatment plan. Please bring a list of all medications, supplements, and any questions you have.',
      answerEs: 'Su primera visita incluira una revision completa de su historial medico, sintomas actuales y cualquier resultado de pruebas anteriores. Realizaremos un examen fisico y podemos ordenar analisis de sangre para verificar niveles hormonales, funcion tiroidea o azucar en sangre. Basandonos en los hallazgos, crearemos un plan de tratamiento personalizado. Por favor traiga una lista de todos los medicamentos, suplementos y cualquier pregunta que tenga.'
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
          className="absolute -right-20 -top-20 w-[500px] h-[500px] object-contain opacity-10 pointer-events-none hidden sm:block"
        />
        <img
          src="/Assets/45.png"
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
              {isSpanish ? 'Endocrinologia' : 'Endocrinology'}
            </span>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 space-y-4 sm:space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/20 text-white text-xs sm:text-sm font-semibold">
                <Droplet className="w-4 h-4 sm:w-5 sm:h-5" />
                {isSpanish ? 'Servicio de Especialidad' : 'Specialty Service'}
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                {isSpanish ? 'Endocri' : 'Endocri'}
                <span className="text-gradient-yellow-orange">
                  {isSpanish ? 'nologia' : 'nology'}
                </span>
              </h1>

              <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed">
                {isSpanish
                  ? 'Manejo experto de diabetes, trastornos de tiroides y desequilibrios hormonales. Nuestro equipo de endocrinologia proporciona atencion integral para ayudarle a lograr un control optimo de azucar en sangre y equilibrio hormonal.'
                  : 'Expert management of diabetes, thyroid disorders, and hormonal imbalances. Our endocrinology team provides comprehensive care to help you achieve optimal blood sugar control and hormonal balance.'}
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
                <div className="rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                  <img
                    src="/assets/images/services/endocrinology.png"
                    alt={isSpanish ? 'Consulta de endocrinologia' : 'Endocrinology consultation'}
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
                      <p className="text-[#64748b] text-xs sm:text-sm">{isSpanish ? 'Pacientes con Diabetes' : 'Diabetes Patients'}</p>
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
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 lg:gap-12">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
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
            <p className="text-sm sm:text-base text-[#64748b] mb-6 sm:mb-8 leading-relaxed">
              {isSpanish
                ? 'La endocrinologia aborda condiciones que afectan sus hormonas y metabolismo. Considere programar una cita si experimenta:'
                : 'Endocrinology addresses conditions that affect your hormones and metabolism. Consider scheduling an appointment if you experience:'}
            </p>

            <ul className="space-y-3 sm:space-y-4">
              {[
                { en: 'Difficulty managing blood sugar levels', es: 'Dificultad para controlar los niveles de azucar en sangre' },
                { en: 'Unexplained weight gain or loss', es: 'Aumento o perdida de peso inexplicable' },
                { en: 'Fatigue, mood swings, or depression', es: 'Fatiga, cambios de humor o depresion' },
                { en: 'Hair loss or changes in skin condition', es: 'Perdida de cabello o cambios en la condicion de la piel' },
                { en: 'Sensitivity to heat or cold', es: 'Sensibilidad al calor o frio' },
                { en: 'Family history of diabetes or thyroid disease', es: 'Historial familiar de diabetes o enfermedad de tiroides' }
              ].map((item, idx) => (
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
            className="gradient-blue rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-10 shadow-xl relative overflow-hidden"
          >
            <img
              src="/Assets/45.png"
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
                  ? 'El manejo efectivo de la diabetes y los trastornos hormonales requiere un enfoque integral. Combinamos terapia de medicamentos de ultima generacion con educacion sobre el estilo de vida, orientacion nutricional y monitoreo continuo para ayudarle a alcanzar sus objetivos de salud.'
                  : 'Effective management of diabetes and hormonal disorders requires a comprehensive approach. We combine cutting-edge medication therapy with lifestyle education, nutritional guidance, and ongoing monitoring to help you reach your health goals.'}
              </p>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-6 sm:mb-8">
                {isSpanish
                  ? 'Ya sea que este recientemente diagnosticado o haya vivido con una condicion cronica durante anos, nuestro equipo trabaja estrechamente con usted para desarrollar un plan de tratamiento que se adapte a su vida y necesidades unicas.'
                  : 'Whether you are newly diagnosed or have been living with a chronic condition for years, our team works closely with you to develop a treatment plan that fits your life and unique needs.'}
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
              {isSpanish ? 'Nuestros Servicios de Endocrinologia' : 'Our Endocrinology Services'}
            </h2>
            <p className="text-sm sm:text-base text-[#64748b] max-w-2xl mx-auto">
              {isSpanish
                ? 'Ofrecemos servicios integrales de endocrinologia para ayudarle a manejar la diabetes, trastornos de tiroides y desequilibrios hormonales.'
                : 'We offer comprehensive endocrinology services to help you manage diabetes, thyroid disorders, and hormonal imbalances.'}
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
                <span className="text-sm sm:text-base font-semibold text-[#1e293b]">
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
          <p className="text-sm sm:text-base text-[#64748b] max-w-2xl mx-auto">
            {isSpanish
              ? 'Encuentre respuestas a las preguntas mas comunes sobre diabetes, salud de tiroides y cuidado hormonal.'
              : 'Find answers to the most common questions about diabetes, thyroid health, and hormonal care.'}
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
                <span className="text-sm sm:text-base font-semibold text-[var(--color-brand-primary)] pr-3 sm:pr-4">
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
          className="max-w-5xl mx-auto gradient-blue rounded-xl sm:rounded-2xl lg:rounded-3xl p-6 sm:p-10 lg:p-16 text-center relative overflow-hidden"
        >
          <img
            src="/Assets/45.png"
            alt=""
            className="absolute -right-20 -top-20 w-80 h-80 object-contain opacity-10 pointer-events-none hidden sm:block"
          />
          <img
            src="/Assets/45.png"
            alt=""
            className="absolute -left-20 -bottom-20 w-64 h-64 object-contain opacity-10 pointer-events-none rotate-45 hidden sm:block"
          />

          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
              {isSpanish ? 'Tome Control de Su Salud Hormonal' : 'Take Control of Your Hormonal Health'}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
              {isSpanish
                ? 'Nuestro equipo de endocrinologia esta listo para ayudarle a manejar la diabetes, trastornos de tiroides y desequilibrios hormonales con atencion experta y compasiva.'
                : 'Our endocrinology team is ready to help you manage diabetes, thyroid disorders, and hormonal imbalances with expert, compassionate care.'}
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
