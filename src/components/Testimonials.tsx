import { ChevronLeft, ChevronRight, Play, Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="bg-[#4a9b9f] py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        {/* Left Content */}
        <div className="lg:w-1/3 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Voices of Trust <br /> Our Patients
          </h2>
          <p className="text-white/80 mb-8 leading-relaxed">
            Real stories from our patients about their journey to healing with Omnio Hospital
          </p>
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#4a9b9f] transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#4a9b9f] transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right Carousel */}
        <div className="lg:w-2/3 flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">
          {/* Active Card */}
          <div className="relative min-w-[300px] md:min-w-[400px] h-[450px] rounded-3xl overflow-hidden snap-center shrink-0">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
              alt="Patient Video"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <button className="absolute top-6 left-6 w-12 h-12 bg-[#fdb913] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform">
              <Play className="w-5 h-5 ml-1 fill-current" />
            </button>
            
            {/* Testimonial Overlay */}
            <div className="absolute bottom-6 left-6 right-6 bg-white rounded-2xl p-6 shadow-xl">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#fdb913] fill-current" />
                ))}
              </div>
              <h4 className="font-bold text-[#1e293b] mb-2">Exceptional Care and Support!</h4>
              <p className="text-sm text-[#64748b] mb-4 line-clamp-3">
                "The doctors and staff at Omnio Hospital were incredibly supportive throughout my treatment."
              </p>
              <div className="inline-block px-3 py-1 border border-gray-200 rounded-full text-xs font-semibold text-[#64748b]">
                Sarah M - Employee
              </div>
            </div>
          </div>

          {/* Inactive Cards */}
          {[
            'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
          ].map((img, i) => (
            <div key={i} className="relative min-w-[200px] md:min-w-[250px] h-[450px] rounded-3xl overflow-hidden snap-center shrink-0 opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
              <img
                src={img}
                alt={`Patient Video ${i + 2}`}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <button className="absolute top-6 left-6 w-10 h-10 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white shadow-lg">
                <Play className="w-4 h-4 ml-1 fill-current" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
