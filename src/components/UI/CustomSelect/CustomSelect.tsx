import Image from 'next/image';

interface Option {
  label: string;
  value: string;
}

interface CustomSelectProps {
  label: string;
  options: Option[];
  containerClassName?: string;
  labelClassName?: string;
  selectClassName?: string;
  optionClassName?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  label,
  options,
  containerClassName,
  labelClassName,
  selectClassName,
  optionClassName,
}) => {
  return (
    <>
      <label
        className={`text-primary text-16 font-medium mb-[8px] ${labelClassName}`}
      >
        {label}
      </label>
      <div className={`relative flex flex-col ${containerClassName}`}>
        <select
          className={`focus:outline-focus outline-none appearance-none cursor-pointer ${selectClassName}`}
        >
          {options.map((option, index) => (
            <option
              key={index}
              value={option.value}
              className={optionClassName}
            >
              {option.label}
            </option>
          ))}
        </select>
        <Image
          className="absolute top-1/2 right-3 lg:right-[14px] transform translate-y-[-50%] cursor-pointer pointer-events-none"
          src="/select-icon.png"
          alt="select icon"
          width={18}
          height={18}
        />
      </div>
    </>
  );
};

export default CustomSelect;
