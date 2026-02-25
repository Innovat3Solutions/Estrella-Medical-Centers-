import React from 'react';
import { HeartPulse, Smile, Activity, Brain, Bone, Stethoscope, Baby, Syringe, Microscope } from 'lucide-react';

const specialties = [
  {
    icon: <HeartPulse className="w-6 h-6 text-[#4a9b9f]" />,
    title: 'Cardiac Care',
    desc: 'Heart health treatment',
  },
  {
    icon: <Smile className="w-6 h-6 text-[#4a9b9f]" />,
    title: 'Dentistry',
    desc: 'Dental Care Solutions',
  },
  {
    icon: <Activity className="w-6 h-6 text-[#4a9b9f]" />,
    title: 'Gastrosciences',
    desc: 'Digestive health care.',
  },
  {
    icon: <Brain className="w-6 h-6 text-[#4a9b9f]" />,
    title: 'Neuroscience',
    desc: 'Brain and nerve care.',
  },
  {
    icon: <Bone className="w-6 h-6 text-[#4a9b9f]" />,
    title: 'Orthopaedics',
    desc: 'Bone and joint care.',
  },
  {
    icon: <Stethoscope className="w-6 h-6 text-[#4a9b9f]" />,
    title: 'Liver Care',
    desc: 'Liver Health and Transplant Care',
  },
  {
    icon: <Syringe className="w-6 h-6 text-[#4a9b9f]" />,
    title: 'Renal Care',
    desc: 'Kidney health treatment',
  },
  {
    icon: <Microscope className="w-6 h-6 text-[#4a9b9f]" />,
    title: 'Gynaecology',
    desc: 'Gynaecological Care Solutions',
  },
  {
    icon: <Baby className="w-6 h-6 text-[#4a9b9f]" />,
    title: 'Paediatric Care',
    desc: 'Child health services',
  },
];

export default function Specialties() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <div className="max-w-3xl mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#004b5c] mb-6 tracking-tight">
          An Ecosystem for Clinical Excellence
        </h2>
        <p className="text-[#64748b] leading-relaxed">
          Discover world-class healthcare at Omnio's specialized centres of medical innovation. Our advanced facilities offer unmatched expertise in key specialties and super specialties, setting new global standards in clinical excellence and patient care.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {specialties.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
          >
            <div className="bg-[#e6f4f1] p-3 rounded-xl group-hover:bg-[#4a9b9f] transition-colors">
              {/* Clone element to change color on hover */}
              {React.cloneElement(item.icon, {
                className: `w-6 h-6 text-[#4a9b9f] group-hover:text-white transition-colors`,
              })}
            </div>
            <div>
              <h3 className="font-semibold text-[#1e293b] mb-1">{item.title}</h3>
              <p className="text-sm text-[#64748b]">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="bg-[#fdb913] hover:bg-[#e5a610] text-[#1e293b] px-6 py-3 rounded-full font-semibold text-sm transition-colors shadow-sm flex items-center gap-2">
        View All Specialties
        <span className="text-lg leading-none">&rsaquo;</span>
      </button>
    </section>
  );
}
