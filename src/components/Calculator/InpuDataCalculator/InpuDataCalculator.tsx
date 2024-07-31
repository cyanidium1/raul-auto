'use client';
import CustomSelect from '@/components/UI/CustomSelect/CustomSelect';
import Button from '@/components/UI/Button/Button';
import { useState } from 'react';
import useStore from '../../../app/zustand/useStore';
import translations from '../../../app/lang/calculator.json';

const InpuDataCalculator = () => {
  const language = useStore(state => state.language);

  const [formData, setFormData] = useState<Record<string, string>>({
    auctionCost: '',
    transportType: 'auto',
    fuelType: 'petrol',
    engineCapacity: '',
    yearOfManufacture: '2023',
    auction: 'copart',
  });

  const [errors, setErrors] = useState<Record<string, boolean>>({});

  if (!translations[language]) {
    throw new Error(`Translations for language "${language}" not found.`);
  }

  const {
    inputData,
    calculatePayments,
    auctionCost,
    transportType,
    fuelType,
    engineCapacity,
    yearOfManufacture,
    auction,
    options,
  } = translations[language];

  const fields = [
    { key: 'auctionCost', label: auctionCost, type: 'input', placeholder: '2000' },
    { key: 'transportType', label: transportType, type: 'select', options: [
        { label: options.auto, value: 'auto' },
        { label: options.motorcycle, value: 'motorcycle' }
      ]
    },
    { key: 'fuelType', label: fuelType, type: 'select', options: [
      { label: options.fuelOptions.petrol, value: 'petrol' },
      { label: options.fuelOptions.diesel, value: 'diesel' },
      { label: options.fuelOptions.hybrid, value: 'hybrid' },
      { label: options.fuelOptions.electric, value: 'electric' }
    ]
    },
    { key: 'engineCapacity', label: engineCapacity, type: 'input', placeholder: '389' },
    { key: 'yearOfManufacture', label: yearOfManufacture, type: 'select', options: Array.from({ length: 2024 - 2009 + 1 }, (_, i) => {
        const year = 2024 - i;
        return { label: `${year}`, value: `${year}` };
      })
    },
    { key: 'auction', label: auction, type: 'select', options: [
        { label: 'COPART', value: 'copart' },
        { label: 'Manheim', value: 'manheim' },
        { label: 'IAAI', value: 'iaai' }
      ]
    }
  ];

  const handleChange = (key: string, value: string) => {
    setFormData(prevState => ({
      ...prevState,
      [key]: value,
    }));
    setErrors(prevState => ({
      ...prevState,
      [key]: false,
    }));
  };

  const handleSubmit = () => {
    const newErrors = Object.keys(formData).reduce((acc, key) => {
      if (!formData[key]) {
        acc[key] = true;
      }
      return acc;
    }, {} as Record<string, boolean>);

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log(formData);
    }
  };

  return (
    <div className="container mx-auto mobile:rounded-sub-block-10 tablet:rounded-sub-block-24 lg:rounded-sub-block-42 mobile:p-[20px] tablet:p-[40px] desktop:p-[80px] max-w-[832px] w-full bg-gradient-sub-block self-start">
      <h2 className="text-primary mobile:text-28 tablet:text-40 font-bold mb-[72px] text-center">
        {inputData}
      </h2>
      <ul className="grid grid-cols-1 tablet:grid-cols-2 gap-6 justify-items-center">
        {fields.map((item, index) => (
          <li key={index} className="w-full flex flex-col">
            {index === 0 || index === 3 ? (
              <>
                <label className="text-secondary text-16 font-semibold mb-[8px] truncate">
                  {item.label}
                </label>
                <input
                  placeholder='2000'
                  type="number"
                  value={item.value}
                  onChange={(e) => handleChange(item.label, e.target.value)}
                  className={`border ${errors[item.key] ? 'border-red-500' : 'border-primary'} rounded-sub-block-12 bg-input w-full h-[60px] py-[18px] px-[20px] text-primary text-18 font-semibold focus:outline-focus outline-none`} />
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
                onSelect={(option) => handleChange(index+'', option.value)}
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
