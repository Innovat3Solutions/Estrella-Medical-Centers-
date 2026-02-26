import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n';
import {
  FileText,
  CreditCard,
  Clock,
  Phone,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Car,
  ShieldCheck
} from 'lucide-react';

export default function NewPatientInfo() {
  const { language } = useLanguage();
  const isSpanish = language === 'es';

  const highlights = [
    {
      icon: Clock,
      title: isSpanish ? 'Cita en 24 Horas' : '24-Hour Appointments',
      desc: isSpanish ? 'Garantizado' : 'Guaranteed'
    },
    {
      icon: Car,
      title: isSpanish ? 'Transporte Gratis' : 'Free Transportation',
      desc: isSpanish ? 'Puerta a puerta' : 'Door to door'
    },
    {
      icon: CreditCard,
      title: isSpanish ? 'Medicare Aceptado' : 'Medicare Accepted',
      desc: isSpanish ? 'La mayoría de planes' : 'Most plans'
    },
    {
      icon: ShieldCheck,
      title: isSpanish ? '100% Bilingüe' : '100% Bilingual',
      desc: isSpanish ? 'Inglés y Español' : 'English & Spanish'
    }
  ];

  const whatToBring = [
    { en: 'Photo ID', es: 'Identificación con Foto' },
    { en: 'Insurance Card', es: 'Tarjeta de Seguro' },
    { en: 'Medication List', es: 'Lista de Medicamentos' },
    { en: 'Medical Records', es: 'Registros Médicos' }
  ];

  const insuranceLogos = [
    'Humana', 'UnitedHealthcare', 'Aetna', 'Cigna', 'Devoted Health', 'Simply Healthcare', 'AvMed'
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-24 bg-[#f8fafc] relative overflow-hidden">
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.03 }}
        viewport={{ once: true }}
        src="/assets/45.png"
        alt=""
        className="absolute -right-20 top-20 w-[400px] h-[400px] object-contain pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 gradient-yellow-orange text-white">
            <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            {isSpanish ? 'Nuevos Pacientes' : 'New Patients'}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-brand-primary)] mb-4 sm:mb-6">
            {isSpanish ? 'Su Primera Visita' : 'Your First Visit'}
          </h2>
          <p className="text-[#64748b] text-base sm:text-lg max-w-2xl mx-auto px-2">
            {isSpanish
              ? 'Comenzar su cuidado con nosotros es fácil. Esto es todo lo que necesita saber.'
              : 'Getting started with us is easy. Here\'s everything you need to know.'}
          </p>
        </motion.div>

        {/* Quick Highlights Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12"
        >
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-5 text-center border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl gradient-blue flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <p className="font-bold text-[var(--color-brand-primary)] text-xs sm:text-sm">{item.title}</p>
              <p className="text-[#64748b] text-[10px] sm:text-xs">{item.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* What to Bring */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-gray-100 shadow-sm"
          >
            <h3 className="text-lg sm:text-xl font-bold text-[var(--color-brand-primary)] mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl gradient-yellow-orange flex items-center justify-center shrink-0">
                <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              {isSpanish ? 'Qué Traer' : 'What to Bring'}
            </h3>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {whatToBring.map((item, idx) => (
                <div key={idx} className="flex items-center gap-1.5 sm:gap-2 text-[#1e293b]">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-brand-secondary)] shrink-0" />
                  <span className="font-medium text-sm sm:text-base">{isSpanish ? item.es : item.en}</span>
                </div>
              ))}
            </div>
            <p className="text-[#64748b] text-xs sm:text-sm mt-3 sm:mt-4">
              {isSpanish
                ? '¿No tiene alguno de estos? No se preocupe, nuestro equipo le ayudará.'
                : "Missing something? Don't worry, our team will help you."}
            </p>
          </motion.div>

          {/* Insurance */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-gray-100 shadow-sm"
          >
            <h3 className="text-lg sm:text-xl font-bold text-[var(--color-brand-primary)] mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl gradient-blue flex items-center justify-center shrink-0">
                <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              {isSpanish ? 'Seguros Aceptados' : 'Insurance Accepted'}
            </h3>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
              {insuranceLogos.map((name, idx) => (
                <span
                  key={idx}
                  className="px-2 sm:px-3 py-1 sm:py-1.5 bg-[#f8fafc] border border-gray-200 rounded-full text-xs sm:text-sm font-medium text-[#64748b]"
                >
                  {name}
                </span>
              ))}
            </div>
            <p className="text-[#64748b] text-xs sm:text-sm">
              {isSpanish
                ? 'Aceptamos Medicare, Medicaid y la mayoría de planes Medicare Advantage.'
                : 'We accept Medicare, Medicaid, and most Medicare Advantage plans.'}
            </p>
          </motion.div>
        </div>

        {/* Hours & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="gradient-blue rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 relative overflow-hidden"
        >
          <img src="/assets/45.png" className="absolute -bottom-10 -right-10 w-32 sm:w-40 h-32 sm:h-40 opacity-10 object-contain" alt="" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="text-white text-center md:text-left">
              <div className="flex items-center gap-2 sm:gap-3 justify-center md:justify-start mb-2">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-brand-accent)]" />
                <span className="text-lg sm:text-xl font-bold">{isSpanish ? 'Horario' : 'Hours'}</span>
              </div>
              <p className="text-white/90 text-sm sm:text-base">
                {isSpanish ? 'Lun - Vie: 7:30 AM - 5:00 PM' : 'Mon - Fri: 7:30 AM - 5:00 PM'} &nbsp;|&nbsp;
                {isSpanish ? 'Sáb: 8:00 AM - 3:00 PM' : 'Sat: 8:00 AM - 3:00 PM'}
              </p>
            </div>
            <div className="flex flex-row flex-wrap gap-2 sm:gap-3 justify-center w-full sm:w-auto">
              <Link
                to="/medical-plan"
                className="gradient-yellow-orange hover:shadow-xl text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                {isSpanish ? 'Agendar Cita' : 'Schedule Now'}
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </Link>
              <a
                href="tel:+13059828810"
                className="bg-white text-[var(--color-brand-primary)] px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold transition-all hover:shadow-xl flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                (305) 982-8810
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
