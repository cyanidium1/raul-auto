'use client';
import SearchAvto from '@/components/UI/SearchAvto/SearchAvto';
import { useMediaQuery } from 'usehooks-ts';
const Hero = () => {
  const isScreenInRange = useMediaQuery('(min-width: 1285px)', {
    initializeWithValue: false,
  });
  return (
    <>
      <div className="mobile:pt-8 mobile:bg-[url('/hero.png')] mobile:bg-no-repeat mobile:bg-right mobile:bg-contain tablet:bg-right desktop:bg-right desktop:bg-auto mobile:h-[200px] tablet:h-[350px] desktop:h-[800px] desktop:pt-[120px]">
        <div className="max-w-[1696px] mx-auto px-4">
          <h1 className="mobile:text-center tablet:text-left mobile:text-[40px] lg:text-[80px] desktop:text-128 text-primary mb-4 lg:mb-6 desktop:mb-12 font-bold">
            Авто из США
          </h1>
          <p className="mobile:text-center mobile:text-secondary mobile:ml-auto mobile:mr-auto tablet:ml-0 tablet:mr-0 tablet:text-left tablet:max-w-[400px] tablet:text-secondary mobile:text-[20px] tablet:text-[24px] desktop:font-[500] desktop:text-28 desktop:max-w-[610px] desktop:mb-[72px]">
            Прямые поставки с аукционов. Надёжность, качество, доступные цены.
          </p>
          {isScreenInRange && <SearchAvto />}
        </div>
      </div>
      {!isScreenInRange && <SearchAvto />}
    </>
  );
};

export default Hero;
