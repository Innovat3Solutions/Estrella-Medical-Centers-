/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Specialties from './components/Specialties';
import LocationSearch from './components/LocationSearch';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#1e293b]">
      <Header />
      <main>
        <Hero />
        <Specialties />
        <LocationSearch />
        <WhyChooseUs />
        <Testimonials />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}
