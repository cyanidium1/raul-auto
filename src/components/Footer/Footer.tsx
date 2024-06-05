import Image from 'next/image';
import Link from 'next/link';
import CallUs from './CallUs/CallUs';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mobie:flex mobile:flex-wrap ml-auto mr-auto flex items-center justify-center gap-4 desktop:flex-nowrap">
      <div className="w-[1525px] mobile:rounded-sub-block-10 tablet:rounded-sub-block-22 bg-gradient-sub-block mobile:p-[16px] desktop:p-[32px]">
        <div className="mobile:flex mobile:flex-col mobile:items-center mobile:justify-center mobile:gap-4 flex items-center desktop:flex-nowrap desktop:flex-row">
          <div className="flex flex-col gap-10 mr-auto ml-auto desktop:ml-0 desktop:mr:0">
            <div className="mobile:text-center desktop:text-left text-[24px] font-bold text-primary">
              © Raulavto {currentYear}
            </div>
            <nav>
              <ul className="mobile:flex mobile:flex-wrap mobile:gap-2 tablet:gap-[25px] fullhd:gap-[40px] mobile:items-center mobile:justify-center desktop:justify-start desktop:flex text-14 font-semibold text-secondary">
                <li>
                  <Link
                    className="transition-colors duration-300 ease-in-out hover:text-red-600 focus:outline-focus outline-none"
                    href="/calculator"
                  >
                    Калькулятор
                  </Link>
                </li>
                <li>
                  <Link
                    className="transition-colors duration-300 ease-in-out hover:text-red-600 focus:outline-focus outline-none"
                    href="/partnership"
                  >
                    Сотрудничество
                  </Link>
                </li>
                <li>
                  <Link
                    className="transition-colors duration-300 ease-in-out hover:text-red-600 focus:outline-focus outline-none"
                    href="/contacts"
                  >
                    Контакты
                  </Link>
                </li>
                <li>
                  <Link
                    className="transition-colors duration-300 ease-in-out hover:text-red-600 focus:outline-focus outline-none"
                    href="/about"
                  >
                    О нас
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex flex-col gap-4 mobile:mr-0 mr-4">
            <div className="flex justify-between items-center w-[318px] h-[54px] rounded-sub-block-12 bg-input py-[15px] px-[20px]">
              <span className="block text-countCar text-[16px] font-semibold">
                hello@raulavto.ua
              </span>
              <button
                className="flex items-center justify-center rounded-sub-block-6 w-[71px] h-[26px] py-[10px] px-[8px] text-8 text-primary bg-copybtn uppercase focus:outline-focus outline-none"
                type="button"
              >
                Копировать
              </button>
            </div>
            <div className="flex justify-between items-center w-[318px] h-[54px] rounded-sub-block-12 bg-input py-[15px] px-[20px]">
              <span className="block text-countCar text-[16px] font-semibold">
                ул. Филатова, 2, корп. 1
              </span>
              <button
                className="flex items-center justify-center rounded-sub-block-6 w-[71px] h-[26px] py-[10px] px-[8px] text-8 font-bold text-primary bg-copybtn uppercase focus:outline-focus outline-none"
                type="button"
              >
                Копировать
              </button>
            </div>
          </div>
          <div className="mobile:max-w-[500px] mobile:w-full relative desktop:w-[420px] h-[124px] rounded-sub-block-16 overflow-hidden">
            <Image src="/footer-map.png" alt="map img" fill />
          </div>
        </div>
      </div>
      <CallUs />
    </footer>
  );
};

export default Footer;
