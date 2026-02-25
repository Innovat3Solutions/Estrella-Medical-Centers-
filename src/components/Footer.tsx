import { PhoneCall, UserSearch, CalendarDays, Facebook, Twitter, Linkedin, Youtube, Instagram, ChevronRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#004b5c] text-white pt-24 pb-8 px-6 md:px-12 lg:px-24 rounded-t-[3rem] mt-12">
      <div className="max-w-7xl mx-auto">
        {/* Top CTA Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">
            Your Health, Its Our Priority
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <button className="bg-white text-[#004b5c] rounded-2xl p-6 flex items-center justify-between hover:bg-gray-50 transition-colors group">
              <div className="flex items-center gap-4">
                <div className="bg-[#e6f4f1] p-3 rounded-xl text-[#4a9b9f]">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <span className="font-bold text-lg">Emergency Call</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#004b5c] text-white flex items-center justify-center group-hover:bg-[#4a9b9f] transition-colors">
                <ChevronRight className="w-4 h-4" />
              </div>
            </button>

            <button className="bg-white text-[#004b5c] rounded-2xl p-6 flex items-center justify-between hover:bg-gray-50 transition-colors group">
              <div className="flex items-center gap-4">
                <div className="bg-[#e6f4f1] p-3 rounded-xl text-[#4a9b9f]">
                  <UserSearch className="w-6 h-6" />
                </div>
                <span className="font-bold text-lg">Find Doctor</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#004b5c] text-white flex items-center justify-center group-hover:bg-[#4a9b9f] transition-colors">
                <ChevronRight className="w-4 h-4" />
              </div>
            </button>

            <button className="bg-white text-[#004b5c] rounded-2xl p-6 flex items-center justify-between hover:bg-gray-50 transition-colors group">
              <div className="flex items-center gap-4">
                <div className="bg-[#e6f4f1] p-3 rounded-xl text-[#4a9b9f]">
                  <CalendarDays className="w-6 h-6" />
                </div>
                <span className="font-bold text-lg">Make an Appointment</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#004b5c] text-white flex items-center justify-center group-hover:bg-[#4a9b9f] transition-colors">
                <ChevronRight className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>

        <hr className="border-white/10 mb-16" />

        {/* Middle Section: Logo & Links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Logo & Socials */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 bg-white rounded-md text-[#004b5c] font-bold text-xl relative overflow-hidden">
                <div className="absolute w-1 h-4 bg-[#004b5c] rounded-full"></div>
                <div className="absolute w-4 h-1 bg-[#004b5c] rounded-full"></div>
                <div className="absolute w-2 h-2 bg-[#fdb913] rounded-full top-1 right-1"></div>
              </div>
              <span className="text-xl font-bold tracking-tight">Omnio</span>
              <span className="text-xs font-semibold text-white/70 -ml-1 mt-1">HOSPITALS</span>
            </div>
            <p className="text-white/70 text-sm max-w-xs leading-relaxed">
              Leading healthcare provider committed to excellence in medical treatment
            </p>
            <div className="flex items-center gap-3 pt-4">
              {[Facebook, Twitter, Linkedin, Youtube, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#004b5c] transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-5 gap-8">
            <div>
              <h4 className="font-bold mb-6 text-sm uppercase tracking-wider">Corporate</h4>
              <ul className="space-y-4 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact US</a></li>
                <li><a href="#" className="hover:text-white transition-colors">News & Events</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Biomedical Reports</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Awards</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-sm uppercase tracking-wider">Speciality</h4>
              <ul className="space-y-4 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Cardiac Care</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Dentistry</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Gastrosciences</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Neuroscience</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Orthopaedics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Liver Care</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Renal Care</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Gynaecology</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Paediatric Care</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-sm uppercase tracking-wider">Medical Services</h4>
              <ul className="space-y-4 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Find a Doctor</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Book Appointment for Hospital</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Home Care</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Emergency Helpline</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Insurance & Billing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ambulance</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-sm uppercase tracking-wider">About Omnio</h4>
              <ul className="space-y-4 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">History</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Visi & Mission</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Home Care</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Our Leader</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <a href="#" className="block w-32">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="w-full h-auto" />
              </a>
              <a href="#" className="block w-32">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" className="w-full h-auto" />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-white/10 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>Designed by Grapiku</p>
          <div className="flex items-center gap-6">
            <p>&copy; 2025 Omnio Hospitals. All rights reserved.</p>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
