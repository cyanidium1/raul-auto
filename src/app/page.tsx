import Hero from '@/components/Home/Hero/Hero';
import CarChoiceBody from '@/components/Home/CarChoiceBody/CarChoiceBody';
import CarChoiceMotoring from '@/components/Home/CarChoiceMotoring/CarChoiceMotoring';
import Trusted from '@/components/Home/Trusted/Trusted';
import ModesTransportation from '@/components/Home/ModesTransportation/ModesTransportation';
import PurchasingProcess from '@/components/Home/PurchasingProcess/PurchasingProcess';
import ContactUs from '@/components/Home/ContactUs/ContactUs';
import Proposals from '@/components/Home/Proposals/Proposals';
import Footer from '@/components/Footer/Footer';
export default function Home() {
  return (
    <section>
      <Hero />
      <div className="pl-3 pr-3">
        <CarChoiceBody />
        <CarChoiceMotoring />
        <Trusted />
        <ModesTransportation />
        <PurchasingProcess />
        <ContactUs />
        <Proposals />
        <Footer />
      </div>
    </section>
  );
}
