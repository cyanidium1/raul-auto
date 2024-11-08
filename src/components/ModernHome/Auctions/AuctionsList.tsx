'use client';
import 'swiper/swiper-bundle.css';
import Image from 'next/image';
import Container from '@/components/Container/Container';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Button from '@/components/UI/Button/Button';
import SliderNavigation from '@/components/UI/SliderNavigation/SliderNavigation';

const auctions = [
  {
    id: 1,
    name: 'Copart',
    description:
      'Найпопулярніший аукціон, де щодня проходять тисячі торгів. Великий вибір авто, але підбір вимагає особливої уваги.',
    logo: '/copart-auction.png',
    width: 185,
    height: 70,
    url: 'https://t.me/RaulAvto',
  },
  {
    id: 2,
    name: 'Manheim',
    description:
      'Аукціон Manheim привабливий великим вибором цілих автомобілів та електромобілів.',
    logo: '/manheim-auctiom.png',
    width: 108,
    height: 108,
    url: 'https://t.me/RaulAvto',
  },
  {
    id: 3,
    name: 'Adesa',
    description:
      'Непоганий аукціон із зручною системою онлайн-торгів та меншою конкуренцією, ніж на основних майданчиках.',
    logo: '/adessa-auction.png',
    width: 185,
    height: 67,
    url: 'https://t.me/RaulAvto',
  },
  {
    id: 4,
    name: 'IAA',
    description:
      'Представлені автомобілі від страховок та прозорою історією та детальним описом лоту.',
    logo: '/iaai-auction.png',
    width: 132,
    height: 78,
    url: 'https://t.me/RaulAvto',
  },
  {
    id: 5,
    name: 'Impact',
    description:
      'Impact – популярний аукціон і за сумісництвом онлайн-майданчик, який пропонує для продажу всілякі транспортні засоби.',
    logo: '/impact-icon.png',
    width: 184,
    height: 50,
    url: 'https://t.me/RaulAvto',
  },
];

const AuctionsList = () => {
  const sliderRef = useRef(null);

  return (
    <section>
      <Container>
        <h2 className="text-[28px] uppercase text-center text-white font-bold mb-[42px]  pointuserbar:text-[42px]  pointuserbar:mb-[86px]">
          Працюємо з найкращими аукціонами
        </h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={3}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          ref={sliderRef}
          loop
          breakpoints={{
            900: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 2,
            },
            320: {
              slidesPerView: 1,
            },
          }}
        >
          {auctions.map((auction) => (
            <SwiperSlide key={auction.id} className="mx-auto px-[5px]">
              <div className="flex flex-col h-[480px] rounded-[20px] border border-white py-[52px] px-[20px] desktop:py-[54px] desktop:px-[70px] pointuserbar:w-full pointuserbar:max-w-[413px]">
                <Image
                  src={auction.logo}
                  alt={`${auction.name} logo`}
                  width={auction.width}
                  height={auction.height}
                  className="mb-[56px] mx-auto"
                />
                <h3 className="uppercase text-[24px] font-bold mb-[14px] text-white text-center">
                  {auction.name}
                </h3>
                <p className="text-[14px] text-center text-white mb-[36px] pointuserbar:mb-[56px]">
                  {auction.description}
                </p>
                <a
                  href={auction.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-auto mt-auto w-full max-w-[185px]"
                >
                  <Button className="bg-transparent w-full py-[10px] px-[44px] rounded-sub-block-12 border border-white text-white text-[14px] hover:scale-105">
                    Переглянути
                  </Button>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <SliderNavigation
          prevClass="custom-prev"
          nextClass="custom-next"
          prevIcon="/slider-prev.png"
          nextIcon="/slider-next.png"
        />
      </Container>
    </section>
  );
};

export default AuctionsList;
