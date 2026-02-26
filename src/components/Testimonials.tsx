import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../i18n';
import { useState } from 'react';

// Google Reviews data - Update these with actual reviews from your Google Business profile
const reviews = [
  {
    id: 1,
    name: 'Maria Rodriguez',
    rating: 5,
    date: '2 weeks ago',
    dateEs: 'hace 2 semanas',
    text: "I've been a patient at Estrella Medical Centers for 5 years now. Dr. Martinez and his team always make me feel like family. They take the time to explain everything and never rush me out. The free transportation is a blessing!",
    textEs: "He sido paciente en Estrella Medical Centers por 5 años. El Dr. Martinez y su equipo siempre me hacen sentir como familia. Se toman el tiempo para explicar todo y nunca me apuran. ¡El transporte gratis es una bendición!",
    image: '/assets/images/testimonials/patient-1.png'
  },
  {
    id: 2,
    name: 'Jorge Hernandez',
    rating: 5,
    date: '1 month ago',
    dateEs: 'hace 1 mes',
    text: "The best medical center in Miami. Everyone speaks Spanish fluently which makes communication so much easier. They helped me understand my Medicare benefits and get all my medications delivered to my home.",
    textEs: "El mejor centro médico en Miami. Todos hablan español con fluidez lo que hace la comunicación mucho más fácil. Me ayudaron a entender mis beneficios de Medicare y recibir todos mis medicamentos en mi casa.",
    image: '/assets/images/testimonials/patient-2.png'
  },
  {
    id: 3,
    name: 'Carmen Delgado',
    rating: 5,
    date: '3 weeks ago',
    dateEs: 'hace 3 semanas',
    text: "After my husband passed, I didn't know how to navigate the healthcare system alone. The social worker at Estrella helped me with everything - insurance, food assistance, even emotional support. They truly care.",
    textEs: "Después de que mi esposo falleció, no sabía cómo navegar el sistema de salud sola. La trabajadora social en Estrella me ayudó con todo - seguro, asistencia alimentaria, incluso apoyo emocional. Realmente se preocupan.",
    image: '/assets/images/testimonials/patient-3.png'
  },
  {
    id: 4,
    name: 'Roberto Silva',
    rating: 5,
    date: '1 week ago',
    dateEs: 'hace 1 semana',
    text: "I was diagnosed with diabetes 2 years ago and was scared. The team at Estrella taught me how to manage it through diet and exercise. My A1C went from 9.2 to 6.5! They saved my life.",
    textEs: "Me diagnosticaron diabetes hace 2 años y estaba asustado. El equipo de Estrella me enseñó cómo manejarlo con dieta y ejercicio. ¡Mi A1C bajó de 9.2 a 6.5! Me salvaron la vida.",
    image: '/assets/images/testimonials/patient-4.png'
  },
  {
    id: 5,
    name: 'Ana Lucia Perez',
    rating: 5,
    date: '2 months ago',
    dateEs: 'hace 2 meses',
    text: "The 24-hour appointment guarantee is real! I called on Monday morning with chest pain concerns and saw a cardiologist that same afternoon. They did an EKG right there. Such peace of mind.",
    textEs: "¡La garantía de cita en 24 horas es real! Llamé el lunes por la mañana con preocupaciones de dolor en el pecho y vi a un cardiólogo esa misma tarde. Me hicieron un EKG ahí mismo. Qué tranquilidad.",
    image: '/assets/images/testimonials/patient-5.png'
  },
  {
    id: 6,
    name: 'Francisco Gomez',
    rating: 5,
    date: '3 months ago',
    dateEs: 'hace 3 meses',
    text: "My mother is 82 and has multiple health conditions. Estrella coordinates all her care - primary doctor, cardiologist, podiatrist - all in one place. The van picks her up for every appointment. Excellent service!",
    textEs: "Mi madre tiene 82 años y múltiples condiciones de salud. Estrella coordina todo su cuidado - médico primario, cardiólogo, podólogo - todo en un solo lugar. La van la recoge para cada cita. ¡Excelente servicio!",
    image: '/assets/images/testimonials/patient-6.png'
  }
];

