'use client';
import LanguageSelection from '@/components/UI/LanguageSelection/LanguageSelection';
import Image from 'next/image';
import SelectedAuthRouts from '@/components/Modals/SelectedAuthRouts/SelectedAuthRouts';
import { useMediaQuery } from 'usehooks-ts';
import { useState } from 'react';
const UserBar = () => {
  const [showModal, setShowModal] = useState(false);
  const isScreenInRange = useMediaQuery('(max-width: 920px)', {
    initializeWithValue: false,
  });

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      {!isScreenInRange && (
        <>
          <ul className="flex items-center">
            <li className="text-primary desktop:text-14 mr-6">
              Найти авто по VIN:
            </li>
            <li className="mr-10 relative">
              <input
                type="text"
                placeholder="Введите VIN номер"
                className="placeholder:text-placeholderText placeholder:text-14 text-primary placeholder:font-[500] flex border-solid border-[1px] border-primary rounded-sub-block-10 bg-input px-[14px] py-4 w-[217px] h-[44px] focus:outline-focus outline-none"
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
              <button
                onClick={toggleModal}
                className="bg-gradient-red text-14 py-4 px-[24px] mr-10 text-primary rounded-sub-block-10 transform transition duration-300 ease-in-out hover:scale-105 hover:text-hoverprimary h-[44px] focus:outline-focus outline-none"
              >
                Войти
              </button>
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
        </>
      )}
    </>
  );
};

export default UserBar;
