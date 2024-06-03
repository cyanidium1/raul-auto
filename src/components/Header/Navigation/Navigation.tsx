'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const pathname = usePathname();
  const isActiveClass = 'text-red-600 text-14';

  return (
    <nav className="flex items-center">
      <Link href="/" className="focus:outline-focus outline-none">
        <Image src="/logo.png" alt="logo icon" width={100} height={43} />
      </Link>
      <div className="w-[1px] h-6 bg-decor ml-10 mr-10"></div>
      <ul className="mobile:hidden pointnav:flex items-center gap-10">
        <li className="text-primary text-14">
          <Link
            className={`transition-colors duration-300 ease-in-out hover:text-red-600 focus:text-red-600 outline-none ${
              pathname === '/calculator' ? isActiveClass : ''
            }`}
            href="/calculator"
          >
            Калькулятор
          </Link>
        </li>
        <li className="text-primary text-14">
          <Link
            className={`transition-colors duration-300 ease-in-out hover:text-red-600 focus:text-red-600 outline-none ${
              pathname === '/partnership' ? isActiveClass : ''
            }`}
            href="/partnership"
          >
            Сотруднечество
          </Link>
        </li>
        <li className="text-primary text-14">
          <Link
            className={`transition-colors duration-300 ease-in-out hover:text-red-600 focus:text-red-600 outline-none ${
              pathname === '/contacts' ? isActiveClass : ''
            }`}
            href="/contacts"
          >
            Контакты
          </Link>
        </li>
        <li className="text-primary text-14">
          <Link
            className={`transition-colors duration-300 ease-in-out hover:text-red-600 focus:text-red-600 outline-none ${
              pathname === '/about' ? isActiveClass : ''
            }`}
            href="/about"
          >
            О нас
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