export default function Testimonials() {
  const { language } = useLanguage();
  const isSpanish = language === 'es';
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const currentReview = reviews[currentIndex];
  const nextReviews = [
    reviews[(currentIndex + 1) % reviews.length],
    reviews[(currentIndex + 2) % reviews.length],
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden relative gradient-blue">
      {/* Star Emboss Background */}
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: true }}
        src="/Assets/45.png"
        alt=""
        className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] object-contain pointer-events-none"
      />
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.04 }}
        viewport={{ once: true }}
        src="/Assets/45.png"
        alt=""
        className="absolute top-10 -right-20 w-[400px] h-[400px] object-contain pointer-events-none rotate-12"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 bg-white/20 text-white">
            <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current text-[var(--color-brand-accent)]" />
            {isSpanish ? 'Testimonios de Google' : 'Google Reviews'}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            {isSpanish ? 'Voces de ' : 'Voices of '}
            <span className="text-[var(--color-brand-accent)]">{isSpanish ? 'Confianza' : 'Trust'}</span>
          </h2>
          <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
            {isSpanish
              ? 'Lo que nuestros pacientes dicen sobre su experiencia con Estrella Medical Centers.'
              : 'What our patients say about their experience with Estrella Medical Centers.'}
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-stretch">
          {/* Main Review Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/3"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentReview.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-2xl relative flex flex-col"
              >
                {/* Quote Icon */}
                <div className="absolute top-4 sm:top-6 right-4 sm:right-6 w-9 h-9 sm:w-12 sm:h-12 rounded-full gradient-yellow-orange flex items-center justify-center">
                  <Quote className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>

                {/* Google Rating */}
                <div className="flex items-center gap-2 mb-4 sm:mb-6">
                  {/* Google Logo SVG */}
                  <svg className="h-5 sm:h-6" viewBox="0 0 74 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.24 8.19v2.46h5.88c-.18 1.38-.64 2.39-1.34 3.1-.86.86-2.2 1.8-4.54 1.8-3.62 0-6.45-2.92-6.45-6.54s2.83-6.54 6.45-6.54c1.95 0 3.38.77 4.43 1.76L15.4 2.5C13.94 1.08 11.98 0 9.24 0 4.28 0 .11 4.04.11 9s4.17 9 9.13 9c2.68 0 4.7-.88 6.28-2.52 1.62-1.62 2.13-3.91 2.13-5.75 0-.57-.04-1.1-.13-1.54H9.24z" fill="#4285F4"/>
                    <path d="M25 6.19c-3.21 0-5.83 2.44-5.83 5.81 0 3.34 2.62 5.81 5.83 5.81s5.83-2.46 5.83-5.81c0-3.37-2.62-5.81-5.83-5.81zm0 9.33c-1.76 0-3.28-1.45-3.28-3.52 0-2.09 1.52-3.52 3.28-3.52s3.28 1.43 3.28 3.52c0 2.07-1.52 3.52-3.28 3.52z" fill="#EA4335"/>
                    <path d="M53.58 7.49h-.09c-.57-.68-1.67-1.3-3.06-1.3C47.53 6.19 45 8.72 45 12c0 3.26 2.53 5.81 5.43 5.81 1.39 0 2.49-.62 3.06-1.32h.09v.81c0 2.22-1.19 3.41-3.1 3.41-1.56 0-2.53-1.12-2.93-2.07l-2.22.92c.64 1.54 2.33 3.43 5.15 3.43 2.99 0 5.52-1.76 5.52-6.05V6.49h-2.42v1zm-2.93 8.03c-1.76 0-3.1-1.5-3.1-3.52 0-2.05 1.34-3.52 3.1-3.52 1.74 0 3.1 1.5 3.1 3.54 0 2.02-1.36 3.5-3.1 3.5z" fill="#4285F4"/>
                    <path d="M38 6.19c-3.21 0-5.83 2.44-5.83 5.81 0 3.34 2.62 5.81 5.83 5.81s5.83-2.46 5.83-5.81c0-3.37-2.62-5.81-5.83-5.81zm0 9.33c-1.76 0-3.28-1.45-3.28-3.52 0-2.09 1.52-3.52 3.28-3.52s3.28 1.43 3.28 3.52c0 2.07-1.52 3.52-3.28 3.52z" fill="#FBBC05"/>
                    <path d="M58 .24h2.51v17.57H58z" fill="#34A853"/>
                    <path d="M68.26 15.52c-1.3 0-2.22-.59-2.82-1.76l7.77-3.21-.26-.66c-.48-1.3-1.96-3.7-4.97-3.7-2.99 0-5.48 2.35-5.48 5.81 0 3.26 2.46 5.81 5.76 5.81 2.66 0 4.2-1.63 4.84-2.57l-1.98-1.32c-.66.96-1.56 1.6-2.86 1.6zm-.18-7.15c1.03 0 1.91.53 2.2 1.28l-5.25 2.17c0-2.44 1.73-3.45 3.05-3.45z" fill="#EA4335"/>
                  </svg>
                  <div className="flex gap-0.5">
                    {[...Array(currentReview.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-[#FBBC04] fill-current" />
                    ))}
                  </div>
                  <span className="text-[#64748b] text-xs sm:text-sm ml-2">
                    {isSpanish ? currentReview.dateEs : currentReview.date}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-[#1e293b] text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-6 sm:mb-8 italic pr-8 sm:pr-0">
                  "{isSpanish ? currentReview.textEs : currentReview.text}"
                </p>

                {/* Reviewer Info */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-auto">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full gradient-blue flex items-center justify-center text-white font-bold text-base sm:text-xl">
                      {currentReview.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-[var(--color-brand-primary)] text-sm sm:text-base">{currentReview.name}</p>
                      <p className="text-[#64748b] text-xs sm:text-sm">{isSpanish ? 'Paciente Verificado' : 'Verified Patient'}</p>
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center gap-2 sm:gap-3">
                    <button
                      onClick={prevReview}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-gray-200 flex items-center justify-center hover:bg-[var(--color-brand-primary)] hover:border-[var(--color-brand-primary)] hover:text-white transition-all"
                    >
                      <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                    <button
                      onClick={nextReview}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-gray-200 flex items-center justify-center hover:bg-[var(--color-brand-primary)] hover:border-[var(--color-brand-primary)] hover:text-white transition-all"
                    >
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Side Preview Cards - Hidden on mobile, shown on tablet+ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:flex w-full lg:w-1/3 flex-row lg:flex-col gap-3 sm:gap-4 h-full"
          >
            {nextReviews.map((review) => (
              <div
                key={review.id}
                onClick={() => setCurrentIndex(reviews.indexOf(review))}
                className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 cursor-pointer hover:bg-white/20 transition-all border border-white/20 flex-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-0.5 mb-2 sm:mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--color-brand-accent)] fill-current" />
                    ))}
                  </div>
                  <p className="text-white/90 text-xs sm:text-sm line-clamp-4 mb-2 sm:mb-3">
                    "{isSpanish ? review.textEs : review.text}"
                  </p>
                </div>
                <p className="text-white/70 text-xs sm:text-sm font-medium">{review.name}</p>
              </div>
            ))}

            {/* Stats */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 text-center border border-white/20 flex flex-col justify-center">
              <p className="text-3xl sm:text-4xl font-bold text-[var(--color-brand-accent)]">4.9</p>
              <div className="flex justify-center gap-0.5 my-1.5 sm:my-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--color-brand-accent)] fill-current" />
                ))}
              </div>
              <p className="text-white/80 text-xs sm:text-sm">{isSpanish ? 'Calificación Promedio' : 'Average Rating'}</p>
              <p className="text-white/60 text-[10px] sm:text-xs mt-1">500+ {isSpanish ? 'reseñas' : 'reviews'}</p>
            </div>
          </motion.div>
        </div>

        {/* Review Counter */}
        <div className="flex justify-center mt-8 gap-2">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentIndex ? 'bg-[var(--color-brand-accent)] w-8' : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
