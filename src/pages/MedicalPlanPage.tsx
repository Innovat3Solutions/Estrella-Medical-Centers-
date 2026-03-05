import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { CheckCircle2, Star, ExternalLink } from 'lucide-react';
import { useLanguage } from '../i18n';

export default function MedicalPlanPage() {
  const { language } = useLanguage();
  const isSpanish = language === 'es';

  const benefits = [
    {
      titleEn: "Unlimited primary care visits",
      titleEs: "Visitas de atención primaria ilimitadas",
      descEn: "Unlimited visits with your primary care doctor",
      descEs: "Visitas ilimitadas con su médico de atención primaria"
    },
    {
      titleEn: "Telemedicine",
      titleEs: "Telemedicina",
      descEn: "Virtual consultations from home",
      descEs: "Consultas virtuales desde casa"
    },
    {
      titleEn: "Specialist consultations",
      titleEs: "Consultas con especialistas",
      descEn: "Specialist referrals when medically necessary",
      descEs: "Referencias a especialistas cuando sea médicamente necesario"
    },
    {
      titleEn: "X-rays and diagnostic tests",
      titleEs: "Rayos X y pruebas diagnósticas",
      descEn: "X-rays and clinical evaluations included",
      descEs: "Rayos X y evaluaciones clínicas incluidas"
    },
    {
      titleEn: "Dental coverage",
      titleEs: "Cobertura dental",
      descEn: "Up to 2 dental cleanings per year",
      descEs: "Hasta 2 limpiezas dentales por año"
    },
    {
      titleEn: "Vision coverage",
      titleEs: "Cobertura de visión",
      descEn: "1 pair of glasses per year included",
      descEs: "1 par de lentes por año incluido"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f4f7fb] font-sans text-[#1e293b]">
      <Header />

      <main className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl sm:rounded-[2rem] md:rounded-[2.5rem] shadow-xl sm:shadow-2xl overflow-hidden border border-gray-100"
          >
            {/* Header Section */}
            <div className="gradient-blue p-6 sm:p-8 md:p-12 text-center relative overflow-hidden">
              {/* Star emboss background */}
              <img
                src="/assets/45.png"
                alt=""
                className="absolute -right-20 -top-20 w-[300px] h-[300px] object-contain opacity-10 pointer-events-none"
              />
              <img
                src="/assets/45.png"
                alt=""
                className="absolute -left-20 -bottom-20 w-[250px] h-[250px] object-contain opacity-10 pointer-events-none rotate-45"
              />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/20 text-white text-xs sm:text-sm font-bold mb-4 sm:mb-6">
                  <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                  {isSpanish ? 'Plan de Cuidado Premium' : 'Premium Care Plan'}
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
                  {isSpanish ? 'Plan Medico Estrella' : 'Estrella Medical Plan'}
                </h1>

                <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
                  {isSpanish
                    ? 'Atencion medica integral y asequible para usted y su familia.'
                    : 'Comprehensive, affordable healthcare for you and your family.'}
                </p>

                {/* Pricing */}
                <div className="inline-flex items-baseline gap-1 bg-white/10 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl">
                  <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">$59</span>
                  <span className="text-lg sm:text-xl text-white/80">/{isSpanish ? 'mes' : 'month'}</span>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="p-4 sm:p-6 md:p-8 lg:p-12">
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--color-brand-primary)] mb-4 sm:mb-6 text-center">
                {isSpanish ? 'Lo Que Esta Incluido' : "What's Included"}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10">
                {benefits.map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-start gap-2.5 sm:gap-3 p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl"
                  >
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-brand-secondary)] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[#1e293b] font-semibold text-sm sm:text-base">
                        {isSpanish ? benefit.titleEs : benefit.titleEn}
                      </p>
                      <p className="text-[#64748b] text-xs sm:text-sm">
                        {isSpanish ? benefit.descEs : benefit.descEn}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <a
                  href="https://link.fastpaydirect.com/payment-link/69a9c0eb9402281a3be99d5e"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 sm:gap-3 gradient-yellow-orange text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full font-bold text-sm sm:text-base md:text-lg hover:shadow-xl transition-all shadow-lg"
                  style={{ boxShadow: '0 8px 25px rgba(249,115,22,0.4)' }}
                >
                  {isSpanish ? 'Mas Informacion o Inscribirse Hoy' : 'Learn More or Sign Up Today'}
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>

                <p className="text-[#64748b] text-xs sm:text-sm mt-4 sm:mt-6 px-2">
                  {isSpanish
                    ? 'Sera redirigido a nuestro portal de inscripcion seguro.'
                    : "You'll be redirected to our secure enrollment portal."}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 sm:mt-8 text-center"
          >
            <p className="text-[#64748b] text-sm sm:text-base">
              {isSpanish ? 'Preguntas? Llamenos al ' : 'Questions? Call us at '}
              <a href="tel:+13059828810" className="text-[var(--color-brand-primary)] font-semibold hover:underline">
                (305) 982-8810
              </a>
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
