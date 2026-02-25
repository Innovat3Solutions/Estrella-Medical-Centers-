import { ChevronDown, Search, User, Heart, Pill } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full bg-[#f0f8f8] overflow-hidden pt-16 pb-24 px-6 md:px-12 lg:px-24 rounded-b-[3rem]">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-white/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[40rem] h-[40rem] bg-[#e0f0f0] rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="flex-1 space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#004b5c] leading-[1.1] tracking-tight">
            Where Healing <br />
            Feels Like <span className="text-[#4a9b9f]">Home</span>
          </h1>
          <p className="text-lg text-[#64748b] max-w-md leading-relaxed">
            Start your journey to better health. Find the right doctor and specialty below.
          </p>

          {/* Search Bar */}
          <div className="flex items-center bg-white rounded-full p-2 shadow-sm max-w-xl border border-gray-100">
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#1e293b] border-r border-gray-200 hover:bg-gray-50 rounded-l-full transition-colors">
              <User className="w-4 h-4 text-[#64748b]" />
              Doctor
              <ChevronDown className="w-4 h-4 text-[#64748b]" />
            </button>
            <input
              type="text"
              placeholder="Search doctor name..."
              className="flex-1 px-4 py-2 text-sm text-[#1e293b] placeholder-[#94a3b8] focus:outline-none bg-transparent"
            />
            <button className="bg-[#004b5c] hover:bg-[#003b48] text-white p-3 rounded-full transition-colors shadow-md">
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Image Content */}
        <div className="flex-1 relative">
          <div className="relative w-full max-w-lg mx-auto aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173ff9e5ee5?q=80&w=2069&auto=format&fit=crop"
              alt="Doctor consulting with patient"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Floating Badges */}
          <div className="absolute -bottom-6 left-12 bg-white p-3 rounded-2xl shadow-xl flex items-center justify-center animate-bounce" style={{ animationDuration: '3s' }}>
            <div className="bg-[#e6f4f1] p-2 rounded-xl">
              <Heart className="w-6 h-6 text-[#4a9b9f] fill-current" />
            </div>
          </div>
          <div className="absolute top-1/4 -right-6 bg-white p-3 rounded-2xl shadow-xl flex items-center justify-center animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '4s' }}>
            <div className="bg-[#e6f4f1] p-2 rounded-xl">
              <Pill className="w-6 h-6 text-[#004b5c]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
