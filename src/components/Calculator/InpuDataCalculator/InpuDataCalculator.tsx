import CustomSelect from '@/components/UI/CustomSelect/CustomSelect';

const selectOptions = [
  {
    label: 'Стоимость транспорта на аукционе',
    options: [{ label: '$ 38,860', value: '$ 38,860' }],
  },
  { label: 'Тип транспорта', options: [{ label: 'Авто', value: 'auto' }] },
  { label: 'Тип двигателя', options: [{ label: 'Электро', value: 'electro' }] },
  { label: 'Объем двигателя', options: [{ label: '389 см³', value: '389' }] },
  { label: 'Год выпуска', options: [{ label: '2023', value: '2023' }] },
  { label: 'Аукцион', options: [{ label: 'COPART', value: 'copart' }] },
  {
    label: 'Площадка аукциона',
    options: [{ label: 'CA-MARTINEZ', value: 'ca-martinez' }],
  },
  {
    label: 'Возможный порт отгрузки',
    options: [
      { label: 'LOS_ANGELES 18', value: 'los_angeles_18' },
      { label: 'SAN_FRANCISCO 19', value: 'san_francisco_19' },
      { label: 'MIAMI 20', value: 'miami_20' },
    ],
  },
  {
    label: 'Возможный порт выгрузки',
    options: [{ label: 'KRAKOW_22', value: 'krakow_22' }],
  },
];

const InpuDataCalculator = () => {
  return (
    <div className="container mx-auto mobile:rounded-sub-block-10 tablet:rounded-sub-block-24 lg:rounded-sub-block-42 mobile:p-[20px] tablet:p-[40px] desktop:p-[80px] max-w-[832px] w-full bg-gradient-sub-block self-start">
      <h2 className="text-primary mobile:text-28 tablet:text-40 font-medium mb-[72px] text-center">
        Входные данные
      </h2>
      <ul className="grid grid-cols-1 tablet:grid-cols-2 gap-6 justify-items-center">
        {selectOptions.map((item, index) => (
          <li key={index} className="w-full flex flex-col">
            {index === 0 ? (
              <>
                <label className="text-secondary text-16 mb-[8px] truncate">
                  {item.label}
                </label>
                <input
                  type="text"
                  value={item.options[0].label}
                  readOnly
                  className="border border-primary rounded-sub-block-12 bg-input w-full h-[60px] py-[18px] px-[20px] text-primary font-semibold focus:outline-focus outline-none"
                />
              </>
            ) : (
              <CustomSelect
                label={item.label}
                options={item.options}
                containerClassName="w-full flex-1"
                labelClassName="text-secondary text-16 mb-[8px] truncate"
                selectClassName="border border-primary rounded-sub-block-12 bg-input w-full h-[60px] py-[18px] px-[20px] text-primary font-semibold"
                optionClassName="text-primary w-full"
              />
            )}
          </li>
        ))}
        <li className="self-end w-full">
          <button
            className="flex items-center justify-center bg-gradient-red font-bold w-full h-[60px] rounded-sub-block-12 text-primary transform transition duration-300 ease-in-out hover:scale-105 hover:text-hoverprimary focus:outline-focus outline-none"
            type="submit"
          >
            Рассчёт по платежам
          </button>
        </li>
      </ul>
    </div>
  );
};

export default InpuDataCalculator;
