'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const pathname = usePathname();
  const isActiveClass = 'text-red-600 text-14';

  return (
    <nav className="flex items-center">
      <Link href="/" className="focus:outline-focus outline-none mr-[70px]">
        <Image
          src="/modern-logo.png"
          alt="logo icon"
          width={185}
          height={130}
          className="mobile:w-[113px] mobile:h-[80px] tablet:w-[185px] tablet:h-[90px]"
        />
      </Link>
      <ul className="mobile:hidden pointnav:flex items-center gap-5">
        <li className="text-primary text-[16px] font-medium">
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

export default Navigation;
