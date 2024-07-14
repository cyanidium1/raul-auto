'use client';
import CustomSelect from '@/components/UI/CustomSelect/CustomSelect';
import Button from '@/components/UI/Button/Button';
import { useState } from 'react';
import useStore from '../../../app/zustand/useStore'; // Путь к вашему Zustand store
import translations from '../../../app/lang/calculator.json'; // Путь к вашему JSON файлу с переводами

const InpuDataCalculator = () => {
  const language = useStore(state => state.language); // Предположим, что вы храните язык в состоянии Zustand

  // Проверяем, что выбранный язык существует в translations
  if (!translations[language]) {
    throw new Error(`Translations for language "${language}" not found.`);
  }

  const {
    inputData,
    calculatePayments,
    auctionCost,
    transportType,
    engineType,
    engineCapacity,
    yearOfManufacture,
    auction,
    auctionSite,
    possibleShippingPort,
    possibleUnloadingPort,
    options,
  } = translations[language];

  const selectOptions = [
    {
      label: auctionCost,
      options: [{ label: options.cost, value: options.cost }],
    },
    { label: transportType, options: [{ label: options.auto, value: 'auto' }] },
    { label: engineType, options: [{ label: options.electro, value: 'electro' }] },
    { label: engineCapacity, options: [{ label: options.capacity, value: '389' }] },
    { label: yearOfManufacture, options: [{ label: options.year, value: '2023' }] },
    { label: auction, options: [{ label: options.copart, value: 'copart' }] },
    {
      label: auctionSite,
      options: [{ label: options.caMartinez, value: 'ca-martinez' }],
    },
    {
      label: possibleShippingPort,
      options: [
        { label: options.losAngeles, value: 'los_angeles_18' },
        { label: options.sanFrancisco, value: 'san_francisco_19' },
        { label: options.miami, value: 'miami_20' },
        { label: options.losAngeles, value: 'los_angeles_18' },
        { label: options.sanFrancisco, value: 'san_francisco_19' },
        { label: options.miami, value: 'miami_20' },
        { label: options.losAngeles, value: 'los_angeles_18' },
        { label: options.sanFrancisco, value: 'san_francisco_19' },
        { label: options.miami, value: 'miami_20' },
      ],
    },
    {
      label: possibleUnloadingPort,
      options: [{ label: options.krakow, value: 'krakow_22' }],
    },
  ];

  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});

  const handleSelect = (
    label: string,
    option: { label: string; value: string }
  ) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [label]: option.value,
    }));
  };

  const handleSubmit = () => {
    console.log(selectedOptions);
  };

  return (
    <div className="container mx-auto mobile:rounded-sub-block-10 tablet:rounded-sub-block-24 lg:rounded-sub-block-42 mobile:p-[20px] tablet:p-[40px] desktop:p-[80px] max-w-[832px] w-full bg-gradient-sub-block self-start">
      <h2 className="text-primary mobile:text-28 tablet:text-40 font-bold mb-[72px] text-center">
        {inputData}
      </h2>
      <ul className="grid grid-cols-1 tablet:grid-cols-2 gap-6 justify-items-center">
        {selectOptions.map((item, index) => (
          <li key={index} className="w-full flex flex-col">
            {index === 0 ? (
              <>
                <label className="text-secondary text-16 font-semibold mb-[8px] truncate">
                  {item.label}
                </label>
                <input
                  type="text"
                  value={item.options[0].label}
                  readOnly
                  className="border border-primary rounded-sub-block-12 bg-input w-full h-[60px] py-[18px] px-[20px] text-primary text-18 font-semibold focus:outline-focus outline-none"
                />
              </>
            ) : (
              <CustomSelect
                currentSelectedOption={item.options[0].label}
                label={item.label}
                options={item.options}
                containerClassName="w-full flex-1"
                labelClassName="text-secondary text-16 mb-[8px] truncate"
                selectClassName="border border-primary rounded-sub-block-12 bg-input w-full h-[60px] py-[18px] px-[20px] text-primary text-18 font-semibold"
                optionClassName="text-primary w-full"
                optionListClassName="max-h-[90px]"
                onSelect={(option) => handleSelect(item.label, option)}
              />
            )}
          </li>
        ))}
        <li className="self-end w-full">
          <Button
            className="flex items-center justify-center bg-gradient-red font-bold w-full h-[60px] rounded-sub-block-12 text-18 text-primary"
            type="submit"
            onClick={handleSubmit}
          >
            {calculatePayments}
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default InpuDataCalculator;
