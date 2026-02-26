import { useState } from 'react';
import { MapPin, Navigation, Phone, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../i18n';

const locations = [
  {
    name: 'Estrella Medical Center - Flagler',
    type: 'Miami-Dade Center',
    address: '4795 W Flagler St, Miami, FL 33134',
    phone: '(305) 982-8810',
    hours: 'Mon-Fri: 7:30am-5pm | Sat: 8am-3pm',
    comingSoon: false,
    mapQuery: '4795+W+Flagler+St,+Miami,+FL+33134',
  },
  {
    name: 'Estrella Medical Center - Kendall',
    type: 'Miami-Dade Center',
    address: '13980 SW 47th St, Miami, FL 33175',
    phone: '(305) 982-8810',
    hours: 'Mon-Fri: 7:30am-5pm | Sat: 8am-3pm',
    comingSoon: false,
    mapQuery: '13980+SW+47th+St,+Miami,+FL+33175',
  },
  {
    name: 'Estrella Medical Center - Plantation',
    type: 'Broward Center',
    address: '1860 N Pine Island Rd, Plantation, FL 33322',
    phone: '(305) 982-8810',
    hours: 'Mon-Fri: 7:30am-5pm',
    comingSoon: false,
    mapQuery: '1860+N+Pine+Island+Rd,+Plantation,+FL+33322',
  },
  {
    name: 'Estrella Medical Center - Pembroke Pines',
    type: 'Broward Center',
    address: '1806 N Flamingo Rd Suite 280, Pembroke Pines, FL 33028',
    phone: '(305) 982-8810',
    hours: 'Mon-Fri: 7:30am-5pm',
    comingSoon: false,
    mapQuery: '1806+N+Flamingo+Rd,+Pembroke+Pines,+FL+33028',
  },
  {
    name: 'Estrella Medical Center - Doral',
    type: 'Miami-Dade Center',
    address: '10305 NW 41st St Suite 227, Doral, FL 33178',
    phone: '(305) 982-8810',
    hours: 'Mon-Sat: 8am-4:30pm',
    comingSoon: false,
    mapQuery: '10305+NW+41st+St,+Doral,+FL+33178',
  },
  {
    name: 'Estrella Medical Center - Hialeah',
    type: 'Miami-Dade Center',
    address: '4305 E 8th Ave, Hialeah, FL 33013',
    phone: '(305) 982-8810',
    hours: '',
    comingSoon: true,
    mapQuery: '4305+E+8th+Ave,+Hialeah,+FL+33013',
  },
];

export default function LocationSearch() {
  const { t } = useLanguage();
  const [selectedLocation, setSelectedLocation] = useState(0);

  const currentLocation = locations[selectedLocation];

  // Map showing South Florida area
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229089.04006758948!2d-80.4137786!3d25.9017472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a20ec8c111%3A0xff96f271ddad4f65!2sMiami%2C%20FL!5e0!3m2!1sen!2sus!4v1715456384724!5m2!1sen!2sus";

  return (
    <section id="locations" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 items-center relative overflow-hidden scroll-mt-20">
      {/* Star Emboss Background */}
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.03 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        src="/Assets/45.png"
        alt=""
        className="absolute -left-32 top-20 w-[400px] h-[400px] object-contain pointer-events-none -rotate-12"
      />

      {/* Left Map Side */}
      <div className="flex-1 relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl aspect-[4/3] sm:aspect-[4/4] lg:aspect-auto lg:h-[650px] w-full bg-gray-100">
        <iframe
          src={mapSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Estrella Medical Centers Map"
          className="absolute inset-0"
        ></iframe>

        {/* Map Overlay with Location Indicator */}
        <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg sm:shadow-xl">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="gradient-blue p-1.5 sm:p-2 rounded-lg sm:rounded-xl shrink-0">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div className="min-w-0">
              <p className="font-bold text-[var(--color-brand-primary)] text-xs sm:text-sm truncate">{currentLocation.name}</p>
              <p className="text-[10px] sm:text-xs text-[#64748b] truncate">{currentLocation.address}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Locations */}
      <div className="flex-1 w-full relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-brand-primary)] mb-3 sm:mb-4 tracking-tight"
        >
          {t.locationSearch.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[#64748b] mb-6 sm:mb-8 text-sm sm:text-base"
        >
          {t.locationSearch.description}
        </motion.p>

        {/* Locations List */}
        <div className="space-y-3 sm:space-y-4 max-h-[400px] sm:max-h-[480px] overflow-y-auto pr-1 sm:pr-2 hide-scrollbar">
          {locations.map((loc, index) => {
            const isSelected = selectedLocation === index;

            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                key={index}
                onClick={() => setSelectedLocation(index)}
                className={`p-4 sm:p-5 rounded-xl sm:rounded-2xl border transition-all duration-300 group cursor-pointer ${
                  loc.comingSoon
                    ? 'border-dashed border-gray-300 opacity-75 bg-gray-50'
                    : isSelected
                    ? 'border-[var(--color-brand-primary)] bg-[var(--color-brand-light)] shadow-lg'
                    : 'border-gray-100 bg-white hover:border-[var(--color-brand-secondary)] hover:shadow-md'
                }`}
              >
                <div className="flex justify-between items-start gap-2 mb-2">
                  <div className="min-w-0">
                    <h4 className={`font-bold transition-colors text-base sm:text-lg ${
                      isSelected ? 'text-[var(--color-brand-primary)]' : 'text-[#1e293b] group-hover:text-[var(--color-brand-primary)]'
                    }`}>
                      {loc.name}
                    </h4>
                    <p className="text-[10px] sm:text-xs font-bold text-[var(--color-brand-secondary)] mb-2 sm:mb-3 uppercase tracking-wider">
                      {loc.type}
                    </p>
                  </div>
                  {loc.comingSoon && (
                    <span className="gradient-yellow-orange text-white text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg whitespace-nowrap shrink-0">
                      {t.locationSearch.comingSoon}
                    </span>
                  )}
                </div>

                <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-5">
                  <div className="flex items-start gap-2 sm:gap-3 text-[#64748b] text-xs sm:text-sm">
                    <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 shrink-0 text-[var(--color-brand-primary)]" />
                    <p>{loc.address}</p>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 text-[#64748b] text-xs sm:text-sm">
                    <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 text-[var(--color-brand-primary)]" />
                    <a href={`tel:${loc.phone.replace(/[^0-9]/g, '')}`} className="hover:text-[var(--color-brand-primary)] transition-colors">
                      {loc.phone}
                    </a>
                  </div>
                  {loc.hours && (
                    <div className="flex items-center gap-2 sm:gap-3 text-[#64748b] text-xs sm:text-sm">
                      <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 text-[var(--color-brand-primary)]" />
                      <p>{loc.hours}</p>
                    </div>
                  )}
                </div>

                {!loc.comingSoon && (
                  <div className="flex gap-2 sm:gap-3">
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(loc.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 bg-gray-50 hover:bg-[var(--color-brand-light)] text-[var(--color-brand-primary)] py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-1.5 sm:gap-2 border border-gray-100 hover:border-[var(--color-brand-light)]"
                    >
                      <Navigation className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> {t.locationSearch.directions}
                    </a>
                    <button className="flex-1 gradient-blue hover:shadow-lg text-white py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold transition-all">
                      {t.locationSearch.bookVisit}
                    </button>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
