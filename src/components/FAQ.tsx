import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Phone, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n';

const faqs = [
  {
    question: 'Do you accept Medicare?',
    questionEs: 'Aceptan Medicare?',
    answer: 'Yes! Estrella Medical Centers specializes in Medicare patients. We accept most Medicare Advantage plans including Humana, UnitedHealthcare, Aetna, Cigna, Devoted Health, Simply Healthcare, AvMed, Wellcare, CarePlus, Freedom Health, and many more. Contact us to verify your specific plan.',
    answerEs: 'Si! Estrella Medical Centers se especializa en pacientes de Medicare. Aceptamos la mayoria de los planes Medicare Advantage incluyendo Humana, UnitedHealthcare, Aetna, Cigna, Devoted Health, Simply Healthcare, AvMed, Wellcare, CarePlus, Freedom Health y muchos mas. Contactenos para verificar su plan especifico.'
  },
  {
    question: 'Do you offer same-day appointments?',
    questionEs: 'Ofrecen citas el mismo dia?',
    answer: 'Yes! We guarantee primary care appointments within 24 hours and specialist appointments within 72 hours. For urgent matters, same-day appointments are often available. Call us at (305) 982-8810 to schedule.',
    answerEs: 'Si! Garantizamos citas de atencion primaria dentro de 24 horas y citas con especialistas dentro de 72 horas. Para asuntos urgentes, las citas el mismo dia estan frecuentemente disponibles. Llamenos al (305) 982-8810 para programar.'
  },
  {
    question: 'Do you provide transportation to appointments?',
    questionEs: 'Proporcionan transporte a las citas?',
    answer: 'Yes! We offer free transportation services to and from your appointments. This service is designed to eliminate access barriers and ensure you never miss important care. Simply let us know when scheduling your appointment.',
    answerEs: 'Si! Ofrecemos servicios de transporte gratuito hacia y desde sus citas. Este servicio esta disenado para eliminar barreras de acceso y asegurar que nunca pierda atencion importante. Simplemente avisenos cuando programe su cita.'
  },
  {
    question: 'What specialties are available on-site?',
    questionEs: 'Que especialidades estan disponibles en el centro?',
    answer: 'We offer 15+ specialties under one roof including: Primary Care, Cardiology, Endocrinology, Neurology, Podiatry, Optometry, Dental, Laboratory, X-Ray, Ultrasound, Physical Therapy, Acupuncture, PRP Therapy, Nutritional Services, and Social Work support.',
    answerEs: 'Ofrecemos mas de 15 especialidades bajo un solo techo incluyendo: Atencion Primaria, Cardiologia, Endocrinologia, Neurologia, Podologia, Optometria, Dental, Laboratorio, Rayos X, Ultrasonido, Terapia Fisica, Acupuntura, Terapia PRP, Servicios Nutricionales y apoyo de Trabajo Social.'
  },
  {
    question: 'Do you deliver medications to my home?',
    questionEs: 'Entregan medicamentos a mi hogar?',
    answer: 'Yes! Our integrated Home Pharmacy service delivers medications directly to your door. This improves medication adherence, provides convenience, and reduces travel for our elderly patients. Our pharmacists are also available for consultations.',
    answerEs: 'Si! Nuestro servicio integrado de Farmacia a Domicilio entrega medicamentos directamente a su puerta. Esto mejora la adherencia a los medicamentos, proporciona conveniencia y reduce los viajes para nuestros pacientes mayores. Nuestros farmaceuticos tambien estan disponibles para consultas.'
  },
  {
    question: 'Is your staff bilingual?',
    questionEs: 'Su personal es bilingue?',
    answer: 'Yes! Our entire staff is fluent in both English and Spanish. We are deeply rooted in South Florida\'s Hispanic community and understand the importance of clear communication in healthcare.',
    answerEs: 'Si! Todo nuestro personal habla ingles y espanol con fluidez. Estamos profundamente arraigados en la comunidad hispana del sur de Florida y entendemos la importancia de la comunicacion clara en la atencion medica.'
  },
  {
    question: 'What should I bring to my first appointment?',
    questionEs: 'Que debo traer a mi primera cita?',
    answer: 'Please bring: Your insurance card(s), photo ID, list of current medications, any recent medical records or test results, and a list of questions for your doctor. If you need help with paperwork, our social workers are available to assist.',
    answerEs: 'Por favor traiga: Su(s) tarjeta(s) de seguro, identificacion con foto, lista de medicamentos actuales, cualquier registro medico reciente o resultados de pruebas, y una lista de preguntas para su medico. Si necesita ayuda con el papeleo, nuestros trabajadores sociales estan disponibles para asistirle.'
  },
  {
    question: 'Do you offer nutritional services?',
    questionEs: 'Ofrecen servicios nutricionales?',
    answer: 'Yes! We provide comprehensive nutritional counseling for eligible patients. Proper nutrition is essential for managing chronic conditions and overall wellness.',
    answerEs: 'Si! Proporcionamos consejeria nutricional integral para pacientes elegibles. La nutricion adecuada es esencial para manejar condiciones cronicas y el bienestar general.'
  }
];

export default function FAQ() {
  const { language } = useLanguage();
  const isSpanish = language === 'es';
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-24 bg-gray-50 relative overflow-hidden">
      {/* Star Emboss Background */}
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.04 }}
        viewport={{ once: true }}
        src="/assets/45.png"
        alt=""
        className="absolute -right-20 top-20 w-[450px] h-[450px] object-contain pointer-events-none rotate-12"
      />
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.03 }}
        viewport={{ once: true }}
        src="/assets/45.png"
        alt=""
        className="absolute -left-32 bottom-20 w-[400px] h-[400px] object-contain pointer-events-none -rotate-6"
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 gradient-yellow-orange text-white">
            <HelpCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            {isSpanish ? 'Preguntas Frecuentes' : 'Common Questions'}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-brand-primary)] mb-4 sm:mb-6">
            {isSpanish ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
          </h2>
          <p className="text-[#64748b] text-base sm:text-lg px-2">
            {isSpanish
              ? 'Encuentre respuestas a las preguntas mas comunes sobre nuestros servicios.'
              : 'Find answers to the most common questions about our services.'}
          </p>
        </motion.div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white rounded-xl sm:rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-[var(--color-brand-primary)] pr-3 sm:pr-4 text-sm sm:text-base">
                  {isSpanish ? faq.questionEs : faq.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-brand-secondary)] shrink-0 transition-transform duration-300 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 sm:px-6 pb-4 sm:pb-5 text-[#64748b] leading-relaxed border-t border-gray-100 pt-3 sm:pt-4 text-sm sm:text-base">
                      {isSpanish ? faq.answerEs : faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 text-center"
        >
          <p className="text-[#64748b] mb-4 sm:mb-6 text-sm sm:text-base">
            {isSpanish
              ? 'Tiene mas preguntas? Estamos aqui para ayudar.'
              : "Have more questions? We're here to help."}
          </p>
          <div className="flex flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <a
              href="tel:+13059828810"
              className="gradient-blue hover:shadow-lg text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              {isSpanish ? 'Llamar Ahora' : 'Call Now'}: (305) 982-8810
            </a>
            <Link
              to="/medical-plan"
              className="bg-white border-2 border-[var(--color-brand-secondary)] text-[var(--color-brand-secondary)] hover:bg-[var(--color-brand-secondary)] hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
              {isSpanish ? 'Agendar Cita' : 'Schedule Appointment'}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
