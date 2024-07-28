import Image from 'next/image';
import Link from 'next/link';

const SearchResults = ({ orders }) => {
    return (
        <div className="p-[38px] bg-gradient-sub-block mobile:rounded-sub-block-10 tablet:rounded-sub-block-26 mt-[32px] text-white">
            <h2 className="text-24 text-primary font-bold mb-[32px]">Найденные Лоты</h2>
            <ul className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 max-w-[1500px] mx-auto">
                {orders.map((order, index) => (
                    <Link
                        href={`/lots/${order.id}`}
                        key={order.id}
                        className="cursor-pointer relative flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-white text-gray-700 shadow-lg group"
                    >
                        <div className="absolute inset-0 w-full h-full overflow-hidden">
                            <Image
                                src={order.images[0] || '/default-car-image.png'}
                                alt={order.model || 'Car'}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-xl transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/80 via-black/50"></div>
                        </div>
                        <div className="relative p-6 w-3/4 mt-28 text-center">
                            <h2 className="mb-3 text-2xl font-semibold text-white transition-transform duration-300 group-hover:scale-105">
                                {order.year} {order.make} {order.model}
                            </h2>
                            <p className="mb-2 text-xl text-gray-400 transition-transform duration-300 group-hover:scale-105">
                                {order.engine} - {order.fuel}
                            </p>
                            <div className='flex w-full justify-between'>
                                <p className="text-lg text-gray-300 transition-transform duration-300 group-hover:scale-105">{order.odometer}mi</p>
                                <p className="text-lg text-gray-300 transition-transform duration-300 group-hover:scale-105">{order.damage}</p>
                                <p className="text-lg text-gray-300 transition-transform duration-300 group-hover:scale-105">{order.city}</p>
                            </div>
                            <Link
                                href={`/lots/${order.id}`}
                                className="mt-4 inline-block px-6 py-2 text-sm font-medium text-white bg-red-600 rounded-full hover:bg-red-700 transition-transform duration-300 group-hover:scale-105"
                            >
                                Детально
                            </Link>
                        </div>
                    </Link>
                ))}
            </ul>
        </div>
    );
};

export default SearchResults;
