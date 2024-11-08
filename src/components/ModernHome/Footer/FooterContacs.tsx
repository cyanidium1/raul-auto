const FooterContacs = () => {
  return (
    <div className="text-white">
      <h4 className="text-[18px] tablet:text-[20px] font-semibold mb-[14px]">
        Контакти
      </h4>
      <a
        href="mailto:raulkogo@gmail.com"
        className="text-[14px] mb-[12px] tablet:text-[16px] font-medium inline-flex"
      >
        raulkogo@gmail.com
      </a>
      <div className="text-[14px] tablet:text-[16px] mb-[8px] font-medium">
        вул.
      </div>
      <div className="text-[14px] tablet:text-[16px] mb-[8px] font-medium">
        Новопирогівська 58
      </div>
      <div className="text-[14px] tablet:text-[16px] font-medium">офіс 502</div>
    </div>
  );
};

export default FooterContacs;
