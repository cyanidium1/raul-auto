'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const FooterNavigation = () => {
  const pathname = usePathname();
  const isActiveClass = 'text-red-600 text-14';
  return (
    <nav className="">
      <ul className="flex flex-col gap-[12px]">
        <li className="text-white text-[14px] tablet:text-[16px] font-medium">
          <Link
            className={`transition-colors duration-300 ease-in-out hover:text-red-600 focus:text-red-600 outline-none ${
              pathname === '/calculator' ? isActiveClass : ''
            }`}
            href="/calculator"
          >
            Калькулятор
          </Link>
        </li>
        <li className="text-primary text-[16px] font-medium">
          <Link
            className={`transition-colors duration-300 ease-in-out hover:text-red-600 focus:text-red-600 outline-none ${
              pathname === '/partnership' ? isActiveClass : ''
            }`}
            href="/partnership"
          >
            Співпраця
          </Link>
        </li>
        <li className="text-primary text-[16px] font-medium">
          <Link
            className={`transition-colors duration-300 ease-in-out hover:text-red-600 focus:text-red-600 outline-none ${
              pathname === '/contacts' ? isActiveClass : ''
            }`}
            href="/contacts"
          >
            Контакти
          </Link>
        </li>
        <li className="text-primary text-[16px] font-medium">
          <Link
            className={`transition-colors duration-300 ease-in-out hover:text-red-600 focus:text-red-600 outline-none ${
              pathname === '/about' ? isActiveClass : ''
            }`}
            href="/about"
          >
            Про нас
          </Link>
        </li>
        <li className="text-primary text-[16px] font-medium">
          <Link
            className={`transition-colors duration-300 ease-in-out hover:text-red-600 focus:text-red-600 outline-none ${
              pathname === '/blog' ? isActiveClass : ''
            }`}
            href="/blog"
          >
            Блог
          </Link>
        </li>
        <li className="text-primary text-[16px] font-medium">
          <Link
            className={`transition-colors duration-300 ease-in-out hover:text-red-600 focus:text-red-600 outline-none ${
              pathname === '/faq' ? isActiveClass : ''
            }`}
            href="/faq"
          >
            FAQ
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNavigation;
