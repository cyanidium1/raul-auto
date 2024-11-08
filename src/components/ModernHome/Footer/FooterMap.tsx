import Image from 'next/image';

const FooterMap = () => {
  return (
    <>
      <Image
        className="rounded-sub-block-16"
        src="/footer-maps.jpg"
        alt="footer map"
        width={310}
        height={148}
      />
    </>
  );
};

export default FooterMap;
