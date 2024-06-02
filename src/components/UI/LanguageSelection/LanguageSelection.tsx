import Image from 'next/image';

const LanguageSelection = () => {
  return (
    <label htmlFor="language" className="flex items-center gap-[10px] relative">
      <select
        id="language"
        name="language"
        className="block appearance-none bg-transparent text-14 text-primary focus:outline-none w-full pr-[30px] cursor-pointer focus:outline-focus outline-none"
      >
        <option value="ru">RU</option>
        <option value="ua">UA</option>
        <option value="en">EN</option>
      </select>
      <Image
        className="absolute left-[30px] pointer-events-none"
        src="/select-icon.png"
        alt="select icon"
        width={18}
        height={18}
      />
    </label>
  );
};

export default LanguageSelection;
