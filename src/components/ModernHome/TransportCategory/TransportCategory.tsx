import Container from '@/components/Container/Container';
import Image from 'next/image';
import Link from 'next/link';

const TransportCategory = () => {
  return (
    <section className="pt-[112px] pb-[126px] lg:pt-[200px] lg:pb-[200px]">
      <Container>
        <ul
          className="grid gap-[20px] 
                        grid-cols-1 
                        mobileplus:grid-cols-2 mobileplus:auto-rows-[303px] mobileplus:grid-flow-dense 
                        tabletplus:grid-cols-3 tabletplus:auto-rows-[303px]
                        mac:flex mac:flex-wrap mac:justify-center"
        >
          <li className={`relative`}>
            <Link
              href="/"
              className="overflow-hidden block w-full h-full rounded-[20px] border-[1px] border-white"
            >
              <Image
                src="/delivery-avto.jpg"
                alt="photo avto"
                width={502}
                height={303}
                className="mobile:max-w-full mobile:h-[313px] object-cover object-center scale-[1.1] rounded-[20px]"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <span className="text-white text-2xl font-bold desktop:text-[32px]">
                  АВТОМОБІЛЬ
                </span>
              </div>
            </Link>
          </li>
          <li className={`relative rounded-[20px]`}>
            <Link
              href="/"
              className="overflow-hidden block w-full h-full rounded-[20px] border-[1px] border-white"
            >
              <Image
                src="/delivery-moto.jpg"
                alt="photo moto"
                width={718}
                height={303}
                className="mobile:max-w-full mobile:h-[313px] object-cover object-center scale-[1.1] rounded-[20px]"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <span className="text-white text-2xl font-bold desktop:text-[32px]">
                  МОТОЦИКЛ
                </span>
              </div>
            </Link>
          </li>
          <li className={`relative rounded-[20px]`}>
            <Link
              href="/"
              className="overflow-hidden block w-full h-full rounded-[20px] border-[1px] border-white"
            >
              <Image
                src="/delivery-yacht.jpg"
                alt="photo avto"
                width={827}
                height={303}
                className="mobile:max-w-full mobile:h-[313px] object-cover object-center scale-[1.1] rounded-[20px]"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <span className="text-white text-2xl font-bold desktop:text-[32px]">
                  ЯХТУ
                </span>
              </div>
            </Link>
          </li>
          <li className={`relative rounded-[20px]`}>
            <Link
              href="/"
              className="overflow-hidden block w-full h-full rounded-[20px] border-[1px] border-white"
            >
              <Image
                src="/delivery-spec-technics.jpg"
                alt="photo avto"
                width={403}
                height={303}
                className="mobile:max-w-full mobile:h-[313px] object-cover object-center scale-[1.1] rounded-[20px]"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <span className="text-white text-2xl font-bold desktop:text-[32px]">
                  СПЕЦ ТЕХНІКУ
                </span>
              </div>
            </Link>
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default TransportCategory;
