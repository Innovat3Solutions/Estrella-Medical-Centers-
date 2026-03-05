import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Target,
  HeartHandshake,
  History,
  Users,
  Heart,
  Award,
  Globe,
  Car,
  Pill,
  UserCheck,
  Phone,
  Calendar,
  CheckCircle2,
  Quote,
  Star
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n';

const coreValues = [
  {
    icon: Heart,
    title: "Compassion",
    titleEs: "Compasion",
    desc: "Every patient is family. We treat all individuals with empathy, respect, and genuine care for their well-being.",
    descEs: "Cada paciente es familia. Tratamos a todos con empatia, respeto y genuino cuidado por su bienestar.",
    story: "When Mrs. Rodriguez came to us unable to afford her diabetes medication, we didn't just treat her condition — we connected her with assistance programs and checked on her weekly.",
    storyEs: "Cuando la Sra. Rodriguez vino sin poder pagar su medicamento para diabetes, no solo tratamos su condicion — la conectamos con programas de asistencia y la llamamos semanalmente."
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    titleEs: "Integridad",
    desc: "Honesty and transparency govern every decision. We believe in open communication with our patients and their families.",
    descEs: "La honestidad y transparencia gobiernan cada decision. Creemos en la comunicacion abierta con nuestros pacientes y sus familias.",
    story: "We take time to explain every diagnosis, every treatment option, and every cost — because you deserve to make informed decisions about your health.",
    storyEs: "Tomamos tiempo para explicar cada diagnostico, cada opcion de tratamiento y cada costo — porque usted merece tomar decisiones informadas sobre su salud."
  },
  {
    icon: Users,
    title: "Accessibility",
    titleEs: "Accesibilidad",
    desc: "Healthcare should be available to everyone. We eliminate barriers through transportation, bilingual services, and flexible scheduling.",
    descEs: "La atencion medica debe estar disponible para todos. Eliminamos barreras con transporte, servicios bilingues y horarios flexibles.",
    story: "Mr. Hernandez couldn't drive to his appointments. Now our van picks him up every Tuesday at 9am. He hasn't missed an appointment in two years.",
    storyEs: "El Sr. Hernandez no podia conducir a sus citas. Ahora nuestra van lo recoge cada martes a las 9am. No ha perdido una cita en dos anos."
  },
  {
    icon: HeartHandshake,
    title: "Community-Focused",
    titleEs: "Enfocados en la Comunidad",
    desc: "We are deeply rooted in South Florida's Hispanic and senior communities, understanding their unique healthcare needs.",
    descEs: "Estamos profundamente arraigados en las comunidades hispanas y de adultos mayores del sur de Florida.",
    story: "Born in this community, serving this community. Many of our staff members grew up right here and understand the culture, the language, and the heart of our patients.",
    storyEs: "Nacidos en esta comunidad, sirviendo a esta comunidad. Muchos de nuestros empleados crecieron aqui y entienden la cultura, el idioma y el corazon de nuestros pacientes."
  },
  {
    icon: Award,
    title: "Prevention First",
    titleEs: "Prevencion Primero",
    desc: "We prioritize preventive medicine to catch health issues early and maintain long-term wellness for our patients.",
    descEs: "Priorizamos la medicina preventiva para detectar problemas de salud temprano y mantener el bienestar a largo plazo.",
    story: "Early detection saved Maria's life. A routine screening at her annual wellness visit caught what could have become serious — now she's thriving.",
    storyEs: "La deteccion temprana salvo la vida de Maria. Un examen de rutina en su visita anual detecto lo que pudo ser grave — ahora ella prospera."
  },
  {
    icon: Target,
    title: "Excellence",
    titleEs: "Excelencia",
    desc: "We are committed to the highest standards of medical safety, ethics, and clinical performance in everything we do.",
    descEs: "Estamos comprometidos con los mas altos estandares de seguridad medica, etica y desempeno clinico.",
    story: "Our physicians pursue continuing education and stay current with medical advances. Your health deserves nothing less than excellence.",
    storyEs: "Nuestros medicos persiguen educacion continua y se mantienen al dia con avances medicos. Su salud no merece nada menos que excelencia."
  }
];

const differentiators = [
  {
    icon: Car,
    title: "Free Transportation",
    titleEs: "Transporte Gratuito",
    stat: "10,000+",
    statLabel: "Rides/Year",
    statLabelEs: "Viajes/Ano"
  },
  {
    icon: Pill,
    title: "Home Pharmacy",
    titleEs: "Farmacia a Domicilio",
    stat: "98%",
    statLabel: "Adherence",
    statLabelEs: "Adherencia"
  },
  {
    icon: UserCheck,
    title: "Social Workers",
    titleEs: "Trabajadores Sociales",
    stat: "5,000+",
    statLabel: "Families",
    statLabelEs: "Familias"
  },
  {
    icon: Globe,
    title: "Bilingual Care",
    titleEs: "Atencion Bilingue",
    stat: "100%",
    statLabel: "Staff",
    statLabelEs: "Personal"
  }
];

