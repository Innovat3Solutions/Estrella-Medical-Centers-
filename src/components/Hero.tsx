import { Heart, Pill, Clock, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../i18n';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full overflow-hidden pt-8 sm:pt-12 md:pt-16 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 md:px-12 lg:px-24 rounded-b-[2rem] md:rounded-b-[3rem] gradient-hero">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-white/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[40rem] h-[40rem] bg-[var(--color-brand-cyan-tint)] rounded-full blur-3xl"></div>

        {/* Star Emboss Background Elements */}
        <motion.img
          initial={{ opacity: 0, rotate: -10 }}
          animate={{ opacity: 0.06, rotate: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="/assets/45.png"
          alt=""
          className="absolute top-[5%] -right-10 w-[450px] h-[450px] object-contain"
        />
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.04, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
          src="/assets/45.png"
          alt=""
          className="absolute bottom-10 -left-32 w-[550px] h-[550px] object-contain -rotate-12"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex-1 space-y-8 flex flex-col items-center lg:items-start"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full gradient-yellow-orange text-white text-sm font-semibold shadow-lg"
            style={{ boxShadow: '0 8px 20px rgba(249,115,22,0.3)' }}
          >
            <Clock className="w-4 h-4" />
            {t.hero.badge}
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[var(--color-brand-primary)] leading-[1.1] tracking-tight text-center lg:text-left">
            {t.hero.title1} <br />
            <span className="text-gradient-orange relative inline-block">
              {t.hero.title2}
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -bottom-1 sm:-bottom-2 left-0 h-1 sm:h-2 gradient-yellow-orange rounded-full shadow-lg"
              ></motion.span>
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#64748b] max-w-lg leading-relaxed text-center lg:text-left mx-auto lg:mx-0">
            {t.hero.subtitle}
          </p>

          {/* Key Benefits */}
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white/80 backdrop-blur-sm px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-sm max-w-[180px] sm:max-w-none">
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--color-brand-secondary)] shrink-0" />
              <span className="text-[10px] sm:text-sm font-medium text-[#1e293b] leading-tight">{t.hero.appointmentGuarantee}</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white/80 backdrop-blur-sm px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-sm max-w-[160px] sm:max-w-none">
              <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--color-brand-secondary)] shrink-0" />
              <span className="text-[10px] sm:text-sm font-medium text-[#1e293b] leading-tight">{t.hero.homeHealth}</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start"
          >
            <a
              href="tel:+13059828810"
              className="gradient-blue hover:shadow-xl text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2 shadow-lg text-sm sm:text-base"
              style={{ boxShadow: '0 8px 20px rgba(59,130,246,0.35)' }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="hidden sm:inline">{t.hero.callUs}</span> {t.common.phoneNumber}
            </a>
            <button className="bg-white border-2 border-[var(--color-brand-secondary)] text-[var(--color-brand-secondary)] hover:bg-[var(--color-brand-secondary)] hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all text-sm sm:text-base">
              {t.hero.bookOnline}
            </button>
          </motion.div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex-1 relative self-end hidden sm:block"
        >
          <div className="relative w-full max-w-xl mx-auto translate-y-8 sm:translate-y-16 lg:translate-y-24">
            <img
              src="/assets/images/hero-team.webp"
              alt="Estrella Medical Center Staff"
              loading="lazy"
              className="w-full h-auto object-contain transition-transform duration-700 hover:scale-[1.02] drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
            />
          </div>

          {/* Floating Badges - Hidden on mobile, visible on tablet+ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute bottom-12 sm:bottom-20 lg:bottom-28 left-0 md:left-4 bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-2xl hidden md:flex items-center gap-2 sm:gap-3"
            style={{ boxShadow: '0 15px 40px rgba(0,0,0,0.15)' }}
          >
            <div className="gradient-yellow-orange p-2 sm:p-3 rounded-lg sm:rounded-xl">
              <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white fill-current" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-[#1e293b]">{t.hero.yearsExperience}</p>
              <p className="text-[10px] sm:text-xs text-[#64748b]">{t.hero.trustedCare}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute top-1/2 -right-2 md:right-0 bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-2xl hidden md:flex items-center gap-2 sm:gap-3"
            style={{ boxShadow: '0 15px 40px rgba(0,0,0,0.15)' }}
          >
            <div className="gradient-blue p-2 sm:p-3 rounded-lg sm:rounded-xl">
              <Pill className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-[#1e293b]">{t.hero.specialties}</p>
              <p className="text-[10px] sm:text-xs text-[#64748b]">{t.hero.oneLocation}</p>
            </div>
          </motion.div>

          {/* Locations Badge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="absolute top-4 left-0 md:left-4 bg-white/95 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-xl hidden sm:flex items-center gap-2"
            style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.12)' }}
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs sm:text-sm font-medium text-[#1e293b]">6 {t.hero.locationsOpen}</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
