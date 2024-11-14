import FaqComponent from '@/components/FaqComponent/FaqComponent';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700'],
});
const FaqPage = () => {
  return (
    <div className={`${montserrat.className}`}>
      <FaqComponent />
    </div>
  );
};

export default FaqPage;
