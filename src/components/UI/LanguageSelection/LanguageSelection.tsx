import React from 'react';
import CustomSelect from '../CustomSelect/CustomSelect';
import useStore from '../../../app/zustand/useStore';

interface Option {
  label: string;
  value: 'ru' | 'ua' | 'en'; // Restricting value to specific language codes
}

const options: Option[] = [
  { label: 'RU', value: 'ru' },
  { label: 'UA', value: 'ua' },
  { label: 'EN', value: 'en' },
];

const LanguageSelection: React.FC = () => {
  const setLanguage = useStore((state) => state.setLanguage);

  const handleSelectChange = (value: Option) => {
    setLanguage(value.value);
    console.log('Selected label:', value.label);
    console.log('Selected value:', value.value);
  };

  return (
    <CustomSelect
      currentSelectedOption={options[0].label} // Assuming you want the first option as default
      onSelect={handleSelectChange}
      options={options}
      selectClassName="ml-[10px] text-14 text-primary w-full cursor-pointer"
      optionListClassName="top-full px-[5px] flex flex-col justify-center items-center"
      optionClassName="py-[5px]"
    />
  );
};

export default LanguageSelection;
