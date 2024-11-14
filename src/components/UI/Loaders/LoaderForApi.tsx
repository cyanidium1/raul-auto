import Image from 'next/image';

const LoaderForApi = () => {
  return (
    <div className="w-full fixed z-[170] inset-0 flex items-center justify-center bg-black backdrop-blur-lg">
      <Image
        className="api-loader mobile:w-[250px] mobile:h-[250px]"
        src="/favicon_processed.png"
        alt="icon loader"
        priority
        width={500}
        height={500}
      />
    </div>
  );
};

export default LoaderForApi;