export default function AboutPage() {
  const { language } = useLanguage();
  const isSpanish = language === 'es';

  return (
    <div className="min-h-screen bg-white font-sans text-[#1e293b]">
      <Header />

      <main className="relative">
        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-24 gradient-hero overflow-hidden">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            transition={{ duration: 1.5 }}
            src="/assets/45.png"
            alt=""
            className="absolute top-0 -right-20 w-[500px] h-[500px] object-contain pointer-events-none hidden sm:block"
          />
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.03 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            src="/assets/45.png"
            alt=""
            className="absolute bottom-0 -left-32 w-[400px] h-[400px] object-contain pointer-events-none -rotate-12 hidden sm:block"
          />

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col lg:flex-row gap-12 items-center"
            >
              <div className="lg:w-1/2 space-y-4 sm:space-y-6">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full gradient-yellow-orange text-white text-xs sm:text-sm font-semibold"
                >
                  <History className="w-4 h-4 sm:w-5 sm:h-5" />
                  {isSpanish ? 'Sirviendo Desde 1994' : 'Serving Since 1994'}
                </motion.span>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-brand-primary)] leading-tight tracking-tight">
                  {isSpanish ? 'Sobre' : 'About'}{' '}
                  <span className="text-gradient-orange">Estrella Medical Centers</span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-[#64748b] leading-relaxed">
                  {isSpanish
                    ? 'Por mas de 30 anos, hemos sido el hogar de salud para familias del sur de Florida. No solo tratamos condiciones — construimos relaciones, entendemos su cultura y caminamos con usted en cada paso de su viaje de salud.'
                    : "For over 30 years, we've been the healthcare home for South Florida families. We don't just treat conditions — we build relationships, understand your culture, and walk with you every step of your health journey."}
                </p>

                <div className="flex flex-wrap gap-3 sm:gap-4 pt-4">
                  <Link
                    to="/medical-plan"
                    className="gradient-blue hover:shadow-xl text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold transition-all flex items-center gap-2 text-sm sm:text-base"
                  >
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                    {isSpanish ? 'Agendar Cita' : 'Schedule Appointment'}
                  </Link>
                  <a
                    href="tel:+13059828810"
                    className="bg-white border-2 border-[var(--color-brand-primary)] text-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary)] hover:text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold transition-all flex items-center gap-2 text-sm sm:text-base"
                  >
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    (305) 982-8810
                  </a>
                </div>
              </div>

              <div className="lg:w-1/2 hidden sm:block">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  <img
                    src="/assets/images/about/estrella-building.webp"
                    alt="Estrella Medical Centers"
                    loading="lazy"
                    className="rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl object-cover h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] w-full"
                  />
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl md:rounded-3xl bg-gradient-to-t from-[var(--color-brand-primary)]/40 to-transparent"></div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Compassionate Care Section - ELEVATED */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.03 }}
            viewport={{ once: true }}
            src="/assets/45.png"
            alt=""
            className="absolute -right-20 top-20 w-[400px] h-[400px] object-contain pointer-events-none hidden sm:block"
          />

          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-12 md:mb-16"
            >
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 gradient-yellow-orange text-white">
                {isSpanish ? 'Nuestro Equipo' : 'Our Team'}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-brand-primary)] mb-4 sm:mb-6">
                {isSpanish ? 'Atencion Compasiva de Expertos' : 'Compassionate Care from Experts'}
              </h2>
              <p className="text-[#64748b] text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
                {isSpanish
                  ? 'Lo que verdaderamente nos distingue es el personal humano y calificado que dirige nuestra clinica.'
                  : 'What truly sets us apart is the deeply skilled, human staff running our clinic.'}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
              {/* Image Grid */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <img
                    src="/assets/images/about/estrella-group.webp"
                    alt="Medical team"
                    loading="lazy"
                    className="rounded-xl sm:rounded-2xl shadow-lg w-full h-[180px] sm:h-[220px] md:h-[280px] object-cover object-top col-span-2"
                  />
                  <img
                    src="/assets/images/about/candid-moment.webp"
                    alt="Doctor with patient"
                    loading="lazy"
                    className="rounded-xl sm:rounded-2xl shadow-lg w-full h-[140px] sm:h-[170px] md:h-[200px] object-cover"
                  />
                  <div className="gradient-blue rounded-xl sm:rounded-2xl p-4 sm:p-6 flex flex-col justify-center items-center text-white">
                    <p className="text-2xl sm:text-3xl md:text-4xl font-bold">30+</p>
                    <p className="text-xs sm:text-sm text-white/80 text-center">{isSpanish ? 'Anos de Experiencia' : 'Years of Experience'}</p>
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6 sm:space-y-8"
              >
                <div className="bg-[#f8fafc] rounded-xl sm:rounded-2xl p-4 sm:p-6 border-l-4 border-[var(--color-brand-secondary)]">
                  <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-[var(--color-brand-secondary)] mb-2 sm:mb-3" />
                  <p className="text-[#1e293b] text-sm sm:text-base md:text-lg italic leading-relaxed">
                    {isSpanish
                      ? '"Desde el momento en que entro, me siento como en familia. Los doctores recuerdan mi nombre, preguntan por mis nietos, y realmente se preocupan por mi salud."'
                      : '"From the moment I walk in, I feel like family. The doctors remember my name, ask about my grandchildren, and genuinely care about my health."'}
                  </p>
                  <p className="text-[#64748b] mt-2 sm:mt-3 font-medium text-sm sm:text-base">— Maria G., {isSpanish ? 'Paciente desde 2015' : 'Patient since 2015'}</p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-brand-primary)]">
                    {isSpanish ? 'Por Que Nuestro Equipo es Diferente' : 'Why Our Team is Different'}
                  </h3>
                  <ul className="space-y-3 sm:space-y-4">
                    {[
                      {
                        title: isSpanish ? 'Medicos Certificados' : 'Board-Certified Physicians',
                        desc: isSpanish ? 'Especialistas en medicina primaria y geriatrica' : 'Specialists in primary and geriatric medicine'
                      },
                      {
                        title: isSpanish ? 'Enfermeras Experimentadas' : 'Experienced Nurses',
                        desc: isSpanish ? 'Decadas de experiencia colectiva' : 'Decades of collective experience'
                      },
                      {
                        title: isSpanish ? 'Personal Bilingue' : 'Bilingual Staff',
                        desc: isSpanish ? 'Comunicacion clara en su idioma' : 'Clear communication in your language'
                      },
                      {
                        title: isSpanish ? 'Dedicados a Usted' : 'Dedicated to You',
                        desc: isSpanish ? 'Tiempo para escuchar, no solo tratar' : 'Time to listen, not just treat'
                      }
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 sm:gap-4">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full gradient-yellow-orange flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </div>
                        <div>
                          <p className="font-bold text-[#1e293b] text-sm sm:text-base">{item.title}</p>
                          <p className="text-[#64748b] text-xs sm:text-sm">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/doctors"
                  className="inline-flex items-center gap-2 gradient-blue text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:shadow-lg transition-all text-sm sm:text-base"
                >
                  {isSpanish ? 'Conocer a Nuestros Doctores' : 'Meet Our Doctors'}
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision - Redesigned as alternating layout */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-24 bg-[#f8fafc] relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-10 sm:space-y-12 md:space-y-16">
              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12 items-center"
              >
                <div className="lg:w-1/2 space-y-4 sm:space-y-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl gradient-blue flex items-center justify-center">
                    <Target className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-brand-primary)]">
                    {isSpanish ? 'Nuestra Mision' : 'Our Mission'}
                  </h2>
                  <p className="text-[#64748b] text-sm sm:text-base md:text-lg leading-relaxed">
                    {isSpanish
                      ? 'Brindar atencion medica compasiva, accesible y de alta calidad que mejore la calidad de vida de cada paciente. Nos comprometemos a la medicina preventiva, tratamiento rapido y educacion continua del paciente.'
                      : 'To deliver compassionate, accessible, and high-quality healthcare that improves the quality of life for every patient. We are committed to preventive medicine, swift treatment, and continuous patient education.'}
                  </p>
                  <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 pt-4">
                    <div>
                      <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--color-brand-primary)]">2,500+</p>
                      <p className="text-[#64748b] text-xs sm:text-sm">{isSpanish ? 'Pacientes Activos' : 'Active Patients'}</p>
                    </div>
                    <div>
                      <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--color-brand-primary)]">6</p>
                      <p className="text-[#64748b] text-xs sm:text-sm">{isSpanish ? 'Ubicaciones' : 'Locations'}</p>
                    </div>
                    <div>
                      <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--color-brand-primary)]">24hr</p>
                      <p className="text-[#64748b] text-xs sm:text-sm">{isSpanish ? 'Garantia de Cita' : 'Appointment Guarantee'}</p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="gradient-blue rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 text-white relative overflow-hidden">
                    <img src="/assets/45.png" className="absolute -bottom-10 -right-10 w-48 h-48 opacity-10 object-contain hidden sm:block" alt="" />
                    <div className="relative z-10">
                      <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[var(--color-brand-accent)] mb-4 sm:mb-6" />
                      <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{isSpanish ? 'Nuestra Vision' : 'Our Vision'}</h3>
                      <p className="text-white/90 leading-relaxed text-sm sm:text-base">
                        {isSpanish
                          ? 'Convertirnos en el socio de atencion medica de confianza dentro de las comunidades hispanas y de adultos mayores en el sur de Florida, estableciendo el punto de referencia para resultados clinicos y bienestar comunitario.'
                          : 'To become the trusted healthcare partner within the Hispanic and senior communities in South Florida, setting the benchmark for clinical outcomes and community wellness.'}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values Section - Redesigned to be more personable */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.03 }}
            viewport={{ once: true }}
            src="/assets/45.png"
            alt=""
            className="absolute -left-20 top-1/2 -translate-y-1/2 w-[500px] h-[500px] object-contain pointer-events-none hidden sm:block"
          />

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-12 md:mb-16"
            >
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 gradient-blue text-white">
                {isSpanish ? 'Nuestros Valores' : 'Our Values'}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-brand-primary)] mb-4 sm:mb-6">
                {isSpanish ? 'Los Principios Que Nos Guian' : 'The Principles That Guide Us'}
              </h2>
              <p className="text-[#64748b] text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
                {isSpanish
                  ? 'Estos no son solo palabras en una pared — son promesas que cumplimos cada dia con cada paciente.'
                  : "These aren't just words on a wall — they're promises we keep every day with every patient."}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {coreValues.map((value, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-[#f8fafc] rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 hover:bg-white hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-gray-100"
                >
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl gradient-yellow-orange flex items-center justify-center group-hover:scale-110 transition-transform">
                      <value.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[var(--color-brand-primary)]">
                      {isSpanish ? value.titleEs : value.title}
                    </h3>
                  </div>
                  <p className="text-[#64748b] leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                    {isSpanish ? value.descEs : value.desc}
                  </p>
                  <div className="pt-3 sm:pt-4 border-t border-gray-200">
                    <p className="text-xs sm:text-sm text-[#1e293b] italic leading-relaxed">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 text-[var(--color-brand-secondary)] inline mr-1 sm:mr-2" />
                      {isSpanish ? value.storyEs : value.story}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What Makes Us Different - Redesigned with stats */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-24 gradient-blue relative overflow-hidden">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.05 }}
            viewport={{ once: true }}
            src="/assets/45.png"
            alt=""
            className="absolute -right-20 top-1/2 -translate-y-1/2 w-[400px] h-[400px] object-contain pointer-events-none rotate-12 hidden sm:block"
          />

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-12 md:mb-16"
            >
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 bg-white/20 text-white">
                {isSpanish ? 'La Diferencia Estrella' : 'The Estrella Difference'}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                {isSpanish ? 'Vamos Mas Alla de lo Ordinario' : 'We Go Beyond the Ordinary'}
              </h2>
              <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
                {isSpanish
                  ? 'Servicios que otras clinicas no ofrecen — porque creemos que la atencion medica debe ser completa.'
                  : "Services that other clinics don't offer — because we believe healthcare should be complete."}
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {differentiators.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:bg-white/20 transition-all group border border-white/20"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-brand-accent)] mb-1">{item.stat}</p>
                  <p className="text-white/70 text-xs sm:text-sm mb-2 sm:mb-3">{isSpanish ? item.statLabelEs : item.statLabel}</p>
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-white">
                    {isSpanish ? item.titleEs : item.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Lighter design to contrast with blue section above */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-24 bg-[#f8fafc] relative overflow-hidden">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.03 }}
            viewport={{ once: true }}
            src="/assets/45.png"
            alt=""
            className="absolute -left-20 top-1/2 -translate-y-1/2 w-[400px] h-[400px] object-contain pointer-events-none hidden sm:block"
          />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-brand-primary)] mb-4 sm:mb-6">
                {isSpanish
                  ? 'Listo Para Experimentar la Diferencia?'
                  : 'Ready to Experience the Difference?'}
              </h2>
              <p className="text-[#64748b] text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
                {isSpanish
                  ? 'Unase a las miles de familias que confian en Estrella Medical Centers para su atencion medica. Su primera cita esta a solo una llamada de distancia.'
                  : 'Join the thousands of families who trust Estrella Medical Centers for their healthcare. Your first appointment is just a call away.'}
              </p>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                <Link
                  to="/medical-plan"
                  className="gradient-yellow-orange hover:shadow-xl text-white px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg transition-all flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                  {isSpanish ? 'Agendar Ahora' : 'Schedule Now'}
                </Link>
                <a
                  href="tel:+13059828810"
                  className="gradient-blue text-white px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg transition-all hover:shadow-xl flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  (305) 982-8810
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
