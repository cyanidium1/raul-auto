import Image from 'next/image';

const social = [
  {
    id: 1,
    icon: '/footer-telegram-icon.png',
    name: 'Telegram',
    url: 'https://t.me/RAUL_AVTO',
  },
  {
    id: 2,
    icon: '/footer-insagram-icon.png',
    name: 'Instagram',
    url: 'https://www.instagram.com/raul_avto/',
  },
  {
    id: 3,
    icon: '/facebook.webp',
    name: 'Viber',
    url: 'https://web.facebook.com/raulautoUSA/',
  },
  {
    id: 4,
    icon: '/footer-messenger-icon.png',
    name: 'Messenger',
    url: 'https://www.facebook.com/raulautoUSA/',
  },
  {
    id: 5,
    icon: '/footer-whatsapp-icon.png',
    name: 'WhatsApp',
    url: 'https://wa.me/+380737727373',
  },
];

const FooterSocial = () => {
  return (
    <ul className="flex gap-[16px] items-center mx-auto w-fit">
      {social.map((soc) => (
        <li
          key={soc.id}
          className="transform transition duration-300 ease-in-out hover:scale-105"
        >
          <a href={soc.url} target="_blank" rel="noopener noreferrer">
            <Image
              src={soc.icon}
              alt={`${soc.name} icon`}
              width={soc.id === 3 ? 37 : 40}
              height={soc.id === 3 ? 37 : 40}
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FooterSocial;
