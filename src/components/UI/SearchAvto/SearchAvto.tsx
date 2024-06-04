'use client';
import Button from '../Button/Button';
import CustomSelect from '@/components/UI/CustomSelect/CustomSelect';
import { useState } from 'react';
interface Option {
  label: string;
  value: string;
}

const brandOptions = [
  { label: 'Audi', value: 'audi' },
  { label: 'Bmw', value: 'bmw' },
  { label: 'Nisan', value: 'nisan' },
];

const modelOptions = [
  { label: 'Q7', value: 'q7' },
  { label: 'R8', value: 'r8' },
];

const yearOptions = [
  { label: '1970', value: '1970' },
  { label: '2024', value: '2024' },
];

const SearchAvto = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    brandSelection: '',
    modelSelection: '',
    yearOf: '',
    yearTo: '',
  });

  const handleSelectChange = (key: string, value: Option) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleSubmit = () => {
    console.log(selectedOptions);
  };

  return (
    <div className="mobile:ml-auto mobile:mr-auto mobile:mt-8 tablet:mt-2 bg-gradient-sub-block rounded-lg lg:rounded-sub-block-22 p-4 lg:p-[38px] max-w-full sm:max-w-[640px] desktop:max-w-[490px] fullhd:max-w-[640px] desktop:ml-0 desktop:mr-0">
      <div className="text-[20px] lg:text-24 text-primary mb-4 lg:mb-[20px]">
        Найдите автомобиль:
      </div>
      <div className="flex flex-col gap-4 lg:gap-5">
        <div className="flex flex-col sm:flex-row gap-4 lg:gap-5">
          <div className="w-full lg:w-[272px] h-[60px] mobile:z-[25] tablet:z-[20]">
            <CustomSelect
              currentSelectedOption="Выберите марку"
              containerClassName="w-full flex-1"
              onSelect={(value) => handleSelectChange('brandSelection', value)}
              options={brandOptions}
              selectClassName="w-full appearance-none desktop:text-[13px] fullhd:text-18 bg-input text-primary border border-primary py-2 lg:py-[18px] px-3 lg:px-[20px] focus:outline-none cursor-pointer rounded-lg lg:rounded-sub-block-12 focus:outline-focus outline-none"
              optionClassName="mobile:z-[25] tablet:z-[20]"
            />
          </div>
          <div className="w-full lg:w-[272px] h-[60px] z-[20]">
            <CustomSelect
              currentSelectedOption="Выберите модель"
              containerClassName="w-full flex-1"
              onSelect={(value) => handleSelectChange('modelSelection', value)}
              options={modelOptions}
              selectClassName="w-full appearance-none desktop:text-[13px] fullhd:text-18 bg-input text-primary border border-primary py-2 lg:py-[18px] px-3 lg:px-[20px] focus:outline-none cursor-pointer rounded-lg lg:rounded-sub-block-12 focus:outline-focus outline-none"
              optionClassName="z-[20]"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-5">
          <div className="w-full lg:w-[160px] h-[60px] z-[15]">
            <CustomSelect
              currentSelectedOption="Год от"
              containerClassName="w-full flex-1"
              onSelect={(value) => handleSelectChange('yearOf', value)}
              options={yearOptions}
              selectClassName="w-full appearance-none desktop:text-[13px] fullhd:text-18 bg-input text-primary border border-primary py-2 lg:py-[18px] px-3 lg:px-[20px] focus:outline-none cursor-pointer rounded-lg lg:rounded-sub-block-12 focus:outline-focus outline-none"
              optionClassName="z-[15]"
            />
          </div>
          <div className="w-full lg:w-[160px] h-[60px] z-[10]">
            <CustomSelect
              currentSelectedOption="Год до"
              containerClassName="w-full flex-1"
              onSelect={(value) => handleSelectChange('yearTo', value)}
              options={yearOptions}
              selectClassName="w-full appearance-none desktop:text-[13px] fullhd:text-18 bg-input text-primary border border-primary py-2 lg:py-[18px] px-3 lg:px-[20px] focus:outline-none cursor-pointer rounded-lg lg:rounded-sub-block-12 focus:outline-focus outline-none"
              optionClassName="z-[10]"
            />
          </div>
          <Button
            className="w-full lg:w-[207px] h-[60px] bg-gradient-red text-primary text-[16px] lg:text-18 rounded-lg lg:rounded-sub-block-12"
            type="submit"
            onClick={handleSubmit}
          >
            Найти
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchAvto;
