import { Search, MapPin, Navigation, Phone } from 'lucide-react';

const locations = [
  {
    name: 'Omnio Central Hospital',
    type: 'Main Hospital',
    address: '123 Healthcare Ave, Medical District, NY 10001',
    distance: '1.2 miles',
    phone: '(555) 123-4567',
  },
  {
    name: 'Omnio North Clinic',
    type: 'Specialty Clinic',
    address: '456 Wellness Blvd, Northside, NY 10002',
    distance: '4.5 miles',
    phone: '(555) 234-5678',
  },
  {
    name: 'Omnio Women\'s & Children\'s',
    type: 'Specialized Care',
    address: '789 Healing Way, South District, NY 10003',
    distance: '7.8 miles',
    phone: '(555) 345-6789',
  },
  {
    name: 'Omnio Urgent Care - West',
    type: 'Urgent Care',
    address: '321 Quick Care Ln, Westside, NY 10004',
    distance: '9.1 miles',
    phone: '(555) 456-7890',
  },
];

export default function LocationSearch() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
      {/* Left Image Side */}
      <div className="flex-1 relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-auto lg:h-[650px] w-full">
        <img
          src="https://images.unsplash.com/photo-1504439468489-c8920d786a2b?q=80&w=2071&auto=format&fit=crop"
          alt="Modern hospital building exterior"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#004b5c]/90 via-[#004b5c]/30 to-transparent"></div>
        
        {/* Text Overlay */}
        <div className="absolute bottom-0 left-0 p-8 w-full">
          <div className="bg-[#fdb913] w-12 h-1 mb-4 rounded-full"></div>
          <h3 className="text-3xl font-bold text-white mb-3">
            Always Close to Home
          </h3>
          <p className="text-white/90 text-sm font-medium leading-relaxed max-w-sm">
            With multiple state-of-the-art facilities across the region, world-class healthcare is never far away.
          </p>
        </div>
      </div>

      {/* Right Search Side */}
      <div className="flex-1 w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-[#004b5c] mb-4 tracking-tight">
          Find a Location Near You
        </h2>
        <p className="text-[#64748b] mb-8">
          Search by city, zip code, or facility name to find the right care center for your needs.
        </p>

        {/* Search Bar */}
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Enter city, zip code, or facility..."
            className="w-full pl-6 pr-14 py-4 rounded-full border border-gray-200 focus:outline-none focus:border-[#4a9b9f] focus:ring-1 focus:ring-[#4a9b9f] transition-all text-[#1e293b] placeholder-[#94a3b8] shadow-sm"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#004b5c] hover:bg-[#003b48] text-white p-2.5 rounded-full transition-colors shadow-md">
            <Search className="w-5 h-5" />
          </button>
        </div>

        {/* Locations List */}
        <div className="space-y-4 max-h-[420px] overflow-y-auto pr-2 hide-scrollbar">
          {locations.map((loc, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl border border-gray-100 bg-white hover:border-[#4a9b9f] hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-bold text-[#1e293b] group-hover:text-[#004b5c] transition-colors text-lg">
                    {loc.name}
                  </h4>
                  <p className="text-xs font-bold text-[#4a9b9f] mb-3 uppercase tracking-wider">
                    {loc.type}
                  </p>
                </div>
                <span className="bg-[#e6f4f1] text-[#004b5c] text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap">
                  {loc.distance}
                </span>
              </div>
              
              <div className="space-y-2 mb-5">
                <div className="flex items-start gap-3 text-[#64748b] text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#94a3b8]" />
                  <p>{loc.address}</p>
                </div>
                <div className="flex items-center gap-3 text-[#64748b] text-sm">
                  <Phone className="w-4 h-4 shrink-0 text-[#94a3b8]" />
                  <p>{loc.phone}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 bg-gray-50 hover:bg-[#e6f4f1] text-[#004b5c] py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-center gap-2 border border-gray-100 group-hover:border-[#e6f4f1]">
                  <Navigation className="w-4 h-4" /> Directions
                </button>
                <button className="flex-1 bg-[#004b5c] hover:bg-[#003b48] text-white py-2.5 rounded-xl text-sm font-semibold transition-colors shadow-sm">
                  Book Visit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
