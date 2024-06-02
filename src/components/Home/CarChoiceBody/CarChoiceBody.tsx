import Image from 'next/image';

const carTypes = [
  { name: 'Внедорожники', count: 8, imgSrc: '/SUV.png' },
  { name: 'Пикапы', count: 467, imgSrc: '/pikap.png' },
  { name: 'Кроссоверы', count: 64, imgSrc: '/crossover.png' },
  { name: 'Минивены', count: 167, imgSrc: '/miniven.png' },
  { name: 'Седаны', count: 2587, imgSrc: '/sedan.png' },
  { name: 'Хетчбеки', count: 280, imgSrc: '/hatchback.png' },
  { name: 'Кабриолеты', count: 43, imgSrc: '/kabriolet.png' },
  { name: 'Купе', count: 174, imgSrc: '/cupe.png' },
];

const CarChoiceBody = () => {
  return (
    <div className="pb-[88px]">
      <h2 className="mobile:text-34 tablet:text-40 lg:text-56 desktop:text-64 text-center text-primary mobile:mt-10 mobile:mb-10 tablet:mb-20 flex justify-center">
        Выбрать авто по кузову:
      </h2>
      <ul className="flex gap-8 flex-wrap justify-center">
        {carTypes.map((car, index) => (
          <li
            key={index}
            className="mobile:rounded-sub-block-10 tablet:rounded-sub-block-24 bg-gradient-sub-block py-[39px] px-[32px] w-[400px] h-[294px]"
          >
            <div className="flex justify-between items-center">
              <div className="mobile:text-30 tablet:text-34 text-primary">
                {car.name}
              </div>
              <div className="flex items-center justify-center min-w-[32px] h-[34px] rounded-sub-block-7 bg-input p-[10px] text-countCar text-20">
                {car.count}
              </div>
            </div>
            <Image
              src={car.imgSrc}
              alt={`${car.name} car`}
              width={400}
              height={226}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarChoiceBody;
