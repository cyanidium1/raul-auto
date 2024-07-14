'use client';
import LanguageSelection from '@/components/UI/LanguageSelection/LanguageSelection';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/UI/Button/Button';
import SelectedAuthRouts from '@/components/Modals/SelectedAuthRouts/SelectedAuthRouts';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import useStore from '../../../app/zustand/useStore';
import translations from '../../../app/lang/headerTranslations.json';

const UserBar = () => {
  const [showModal, setShowModal] = useState(false);
  const pathname = usePathname();
  const isActiveClass = 'text-red-600 text-14';
  const language = useStore(state => state.language);
  const t = translations[language];

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <ul className="mobile:hidden pointuserbar:flex items-center">
      <li className="text-primary desktop:text-14 font-semibold mr-6">
        {t.find_car_by_vin}
      </li>
      <li className="mr-10 relative">
        <input
          type="text"
          placeholder={t.enter_vin}
          className="placeholder:text-placeholderText placeholder:text-14 text-primary placeholder:font-medium flex border-solid border-[1px] border-primary rounded-sub-block-10 bg-input px-[14px] py-4 w-[217px] h-[44px] focus:outline-focus outline-none"
        />
        <Image
          className="absolute top-1/2 right-[14px] transform translate-y-[-50%] cursor-pointer"
          src="/search-input.png"
          alt="search icon"
          width={16}
          height={16}
        />
      </li>
      <li className="relative">
        <Button
          onClick={toggleModal}
          className="bg-gradient-red text-14 font-bold py-4 px-[24px] mr-10 text-primary rounded-sub-block-10 h-[44px]"
          type="button"
        >
          {t.login}
        </Button>
        {showModal && (
          <div className="absolute left-[-15px] bottom-[-100px] z-10">
            <SelectedAuthRouts toggleModal={toggleModal} />
          </div>
        )}
      </li>
      <li>
        <LanguageSelection />
      </li>
    </ul>
  );
};

export default UserBar;
