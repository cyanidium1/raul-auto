import Image from 'next/image';

const social = [
  {
    id: 1,
    icon: '/footer-telegram-icon.png',
    name: 'Telegram',
    url: 'https://t.me/username',
  },
  {
    id: 2,
    icon: '/footer-insagram-icon.png',
    name: 'Instagram',
    url: 'https://instagram.com/username',
  },
  {
    id: 3,
    icon: '/footer-viber-icon.png',
    name: 'Viber',
    url: 'https://viber.com/username',
  },
  {
    id: 4,
    icon: '/footer-messenger-icon.png',
    name: 'Messenger',
    url: 'https://m.me/username',
  },
  {
    id: 5,
    icon: '/footer-whatsapp-icon.png',
    name: 'WhatsApp',
    url: 'https://wa.me/username',
  },
];

const FooterSocial = () => {
  return (
    <ul className="flex gap-[16px]">
      {social.map((soc) => (
        <li
          key={soc.id}
          className="transform transition duration-300 ease-in-out hover:scale-105"
        >
          <a href={soc.url} target="_blank" rel="noopener noreferrer">
            <Image
              src={soc.icon}
              alt={`${soc.name} icon`}
              width={40}
              height={40}
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FooterSocial;
