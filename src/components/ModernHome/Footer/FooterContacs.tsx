'use client';
import useStore from '@/app/zustand/useStore';
import translations from '../../../app/lang/footerContacts.json';
const FooterContacs = () => {
  const language = useStore((state) => state.language);
  const t = translations[language];
  return (
    <div className="text-white">
      <h4 className="text-[18px] tablet:text-[20px] font-semibold mb-[14px]">
        {t.contacts_title}
      </h4>
      <a
        href="mailto:raulkogo@gmail.com"
        className="text-[14px] mb-[12px] tablet:text-[16px] font-medium inline-flex"
      >
        {t.email}
      </a>
      <a
        href="https://www.google.com/maps/place/%D0%90%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D0%B8+%D0%B8%D0%B7+%D0%A1%D0%A8%D0%90+%D0%B8+%D0%95%D0%B2%D1%80%D0%BE%D0%BF%D1%8B+%C2%AB%D0%BF%D0%BE%D0%B4+%D0%BA%D0%BB%D1%8E%D1%87%C2%BB+%E2%80%93+EUauto,+%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%B0+%D0%9E%D0%BA%D1%80%D1%83%D0%B6%D0%BD%D0%B0+%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F,+4,+3+%D1%8D%D1%82%D0%B0%D0%B6,+%D0%BE%D1%84%D0%B8%D1%81+12,+Kyiv,+Kyivs'ka+oblast,+Ukraine,+03170/data=!4m2!3m1!1s0x40d4cc6e5e39f189:0x9c23dfeaccd63f1a?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESCjExLjE1Mi4xMDAYACCenQoqdSw5NDI0MjYxMCw5NDIyMzI5OSw5NDIxNjQxMyw5NDIxMjQ5Niw5NDIwNzM5NCw5NDIwNzUwNiw5NDIwODUwNiw5NDIxNzUyMyw5NDIxODY1Myw5NDIyOTgzOSw0NzA4NzExOCw0NzA4NDM5Myw5NDIxMzIwMEICQUw%3D"
        target="_blank"
      >
        <div className="text-[14px] tablet:text-[16px] mb-[8px] font-medium">
          {t.address}
        </div>
        <div className="text-[14px] tablet:text-[16px] mb-[8px] font-medium">
          {t.office}
        </div>
        <div className="text-[14px] tablet:text-[16px] font-medium">502</div>
      </a>
    </div>
  );
};

export default FooterContacs;
