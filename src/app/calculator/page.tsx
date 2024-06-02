import HeroCalculator from '@/components/Calculator/HeroCalculator/HeroCalculator';
import CalculatorBlock from '@/components/Calculator/CalculatorBlock/CalculatorBlock';
import Footer from '@/components/Footer/Footer';
const CalculatorPage = () => {
  return (
    <section className="p-3">
      <HeroCalculator />
      <CalculatorBlock />
      <Footer />
    </section>
  );
};

export default CalculatorPage;
