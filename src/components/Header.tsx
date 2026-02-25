import { ChevronDown, BellRing } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full py-4 px-6 md:px-12 lg:px-24 flex items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center w-8 h-8 bg-[#004b5c] rounded-md text-white font-bold text-xl relative overflow-hidden">
          {/* Simple cross representation */}
          <div className="absolute w-1 h-4 bg-white rounded-full"></div>
          <div className="absolute w-4 h-1 bg-white rounded-full"></div>
          <div className="absolute w-2 h-2 bg-[#fdb913] rounded-full top-1 right-1"></div>
        </div>
        <span className="text-xl font-bold text-[#004b5c] tracking-tight">Omnio</span>
        <span className="text-xs font-semibold text-[#64748b] -ml-1 mt-1">HOSPITALS</span>
      </div>

      {/* Navigation */}
      <nav className="hidden lg:flex items-center gap-8">
        {[
          'Speciality',
          'Medical Services',
          'Health Library',
          'About Omnio',
        ].map((item) => (
          <a
            key={item}
            href="#"
            className="flex items-center gap-1 text-sm font-medium text-[#1e293b] hover:text-[#004b5c] transition-colors"
          >
            {item}
            <ChevronDown className="w-4 h-4 text-[#64748b]" />
          </a>
        ))}
      </nav>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <button className="hidden md:flex items-center justify-center w-8 h-8 rounded-full border border-gray-200 text-sm font-medium text-[#1e293b] hover:bg-gray-50 transition-colors">
          EN
        </button>
        <button className="flex items-center gap-2 bg-[#fdb913] hover:bg-[#e5a610] text-[#1e293b] px-5 py-2.5 rounded-full font-semibold text-sm transition-colors shadow-sm">
          <BellRing className="w-4 h-4" />
          Emergency Call
        </button>
      </div>
    </header>
  );
}
