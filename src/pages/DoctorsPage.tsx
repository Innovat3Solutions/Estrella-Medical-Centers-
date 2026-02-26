import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Phone, Star, Award, Heart, Calendar, MapPin, Clock, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n';

// Featured doctors (those with photos get featured treatment)
const featuredDoctors = [
  {
    name: 'Aurelia B. Leblanc',
    role: 'Doctor of Medicine',
    roleEs: 'Doctora en Medicina',
    initials: 'MD',
    image: '/assets/images/doctors/Aurelia_doctor.png',
    specialty: 'Primary Care',
    specialtyEs: 'Atencion Primaria',
    bio: 'With over 15 years of experience in primary care, Dr. Leblanc is dedicated to building lasting relationships with her patients and providing comprehensive health management.',
    bioEs: 'Con mas de 15 anos de experiencia en atencion primaria, la Dra. Leblanc esta dedicada a construir relaciones duraderas con sus pacientes y proporcionar un manejo integral de la salud.',
    languages: ['English', 'Spanish', 'French'],
    education: 'University of Miami School of Medicine',
    educationEs: 'Escuela de Medicina de la Universidad de Miami',
    certifications: ['Board Certified in Internal Medicine', 'ACLS Certified'],
    certificationsEs: ['Certificada en Medicina Interna', 'Certificada en ACLS'],
  },
  {
    name: 'Ciro Ramirez',
    role: 'Doctor of Medicine',
    roleEs: 'Doctor en Medicina',
    initials: 'MD',
    image: '/assets/images/doctors/Ciro_doctor.png',
    specialty: 'General Practice',
    specialtyEs: 'Medicina General',
    bio: 'Dr. Ramirez brings warmth and expertise to every patient encounter. His patient-centered approach focuses on preventive care and chronic disease management.',
    bioEs: 'El Dr. Ramirez aporta calidez y experiencia a cada encuentro con pacientes. Su enfoque centrado en el paciente se enfoca en cuidado preventivo y manejo de enfermedades cronicas.',
    languages: ['English', 'Spanish'],
    education: 'Florida International University',
    educationEs: 'Universidad Internacional de Florida',
    certifications: ['Board Certified Family Medicine', 'Geriatric Care Specialist'],
    certificationsEs: ['Certificado en Medicina Familiar', 'Especialista en Cuidado Geriatrico'],
  },
  {
    name: 'Yanelis Martin',
    role: 'Doctor of Medicine',
    roleEs: 'Doctora en Medicina',
    initials: 'MD',
    image: '/assets/images/doctors/Yanelis_doctor.png',
    specialty: 'Internal Medicine',
    specialtyEs: 'Medicina Interna',
    bio: 'Specializing in internal medicine, Dr. Martin excels in diagnosing and treating complex medical conditions while ensuring each patient feels heard and cared for.',
    bioEs: 'Especializada en medicina interna, la Dra. Martin sobresale en el diagnostico y tratamiento de condiciones medicas complejas mientras asegura que cada paciente se sienta escuchado y atendido.',
    languages: ['English', 'Spanish'],
    education: 'Universidad de La Habana',
    educationEs: 'Universidad de La Habana',
    certifications: ['Board Certified Internal Medicine', 'Diabetes Care Specialist'],
    certificationsEs: ['Certificada en Medicina Interna', 'Especialista en Cuidado de Diabetes'],
  },
];

