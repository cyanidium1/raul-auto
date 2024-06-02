import Image from 'next/image';

const DepartmentContacts = () => {
  return (
    <div className="pb-[104px]">
      <div className="flex flex-col gap-[32px]">
        <div className="mx-auto flex flex-wrap justify-center items-center gap-[32px]">
          <div className="mobile:flex-col mobile:justify-center mobile:items-center mobile:text-center tablet:text-left tablet:flex-row desktop:w-[769px] p-[32px] flex gap-[32px] mobile:rounded-sub-block-10 tablet:rounded-sub-block-26 bg-mapbg">
            <Image
              className="rounded-sub-block-22"
              src="/selection-auto.png"
              alt="selection-auto icon"
              width={120}
              height={120}
            />
            <div className="flex flex-col gap-[32px]">
              <div className="text-[29px] text-primary font-extrabold">
                Отдел подбора автомобилей
              </div>
              <div className="mobile:flex mobile:gap-4 mobile:flex-col mobile:items-center mobile:justify-center tablet:flex-row tablet:items-start tablet:justify-start">
                <a
                  className="w-[270px] h-[44px] flex items-center justify-center py-[14px] px-[24px] rounded-sub-block-10 bg-input text-16 text-primary transition duration-300 ease-in-out hover:scale-105 focus:outline-focus outline-none"
                  href="tel:+380737727373"
                >
                  +380 73 772 73 73
                </a>
                <a
                  className="w-[270px] h-[44px] flex items-center justify-center py-[14px] px-[24px] rounded-sub-block-10 bg-input text-16 text-primary transition duration-300 ease-in-out hover:scale-105 focus:outline-focus outline-none"
                  href="mailto:@raul_avto_search"
                >
                  @raul_avto_search
                </a>
              </div>
            </div>
          </div>
          <div className="mobile:flex-col mobile:justify-center mobile:items-center mobile:text-center tablet:text-left tablet:flex-row desktop:w-[769px] p-[32px] flex gap-[32px] mobile:rounded-sub-block-10 tablet:rounded-sub-block-26 bg-mapbg">
            <Image
              className="rounded-sub-block-22"
              src="/repair.png"
              alt="repair icon"
              width={120}
              height={120}
            />
            <div className="flex flex-col gap-[32px]">
              <div className="text-[29px] text-primary">
                Отдел подбора запчастей
              </div>
              <div className="mobile:flex mobile:gap-4 mobile:flex-col mobile:items-center mobile:justify-center tablet:flex-row tablet:items-start tablet:justify-start">
                <a
                  className="w-[270px] h-[44px] flex items-center justify-center py-[14px] px-[24px] rounded-sub-block-10 bg-input text-16 text-primary transition duration-300 ease-in-out hover:scale-105 focus:outline-focus outline-none"
                  href="tel:+380737727373"
                >
                  +380 73 772 73 73
                </a>
                <a
                  className="w-[270px] h-[44px] flex items-center justify-center py-[14px] px-[24px] rounded-sub-block-10 bg-input text-16 text-primary transition duration-300 ease-in-out hover:scale-105 focus:outline-focus outline-none"
                  href="mailto: @raul_avto_parts"
                >
                  @raul_avto_parts
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto">
          <div className="mobile:flex-col mobile:justify-center mobile:items-center mobile:text-center tablet:text-left tablet:flex-row desktop:w-[769px] p-[32px] flex gap-[32px] mobile:rounded-sub-block-10 tablet:rounded-sub-block-26 bg-mapbg">
            <Image
              className="rounded-sub-block-22"
              src="/dilivert-auto.png"
              alt="dilivert-auto icon"
              width={120}
              height={120}
            />
            <div className="flex flex-col gap-[32px]">
              <div className="text-[29px] text-primary">
                Отдел автомобильной логистики
              </div>
              <div className="mobile:flex mobile:gap-4 mobile:flex-col mobile:items-center mobile:justify-center tablet:flex-row tablet:items-start tablet:justify-start">
                <a
                  className="w-[270px] h-[44px] flex items-center justify-center py-[14px] px-[24px] rounded-sub-block-10 bg-input text-16 text-primary transition duration-300 ease-in-out hover:scale-105 focus:outline-focus outline-none"
                  href="tel:+380737727373"
                >
                  +380 73 772 73 73
                </a>
                <a
                  className="w-[270px] h-[44px] flex items-center justify-center py-[14px] px-[24px] rounded-sub-block-10 bg-input text-16 text-primary transition duration-300 ease-in-out hover:scale-105 focus:outline-focus outline-none"
                  href="mailto:@raul_avto_transport"
                >
                  @raul_avto_transport
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentContacts;
