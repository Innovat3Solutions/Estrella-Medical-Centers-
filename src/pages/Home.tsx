import Header from '../components/Header';
import Hero from '../components/Hero';
import Specialties from '../components/Specialties';
import LocationSearch from '../components/LocationSearch';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import Partners from '../components/Partners';
import Footer from '../components/Footer';
import Doctors from '../components/Doctors';
import FAQ from '../components/FAQ';
import NewPatientInfo from '../components/NewPatientInfo';

export default function Home() {
    return (
        <div className="min-h-screen bg-white font-sans text-[#1e293b]">
            <Header />
            <main>
                <Hero />
                <Specialties />
                <WhyChooseUs />
                <Doctors />
                <LocationSearch />
                <NewPatientInfo />
                <Testimonials />
                <Partners />
                <FAQ />
            </main>
            <Footer />
        </div>
    );
}
