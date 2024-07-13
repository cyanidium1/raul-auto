import Hero from '@/components/Home/Hero/Hero';
import CarChoiceBody from '@/components/Home/CarChoiceBody/CarChoiceBody';
import CarChoiceMotoring from '@/components/Home/CarChoiceMotoring/CarChoiceMotoring';
import Trusted from '@/components/Home/Trusted/Trusted';
import ModesTransportation from '@/components/Home/ModesTransportation/ModesTransportation';
import PurchasingProcess from '@/components/Home/PurchasingProcess/PurchasingProcess';
import ContactUs from '@/components/Home/ContactUs/ContactUs';
import Proposals from '@/components/Home/Proposals/Proposals';
import Footer from '@/components/Footer/Footer';
import About from '@/components/About/About';
export default function Home() {
  return (
    <section>
      <div className="pl-3 pr-3">
        <About />
        <ContactUs />
        <Footer />
      </div>
    </section>
  );
}
