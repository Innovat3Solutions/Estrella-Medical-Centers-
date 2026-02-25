export default function WhyChooseUs() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <div className="bg-[#f0f8f8] rounded-[3rem] p-8 md:p-16">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004b5c] mb-4 tracking-tight">
            Why Choose <span className="text-[#4a9b9f]">Omnio Hospital?</span>
          </h2>
          <p className="text-[#64748b] leading-relaxed">
            At Omnio Hospital, we blend expert medical care with compassion, offering personalized treatment to ensure every patient feels supported and valued throughout their healing journey.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[280px]">
          {/* Card 1: Tall */}
          <div className="col-span-1 lg:col-span-1 row-span-2 bg-[#004b5c] rounded-3xl overflow-hidden relative group flex flex-col">
            <div className="p-8 relative z-10 flex-1">
              <h3 className="text-2xl font-bold text-white mb-3">60+ Years of Excellence</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Decades of trusted care, prioritizing your health and well-being
              </p>
            </div>
            <div className="relative h-1/2 w-full mt-auto">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
                alt="Hospital Building"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Card 2: Wide */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 bg-[#004b5c] rounded-3xl overflow-hidden relative group flex">
            <div className="p-8 relative z-10 w-1/2 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-3">1000+ Expert Medical Care</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                A team of professionals committed to your Health and well-being
              </p>
            </div>
            <div className="relative w-1/2 h-full">
              <img
                src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?q=80&w=2127&auto=format&fit=crop"
                alt="Medical Team"
                className="absolute inset-0 w-full h-full object-cover object-left transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#004b5c] via-[#004b5c]/20 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Card 3: Small */}
          <div className="col-span-1 lg:col-span-1 row-span-1 bg-[#004b5c] rounded-3xl overflow-hidden relative group flex flex-col">
            <div className="p-8 relative z-10 flex-1">
              <h3 className="text-xl font-bold text-white mb-3">Advanced Medical Technology</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Medical technology for accurate diagnosis and effective treatment.
              </p>
            </div>
            <div className="relative h-1/3 w-full mt-auto flex justify-end items-end p-4">
              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-2xl">
                 {/* Placeholder for MRI icon/image */}
                 <div className="w-12 h-12 bg-white/20 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Card 4: Small */}
          <div className="col-span-1 lg:col-span-1 row-span-1 bg-[#004b5c] rounded-3xl overflow-hidden relative group flex flex-col">
            <div className="p-8 relative z-10 flex-1">
              <h3 className="text-xl font-bold text-white mb-3">98% Happy Patients</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                We take pride in creating a positive experience for every patient.
              </p>
            </div>
            <div className="relative h-1/2 w-full mt-auto">
              <img
                src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=2069&auto=format&fit=crop"
                alt="Happy Patient"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#004b5c]/50 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Card 5: Wide */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 bg-[#004b5c] rounded-3xl overflow-hidden relative group flex">
             <div className="p-8 relative z-10 w-1/2 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-white mb-3">40+ Years Trusted Pharmacy</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                We trusted pharmacy solutions, delivering quality care and reliability
              </p>
            </div>
            <div className="relative w-1/2 h-full">
              <img
                src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=2069&auto=format&fit=crop"
                alt="Pharmacy"
                className="absolute inset-0 w-full h-full object-cover object-left transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#004b5c] via-[#004b5c]/20 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
