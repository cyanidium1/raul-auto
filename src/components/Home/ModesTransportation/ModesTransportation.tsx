import Image from 'next/image';

const ModesTransportation = () => {
  const transportModes = [
    {
      title: 'Машину',
      imgSrc: '/deliverycar.png',
      imgAlt: 'delivery car',
    },
    {
      title: 'Мотоцикл',
      imgSrc: '/deliverymoto.png',
      imgAlt: 'delivery moto',
    },
    {
      title: 'Яхту',
      imgSrc: '/delivertyaht.png',
      imgAlt: 'delivery yaht',
    },
    {
      title: 'Трактор',
      imgSrc: '/diliverytractor.png',
      imgAlt: 'delivery tractor',
    },
  ];
  return (
    <div className="mobile:pb-[80px] tablet:pb-[120px] desktop:pb-[241px]">
      <ul className="flex justify-center items-center flex-wrap gap-[32px]">
        {transportModes.map((mode, index) => (
          <li
            key={index}
            className="w-[420px] h-[265px] relative bg-gradient-sub-block rounded-sub-block-24 p-[32px] overflow-hidden"
          >
            <div className="text-20 text-countCar">Доставим</div>
            <div className="text-34 text-primary">{mode.title}</div>
            <Image className="" src={mode.imgSrc} alt={mode.imgAlt} fill />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModesTransportation;
