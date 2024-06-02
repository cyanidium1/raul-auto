import Image from 'next/image';

const AdminContacts = () => {
  return (
    <div className="pt-[80px] pb-[96px]">
      <div className="relative max-w-[496px] mx-auto">
        <Image
          className="mx-auto"
          src="/admin-photo.png"
          alt="admin photo"
          width={496}
          height={643}
        />
        <div className="tablet:absolute mobile:mt-3 mobile:mx-auto mobile:max-w-[496px] tablet:left-[270px] tablet:top-[320px] desktop:left-[408px] desktop:top-[146px] tablet:w-[339px] mobile:rounded-sub-block-10 tablet:rounded-sub-block-26 mobile:p-[32px] bg-mapbg">
          <h2 className="text-40 text-primary text-center mb-4 font-[700]">
            Raul Gobadze
          </h2>
          <div className="font-[500] text-[16px] text-secondary text-center mb-[32px] mx-auto">
            Владелец компании
          </div>
          <div className="flex flex-col gap-4 mb-[32px]">
            <a
              className="max-w-full h-[44px] flex items-center justify-center py-[14px] px-[24px] rounded-sub-block-10 bg-input text-16 text-primary transition duration-300 ease-in-out hover:scale-105 focus:outline-focus outline-none"
              href="tel:+380737727373"
            >
              +380 73 772 73 73
            </a>
            <a
              className="max-w-full h-[44px] flex items-center justify-center py-[14px] px-[24px] rounded-sub-block-10 bg-input text-16 text-primary transition duration-300 ease-in-out hover:scale-105 focus:outline-focus outline-none"
              href="mailto:@raul_avto"
            >
              @raul_avto
            </a>
          </div>
          <ul className="flex gap-4 mobile:items-center mobile:justify-center">
            <li>
              <a className="focus:outline-focus outline-none" href="/">
                <Image
                  src="/telegram.png"
                  alt="icon telegram"
                  width={56}
                  height={56}
                />
              </a>
            </li>
            <li>
              <a className="focus:outline-focus outline-none" href="/">
                <Image
                  src="/massages.png"
                  alt="icon messanger"
                  width={56}
                  height={56}
                />
              </a>
            </li>
            <li>
              <a className="focus:outline-focus outline-none" href="/">
                <Image
                  src="/WhatsApp.png"
                  alt="icon whatsapp"
                  width={56}
                  height={56}
                />
              </a>
            </li>
            <li>
              <a className="focus:outline-focus outline-none" href="/">
                <Image
                  src="/viber.png"
                  alt="icon viber"
                  width={56}
                  height={56}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminContacts;
