'use client';
import Image from 'next/image';
import Button from '../Button/Button';
import { useMediaQuery } from 'usehooks-ts';

const SearchAvto = () => {
  const isScreenInRange = useMediaQuery(
    '(min-width: 1285px) and (max-width: 1550px)',
    {
      initializeWithValue: false,
    }
  );
  return (
    <div className="mobile:ml-auto mobile:mr-auto mobile:mt-8 tablet:mt-2 bg-gradient-sub-block rounded-lg lg:rounded-sub-block-22 p-4 lg:p-[38px] max-w-full sm:max-w-[640px] desktop:max-w-[490px] fullhd:max-w-[640px] desktop:ml-0 desktop:mr-0">
      <div className="text-[20px] lg:text-24 text-primary mb-4 lg:mb-[20px]">
        Найдите автомобиль:
      </div>
      <div className="flex flex-col gap-4 lg:gap-5">
        <div className="flex flex-col sm:flex-row gap-4 lg:gap-5">
          <label
            htmlFor="brandSelection"
            className="flex w-full lg:w-[272px] h-[60px] relative"
          >
            <select
              id="brandSelection"
              name="brandSelection"
              className="appearance-none desktop:text-[14px] fullhd:text-18 bg-input text-primary border border-primary py-2 lg:py-[18px] px-3 lg:px-[20px] focus:outline-none w-full cursor-pointer rounded-lg lg:rounded-sub-block-12 focus:outline-focus outline-none"
            >
              <option defaultValue="Выберите марку">Выберите марку</option>
              <option value="ru">Audi</option>
              <option value="ua">Bmw</option>
              <option value="en">Nisan</option>
            </select>
            <Image
              className="absolute top-1/2 right-3 lg:right-[14px] transform translate-y-[-50%] cursor-pointer pointer-events-none"
              src="/select-icon.png"
              alt="select icon"
              width={18}
              height={18}
            />
          </label>
          <label
            htmlFor="modelSelection"
            className="flex w-full lg:w-[272px] h-[60px] relative"
          >
            <select
              id="modelSelection"
              name="modelSelection"
              className="appearance-none desktop:text-[14px] fullhd:text-18 bg-input text-primary border border-primary py-2 lg:py-[18px] px-3 lg:px-[20px] focus:outline-none w-full cursor-pointer rounded-lg lg:rounded-sub-block-12 focus:outline-focus outline-none"
            >
              <option defaultValue="Выберите модель">Выберите модель</option>
              <option value="ua">Q7</option>
              <option value="en">R8</option>
            </select>
            <Image
              className="absolute top-1/2 right-3 lg:right-[14px] transform translate-y-[-50%] cursor-pointer pointer-events-none"
              src="/select-icon.png"
              alt="select icon"
              width={18}
              height={18}
            />
          </label>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-5">
          <label
            htmlFor="yearOf"
            className="flex w-full lg:w-[160px] h-[60px] relative"
          >
            <select
              id="yearOf"
              name="yearOf"
              className="appearance-none desktop:text-[14px] fullhd:text-18 bg-input text-primary border border-primary py-2 lg:py-[18px] px-3 lg:px-[20px] focus:outline-none w-full cursor-pointer rounded-lg lg:rounded-sub-block-12 focus:outline-focus outline-none"
            >
              <option defaultValue="Год от">Год от</option>
              <option value="ua">1970</option>
              <option value="en">2024</option>
            </select>
            <Image
              className="absolute top-1/2 right-3 lg:right-[14px] transform translate-y-[-50%] cursor-pointer pointer-events-none"
              src="/select-icon.png"
              alt="select icon"
              width={18}
              height={18}
            />
          </label>
          <label
            htmlFor="yearTo"
            className="flex w-full lg:w-[160px] h-[60px] relative"
          >
            <select
              id="yearTo"
              name="yearTo"
              className="appearance-none desktop:text-[14px] fullhd:text-18 bg-input text-primary border border-primary py-2 lg:py-[18px] px-3 lg:px-[20px] focus:outline-none w-full cursor-pointer rounded-lg lg:rounded-sub-block-12 focus:outline-focus outline-none"
            >
              <option defaultValue="Год до">Год до</option>
              <option value="ua">1970</option>
              <option value="en">2024</option>
            </select>
            <Image
              className="absolute top-1/2 right-3 lg:right-[14px] transform translate-y-[-50%] cursor-pointer pointer-events-none"
              src="/select-icon.png"
              alt="select icon"
              width={18}
              height={18}
            />
          </label>
          <Button
            className="w-full lg:w-[207px] h-[60px] bg-gradient-red text-primary text-[16px] lg:text-18 rounded-lg lg:rounded-sub-block-12"
            type="submit"
          >
            Найти
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchAvto;
// import Button from '../Button/Button';
// import CustomSelect from '@/components/UI/CustomSelect/CustomSelect';
// import { useState } from 'react';

// const brandOptions = [
//   { label: 'Audi', value: 'ru' },
//   { label: 'Bmw', value: 'ua' },
//   { label: 'Nisan', value: 'en' },
// ];

// const modelOptions = [
//   { label: 'Q7', value: 'ua' },
//   { label: 'R8', value: 'en' },
// ];

// const yearOptions = [
//   { label: '1970', value: 'ua' },
//   { label: '2024', value: 'en' },
// ];

// const SearchAvto = () => {
//   const [selectedOptions, setSelectedOptions] = useState({
//     brandSelection: '',
//     modelSelection: '',
//     yearOf: '',
//     yearTo: '',
//   });

//   const handleSelectChange = (key, value) => {
//     setSelectedOptions((prevState) => ({
//       ...prevState,
//       [key]: value,
//     }));
//   };

//   const handleSubmit = () => {
//     console.log(selectedOptions);
//   };

//   return (
//     <div className="mobile:ml-auto mobile:mr-auto mobile:mt-8 tablet:mt-2 bg-gradient-sub-block rounded-lg lg:rounded-sub-block-22 p-4 lg:p-[38px] max-w-full sm:max-w-[640px] desktop:max-w-[490px] fullhd:max-w-[640px] desktop:ml-0 desktop:mr-0">
//       <div className="text-[20px] lg:text-24 text-primary mb-4 lg:mb-[20px]">
//         Найдите автомобиль:
//       </div>
//       <div className="flex flex-col gap-4 lg:gap-5">
//         <div className="flex flex-col sm:flex-row gap-4 lg:gap-5">
//           <div className="w-full lg:w-[272px] h-[60px]">
//             <CustomSelect
//               selectedOption="Выберите марку"
//               containerClassName="w-full flex-1"
//               onSelect={(value) => handleSelectChange('brandSelection', value)}
//               options={brandOptions}
//               selectClassName="w-full appearance-none desktop:text-[14px] fullhd:text-18 bg-input text-primary border border-primary py-2 lg:py-[18px] px-3 lg:px-[20px] focus:outline-none cursor-pointer rounded-lg lg:rounded-sub-block-12 focus:outline-focus outline-none"
//             />
//           </div>
//           <div className="w-full lg:w-[272px] h-[60px]">
//             <CustomSelect
//               selectedOption="Выберите модель"
//               containerClassName="w-full flex-1"
//               onSelect={(value) => handleSelectChange('modelSelection', value)}
//               options={modelOptions}
//               selectClassName="w-full appearance-none desktop:text-[14px] fullhd:text-18 bg-input text-primary border border-primary py-2 lg:py-[18px] px-3 lg:px-[20px] focus:outline-none cursor-pointer rounded-lg lg:rounded-sub-block-12 focus:outline-focus outline-none"
//             />
//           </div>
//         </div>
//         <div className="flex flex-col lg:flex-row gap-4 lg:gap-5">
//           <div className="w-full lg:w-[160px] h-[60px]">
//             <CustomSelect
//               selectedOption="Год от"
//               containerClassName="w-full flex-1"
//               onSelect={(value) => handleSelectChange('yearOf', value)}
//               options={yearOptions}
//               selectClassName="w-full appearance-none desktop:text-[14px] fullhd:text-18 bg-input text-primary border border-primary py-2 lg:py-[18px] px-3 lg:px-[20px] focus:outline-none cursor-pointer rounded-lg lg:rounded-sub-block-12 focus:outline-focus outline-none"
//             />
//           </div>
//           <div className="w-full lg:w-[160px] h-[60px]">
//             <CustomSelect
//               selectedOption="Год до"
//               containerClassName="w-full flex-1"
//               onSelect={(value) => handleSelectChange('yearTo', value)}
//               options={yearOptions}
//               selectClassName="w-full appearance-none desktop:text-[14px] fullhd:text-18 bg-input text-primary border border-primary py-2 lg:py-[18px] px-3 lg:px-[20px] focus:outline-none cursor-pointer rounded-lg lg:rounded-sub-block-12 focus:outline-focus outline-none"
//             />
//           </div>
//           <Button
//             className="w-full lg:w-[207px] h-[60px] bg-gradient-red text-primary text-[16px] lg:text-18 rounded-lg lg:rounded-sub-block-12"
//             type="submit"
//           >
//             Найти
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchAvto;
