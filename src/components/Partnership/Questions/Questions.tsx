"use client";
import Image from 'next/image';
import QuestionsForm from '@/components/Forms/QuestionsForm/QuestionsForm';
import useStore from '../../../app/zustand/useStore';
import translations from '../../../app/lang/partnership.json';

const Questions = () => {
  const language = useStore(state => state.language);
  const t = translations[language];

  return (
    <div className="pt-[128px] pb-[160px]">
      <div className="flex mobile:rounded-sub-block-10 tablet:rounded-sub-block-32 lg:rounded-sub-block-42 bg-gradient-sub-block">
        <div className="py-[60px] mobile:pl-[20px] mobile:pr-[20px] tablet:pr-0 tablet:pl-[80px] mobile:mr-0 tablet:mr-[80px] max-w-[829px] w-full">
          <h3 className="font-bold text-primary mobile:text-24 tablet:text-34 desktop:text-64 mb-[40px]">
            {t.questions_title}
          </h3>
          <p className="font-medium tablet:text-18 desktop:text-24 text-secondary mb-[40px]">
            {t.questions_description}
          </p>
          <QuestionsForm />
        </div>
        <div className="relative w-full mobile:hidden tablet:block">
          <Image
            className="object-contain"
            src="/about-img.png"
            alt="car img"
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default Questions;
