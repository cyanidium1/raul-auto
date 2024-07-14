"use client";
import useStore from '../../../app/zustand/useStore';
import translations from '../../../app/lang/partnership.json';

const Advantages = () => {
  const language = useStore(state => state.language);
  const t = translations[language];

  return (
    <div>
      <h2 className="text-center text-primary mobile:text-30 tablet:text-40 desktop:text-64 font-bold mobile:mb-[38px] tablet:mb-[58px] desktop:mb-[88px]">
        {t.advantages_title}
      </h2>
      <ul className="flex flex-wrap justify-center gap-8">
        {t.advantages.map((advantage, index) => (
          <li
            key={index}
            className={`max-w-[400px] p-[32px] bg-gradient-sub-block mobile:rounded-sub-block-10 tablet:rounded-sub-block-32 flex flex-col ${index === 5 ? 'h-[520px]' : 'h-[356px]'
              }`}
          >
            <div className="p-4 w-[52px] h-[56px] rounded-sub-block-14 flex items-center justify-center bg-gradient-advantages text-34 text-primary font-bold mb-[32px]">
              {index + 1}
            </div>
            <h3 className="text-[25px] font-bold text-primary mb-2">
              {advantage.title}
            </h3>
            <p className="text-secondary text-[15px]">
              {advantage.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Advantages;