const allProviders = [
  {
    name: 'Carmen Leal',
    role: 'Advanced Registered Nurse Practitioner',
    roleEs: 'Enfermera Practicante Registrada Avanzada',
    initials: 'ARNP',
    image: '/assets/images/doctors/Carmen_doctor.png',
    specialty: 'Family Nursing',
    specialtyEs: 'Enfermeria Familiar',
    bio: 'Carmen provides compassionate care with a focus on family health and wellness across all ages.',
    bioEs: 'Carmen proporciona atencion compasiva con enfoque en salud familiar y bienestar en todas las edades.',
    languages: ['English', 'Spanish'],
    education: 'Barry University',
    educationEs: 'Universidad Barry',
    certifications: ['Family Nurse Practitioner', 'BLS/ACLS Certified'],
    certificationsEs: ['Enfermera Practicante Familiar', 'Certificada en BLS/ACLS'],
  },
  {
    name: 'Hugo Prieto',
    role: 'Advanced Registered Nurse Practitioner',
    roleEs: 'Enfermero Practicante Registrado Avanzado',
    initials: 'ARNP',
    image: '/assets/images/doctors/Hugo_doctor.png',
    specialty: 'Family Nursing',
    specialtyEs: 'Enfermeria Familiar',
    bio: 'Hugo specializes in comprehensive family care, bringing years of experience in geriatric and adult medicine.',
    bioEs: 'Hugo se especializa en atencion familiar integral, aportando anos de experiencia en medicina geriatrica y de adultos.',
    languages: ['English', 'Spanish'],
    education: 'Florida Atlantic University',
    educationEs: 'Universidad Atlantica de Florida',
    certifications: ['Adult-Gerontology NP', 'Chronic Care Management'],
    certificationsEs: ['NP Adulto-Gerontologia', 'Manejo de Cuidado Cronico'],
  },
  {
    name: 'Yamaris Martin',
    role: 'Doctor of Optometry',
    roleEs: 'Doctora en Optometria',
    initials: 'OD',
    image: '/assets/images/doctors/Yamaris_doctor.png',
    specialty: 'Optometry',
    specialtyEs: 'Optometria',
    bio: 'Dr. Martin provides comprehensive eye care including vision exams, disease detection, and treatment plans.',
    bioEs: 'La Dra. Martin proporciona cuidado ocular integral incluyendo examenes de vision, deteccion de enfermedades y planes de tratamiento.',
    languages: ['English', 'Spanish'],
    education: 'Nova Southeastern University',
    educationEs: 'Universidad Nova Southeastern',
    certifications: ['Licensed Optometrist', 'Glaucoma Certified'],
    certificationsEs: ['Optometrista Licenciada', 'Certificada en Glaucoma'],
  },
  {
    name: 'Jorge F. Garcia',
    role: 'Advanced Registered Nurse Practitioner',
    roleEs: 'Enfermero Practicante Registrado Avanzado',
    initials: 'ARNP',
    image: null,
    specialty: 'Primary Care',
    specialtyEs: 'Atencion Primaria',
    bio: 'Jorge is committed to delivering high-quality primary care with a focus on patient education and preventive health.',
    bioEs: 'Jorge esta comprometido a brindar atencion primaria de alta calidad con enfoque en educacion del paciente y salud preventiva.',
    languages: ['English', 'Spanish'],
    education: 'University of South Florida',
    educationEs: 'Universidad del Sur de Florida',
    certifications: ['Family Nurse Practitioner', 'Primary Care Certified'],
    certificationsEs: ['Enfermero Practicante Familiar', 'Certificado en Atencion Primaria'],
  },
  {
    name: 'Sara Larias',
    role: 'Advanced Practice Registered Nurse',
    roleEs: 'Enfermera Registrada de Practica Avanzada',
    initials: 'APRN',
    image: null,
    specialty: 'Family Medicine',
    specialtyEs: 'Medicina Familiar',
    bio: 'Sara brings a holistic approach to family medicine, addressing both physical and emotional well-being.',
    bioEs: 'Sara aporta un enfoque holistico a la medicina familiar, abordando tanto el bienestar fisico como emocional.',
    languages: ['English', 'Spanish'],
    education: 'Florida International University',
    educationEs: 'Universidad Internacional de Florida',
    certifications: ['Family Medicine NP', 'Wellness Coach'],
    certificationsEs: ['NP Medicina Familiar', 'Coach de Bienestar'],
  },
  {
    name: 'Pedro P. Garcia',
    role: 'Advanced Practice Registered Nurse',
    roleEs: 'Enfermero Registrado de Practica Avanzada',
    initials: 'APRN',
    image: null,
    specialty: 'General Practice',
    specialtyEs: 'Medicina General',
    bio: 'Pedro provides attentive care for a wide range of health conditions with a patient-first philosophy.',
    bioEs: 'Pedro proporciona atencion atenta para una amplia gama de condiciones de salud con una filosofia de paciente primero.',
    languages: ['English', 'Spanish'],
    education: 'Miami Dade College',
    educationEs: 'Colegio Miami Dade',
    certifications: ['Adult Care NP', 'Chronic Disease Management'],
    certificationsEs: ['NP Cuidado de Adultos', 'Manejo de Enfermedades Cronicas'],
  },
  {
    name: 'Israel Hernandez',
    role: 'Advanced Practice Registered Nurse',
    roleEs: 'Enfermero Registrado de Practica Avanzada',
    initials: 'APRN',
    image: null,
    specialty: 'Family Medicine',
    specialtyEs: 'Medicina Familiar',
    bio: 'Israel is dedicated to comprehensive family care, treating patients of all ages with respect and dignity.',
    bioEs: 'Israel esta dedicado a la atencion familiar integral, tratando pacientes de todas las edades con respeto y dignidad.',
    languages: ['English', 'Spanish'],
    education: 'Barry University',
    educationEs: 'Universidad Barry',
    certifications: ['Family NP', 'Pediatric Care Certified'],
    certificationsEs: ['NP Familiar', 'Certificado en Cuidado Pediatrico'],
  },
];

