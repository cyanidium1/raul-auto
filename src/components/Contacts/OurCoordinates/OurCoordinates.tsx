import Image from 'next/image';

const OurCoordinates = () => {
  const locations = [
    {
      city: 'Киев',
      address: 'ул. Петрова 13',
      hours: 'Пн-пт 18:00',
      phone: '+380 73 772 73 73',
      email: 'info@raulavto.com',
    },
    {
      city: 'Львов',
      address: 'ул. Петрова 13',
      hours: 'Пн-пт 18:00',
      phone: '+380 32 123 45 67',
      email: 'info@raulavto.com',
    },
    {
      city: 'Днепр',
      address: 'ул. Петрова 13',
      hours: 'Пн-пт 18:00',
      phone: '+380 56 987 65 43',
      email: 'info@raulavto.com',
    },
    {
      city: 'Одесса',
      address: 'ул. Петрова 13',
      hours: 'Пн-пт 18:00',
      phone: '+380 48 456 78 90',
      email: 'info@raulavto.com',
    },
    {
      city: 'Польша',
      address: 'ул. Петрова 13',
      hours: 'Пн-пт 18:00',
      phone: '+48 22 123 45 67',
      email: 'info@raulavto.com',
    },
    {
      city: 'Германия',
      address: 'ул. Петрова 13',
      hours: 'Пн-пт 18:00',
      phone: '+49 89 123 45 67',
      email: 'info@raulavto.com',
    },
    {
      city: 'Испания',
      address: 'ул. Петрова 13',
      hours: 'Пн-пт 18:00',
      phone: '+34 91 123 45 67',
      email: 'info@raulavto.com',
    },
    {
      city: 'Франция',
      address: 'ул. Петрова 13',
      hours: 'Пн-пт 18:00',
      phone: '+33 1 123 45 67',
      email: 'info@raulavto.com',
    },
  ];

  return (
    <div className="mobile:pt-[30px] tablet:pt-[40px] desktop:pt-[64px]">
      <div className="max-w-[1696px] mx-auto p-3">
        <h1 className="text-primary mobile:text-40 tablet:text-56 desktop:text-64 font-bold mobile:mb-[33px] desktop:mb-[63px]">
          Контакты
        </h1>
      </div>
      <div className="max-w-[1696px] bg-mapbg mobile:rounded-sub-block-10 tablet:rounded-sub-block-36 desktop:rounded-sub-block-42 mobile:p-0 tablet:p-[25px] desktop:p-[32px] mx-auto overflow-hidden">
        <div className="relative w-full pb-[36.04%] mb-[32px]">
          <Image
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="/map-hero-contacts.png"
            alt="map img"
            fill
          />
        </div>
        <div className="h-[1px] bg-[#8c8c8c] opacity-[0.1] w-full mb-[32px]"></div>
        <ul className="flex flex-wrap items-center mobile:justify-around desktop:justify-center mobile:gap-[25px] tablet:gap-[40px] desktop:gap-[64px]">
          {locations.map((location, index) => (
            <li key={index} className="flex flex-col">
              <div className="text-primary mobile:text-20 tablet:text-30 font-bold">
                {location.city}
              </div>
              <div className="mobile:text-14 mobile:leading-10 tablet:text-16 text-secondary font-medium">
                {location.address}
              </div>
              <div className="mobile:text-14 mobile:leading-10 tablet:text-16 text-secondary font-medium">
                {location.hours}
              </div>
              <div className="mobile:text-14 mobile:leading-10 tablet:text-16 font-bold text-primary">
                {location.phone}
              </div>
              <div className="mobile:text-14 mobile:leading-10 tablet:text-16 font-bold text-primary">
                {location.email}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OurCoordinates;
