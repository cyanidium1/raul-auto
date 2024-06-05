import CustomSelect from '../CustomSelect/CustomSelect';

interface Option {
  label: string;
  value: string;
}

const options = [
  { label: 'RU', value: 'ru' },
  { label: 'UA', value: 'ua' },
  { label: 'EN', value: 'en' },
];

const LanguageSelection = () => {
  const handleSelectChange = (label: string, value: Option) => {
    console.log(label);
    console.log(value);
  };
  return (
    <CustomSelect
      currentSelectedOption={options[0].label}
      onSelect={(value) => handleSelectChange(options[0].label, value)}
      options={options}
      selectClassName="ml-[10px] text-14 text-primary w-full cursor-pointer"
      optionListClassName="top-full px-[5px] flex flex-col justify-center items-center"
      optionClassName="py-[5px]"
    />
  );
};

export default LanguageSelection;
