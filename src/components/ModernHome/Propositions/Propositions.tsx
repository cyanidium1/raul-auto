import Container from '@/components/Container/Container';
import Image from 'next/image';

const Propositions = () => {
  return (
    <section className="relative py-[112px] tabletplus:pt-[200px] mobile:mb-[270px] tabletplus:mb-[90px]">
      {/* Левая тень */}
      <div className="absolute inset-y-0 left-0 w-[40px] bg-gradient-to-r from-black to-transparent pointer-events-none"></div>

      {/* Правая тень */}
      <div className="absolute inset-y-0 right-0 w-[40px] bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-[40px] bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
      <Container>
        <div className="relative flex flex-col justify-center items-center tabletplus:flex-row tabletplus:border-[1px] tabletplus:boder-gray-600 tabletplus:rounded-[20px] tabletplus:pt-[58px]  tabletplus:pb-[70px] tabletplus:px-[92px] tabletplus:justify-between ">
          <div className="relative tabletplus:absolute tabletplus:bottom-[-0.2%] tabletplus:right-[5%] tabletplus:z-20">
            <div className="hidden absolute top-[-19%] right-[-15.4%] z-[-1] mac:block mobile-block-gradient-proposition lg:w-[500px] mac:w-[700px] h-[593px] rounded-sub-block-22"></div>
            <Image
              src="/dailydeals.png"
              alt="mobile photo"
              width={313}
              height={461}
              className="tabletplus:hidden"
            />
            <Image
              src="/mobile-proposition.png"
              alt="mobile photo"
              width={403}
              height={594}
              className="hidden tabletplus:w-[402px] tabletplus:block"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-100 tabletplus:static"></div>
          </div>
          <div className="absolute bottom-[-82%] tabletplus:static tabletplus:order-[-1]">
            <h2 className="mb-[16px] uppercase text-[28px] text-white text-center font-bold max-w-[340px] mx-auto tabletplus:max-w-[452px] tabletplus:text-left tabletplus:text-[34px] lg:text-[48px] tabletplus:mb-[26px]">
              Щоденні <br />
              пропозиції <br />
              по авто з США
            </h2>
            <h3 className="uppercase text-[19px] text-center font-bold text-red-600 mb-[24px] tabletplus:text-[22px] lg:text-[24px] tabletplus:mb-[31px] tabletplus:text-left">
              Приєднуйтесь до нас!
            </h3>
            <p className="text-[14px] text-center text-white max-w-[315px] mb-[36px] tabletplus:text-left tabletplus:mb-[46px] tabletplus:text-[14px] lg:text-[16px] tabletplus:max-w-[300px] lg:max-w-[456px]">
              Отримуйте вигідні пропозиції по лотах на аукціонах США. Публікуємо
              тільки актуальні автомобілі з розрахунком вартості в Україні.
            </p>
            <a
              className="bg-gradient-red flex items-center justify-center w-full max-w-[313px] h-[48px] tabletplus:max-w-[205px] tabletplus:h-[40px] rounded-sub-block-12 text-[14px] text-white font-semibold transform transition duration-300 ease-in-out hover:scale-105"
              href="/"
            >
              Telegram
            </a>
            <div className="mobile-block-gradient-for-proposition h-[100px] tabletplus:hidden"></div>
          </div>
        </div>
      </Container>
      <div className="hidden absolute bottom-[-10%] z-10 w-full tabletplus:block mobile-block-gradient-for-proposition-left h-[200px]"></div>
    </section>
  );
};

export default Propositions;
