const TotalAmountCalculator = () => {
  return (
    <div className="mobile:rounded-sub-block-10 tablet:rounded-sub-block-24 lg:rounded-sub-block-42 mobile:p-[20px] tablet:p-[80px] max-w-[940px] w-full bg-gradient-sub-block">
      <ul className="flex flex-col">
        <li className="border-b-[1px] border-solid border-primary">
          <div className="flex justify-between items-center">
            <div className="mobile:text-14 tablet:text-18 text-secondary font-semibold">
              Начальная ставка в США
            </div>
            <div className="mobile:text-14 tablet:text-18 text-primary font-semibold">
              $ 38,860
            </div>
          </div>
          <ul className="mobile:ml-0 tablet:ml-[72px]">
            <li className="flex items-center justify-between">
              <div className="mobile:text-[14px] leading-[48px] tablet:text-16 text-secondary font-semibold">
                Сбор аукциона
              </div>
              <div className="flex-grow mx-[16px] h-[1px] bg-primary"></div>
              <div className="mobile:text-[14px] leading-[48px] tablet:text-16 text-secondary font-semibold">
                $ 38,860
              </div>
            </li>
          </ul>
        </li>
        <li className="border-b-[1px] border-solid border-primary pt-4">
          <div className="flex justify-between items-center mb-4">
            <div className="mobile:text-14 tablet:text-18 text-secondary font-semibold">
              Наши услуги
            </div>
            <div className="mobile:text-14 tablet:text-18 text-primary font-semibold">
              $ 2,570
            </div>
          </div>
        </li>
        <li className="border-b-[1px] border-solid border-primary pt-4">
          <div className="flex justify-between items-center">
            <div className="mobile:text-14 tablet:text-18 text-secondary font-semibold">
              Доставка
            </div>
            <div className="mobile:text-14 tablet:text-18 text-primary font-semibold">
              $ 4,913
            </div>
          </div>
          <ul className="mobile:ml-0 tablet:ml-[72px]">
            <li className="flex items-center justify-between">
              <div className="mobile:text-[14px] leading-[48px] tablet:text-16 text-secondary font-semibold">
                Комплекс в порту
              </div>
              <div className="flex-grow mx-[16px] h-[1px] bg-primary"></div>
              <div className="mobile:text-[14px] leading-[48px] tablet:text-16 text-secondary font-semibold">
                $ 2,303
              </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="mobile:text-[14px] leading-[48px] tablet:text-16 text-secondary font-semibold">
                Стоянка в порту
              </div>
              <div className="flex-grow mx-[16px] h-[1px] bg-primary"></div>
              <div className="mobile:text-[14px] leading-[48px] tablet:text-16 text-secondary font-semibold">
                $ 1,360
              </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="mobile:text-[14px] leading-[48px] tablet:text-16 text-secondary font-semibold">
                Доставка транспортного средства
              </div>
              <div className="flex-grow mx-[16px] h-[1px] bg-primary"></div>
              <div className="mobile:text-[14px] leading-[48px] tablet:text-16 text-secondary font-semibold">
                $ 500
              </div>
            </li>
          </ul>
        </li>
        <li className="border-b-[1px] border-solid border-primary pt-4">
          <div className="flex justify-between items-center">
            <div className="mobile:text-14 tablet:text-18 text-secondary font-semibold">
              Таможенное оформление
            </div>
            <div className="mobile:text-14 tablet:text-18 text-primary font-semibold">
              $ 241
            </div>
          </div>
          <ul className="mobile:ml-0 tablet:ml-[72px]">
            <li className="flex items-center justify-between">
              <div className="mobile:text-[14px] leading-[48px] tablet:text-16 text-secondary font-semibold">
                Брокер
              </div>
              <div className="flex-grow mx-[16px] h-[1px] bg-primary"></div>
              <div className="mobile:text-[14px] leading-[48px] tablet:text-16 text-secondary font-semibold">
                $ 41
              </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="mobile:text-[14px] leading-[48px] tablet:text-16 text-secondary font-semibold">
                Сумма официальных платежей
              </div>
              <div className="flex-grow mx-[16px] h-[1px] bg-primary"></div>
              <div className="mobile:text-[14px] leading-[48px] tablet:text-16 text-secondary font-semibold">
                $ 0
              </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="mobile:text-[14px] leading-[48px] tablet:text-16 text-secondary font-semibold">
                Ввозная (импортная) пошлина
              </div>
              <div className="flex-grow mx-[16px] h-[1px] bg-primary"></div>
              <div className="mobile:text-[14px] leading-[48px] tablet:text-16 text-secondary font-semibold">
                $ 0
              </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="mobile:text-[14px] leading-[48px] tablet:text-16 text-secondary font-semibold">
                Акцизный сбор
              </div>
              <div className="flex-grow mx-[16px] h-[1px] bg-primary"></div>
              <div className="mobile:text-[14px] leading-[48px] tablet:text-16 text-secondary font-semibold">
                $ 200
              </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="mobile:text-[14px] leading-[48px] tablet:text-16 text-secondary font-semibold">
                Налог на добавленную стоимость (НДС)
              </div>
              <div className="flex-grow mx-[16px] h-[1px] bg-primary"></div>
              <div className="mobile:text-[14px] leading-[48px] tablet:text-16 text-secondary font-semibold">
                $ 0
              </div>
            </li>
          </ul>
        </li>
        <li className="border-b-[1px] border-solid border-primary pt-4">
          <div className="flex justify-between items-center">
            <div className="mobile:text-14 tablet:text-18 text-secondary font-semibold">
              Постановка на учёт
            </div>
            <div className="mobile:text-14 tablet:text-18 text-primary font-semibold">
              $ 241
            </div>
          </div>
          <ul className="mobile:ml-0 tablet:ml-[72px]">
            <li className="flex items-center justify-between">
              <div className="mobile:text-[14px] leading-[48px] tablet:text-16 text-secondary font-semibold">
                Сертификация
              </div>
              <div className="flex-grow mx-[16px] h-[1px] bg-primary"></div>
              <div className="mobile:text-[14px] leading-[48px] tablet:text-16 text-secondary font-semibold">
                $ 41
              </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="mobile:text-[14px] leading-[48px] tablet:text-16 text-secondary font-semibold">
                Пенсионный фонд
              </div>
              <div className="flex-grow mx-[16px] h-[1px] bg-primary"></div>
              <div className="mobile:text-[14px] leading-[48px] tablet:text-16 text-secondary font-semibold">
                $ 200
              </div>
            </li>
          </ul>
        </li>
      </ul>
      <div className="pt-[24px]">
        <div className="flex items-center justify-between mb-[12px]">
          <div className="text-primary text-20 font-semibold">
            Общая стоимость
          </div>
          <div className="text-primary text-20 font-semibold">$ 48,164</div>
        </div>
        <p className="max-w-[380px] mb-[40px] text-12 text-secondary font-semibold opacity-[0.5]">
          Предварительная сумма может незначительно меняться в зависимости от
          курса валюты и ситуации в мире.
        </p>
        <button
          className="py-[18px] px-[20px] w-full h-[60px] rounded-sub-block-12 bg-input text-primary text-18 font-bold transform transition duration-300 ease-in-out hover:scale-105 hover:text-hoverprimary focus:outline-focus outline-none"
          type="button"
        >
          Подробнее
        </button>
      </div>
    </div>
  );
};

export default TotalAmountCalculator;
