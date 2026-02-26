import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ArrowRight, Calendar, Sparkles } from 'lucide-react';
import { useLanguage } from '../i18n';

export default function Doctors() {
  const { t } = useLanguage();

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden relative">
      {/* Star Emboss Backgrounds */}
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.04 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        src="/Assets/45.png"
        alt=""
        className="absolute -right-20 top-0 w-[500px] h-[500px] object-contain pointer-events-none"
      />
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.03 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.3 }}
        src="/Assets/45.png"
        alt=""
        className="absolute -left-32 bottom-20 w-[400px] h-[400px] object-contain pointer-events-none rotate-45"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 gradient-yellow-orange text-white"
          >
            {t.doctors.badge}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-brand-primary)] mb-4 sm:mb-6 tracking-tight"
          >
            {t.doctors.title}{' '}
            <span className="gradient-text">{t.doctors.titleHighlight}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#64748b] max-w-3xl mx-auto text-base sm:text-lg leading-relaxed px-2"
          >
            {t.doctors.description}
          </motion.p>
        </div>

        {/* Main Content - Image and Stats */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Team Image - Large and Prominent */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-2/3 w-full"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl group min-h-[300px] sm:min-h-[400px] md:min-h-[500px]">
              {/* Gradient overlay on edges */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-primary)]/60 via-transparent to-transparent z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-primary)]/20 to-transparent z-10" />

              <img
                src="/assets/images/doctors/Estrella_group.png"
                alt="Estrella Medical Center Team"
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />

              {/* Floating badge on image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 z-20"
              >
                <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-5 shadow-lg sm:shadow-xl flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl gradient-yellow-orange flex items-center justify-center shrink-0">
                      <Heart className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-[var(--color-brand-primary)] font-bold text-sm sm:text-lg">{t.doctors.cardTitle}</p>
                      <p className="text-[#64748b] text-xs sm:text-sm">{t.doctors.cardSubtitle}</p>
                    </div>
                  </div>
                  <Link
                    to="/doctors"
                    className="gradient-blue text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-xs sm:text-sm flex items-center gap-2 hover:shadow-lg transition-all whitespace-nowrap w-full sm:w-auto justify-center"
                  >
                    {t.doctors.viewAllDoctors}
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Our Promise Side Panel - Light Gradient */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3 w-full"
          >
            <div className="bg-gradient-to-br from-[var(--color-brand-primary-lighter)] via-[var(--color-brand-primary-light)] to-[var(--color-brand-primary)] rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white shadow-xl sm:shadow-2xl">
              {/* Heart Icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring" }}
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 sm:mb-6"
              >
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-white fill-white/30" />
              </motion.div>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{t.doctors.panelTitle}</h3>

              {/* Emotional Message */}
              <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                {t.doctors.panelMessage}
              </p>

              {/* Sparkle accent */}
              <div className="flex items-center gap-2 mb-6 sm:mb-8">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-brand-accent)]" />
                <span className="text-white font-semibold italic text-sm sm:text-base">{t.doctors.panelTagline}</span>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/30 mb-4 sm:mb-6" />

              {/* CTA */}
              <div className="space-y-3 sm:space-y-4">
                <Link
                  to="/medical-plan"
                  className="w-full gradient-yellow-orange text-white py-3 sm:py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all text-base sm:text-lg"
                >
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                  {t.doctors.scheduleWithUs}
                </Link>
                <a
                  href="tel:+13059828810"
                  className="w-full bg-white/20 hover:bg-white/30 text-white py-2.5 sm:py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-all border border-white/30 text-sm sm:text-base"
                >
                  {t.common.phoneNumber}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
