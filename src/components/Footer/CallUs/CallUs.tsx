'use client'
import useStore from '../../../app/zustand/useStore';
import translations from '../../../app/lang/footerTranslations.json';

const CallUs = () => {
  const language = useStore(state => state.language) || 'ru'; // Default language fallback
  const { callUs } = translations[language] || {};

  return (
    <div className="mobile:w-full p-[38px] desktop:w-[299px] h-[188px] bg-gradient-sub-block flex flex-col justify-center items-center gap-[20px] mobile:rounded-sub-block-10 tablet:rounded-sub-block-22 ">
      <div className="text-24 font-bold text-primary">{callUs}</div>
      <a
        className="flex justify-center items-center w-[223px] h-[60px] rounded-sub-block-12 bg-gradient-red font-bold text-18 text-primary transform transition duration-300 ease-in-out hover:scale-105 hover:text-hoverprimary animate-pulse focus:outline-focus outline-none"
        href="tel:+380737727373"
      >
        +38 073 772 7373
      </a>
    </div>
  );
};

export default CallUs;
