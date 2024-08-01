import Image from 'next/image';
import Link from 'next/link';
import useStore from '../../app/zustand/useStore';
import translations from '../../app/lang/searchResults.json'; // Adjust the path as needed

const SearchResults = ({ orders }) => {
    const language = useStore(state => state.language);
    const t = translations[language];

    return (
        <div className="p-[38px] bg-gradient-sub-block mobile:rounded-sub-block-10 tablet:rounded-sub-block-26 mt-[32px] text-white">
            <h2 className="text-24 text-center text-primary font-bold mb-[32px]">{t.foundLots}</h2>
            <ul className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 max-w-[1500px] mx-auto">
            {Array.from({ length: 6 }, (_, i) => (
                    orders?.map((order) => (
                        <Link 
                            href={{
                                pathname: `/lots/${order.id}`,
                                query: { lotData: JSON.stringify(order) }
                            }}
                            key={`${order.id}-${i}`} // Unique key
                        >
                            <div 
                                className="h-56 cursor-pointer relative flex flex-col items-center justify-center overflow-hidden rounded-2xl text-gray-700 shadow-lg group tablet:h-full"
                            >
                                <div className="absolute inset-0 w-full h-full overflow-hidden">
                                    <Image
                                        src={order.images[0] || '/default-car-image.png'}
                                        sizes='200px'
                                        alt={order.model || 'Car'}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-xl transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/80 via-black/50"></div>
                                </div>
                                <div className="relative p-4 tablet:p-6 w-3/4 mt-20 tablet:mt-28 text-center">
                                    <h2 className="mb-1.5 tablet:mb-3 text-lg tablet:text-2xl font-semibold text-white transition-transform duration-300 group-hover:scale-105">
                                        {order.year} {order.make} {order.model}
                                    </h2>
                                    <p className="mb-1 tablet:mb-2 text-sm tablet:text-xl text-gray-400 transition-transform duration-300 group-hover:scale-105">
                                        {order.engine} - {order.fuel}
                                    </p>
                                    <div className='flex w-full justify-between'>
                                        <p className="text-sm tablet:text-lg text-gray-300 transition-transform duration-300 group-hover:scale-105">{order.odometer} mi</p>
                                        <p className="text-sm tablet:text-lg text-gray-300 transition-transform duration-300 group-hover:scale-105">{order.damage}</p>
                                        <p className="text-sm tablet:text-lg text-gray-300 transition-transform duration-300 group-hover:scale-105">{order.city}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>

                    ))
                ))}
            </ul>

            <div className="flex flex-col items-center mt-2">
                <span className="text-sm text-gray-700 dark:text-gray-400">
                    {t.showing} <span className="font-semibold text-red-700 dark:text-white">1</span> {t.to} <span className="font-semibold text-red-700 dark:text-white">30</span> {t.of} <span className="font-semibold text-red-700 dark:text-white">100</span> {t.cars}
                </span>
                <div className="inline-flex mt-2 xs:mt-0">
                    <button className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
                        </svg>
                        {t.prev}
                    </button>
                    <button className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        {t.next}
                        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchResults;
