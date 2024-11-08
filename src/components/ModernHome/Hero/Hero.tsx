import Container from '@/components/Container/Container';
import Button from '@/components/UI/Button/Button';
const Hero = () => {
  return (
    <section className="relative mobile:bg-[url('/home-banner-mobile.jpg')] mobileplus:bg-[url('/home-banner.jpg')] mobile:bg-no-repeat mobile:bg-center mobile:bg-cover mobile:pt-[14px] lg:pt-[97px] lg:pb-[50px]">
      <div className="absolute top-0 left-0 right-0 h-[40px] bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-[40px] bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
      <Container>
        <div className="flex flex-col items-center">
          <h1 className="uppercase text-center text-[40px] font-bold mb-[14px] text-white lg:text-[88px] lg:mb-[22px]">
            Авто з США
          </h1>
          <p className="text-[16px] text-white text-center max-w-[285px] mb-[48px] lg:mb-[40px] lg:max-w-[380px]">
            Прямі поставки з аукціонів. Надійність, якість, доступні ціни.
          </p>
          <Button className="w-full max-w-[350px] lg:max-w-[367px] h-[60px] rounded-sub-block-12 bg-gradient-red text-[14px] text-white mb-[376px] lg:mb-[300px]">
            Підібрати авто
          </Button>
          <ul className="flex justify-center gap-[30px] lg:gap-[48px] mb-[20px]">
            <li>
              <div className="uppercase text-center text-white text-[28px] lg:text-[36px] font-bold">
                7000+
              </div>
              <div className="uppercase text-center text-white text-[14px] lg:text-[15px] font-medium">
                Клієнтів
              </div>
            </li>
            <li>
              <div className="uppercase text-center text-white text-[28px] lg:text-[36px] font-bold">
                2300+
              </div>
              <div className="uppercase text-center text-white text-[14px] lg:text-[15px] font-medium">
                Привезено машин
              </div>
            </li>
            <li>
              <div className="uppercase text-center text-white text-[28px] lg:text-[36px] font-bold">
                9+
              </div>
              <div className="uppercase text-center text-white text-[14px] lg:text-[15px] font-medium">
                Років на ринку
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
