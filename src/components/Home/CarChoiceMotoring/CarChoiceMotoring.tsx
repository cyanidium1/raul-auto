const CarChoiceMotoring = () => {
  const engineTypes = [
    { name: 'Бензин', count: 8 },
    { name: 'Дизель', count: 467 },
    { name: 'Гибрид', count: 64 },
    { name: 'Электрика', count: 183 },
  ];

  return (
    <div className="mobile:pb-[80px] tablet:pb-[160px]">
      <h2 className="mobile:text-34 tablet:text-40 lg:text-56 desktop:text-64 mobile:mb-10 tablet:mb-[80px] text-primary  text-center flex justify-center">
        Выбрать авто по двигателю:
      </h2>
      <ul className="flex gap-8 flex-wrap items-center justify-center">
        {engineTypes.map((engine, index) => (
          <li
            key={index}
            className="w-[400px] h-[130px] mobile:rounded-sub-block-10 tablet:rounded-sub-block-24 flex justify-between items-center p-12 bg-gradient-sub-block"
          >
            <div className="mobile:text-30 tablet:text-34 text-primary">
              {engine.name}
            </div>
            <div className="flex items-center justify-center rounded-sub-block-7 bg-input p-[10px] text-countCar text-20 min-w-[34px] h-[32px]">
              {engine.count}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarChoiceMotoring;
