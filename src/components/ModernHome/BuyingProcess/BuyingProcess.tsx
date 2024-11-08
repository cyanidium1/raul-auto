import Container from '@/components/Container/Container';
import Image from 'next/image';

const buyingSteps = [
  {
    number: 1,
    title: 'Замовлення авто',
    description:
      "Зв'язок з менеджером для уточнення ваших побажань та бюджету на транспортний засіб.",
  },
  {
    number: 2,
    title: 'Договір',
    description:
      'Ознайомлення та підписання договору. Це закріплює сторони для виконання умов.',
  },
  {
    number: 3,
    title: 'Пошук підходящого ТЗ',
    description:
      'Пошук і перевірка з розрахунком ціни транспортного засобу, що відповідає запитам клієнта.',
  },
  {
    number: 4,
    title: 'Аукціон',
    description:
      'Процес покупки автомобіля та спілкування з клієнтом у прямому ефірі аукціону, що дає доступ до коригування побажань.',
  },
  {
    number: 5,
    title: 'Оплата',
    description:
      'Оплата всіх необхідних процесів здійснюється протягом 2 робочих днів після покупки авто, будь-яким зручним для клієнта способом.',
  },
  {
    number: 6,
    title: 'Доставка',
    description:
      'Транспортування до найближчого порту та повний фото-звіт автомобіля. Морем транспортування ТЗ до порту вашої країни.',
  },
  {
    number: 7,
    title: 'Ремонт авто',
    description: 'Ми можемо зробити повний ремонт авто під ключ.',
  },
  {
    number: 8,
    title: 'Митне очищення',
    description:
      'Повний процес роблять наші митні брокери та надають допомогу в оплаті.',
  },
  {
    number: 9,
    title: 'Передача автомобіля',
    description: 'Доставка автомобіля призначеним вам місцем призначення.',
  },
];

const BuyingProcess = () => {
  return (
    <section className="py-[112px] bg-black text-white">
      <Container>
        <h2 className="uppercase text-center text-[28px] pointuserbar:text-[48px] font-bold mx-auto mb-12 pointuserbar:mb-[86px] max-w-[300px] pointuserbar:max-w-full">
          Процес купівлі автомобіля зі США
        </h2>
        <ul className="relative flex flex-col justify-center gap-8 lg:gap-x-[53px] lg:gap-y-[66px] sm:flex-row sm:flex-wrap">
          {buyingSteps.map((step, index) => (
            <li
              key={step.number}
              className={`flex gap-4 pointuserbar:gap-[32px] items-start ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              } pointuserbar:flex-row lg:w-[calc(33%-35px)]`}
            >
              <div className="text-[102px] font-bold bg-gradient-to-b from-[#ffacb5] to-[#e2011a] bg-clip-text text-transparent">
                {step.number}
              </div>
              <div>
                <h3 className="uppercase text-[20px] pointuserbar:text-[24px] font-bold mb-3 pointuserbar:mb-[20px] max-w-[250px]">
                  {step.title}
                </h3>
                <p className="text-[14px] pointuserbar:text-[18px] max-w-[250px]">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
          <li className="mobile:hidden lg:block lg:absolute top-[-5%] left-[17%]">
            <Image
              src="/GroupDecor.png"
              alt="decor icon"
              width={400}
              height={600}
              className="w-[860px] h-auto"
            />
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default BuyingProcess;
