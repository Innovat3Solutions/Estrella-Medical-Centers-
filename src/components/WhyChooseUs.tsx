import { motion } from 'framer-motion';
import { ShieldCheck, SmilePlus, Pill, Home, Clock } from 'lucide-react';
import { useLanguage } from '../i18n';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function WhyChooseUs() {
  const { t } = useLanguage();

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 max-w-[1600px] mx-auto relative">
      <div className="rounded-2xl sm:rounded-[2rem] md:rounded-[3rem] p-5 sm:p-6 md:p-10 lg:p-16 relative overflow-hidden shadow-sm border border-gray-100 gradient-hero">

        {/* Star Emboss Background */}
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.05 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          src="/assets/45.png"
          alt=""
          className="absolute -top-20 -left-20 w-[450px] h-[450px] object-contain rotate-12 pointer-events-none"
        />
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.04 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3 }}
          src="/assets/45.png"
          alt=""
          className="absolute -bottom-32 -right-20 w-[500px] h-[500px] object-contain -rotate-6 pointer-events-none"
        />

        <div className="max-w-3xl mb-8 sm:mb-10 md:mb-12 relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 gradient-yellow-orange text-white"
          >
            {t.whyChooseUs.badge}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-brand-primary)] mb-4 sm:mb-6 tracking-tight"
          >
            {t.whyChooseUs.title}{' '}
            <span className="text-gradient-orange">{t.whyChooseUs.titleHighlight}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#64748b] leading-relaxed text-sm sm:text-base md:text-lg"
          >
            {t.whyChooseUs.description}
          </motion.p>
        </div>

        {/* Bento Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6 md:auto-rows-[260px] relative z-10"
        >
          {/* Card 1: Tall - 30+ Years */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-1 lg:col-span-2 md:row-span-2 rounded-2xl sm:rounded-3xl overflow-hidden relative group flex flex-col shadow-lg gradient-blue min-h-[280px] md:min-h-0">
            <img src="/assets/45.png" className="absolute -bottom-10 -right-10 w-40 sm:w-56 h-40 sm:h-56 opacity-10 object-contain group-hover:scale-110 transition-transform duration-700" alt="" />
            <div className="p-5 sm:p-6 md:p-8 lg:p-10 relative z-10 flex-1">
              <div className="bg-white/20 w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 backdrop-blur-sm">
                <ShieldCheck className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-4">{t.whyChooseUs.excellence.title}</h3>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                {t.whyChooseUs.excellence.desc}
              </p>
            </div>
            <div className="relative h-32 sm:h-2/5 w-full mt-auto overflow-hidden">
              <img src="/assets/images/premium/caregiver-delivering-nutritious-meal.webp" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Caregiver" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-primary)] to-transparent opacity-80 mix-blend-multiply"></div>
            </div>
          </motion.div>

          {/* Card 2: Wide - 24hr Guarantee */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 lg:col-span-3 md:row-span-1 rounded-2xl sm:rounded-3xl overflow-hidden relative group flex shadow-lg gradient-yellow-orange min-h-[200px] md:min-h-0">
            <img src="/assets/45.png" className="absolute -top-20 right-10 w-48 sm:w-64 h-48 sm:h-64 opacity-10 object-contain group-hover:rotate-12 transition-transform duration-700" alt="" />
            <div className="p-5 sm:p-6 md:p-8 lg:p-10 relative z-10 w-full lg:w-1/2 flex flex-col justify-center">
              <div className="bg-white/20 w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 backdrop-blur-sm">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">{t.whyChooseUs.guarantee.title}</h3>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                {t.whyChooseUs.guarantee.desc}
              </p>
            </div>
            <div className="relative hidden lg:block w-1/2 h-full overflow-hidden clip-diagonal-left">
              <img src="/assets/images/premium/specialists.webp" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Specialists" />
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-secondary)] via-transparent to-transparent opacity-90 mix-blend-multiply"></div>
            </div>
          </motion.div>

          {/* Card 3: Small - Home Visits */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-1 lg:col-span-1 md:row-span-1 bg-white border border-gray-100 rounded-2xl sm:rounded-3xl overflow-hidden relative group flex flex-col shadow-lg min-h-[180px] md:min-h-0">
            <img src="/assets/45.png" className="absolute -bottom-10 -right-10 w-28 sm:w-36 h-28 sm:h-36 opacity-5 object-contain" alt="" />
            <div className="p-4 sm:p-5 lg:p-6 relative z-10 flex-1 flex flex-col">
              <div className="bg-[var(--color-brand-light)] w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 shrink-0">
                <Home className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-brand-primary)]" />
              </div>
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-[var(--color-brand-primary)] mb-1 sm:mb-2 leading-tight">{t.whyChooseUs.homeVisits.title}</h3>
              <p className="text-[#64748b] text-[11px] sm:text-xs lg:text-sm leading-relaxed line-clamp-4">
                {t.whyChooseUs.homeVisits.desc}
              </p>
            </div>
          </motion.div>

          {/* Card 4: Small - Bilingual Care */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-1 lg:col-span-2 md:row-span-1 bg-white border border-gray-100 rounded-2xl sm:rounded-3xl overflow-hidden relative group flex flex-col shadow-lg min-h-[180px] md:min-h-0">
            <img src="/assets/45.png" className="absolute -bottom-10 -right-10 w-28 sm:w-36 h-28 sm:h-36 opacity-5 object-contain" alt="" />
            <div className="p-4 sm:p-5 lg:p-6 relative z-10 flex-1 flex flex-col">
              <div className="bg-red-50 w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 shrink-0">
                <SmilePlus className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-brand-secondary)]" />
              </div>
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-[var(--color-brand-secondary)] mb-1 sm:mb-2 leading-tight">{t.whyChooseUs.bilingual.title}</h3>
              <p className="text-[#64748b] text-[11px] sm:text-xs lg:text-sm leading-relaxed line-clamp-4">
                {t.whyChooseUs.bilingual.desc}
              </p>
            </div>
          </motion.div>

          {/* Card 5: Wide - Integrated Services */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 lg:col-span-5 md:row-span-1 rounded-2xl sm:rounded-3xl overflow-hidden relative group flex shadow-lg gradient-blue min-h-[200px] md:min-h-0">
            <img src="/assets/45.png" className="absolute bottom-0 right-1/3 w-32 sm:w-40 h-32 sm:h-40 opacity-10 object-contain group-hover:-translate-y-4 transition-transform duration-700" alt="" />
            <div className="p-5 sm:p-6 md:p-8 lg:p-10 relative z-10 w-full lg:w-2/5 flex flex-col justify-center">
              <div className="bg-white/20 w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 backdrop-blur-sm">
                <Pill className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">{t.whyChooseUs.integrated.title}</h3>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-md">
                {t.whyChooseUs.integrated.desc}
              </p>
            </div>
            <div className="relative hidden lg:block w-3/5 h-full overflow-hidden">
              <img src="/assets/images/premium/service-pharmacy.webp" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Pharmacy" />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[var(--color-brand-primary)] opacity-90 mix-blend-multiply"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
