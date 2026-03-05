import { motion } from 'framer-motion';
import { CheckCircle2, Phone, Mail, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n';

export default function ThankYouPage() {
  const { language } = useLanguage();
  const isSpanish = language === 'es';

  return (
    <div className="min-h-screen bg-[#f4f7fb] font-sans text-[#1e293b] relative overflow-hidden">
      {/* Background star decorations */}
      <img
        src="/assets/45.png"
        alt=""
        className="absolute left-[-80px] bottom-[20%] w-[200px] h-[200px] object-contain opacity-[0.15] pointer-events-none rotate-12"
      />
      <img
        src="/assets/45.png"
        alt=""
        className="absolute right-[-60px] top-[15%] w-[180px] h-[180px] object-contain opacity-[0.15] pointer-events-none -rotate-12"
      />

      <main className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-green-100">
              <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-green-500" />
            </div>
          </motion.div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e293b] mb-4 sm:mb-6">
            {isSpanish ? '¡Gracias por Inscribirse!' : 'Thank You for Signing Up!'}
          </h1>

          {/* Subtitle */}
          <p className="text-[#64748b] text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed">
            {isSpanish
              ? 'Gracias por inscribirse en nuestro Plan Médico Estrella. Las instrucciones y el manual de su plan serán enviados a su correo electrónico.'
              : 'Thank you for enrolling in our Estrella Medical Plan. Instructions and your plan manual will be sent to your email.'}
          </p>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-6 sm:p-8 mb-8 sm:mb-10 border border-gray-100"
          >
            <p className="text-[#64748b] text-sm sm:text-base mb-6">
              {isSpanish
                ? 'Si tiene alguna pregunta, no dude en comunicarse con nosotros:'
                : 'If you have any questions, feel free to contact us:'}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              {/* Phone */}
              <a
                href="tel:+13059828810"
                className="flex items-center gap-3 px-5 sm:px-6 py-3 sm:py-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors w-full sm:w-auto"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[var(--color-brand-primary)] flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-[#64748b]">{isSpanish ? 'Llámenos' : 'Call Us'}</p>
                  <p className="font-semibold text-[#1e293b]">(305) 982-8810</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@estrellamedical.com"
                className="flex items-center gap-3 px-5 sm:px-6 py-3 sm:py-4 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors w-full sm:w-auto"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-orange-400 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-[#64748b]">{isSpanish ? 'Escríbanos' : 'Email Us'}</p>
                  <p className="font-semibold text-[#1e293b]">info@estrellamedical.com</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Back to Home Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border-2 border-[var(--color-brand-primary)] text-[var(--color-brand-primary)] rounded-full font-semibold hover:bg-[var(--color-brand-primary)] hover:text-white transition-all"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              {isSpanish ? 'Volver al Inicio' : 'Back to Home'}
            </Link>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
