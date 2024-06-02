import UserContactsForm from '@/components/Forms/UserContactsForm/UserContactsForm';
const HeroPartnership = () => {
  return (
    <div className="mobile:pt-[30px] mobile:pb-[30px] tablet:pt-[80px] tablet-[pb-80px] desktop:pt-[120px] desktop:pb-[120px]">
      <div className="flex gap-[80px] mobile:flex-wrap mobile:items-center mobile:justify-center desktop:flex-nowrap">
        <div className="flex flex-col mobile:items-center mobile:justify-center desktop:items-start desktop:justify-center">
          <h1 className="max-w-[960px] mobile:text-center desktop:text-left mobile:text-[24px] tablet:text-[40px] desktop:text-[44px] text-left text-primary mb-[56px] font-bold">
            Автомобильный рынок открыт и доступен{' '}
            <span className="bg-gradient-red bg-clip-text text-transparent">
              каждому человеку.
            </span>{' '}
            <span className="block">Ты сам решаешь свою роль в нём!</span>
          </h1>
          <p className="max-w-[838px] font-medium text-[21px] mobile:text-center desktop:text-left text-secondary mb-[32px]">
            Мы можем дать тебе возможность стать дилером, и самостоятельно
            привозить автомобили, без ПОСТОРОНЕЕГО вмешательства.
          </p>
          <p className="max-w-[838px] font-medium text-[21px] mobile:text-center desktop:text-left text-secondary">
            Свяжись с нами или оставь свои контакты, менеджер свяжется с тобой,
            и поможем тебе открыть новую отрасль в заработке 🤝
          </p>
        </div>
        <div>
          <UserContactsForm />
        </div>
      </div>
    </div>
  );
};

export default HeroPartnership;
