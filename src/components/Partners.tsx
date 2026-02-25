export default function Partners() {
  const partners = [
    { name: 'BPJS Kesehatan', color: 'text-green-600' },
    { name: 'Allianz', color: 'text-blue-800' },
    { name: 'avrist', color: 'text-purple-700' },
    { name: 'AXA', color: 'text-blue-900' },
    { name: 'BPJS Ketenagakerjaan', color: 'text-green-500' },
    { name: 'JASA RAHARJA', color: 'text-blue-600' },
    { name: 'Cigna', color: 'text-teal-600' },
    { name: 'Manulife', color: 'text-green-700' },
    { name: 'PRUDENTIAL', color: 'text-red-600' },
    { name: 'grapiku', color: 'text-red-500' },
    { name: 'AIA', color: 'text-red-700' },
    { name: 'BCALife', color: 'text-blue-700' },
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#004b5c] mb-4 tracking-tight">
        Trusted by Leading Healthcare Partners
      </h2>
      <p className="text-[#64748b] mb-16">
        Collaborating with trusted partners to deliver the best in healthcare services
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-12 items-center justify-items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
        {partners.map((partner, index) => (
          <div key={index} className={`font-bold text-xl md:text-2xl tracking-tighter ${partner.color} flex items-center gap-2`}>
            {/* Simulate logo marks */}
            {index % 3 === 0 && <div className={`w-6 h-6 rounded-full bg-current opacity-20`}></div>}
            {index % 3 === 1 && <div className={`w-6 h-6 rounded-sm bg-current opacity-20 rotate-45`}></div>}
            {partner.name}
          </div>
        ))}
      </div>
    </section>
  );
}
