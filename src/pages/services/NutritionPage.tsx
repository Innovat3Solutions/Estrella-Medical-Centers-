import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Apple, CheckCircle2, ChevronRight, Clock, Heart, Phone, Calendar, Star, ChevronDown, Users, Award, ShieldCheck, Salad } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n';
import { useState } from 'react';

export default function NutritionPage() {
  const { language } = useLanguage();
  const isSpanish = language === 'es';
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const benefits = [
    {
      icon: Clock,
      titleEn: 'Personalized Meal Plans',
      titleEs: 'Planes de Comidas Personalizados',
      descEn: 'Tailored nutrition plans for your health goals',
      descEs: 'Planes de nutrición adaptados a sus metas de salud'
    },
    {
      icon: Users,
      titleEn: 'Bilingual Nutritionists',
      titleEs: 'Nutricionistas Bilingües',
      descEn: 'Full Spanish and English consultations',
      descEs: 'Consultas completas en español e inglés'
    },
    {
      icon: Heart,
      titleEn: 'Disease Management',
      titleEs: 'Manejo de Enfermedades',
      descEn: 'Nutrition support for chronic conditions',
      descEs: 'Apoyo nutricional para condiciones crónicas'
    },
    {
      icon: Award,
      titleEn: 'Meal Delivery Available',
      titleEs: 'Entrega de Comidas Disponible',
      descEn: 'Healthy meals delivered to your home',
      descEs: 'Comidas saludables entregadas a su hogar'
    }
  ];

  const services = [
    { en: 'Diabetes Nutrition Counseling', es: 'Consejería Nutricional para Diabetes' },
    { en: 'Heart-Healthy Diet Planning', es: 'Planificación de Dietas Saludables para el Corazón' },
    { en: 'Weight Management Programs', es: 'Programas de Control de Peso' },
    { en: 'Renal Diet Support', es: 'Apoyo de Dieta Renal' },
    { en: 'Meal Delivery Programs', es: 'Programas de Entrega de Comidas' },
    { en: 'Grocery Shopping Guidance', es: 'Orientación para Compras de Supermercado' },
    { en: 'Nutritional Assessments', es: 'Evaluaciones Nutricionales' },
    { en: 'Supplement Recommendations', es: 'Recomendaciones de Suplementos' },
    { en: 'Food Allergy Management', es: 'Manejo de Alergias Alimentarias' },
    { en: 'Senior Nutrition Programs', es: 'Programas de Nutrición para Adultos Mayores' },
    { en: 'Cooking Classes & Education', es: 'Clases de Cocina y Educación' },
    { en: 'Vitamin & Mineral Testing', es: 'Pruebas de Vitaminas y Minerales' }
  ];

  const faqs = [
    {
      questionEn: 'How can nutrition counseling help with my diabetes?',
      questionEs: '¿Cómo puede ayudar la consejería nutricional con mi diabetes?',
      answerEn: 'Proper nutrition is fundamental to diabetes management. Our nutritionists work with you to create meal plans that help control blood sugar levels, reduce medication dependency when possible, and prevent complications. We teach carbohydrate counting, portion control, and how to make sustainable dietary changes that fit your lifestyle and cultural preferences.',
      answerEs: 'La nutrición adecuada es fundamental para el manejo de la diabetes. Nuestros nutricionistas trabajan con usted para crear planes de comidas que ayuden a controlar los niveles de azúcar en sangre, reducir la dependencia de medicamentos cuando sea posible y prevenir complicaciones. Enseñamos el conteo de carbohidratos, control de porciones y cómo hacer cambios dietéticos sostenibles que se ajusten a su estilo de vida y preferencias culturales.'
    },
    {
      questionEn: 'Do you offer meal delivery services?',
      questionEs: '¿Ofrecen servicios de entrega de comidas?',
      answerEn: 'Yes! We partner with meal delivery programs to provide nutritious, medically-appropriate meals directly to your home. This is especially helpful for seniors with mobility challenges or those recovering from illness. We can also connect you with programs like Meals on Wheels and other community food assistance resources.',
      answerEs: 'Sí! Nos asociamos con programas de entrega de comidas para proporcionar comidas nutritivas y médicamente apropiadas directamente a su hogar. Esto es especialmente útil para adultos mayores con desafíos de movilidad o aquellos que se recuperan de una enfermedad. También podemos conectarlo con programas como Meals on Wheels y otros recursos de asistencia alimentaria comunitaria.'
    },
    {
      questionEn: 'What is a heart-healthy diet?',
      questionEs: '¿Qué es una dieta saludable para el corazón?',
      answerEn: 'A heart-healthy diet focuses on reducing sodium, saturated fats, and cholesterol while increasing fiber, fruits, vegetables, and healthy fats. Our nutritionists create personalized plans based on your specific cardiac condition, medications, and food preferences. We help you understand food labels, cook heart-healthy meals, and make dining-out choices that support your cardiovascular health.',
      answerEs: 'Una dieta saludable para el corazón se enfoca en reducir el sodio, las grasas saturadas y el colesterol mientras aumenta la fibra, frutas, vegetales y grasas saludables. Nuestros nutricionistas crean planes personalizados basados en su condición cardíaca específica, medicamentos y preferencias alimentarias. Le ayudamos a entender las etiquetas de alimentos, cocinar comidas saludables para el corazón y hacer elecciones al comer fuera que apoyen su salud cardiovascular.'
    },
    {
      questionEn: 'How often should I see a nutritionist?',
      questionEs: '¿Con qué frecuencia debo ver a un nutricionista?',
      answerEn: 'The frequency depends on your health goals and conditions. For chronic disease management like diabetes, we typically recommend monthly visits initially, then quarterly once your plan is established. For weight management, bi-weekly visits help maintain accountability. Our nutritionists will recommend a schedule based on your individual needs.',
      answerEs: 'La frecuencia depende de sus metas de salud y condiciones. Para el manejo de enfermedades crónicas como la diabetes, típicamente recomendamos visitas mensuales inicialmente, luego trimestrales una vez que su plan esté establecido. Para el control de peso, las visitas quincenales ayudan a mantener la responsabilidad. Nuestros nutricionistas recomendarán un horario basado en sus necesidades individuales.'
    },
    {
      questionEn: 'Is nutrition counseling covered by Medicare?',
      questionEs: '¿La consejería nutricional está cubierta por Medicare?',
      answerEn: 'Medicare covers Medical Nutrition Therapy (MNT) for patients with diabetes, kidney disease, and those who have had a kidney transplant in the past 36 months. Coverage includes an initial assessment and follow-up visits with a registered dietitian. We can verify your specific coverage and help you understand any out-of-pocket costs.',
      answerEs: 'Medicare cubre la Terapia de Nutrición Médica (MNT) para pacientes con diabetes, enfermedad renal y aquellos que han tenido un trasplante de riñón en los últimos 36 meses. La cobertura incluye una evaluación inicial y visitas de seguimiento con un dietista registrado. Podemos verificar su cobertura específica y ayudarlo a entender cualquier costo de bolsillo.'
    },
    {
      questionEn: 'Can you help with weight loss?',
      questionEs: '¿Pueden ayudar con la pérdida de peso?',
      answerEn: 'Absolutely. Our weight management programs focus on sustainable, healthy weight loss through balanced nutrition rather than fad diets. We create personalized meal plans, teach portion control, address emotional eating patterns, and coordinate with your medical team. We focus on long-term lifestyle changes that you can maintain for life.',
      answerEs: 'Absolutamente. Nuestros programas de control de peso se enfocan en la pérdida de peso saludable y sostenible a través de la nutrición balanceada en lugar de dietas de moda. Creamos planes de comidas personalizados, enseñamos control de porciones, abordamos patrones de alimentación emocional y coordinamos con su equipo médico. Nos enfocamos en cambios de estilo de vida a largo plazo que puede mantener de por vida.'
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
              {isSpanish ? 'Nutrición' : 'Nutrition'}
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
                <Apple className="w-4 h-4 sm:w-5 sm:h-5" />
                {isSpanish ? 'Servicio de Bienestar' : 'Wellness Service'}
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                {isSpanish ? 'Servicios de ' : 'Nutrition '}
                <span className="text-gradient-yellow-orange">
                  {isSpanish ? 'Nutrición' : 'Services'}
                </span>
              </h1>

              <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed">
                {isSpanish
                  ? 'La buena nutrición es la base de una buena salud. Nuestros nutricionistas certificados crean planes de alimentación personalizados para ayudarlo a manejar condiciones crónicas, perder peso y sentirse mejor cada día.'
                  : 'Good nutrition is the foundation of good health. Our certified nutritionists create personalized meal plans to help you manage chronic conditions, lose weight, and feel your best every day.'}
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
                    src="/assets/images/premium/caregiver-delivering-nutritious-meal.png"
                    alt={isSpanish ? 'Servicios de nutrición' : 'Nutrition services'}
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
                      <p className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--color-brand-primary)]">8,000+</p>
                      <p className="text-[#64748b] text-xs sm:text-sm">{isSpanish ? 'Planes de Comidas' : 'Meal Plans Created'}</p>
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
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center items-center gap-3 sm:gap-6 md:gap-12 lg:gap-16">
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

      {/* Nutrition Focus Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {/* How Nutrition Helps */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-10 shadow-lg border border-gray-100"
          >
            <ShieldCheck className="w-10 h-10 sm:w-12 sm:h-12 text-[var(--color-brand-secondary)] mb-4 sm:mb-6" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-brand-primary)] mb-3 sm:mb-4">
              {isSpanish ? 'Nutrición Para Su Salud' : 'Nutrition for Your Health'}
            </h2>
            <p className="text-[#64748b] mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              {isSpanish
                ? 'La nutrición adecuada puede prevenir, manejar y a veces revertir condiciones crónicas. Nuestros nutricionistas lo ayudan a:'
                : 'Proper nutrition can prevent, manage, and sometimes reverse chronic conditions. Our nutritionists help you:'}
            </p>

            <ul className="space-y-3 sm:space-y-4">
              {[
                { en: 'Control blood sugar levels with diabetes-friendly meals', es: 'Controlar niveles de azúcar con comidas para diabéticos' },
                { en: 'Lower cholesterol through heart-healthy eating', es: 'Reducir colesterol con alimentación saludable para el corazón' },
                { en: 'Manage kidney disease with renal-appropriate diets', es: 'Manejar enfermedad renal con dietas apropiadas' },
                { en: 'Achieve sustainable weight loss', es: 'Lograr pérdida de peso sostenible' },
                { en: 'Improve energy and overall well-being', es: 'Mejorar energía y bienestar general' },
                { en: 'Reduce medication dependency when possible', es: 'Reducir dependencia de medicamentos cuando sea posible' }
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

          {/* Food is Medicine Panel */}
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
              <Salad className="w-10 h-10 sm:w-12 sm:h-12 text-[var(--color-brand-accent)] mb-4 sm:mb-6" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
                {isSpanish ? 'La Comida es Medicina' : 'Food is Medicine'}
              </h2>
              <p className="text-white/90 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                {isSpanish
                  ? 'Creemos que lo que come es tan importante como cualquier medicamento que tome. Nuestro enfoque de "comida como medicina" se centra en usar la nutrición para prevenir y tratar enfermedades.'
                  : 'We believe that what you eat is just as important as any medication you take. Our "food as medicine" approach focuses on using nutrition to prevent and treat disease.'}
              </p>
              <p className="text-white/90 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                {isSpanish
                  ? 'Ya sea que esté manejando diabetes, enfermedad cardíaca o simplemente quiera sentirse mejor, nuestros nutricionistas crean planes que se ajustan a su vida, su cultura y sus preferencias alimentarias.'
                  : 'Whether you are managing diabetes, heart disease, or simply want to feel better, our nutritionists create plans that fit your life, your culture, and your food preferences.'}
              </p>

              <Link
                to="/doctors"
                className="inline-flex items-center gap-2 bg-white text-[var(--color-brand-primary)] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold hover:shadow-lg transition-all text-sm sm:text-base"
              >
                {isSpanish ? 'Conocer a Nuestros Nutricionistas' : 'Meet Our Nutritionists'}
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
              {isSpanish ? 'Nuestros Servicios de Nutrición' : 'Our Nutrition Services'}
            </h2>
            <p className="text-[#64748b] max-w-2xl mx-auto text-sm sm:text-base">
              {isSpanish
                ? 'Ofrecemos una amplia gama de servicios nutricionales para ayudarlo a alcanzar sus metas de salud.'
                : 'We offer a comprehensive range of nutrition services to help you achieve your health goals.'}
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
              ? 'Encuentre respuestas a las preguntas más comunes sobre nuestros servicios de nutrición.'
              : 'Find answers to the most common questions about our nutrition services.'}
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
            className="absolute -right-20 -top-20 w-80 h-80 object-contain opacity-10 pointer-events-none hidden sm:block"
          />
          <img
            src="/assets/45.png"
            alt=""
            className="absolute -left-20 -bottom-20 w-64 h-64 object-contain opacity-10 pointer-events-none rotate-45 hidden sm:block"
          />

          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
              {isSpanish ? 'Comience Su Viaje Nutricional Hoy' : 'Start Your Nutrition Journey Today'}
            </h2>
            <p className="text-white/90 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
              {isSpanish
                ? 'Nuestro equipo de nutrición está listo para crear un plan personalizado que se ajuste a su vida y lo ayude a alcanzar sus metas de salud.'
                : 'Our nutrition team is ready to create a personalized plan that fits your life and helps you achieve your health goals.'}
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
