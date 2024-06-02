import HeroPartnership from '../../components/Partnership/HeroPartnership/HeroPartnership';
import Advantages from '@/components/Partnership/Advantages/Advantages';
import Questions from '@/components/Partnership/Questions/Questions';
import Footer from '@/components/Footer/Footer';

const PartnershipPage = () => {
  return (
    <section className="px-3">
      <div className="mx-auto max-w-[1750px]">
        <HeroPartnership />
        <Advantages />
        <Questions />
      </div>
      <Footer />
    </section>
  );
};

export default PartnershipPage;
