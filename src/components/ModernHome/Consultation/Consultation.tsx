import Button from '@/components/UI/Button/Button';

const Consultation = () => {
  return (
    <section
      className="relative py-[94px] px-[40px] pointuserbar:py-[52px] mobile:bg-[url('/consultation-mobile.jpg')] tablet:bg-[url('/consultation-desktop.jpg')] mobile:bg-no-repeat mobile:bg-center mobile:bg-cover"
      style={{ backgroundPosition: 'calc(50% - 15px) center' }}
    >
      {/* Верхняя тень */}
      <div className="absolute inset-x-0 top-0 h-[40px] bg-gradient-to-b from-black to-transparent pointer-events-none"></div>

      {/* Нижняя тень */}
      <div className="absolute inset-x-0 bottom-0 h-[40px] bg-gradient-to-t from-black to-transparent pointer-events-none"></div>

      {/* Левая тень */}
      <div className="absolute inset-y-0 left-0 w-[40px] bg-gradient-to-r from-black to-transparent pointer-events-none"></div>

      {/* Правая тень */}
      <div className="absolute inset-y-0 right-0 w-[40px] bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
      <h2 className="mx-auto uppercase text-center text-[28px] pointuserbar:text-[48px] pointuserbar:max-w-[440px] text-white font-bold mb-[16px]">
        отримайте консультацію
      </h2>
      <p className="uppercase text-center text-[16px] pointuserbar:text-[24px] text-red-600 font-bold mb-[52px] pointuserbar:mb-[88px]">
        Зателефонуйте нам
      </p>
      <Button className="mx-auto bg-gradient-red w-full max-w-[313px] pointuserbar:max-w-[205px] h-[60px] pointuserbar:h-[40px] rounded-sub-block-12 text-[14px] text-white font-semibold">
        Зателефонувати
      </Button>
    </section>
  );
};

export default Consultation;
