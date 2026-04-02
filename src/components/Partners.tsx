import { motion } from 'framer-motion';
import { useLanguage } from '../i18n';

const insurancePlans = [
  { name: 'Humana', logo: '/assets/images/insurance/humana.png' },
  { name: 'Simply Healthcare', logo: '/assets/images/insurance/simply.png' },
  { name: 'Devoted Health', logo: '/assets/images/insurance/DevotedHealth.png' },
  { name: 'Cigna', logo: '/assets/images/insurance/Cigna.png' },
  { name: 'Insurance Partner', logo: '/assets/images/insurance/52.png' },
  { name: 'Insurance Partner', logo: '/assets/images/insurance/53.png' },
  { name: 'Insurance Partner', logo: '/assets/images/insurance/54.png' },
  { name: 'Insurance Partner', logo: '/assets/images/insurance/55.png' },
  { name: 'Insurance Partner', logo: '/assets/images/insurance/56.png' },
  { name: 'Insurance Partner', logo: '/assets/images/insurance/57.png' },
];

export default function Partners() {
  const { t } = useLanguage();

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden relative star-emboss">
      {/* Star Emboss Background */}
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.04 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        src="/assets/45.png"
        alt=""
        className="absolute -left-20 top-1/2 -translate-y-1/2 w-[500px] h-[500px] object-contain pointer-events-none"
      />
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.03 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.3 }}
        src="/assets/45.png"
        alt=""
        className="absolute -right-32 top-10 w-[400px] h-[400px] object-contain pointer-events-none rotate-12"
      />

      <div className="max-w-7xl mx-auto text-center mb-8 sm:mb-12 md:mb-16 relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 gradient-yellow-orange text-white"
        >
          {t.partners.badge}
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-brand-primary)] mb-4 sm:mb-6 tracking-tight"
        >
          {t.partners.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[#64748b] max-w-2xl mx-auto text-base sm:text-lg px-2"
        >
          {t.partners.description}
        </motion.p>
      </div>

      {/* Insurance Logos Carousel */}
      <div className="max-w-[100vw] overflow-hidden -mx-4 sm:-mx-6 md:-mx-12 lg:-mx-24 relative z-10 py-6 sm:py-10 pointer-events-none">
        {/* Shadow overlays for smooth fade on edges */}
        <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-16 md:w-32 bg-gradient-to-r from-[#f4f7fb] to-transparent z-20" />
        <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-16 md:w-32 bg-gradient-to-l from-[#f4f7fb] to-transparent z-20" />

        <motion.div
          animate={{ x: [0, -1920] }} // Approximating width to scroll
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          className="flex gap-3 sm:gap-6 md:gap-10 w-max items-center px-4 sm:px-6"
        >
          {/* Duplicate the array twice to ensure seamless infinite scrolling */}
          {[...insurancePlans, ...insurancePlans, ...insurancePlans].map((insurance, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-6 flex items-center justify-center shadow-sm border border-gray-100 min-h-[80px] sm:min-h-[120px] w-[140px] sm:w-[200px] shrink-0"
            >
              <div className="w-full h-[40px] sm:h-[60px] flex items-center justify-center">
                {/* Fallback to text if image doesn't load */}
                <img
                  src={insurance.logo}
                  alt={insurance.name}
                  className="max-w-full max-h-full object-contain grayscale-[30%] transition-all duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      const fallback = document.createElement('span');
                      fallback.className = 'text-sm font-bold text-[#64748b] text-center';
                      fallback.textContent = insurance.name;
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-center mt-8 sm:mt-12 relative z-10 px-2"
      >
        <p className="text-[#64748b] mb-3 sm:mb-4 text-sm sm:text-base">
          {t.partners.notSeeInsurance}
        </p>
        <a
          href="tel:+13059828810"
          className="inline-flex items-center gap-2 gradient-blue text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:shadow-lg transition-all duration-300"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          {t.partners.callUs} {t.common.phoneNumber}
        </a>
      </motion.div>
    </section>
  );
}
