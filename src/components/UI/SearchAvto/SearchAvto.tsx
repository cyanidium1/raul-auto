'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Button from '../Button/Button';
import CustomSelect from '@/components/UI/CustomSelect/CustomSelect';
import useStore from '../../../app/zustand/useStore';
import translations from '../../../app/lang/searchAvtoTranslations.json';

const yearOptions = [
  { label: '0-3', value: '0-3' },
  { label: '0-5', value: '0-5' },
  { label: '0-10', value: '0-10' },
  { label: '10+', value: '10+' },
];

const odoOptions = [
  { label: '0-50K', value: '0-50K' },
  { label: '0-100K', value: '0-100K' },
  { label: '0-150K', value: '0-150K' },
  { label: '200K+', value: '200K+' },
];

const SearchAvto = () => {
  const language = useStore((state) => state.language);
  const t = translations[language];

  const router = useRouter();

  const [brandOptions, setBrandOptions] = useState([]);
  const [modelOptions, setModelOptions] = useState([]);
  const [loadingModels, setLoadingModels] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({
    brandSelection: '',
    modelSelection: '',
    yearOf: '',
    odo: '',
  });

  useEffect(() => {
    const fetchBrandOptions = () => {
      fetch('/api/proxy?type=make')
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          const formattedOptions = data.data.map(item => ({
            label: item.name,
            value: item.name
          }));
          setBrandOptions(formattedOptions);
        })
        .catch(error => {
          console.error('Error fetching brand options:', error);
        });
    };

    fetchBrandOptions();
  }, []);

  const fetchModelOptions = (brand) => {
    setLoadingModels(true);
    fetch(`/api/proxy?type=model&brand=${brand}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        const formattedOptions = data.data.map(item => ({
          label: item.name,
          value: item.name
        }));
        setModelOptions(formattedOptions);
        setLoadingModels(false);
      })
      .catch(error => {
        console.error('Error fetching model options:', error);
        setLoadingModels(false);
      });
  };

  const handleSelectChange = (key, value) => {
    setSelectedOptions(prevState => ({
      ...prevState,
      [key]: value.value,
      ...(key === 'brandSelection' && { modelSelection: '' }),
    }));

    if (key === 'brandSelection') {
      setModelOptions([{ label: 'Loading...', value: '' }]);
      fetchModelOptions(value.value);
    }
  };

  const handleSubmit = () => {
    const { brandSelection, modelSelection, yearOf, odo } = selectedOptions;
    const params = new URLSearchParams();

    if (brandSelection) params.append('brandSelection', brandSelection.toUpperCase());
    if (modelSelection) params.append('modelSelection', modelSelection.toUpperCase());
    if (yearOf) params.append('yearOf', yearOf);
    if (odo) params.append('odo', odo);
    params.append('Count', '72');

    const query = params.toString();
    router.push(`/search?${query}`);
};

  return (
    <div className="mobile:ml-auto mobile:mr-auto mobile:mt-8 tablet:mt-2 bg-gradient-sub-block rounded-lg lg:rounded-sub-block-22 p-4 lg:p-[38px] max-w-full sm:max-w-[640px] desktop:max-w-[490px] fullhd:max-w-[640px] desktop:ml-0 desktop:mr-0">
      <div className="text-[20px] lg:text-24 text-primary mb-4 lg:mb-[20px]">
        {t.find_car}
      </div>
      <div className="flex flex-col gap-4 lg:gap-5">
        <div className="flex flex-col sm:flex-row gap-4 lg:gap-5">
          <div className="w-full lg:w-[272px] h-[60px] mobile:z-[25] tablet:z-[20]">
            <CustomSelect
              currentSelectedOption={t.select_brand}
              containerClassName="w-full flex-1"
              onSelect={(value) => handleSelectChange('brandSelection', value)}
              options={brandOptions}
              selectClassName="w-full appearance-none desktop:text-[13px] fullhd:text-18 bg-input text-primary border border-primary py-2 lg:py-[18px] px-3 lg:px-[20px] focus:outline-none cursor-pointer rounded-lg lg:rounded-sub-block-12 focus:outline-focus outline-none"
              optionClassName="mobile:z-[25] tablet:z-[20]"
            />
          </div>
          <div className="w-full lg:w-[272px] h-[60px] z-[20]">
            <CustomSelect
              currentSelectedOption={selectedOptions.modelSelection || t.select_model}
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
              currentSelectedOption={t.year_from}
              containerClassName="w-full flex-1"
              onSelect={(value) => handleSelectChange('yearOf', value)}
              options={yearOptions}
              selectClassName="w-full appearance-none desktop:text-[13px] fullhd:text-18 bg-input text-primary border border-primary py-2 lg:py-[18px] px-3 lg:px-[20px] focus:outline-none cursor-pointer rounded-lg lg:rounded-sub-block-12 focus:outline-focus outline-none"
              optionClassName="z-[15]"
            />
          </div>
          <div className="w-full lg:w-[160px] h-[60px] z-[10]">
            <CustomSelect
              currentSelectedOption={t.year_to}
              containerClassName="w-full flex-1"
              onSelect={(value) => handleSelectChange('odo', value)}
              options={odoOptions}
              selectClassName="w-full appearance-none desktop:text-[13px] fullhd:text-18 bg-input text-primary border border-primary py-2 lg:py-[18px] px-3 lg:px-[20px] focus:outline-none cursor-pointer rounded-lg lg:rounded-sub-block-12 focus:outline-focus outline-none"
              optionClassName="z-[10]"
            />
          </div>

          <Button
            className="w-full lg:w-[207px] h-[60px]  text-primary text-[16px] lg:text-18 rounded-lg lg:rounded-sub-block-12"
            type="submit"
            onClick={handleSubmit}
            disabled={!selectedOptions.brandSelection}
          >
            {t.find}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchAvto;
