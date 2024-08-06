'use client'
import Link from 'next/link';
import CallUs from './CallUs/CallUs';
import { FC, useState } from 'react';
import useStore from '../../app/zustand/useStore';
import translations from '../../app/lang/footerTranslations.json';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  const language = useStore(state => state.language) || 'ru'; // Default language fallback
  const {
    companyName,
    calculator,
    partnership,
    contacts,
    about,
    copyEmail,
    copyAddress,
    emailCopied: emailCopiedText,
    addressCopied: addressCopiedText,
    email,
    address
  } = translations[language] || {};

  const [emailCopied, setEmailCopied] = useState(false);
  const [addressCopied, setAddressCopied] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'address') => {
    navigator.clipboard.writeText(text).then(
      () => {
        if (type === 'email') {
          setEmailCopied(true);
          setTimeout(() => setEmailCopied(false), 2000);
        } else {
          setAddressCopied(true);
          setTimeout(() => setAddressCopied(false), 2000);
        }
        console.log('Text copied to clipboard');
      },
      (err) => {
        console.error('Failed to copy text: ', err);
      }
    );
  };

  return (
    <footer className="mobie:flex mobile:flex-wrap ml-auto mr-auto flex items-center justify-center gap-4 desktop:flex-nowrap max-w-screen-fullhd">
      <div className="w-[1525px] mobile:rounded-sub-block-10 tablet:rounded-sub-block-22 bg-gradient-sub-block mobile:p-[16px] desktop:p-[32px]">
        <div className="mobile:flex mobile:flex-col mobile:items-center mobile:justify-center mobile:gap-4 flex items-center desktop:flex-nowrap desktop:flex-row">
          <div className="flex flex-col gap-10 mr-auto ml-auto desktop:ml-0 desktop:mr:0">
            <div className="mobile:text-center desktop:text-left text-[24px] font-bold text-primary">
              © {companyName} {currentYear}
            </div>
            <nav>
              <ul className="mobile:flex mobile:flex-wrap mobile:gap-2 tablet:gap-[25px] fullhd:gap-[40px] mobile:items-center mobile:justify-center desktop:justify-start desktop:flex text-14 font-semibold text-secondary">
                <li>
                  <Link
                    className="transition-colors duration-300 ease-in-out hover:text-red-600 focus:outline-focus outline-none"
                    href="/calculator"
                  >
                    {calculator}
                  </Link>
                </li>
                <li>
                  <Link
                    className="transition-colors duration-300 ease-in-out hover:text-red-600 focus:outline-focus outline-none"
                    href="/partnership"
                  >
                    {partnership}
                  </Link>
                </li>
                <li>
                  <Link
                    className="transition-colors duration-300 ease-in-out hover:text-red-600 focus:outline-focus outline-none"
                    href="/contacts"
                  >
                    {contacts}
                  </Link>
                </li>
                <li>
                  <Link
                    className="transition-colors duration-300 ease-in-out hover:text-red-600 focus:outline-focus outline-none"
                    href="/about"
                  >
                    {about}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex flex-col gap-4 mobile:mr-0 mr-4">
            <div className="flex justify-between items-center w-[318px] h-[54px] rounded-sub-block-12 bg-input py-[15px] px-[20px]">
              <a href={`mailto:${email}`} className="transition-colors duration-300 ease-in-out hover:text-red-600 focus:outline-focus outline-none block text-countCar mobile:text-[14px] tablet:text-[16px] font-semibold">
                {email}
              </a>
              <button
                className="flex items-center justify-center rounded-sub-block-6 w-[71px] h-[26px] py-[10px] px-[8px] text-8 font-bold text-primary bg-copybtn uppercase focus:outline-focus outline-none"
                type="button"
                onClick={() => copyToClipboard(email, 'email')}
              >
                {emailCopied ? emailCopiedText : copyEmail}
              </button>
            </div>
            <div className="flex justify-between items-center w-[318px] h-[54px] rounded-sub-block-12 bg-input py-[15px] px-[20px]">
              <a href='https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%9D%D0%BE%D0%B2%D0%BE%D0%BF%D0%B8%D1%80%D0%BE%D0%B3%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F,+58,+%D0%9A%D0%B8%D0%B5%D0%B2,+%D0%A3%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0,+02000/@50.3521665,30.5592367,17z/data=!3m1!4b1!4m6!3m5!1s0x40d4c65aa840af45:0x376782a11b3176b5!8m2!3d50.3521665!4d30.5592367!16s%2Fg%2F11f5k1z722?entry=ttu' target='_blank' rel='noreferrer' className="transition-colors duration-300 ease-in-out hover:text-red-600 focus:outline-focus outline-none block text-countCar mobile:text-[14px] tablet:text-[16px] font-semibold">
                {address}
              </a>
              <button
                className="flex items-center justify-center rounded-sub-block-6 w-[71px] h-[26px] py-[10px] px-[8px] text-8 font-bold text-primary bg-copybtn uppercase focus:outline-focus outline-none"
                type="button"
                onClick={() => copyToClipboard(address, 'address')}
              >
                {addressCopied ? addressCopiedText : copyAddress}
              </button>
            </div>
          </div>
          <div className="mobile:max-w-[500px] mobile:w-full relative desktop:w-[420px] h-[124px] rounded-sub-block-16 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.1426601847857!2d30.50543861544321!3d50.40186917946785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c65aa840af45%3A0x82e5a391b36b752c!2z0LLRg9C70LjRhtGPINCc0L7RgdC60LLQsNC90L3RjywgNTgsIDUwMiwg0JrQuNGX0LIg0KHQutC-0LvQsCDQv9Cw0YDQutCw0Y8sINCQLiDQnNC-0YHRgtCw0LvRjNC90LjRhtGCLCAwMjAwMA!5e0!3m2!1suk!2sua!4v1680000000000!5m2!1suk!2sua"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
      <CallUs />
    </footer>
  );
};

export default Footer;
