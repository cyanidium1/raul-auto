'use client';
import Link from 'next/link';
import Image from 'next/image';
import LanguageSelection from '@/components/UI/LanguageSelection/LanguageSelection';
import { Squash as Hamburger } from 'hamburger-react';
import { usePathname } from 'next/navigation';
type SideMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};
const SideMenu = ({ isOpen, onClose }: SideMenuProps) => {
  const pathname = usePathname();
  const isActive = 'text-red-600 text-[20px]';

  return (
    <div
      className={`fixed inset-y-0 right-0 z-50 mobile:w-72 tablet:w-96 bg-gradient-sub-block shadow-lg transform transition-transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex justify-end p-4">
        <Hamburger toggled={isOpen} toggle={onClose} color="red" />
      </div>
      <ul className="py-4 flex items-start justify-center flex-col gap-3 px-[30px]">
        <li className="mb-[50px]">
          <LanguageSelection />
        </li>
        <li className="p-2">
          <Link
            onClick={onClose}
            className={`text-[20px] text-primary transition-colors duration-300 ease-in-out hover:text-red-600 focus:text-red-600 outline-none ${
              pathname === '/calculator' ? isActive : ''
            }`}
            href="/calculator"
          >
            Калькулятор
          </Link>
        </li>
        <li className="p-2">
          <Link
            onClick={onClose}
            className={`text-[20px] text-primary transition-colors duration-300 ease-in-out hover:text-red-600 focus:text-red-600 outline-none ${
              pathname === '/partnership' ? isActive : ''
            }`}
            href="/partnership"
          >
            Сотрудничество
          </Link>
        </li>
        <li className="p-2">
          <Link
            onClick={onClose}
            className={`text-[20px] text-primary transition-colors duration-300 ease-in-out hover:text-red-600 focus:text-red-600 outline-none ${
              pathname === '/contacts' ? isActive : ''
            }`}
            href="/contacts"
          >
            Контакты
          </Link>
        </li>
        <li className="p-2">
          <Link
            onClick={onClose}
            className={`text-[20px] text-primary transition-colors duration-300 ease-in-out hover:text-red-600 focus:text-red-600 outline-none ${
              pathname === '/about' ? isActive : ''
            }`}
            href="/about"
          >
            О нас
          </Link>
        </li>
        <li className="p-2">
          <Link
            onClick={onClose}
            className={`text-[20px] text-primary transition-colors duration-300 ease-in-out hover:text-red-600 focus:text-red-600 outline-none ${
              pathname === '/profile' ? isActive : ''
            }`}
            href="/profile"
          >
            Личный кабинет
          </Link>
        </li>
        <li className="text-primary text-14 mt-8">Найти авто по VIN:</li>
        <li className="mb-4 relative">
          <input
            type="text"
            placeholder="Введите VIN номер"
            className="placeholder:text-placeholderText placeholder:text-14 placeholder:font-[500] text-primary flex border-solid border-[1px] border-primary rounded-sub-block-10 bg-input px-[14px] py-4 w-[217px] h-[20px] focus:outline-focus outline-none"
          />
          <Image
            className="absolute top-1/2 right-[14px] transform translate-y-[-50%] cursor-pointer"
            src="/search-input.png"
            alt="search icon"
            width={16}
            height={16}
          />
        </li>
        <li className="">
          <button className="flex ml-auto mr-auto bg-gradient-red text-14 py-4 px-[24px] w-[217px] h-[20px] text-primary rounded-sub-block-10 transform transition duration-300 ease-in-out hover:scale-105 hover:text-hoverprimary focus:outline-focus outline-none">
            Войти
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