export default function DoctorsPage() {
  const { language, t } = useLanguage();
  const isSpanish = language === 'es';
  const [expandedProvider, setExpandedProvider] = useState<string | null>(null);

  const toggleExpand = (name: string) => {
    setExpandedProvider(expandedProvider === name ? null : name);
  };

  return (
    <div className="min-h-screen bg-[#f4f7fb] font-sans text-[#1e293b] relative overflow-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden gradient-hero">
        {/* Star Emboss Backgrounds */}
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.06 }}
          transition={{ duration: 1.5 }}
          src="/Assets/45.png"
          alt=""
          className="hidden sm:block absolute -right-20 top-0 w-[500px] h-[500px] object-contain pointer-events-none"
        />
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.04 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          src="/Assets/45.png"
          alt=""
          className="hidden sm:block absolute -left-32 bottom-0 w-[450px] h-[450px] object-contain pointer-events-none rotate-12"
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full gradient-yellow-orange text-white text-sm sm:text-base font-semibold mb-4 sm:mb-6"
            >
              <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
              {isSpanish ? 'Excelencia en Atencion Medica' : 'Excellence in Healthcare'}
            </motion.span>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-brand-primary)] mb-4 sm:mb-6 tracking-tight leading-tight">
              {isSpanish ? 'Conozca a Nuestro' : 'Meet Our'}{' '}
              <span className="gradient-text">{isSpanish ? 'Equipo Medico de Clase Mundial' : 'World-Class Medical Team'}</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-[#64748b] max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-10">
              {isSpanish
                ? 'Nuestros profesionales medicos dedicados aportan decadas de experiencia, atencion compasiva y un compromiso inquebrantable con su salud. Cada miembro de nuestro equipo esta aqui para asegurar que usted y su familia reciban la atencion excepcional que merecen.'
                : 'Our dedicated medical professionals bring decades of experience, compassionate care, and an unwavering commitment to your health. Every member of our team is here to ensure you and your family receive the exceptional care you deserve.'}
            </p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-3 sm:gap-4"
            >
              <Link
                to="/medical-plan"
                className="gradient-blue text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold flex items-center gap-2 hover:shadow-lg transition-all text-sm sm:text-base"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                {isSpanish ? 'Agendar Cita' : 'Schedule Appointment'}
              </Link>
              <a
                href="tel:+13059828810"
                className="bg-white text-[var(--color-brand-primary)] border-2 border-[var(--color-brand-primary)] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-[var(--color-brand-primary)] hover:text-white transition-all text-sm sm:text-base"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                {t.common.phoneNumber}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Doctors Section */}
      <section className="relative -mt-8 sm:-mt-12 md:-mt-16 px-4 sm:px-6 md:px-12 lg:px-24 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-12 text-center"
          >
            <span className="inline-block px-4 py-2 rounded-full text-sm sm:text-base font-semibold mb-3 sm:mb-4 bg-[var(--color-brand-primary)]/10 text-[var(--color-brand-primary)]">
              {isSpanish ? 'Doctores Destacados' : 'Featured Physicians'}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-brand-primary)]">
              {isSpanish ? 'Liderazgo en Excelencia Medica' : 'Leadership in Medical Excellence'}
            </h2>
          </motion.div>

          {/* Featured Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {featuredDoctors.map((doc, idx) => (
              <motion.div
                key={doc.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Image with Logo Badge */}
                <div className="relative h-[280px] sm:h-[350px] md:h-[400px] overflow-hidden bg-gradient-to-br from-[var(--color-brand-primary-light)]/30 to-[var(--color-brand-primary)]/20">
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-primary)] via-[var(--color-brand-primary)]/30 to-transparent z-10" />

                  {/* Estrella Logo Watermark */}
                  <img
                    src="/assets/images/logos/Logo_estrella.png"
                    alt=""
                    className="absolute top-3 sm:top-4 left-3 sm:left-4 w-16 sm:w-20 md:w-24 h-auto z-20 opacity-90"
                  />

                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Credentials Badge */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-20 gradient-yellow-orange px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-white text-xs sm:text-sm font-bold shadow-lg">
                    {doc.initials}
                  </div>

                  {/* Name overlay */}
                  <div className="absolute bottom-0 left-0 right-0 z-20 p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1">{doc.name}</h3>
                    <p className="text-white/90 font-medium text-sm sm:text-base">{isSpanish ? doc.specialtyEs : doc.specialty}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  <p className="text-[#64748b] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                    {isSpanish ? doc.bioEs : doc.bio}
                  </p>

                  {/* Education */}
                  <div className="mb-3 sm:mb-4">
                    <p className="text-xs sm:text-sm font-semibold text-[var(--color-brand-primary)] mb-1">
                      {isSpanish ? 'Educacion' : 'Education'}
                    </p>
                    <p className="text-sm sm:text-base text-[#64748b]">{isSpanish ? doc.educationEs : doc.education}</p>
                  </div>

                  {/* Certifications */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                    {(isSpanish ? doc.certificationsEs : doc.certifications).map((cert, i) => (
                      <span key={i} className="px-2 sm:px-3 py-1 bg-[var(--color-brand-primary)]/10 rounded-full text-xs font-medium text-[var(--color-brand-primary)]">
                        {cert}
                      </span>
                    ))}
                  </div>

                  {/* Languages */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                    {doc.languages.map(lang => (
                      <span key={lang} className="px-2 sm:px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-[#64748b]">
                        {lang}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 sm:gap-3">
                    <Link
                      to="/medical-plan"
                      className="flex-1 gradient-blue text-white py-2.5 sm:py-3 rounded-xl sm:rounded-2xl font-semibold text-center hover:shadow-lg transition-all text-sm sm:text-base"
                    >
                      {isSpanish ? 'Agendar Cita' : 'Book Appointment'}
                    </Link>
                    <a
                      href="tel:+13059828810"
                      className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 bg-gray-100 hover:bg-[var(--color-brand-secondary)] text-[var(--color-brand-primary)] hover:text-white rounded-xl sm:rounded-2xl flex items-center justify-center transition-all"
                    >
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Providers Section - Expandable Cards */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-24 bg-white">
        {/* Star Emboss */}
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.03 }}
          viewport={{ once: true }}
          src="/Assets/45.png"
          alt=""
          className="hidden sm:block absolute -right-40 top-20 w-[500px] h-[500px] object-contain pointer-events-none"
        />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full text-sm sm:text-base font-semibold mb-3 sm:mb-4 gradient-yellow-orange text-white">
              {isSpanish ? 'Nuestro Equipo Completo' : 'Our Full Team'}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-brand-primary)] mb-3 sm:mb-4">
              {isSpanish ? 'Todos Nuestros Proveedores' : 'All Our Providers'}
            </h2>
            <p className="text-sm sm:text-base text-[#64748b] max-w-2xl mx-auto">
              {isSpanish
                ? 'Haga clic en cualquier proveedor para ver mas informacion sobre sus credenciales y experiencia.'
                : 'Click on any provider to see more information about their credentials and experience.'}
            </p>
          </motion.div>

          {/* Providers Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {allProviders.map((provider, idx) => (
              <motion.div
                key={provider.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                layout
                className="group"
              >
                <div
                  onClick={() => toggleExpand(provider.name)}
                  className={`bg-[#f4f7fb] rounded-xl sm:rounded-2xl overflow-hidden border-2 transition-all duration-300 cursor-pointer ${expandedProvider === provider.name
                    ? 'border-[var(--color-brand-primary)] shadow-xl'
                    : 'border-transparent hover:border-[var(--color-brand-primary)]/30 hover:shadow-lg'
                    }`}
                >
                  {/* Image Area with Logo */}
                  <div className="relative h-56 sm:h-72 md:h-80 overflow-hidden bg-gradient-to-br from-[var(--color-brand-primary-light)]/20 to-[var(--color-brand-primary)]/10">
                    {/* Estrella Logo */}
                    <img
                      src="/assets/images/logos/Logo_estrella.png"
                      alt=""
                      className="absolute top-2 sm:top-3 left-2 sm:left-3 w-14 sm:w-16 md:w-20 h-auto z-20 opacity-80"
                    />

                    {provider.image ? (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-primary)]/50 to-transparent z-10" />
                        <img
                          src={provider.image}
                          alt={provider.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full gradient-blue flex items-center justify-center mb-2 sm:mb-3 shadow-lg">
                          <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                            {provider.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <span className="text-xs font-medium text-[#64748b]">
                          {isSpanish ? 'Foto Proximamente' : 'Photo Coming Soon'}
                        </span>
                      </div>
                    )}

                    {/* Credentials */}
                    <div className="absolute top-2 sm:top-3 right-2 sm:right-3 z-20 gradient-yellow-orange px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-white text-xs font-bold shadow-md">
                      {provider.initials}
                    </div>

                    {/* Expand indicator */}
                    <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 z-20">
                      <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 flex items-center justify-center transition-transform ${expandedProvider === provider.name ? 'rotate-180' : ''
                        }`}>
                        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-brand-primary)]" />
                      </div>
                    </div>
                  </div>

                  {/* Basic Info */}
                  <div className="p-4 sm:p-5 bg-white">
                    <h3 className="text-base sm:text-lg font-bold text-[var(--color-brand-primary)] mb-1">
                      {provider.name}
                    </h3>
                    <p className="text-[var(--color-brand-secondary)] font-semibold text-sm sm:text-base mb-1 sm:mb-2">
                      {isSpanish ? provider.specialtyEs : provider.specialty}
                    </p>
                    <p className="text-xs sm:text-sm text-[#64748b]">
                      {isSpanish ? provider.roleEs : provider.role}
                    </p>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {expandedProvider === provider.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden bg-white"
                      >
                        <div className="px-4 sm:px-5 pb-4 sm:pb-5 border-t border-gray-100 pt-3 sm:pt-4">
                          {/* Bio */}
                          <p className="text-sm sm:text-base text-[#64748b] mb-3 sm:mb-4 leading-relaxed">
                            {isSpanish ? provider.bioEs : provider.bio}
                          </p>

                          {/* Education */}
                          <div className="mb-2 sm:mb-3">
                            <p className="text-xs sm:text-sm font-semibold text-[var(--color-brand-primary)] mb-1">
                              {isSpanish ? 'Educacion' : 'Education'}
                            </p>
                            <p className="text-sm sm:text-base text-[#64748b]">
                              {isSpanish ? provider.educationEs : provider.education}
                            </p>
                          </div>

                          {/* Certifications */}
                          <div className="mb-2 sm:mb-3">
                            <p className="text-xs sm:text-sm font-semibold text-[var(--color-brand-primary)] mb-1.5 sm:mb-2">
                              {isSpanish ? 'Certificaciones' : 'Certifications'}
                            </p>
                            <div className="flex flex-wrap gap-1 sm:gap-1.5">
                              {(isSpanish ? provider.certificationsEs : provider.certifications).map((cert, i) => (
                                <span key={i} className="px-2 py-1 bg-[var(--color-brand-primary)]/10 rounded-full text-xs text-[var(--color-brand-primary)]">
                                  {cert}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Languages */}
                          <div className="mb-3 sm:mb-4">
                            <p className="text-xs sm:text-sm font-semibold text-[var(--color-brand-primary)] mb-1.5 sm:mb-2">
                              {isSpanish ? 'Idiomas' : 'Languages'}
                            </p>
                            <div className="flex flex-wrap gap-1 sm:gap-1.5">
                              {provider.languages.map(lang => (
                                <span key={lang} className="px-2 py-1 bg-gray-100 rounded-full text-xs text-[#64748b]">
                                  {lang}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex gap-2">
                            <Link
                              to="/medical-plan"
                              onClick={(e) => e.stopPropagation()}
                              className="flex-1 gradient-blue text-white py-2.5 sm:py-3 rounded-xl sm:rounded-2xl font-semibold text-center text-sm sm:text-base hover:shadow-lg transition-all"
                            >
                              {isSpanish ? 'Agendar' : 'Book'}
                            </Link>
                            <a
                              href="tel:+13059828810"
                              onClick={(e) => e.stopPropagation()}
                              className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 bg-gray-100 hover:bg-[var(--color-brand-secondary)] text-[var(--color-brand-primary)] hover:text-white rounded-xl sm:rounded-2xl flex items-center justify-center transition-all"
                            >
                              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.04 }}
          viewport={{ once: true }}
          src="/Assets/45.png"
          alt=""
          className="hidden sm:block absolute -left-20 top-1/2 -translate-y-1/2 w-[400px] h-[400px] object-contain pointer-events-none"
        />

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[var(--color-brand-primary)] via-[var(--color-brand-primary)] to-[var(--color-brand-primary-dark)] rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 text-center text-white shadow-2xl"
          >
            <Heart className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-4 sm:mb-6 text-[var(--color-brand-accent)]" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              {isSpanish ? 'Listo para Conocer a Nuestro Equipo?' : 'Ready to Meet Our Team?'}
            </h2>
            <p className="text-white/80 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
              {isSpanish
                ? 'Programe su cita hoy y experimente la atencion compasiva y personalizada que distingue a Estrella Medical Centers.'
                : 'Schedule your appointment today and experience the compassionate, personalized care that sets Estrella Medical Centers apart.'}
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <Link
                to="/medical-plan"
                className="gradient-yellow-orange text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold flex items-center gap-2 hover:shadow-lg transition-all text-sm sm:text-base"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                {isSpanish ? 'Agendar Ahora' : 'Schedule Now'}
              </Link>
              <a
                href="tel:+13059828810"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold flex items-center gap-2 transition-all text-sm sm:text-base"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                {t.common.phoneNumber}
              </a>
            </div>

            {/* Hours reminder */}
            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/20">
              <div className="flex items-center justify-center gap-2 text-white/70 text-xs sm:text-sm">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>{isSpanish ? 'Lun-Vie: 7:30am-5pm | Sab: 8am-3pm' : 'Mon-Fri: 7:30am-5pm | Sat: 8am-3pm'}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
