import Image from 'next/image';

const purchasingSteps = [
  {
    step: 1,
    imgSrc: '/callicon.png',
    imgAlt: 'callicon',
    title: 'Заказ авто',
    description:
      'Связь с менеджером для уточнения ваших пожеланий и бюджета на транспортное средство',
  },
  {
    step: 2,
    imgSrc: '/treaty.png',
    imgAlt: 'treaty',
    title: 'Договор',
    description:
      'Ознакомление и подписание договора. Это закрепляет стороны к выполнению условий.',
  },
  {
    step: 3,
    imgSrc: '/search.png',
    imgAlt: 'search',
    title: 'Поиск подходящего ТС',
    description:
      'Поиск и проверка и просчет цены транспортного средства, соответствующего запросам клиента',
  },
  {
    step: 4,
    imgSrc: '/auction.png',
    imgAlt: 'auction',
    title: 'Аукцион',
    description:
      'Процесс покупки автомобиля и общение с клиентом в прямом эфире аукциона, дает доступ к корректировке пожеланий',
  },
  {
    step: 5,
    imgSrc: '/payment.png',
    imgAlt: 'payment',
    title: 'Оплата',
    description:
      'Оплата всех необходимых процессов производиться в течение 2 рабочих дней после покупки авто, любым удобным для клиента способом',
  },
  {
    step: 6,
    imgSrc: '/delivery.png',
    imgAlt: 'delivery',
    title: 'Доставка',
    description:
      'Транспортировка до ближайшего порта, и полный фотоотчёт автомобиля. Морская транспортировка ТС, к порту вашей страны.',
  },
  {
    step: 7,
    imgSrc: '/icon-stars.png',
    imgAlt: 'icon-stars',
    title: 'Таможенная очистка',
    description:
      'Полный процесс делают наши таможенные брокеры и предоставляют помощь в оплате.',
  },
  {
    step: 8,
    imgSrc: '/icon-key.png',
    imgAlt: 'icon-key',
    title: 'Вручение автомобиля',
    description: 'Доставка автомобиля назначенная вами место назначения',
  },
];

const PurchasingProcess = () => {
  return (
    <div className="mobile:pb-[104px] desktop:pb-[204px]">
      <h2 className="mobile:text-34 tablet:text-40 lg:text-56 desktop:text-64 text-center text-primary flex justify-center mobile:mb-10 tablet:mb-[96px]">
        Процесс покупки авто из США
      </h2>
      <ul className="flex items-center justify-center flex-wrap gap-[32px]">
        {purchasingSteps.map((step, index) => (
          <li
            className="w-[420px] mobile:h-auto desktop:h-[420px] bg-gradient-sub-block p-[32px] mobile:rounded-sub-block-10 tablet:rounded-sub-block-32"
            key={index}
          >
            <div className="flex items-center mb-[40px]">
              <Image
                className="mr-[78px]"
                src={step.imgSrc}
                alt={step.imgAlt}
                width={160}
                height={160}
              />
              <div className="text-[100px] font-extrabold bg-gradient-count bg-clip-text text-transparent">
                {step.step}
              </div>
            </div>
            <div className="text-28 leading-[48px] text-primary mb-[10px]">
              {step.title}
            </div>
            <p className="w-full text-[16px] text-countCar">
              {step.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PurchasingProcess;
