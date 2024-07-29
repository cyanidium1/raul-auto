'use client';

import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Footer from '@/components/Footer/Footer';
import Questions from '@/components/Partnership/Questions/Questions';
import { useEffect, useState } from 'react';

const LotData = () => {
    const searchParams = useSearchParams();
    const lotData = searchParams.get('lotData');
    const lot = lotData ? JSON.parse(lotData) : null;
    const [currentUrl, setCurrentUrl] = useState('');

    useEffect(() => {
        setCurrentUrl(window.location.href);
    }, []);

    if (!lot) {
        return <div>Lot not found</div>;
    }

    const {
        make,
        model,
        year,
        id,
        images,
        city,
        damage,
        engine,
        fuel,
        odometer,
        vinCode,
        saleDate,
        preAccidentValue,
        series,
        state
    } = lot;

    return (
        <>
        <div className="max-w-[1348px] mx-auto">
            <div className="mb-[40px] flex mobile:flex-wrap items-center mobile:gap-[20px] tablet:gap-[32px] mt-10">
                <h1 className="text-primary mobile:text-30 tablet:text-40 font-bold ">
                    {year} {make} {model}
                </h1>
                <div className="flex items-center justify-center bg-gradient-sub-block max-w-[139px] h-[44px] rounded-sub-block-10 py-[14px] px-[24px] text-primary text-14 font-bold">
                    {new Date(saleDate).toLocaleDateString()}
                </div>
            </div>
            <div className="flex mobile:items-center mobile:justify-center lg:items-start lg:justify-start mobile:flex-wrap lg:flex-nowrap gap-[32px] w-full ">
                <div className=" flex flex-col  gap-[18px] self-start mobile:rounded-sub-block-10 tablet:rounded-sub-block-26 bg-gradient-sub-block p-[38px] mobile:max-w-full w-full">
                    <Image
                        className="rounded-sub-block-18 mobile:w-full"
                        src={images[0] || '/default-car-image.png'}
                        alt={`Image of ${make} ${model}`}
                        width={627}
                        height={352}
                    />
                    <ul className="flex flex-wrap items-center mobile:justify-evenly justify-center gap-[18px]">
                        {images.map((image, index) => (
                            <li key={index}>
                                <Image
                                    className="rounded-sub-block-11 w-[111px] h-[111px]"
                                    src={image}
                                    alt={`Thumbnail ${index + 1} of ${make} ${model}`}
                                    width={111}
                                    height={111}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col gap-[32px] mobile:max-w-full lg:max-w-[462px] w-full">
                    <div className="mobile:rounded-sub-block-10 tablet:rounded-sub-block-26 bg-gradient-sub-block p-[38px] w-full">
                        <h2 className="text-24 text-primary font-bold mb-[32px]">
                            Информация об автомобиле
                        </h2>
                        <ul className="flex flex-col gap-4">
                            <li className="text-[16px] text-secondary font-semibold">
                                Марка: <span className="text-[16px] text-primary font-semibold uppercase">{make}</span>
                            </li>
                            <li className="text-[16px] text-secondary font-semibold">
                                Модель: <span className="text-[16px] text-primary font-semibold uppercase">{model}</span>
                            </li>
                            <li className="text-[16px] text-secondary font-semibold">
                                Год: <span className="text-[16px] text-primary font-semibold">{year}</span>
                            </li>
                            <li className="text-[16px] text-secondary font-semibold">
                                Номер лота: <span className="text-[16px] text-primary font-semibold uppercase">{id}</span>
                            </li>
                            <li className="text-[16px] text-secondary font-semibold">
                                Вин код: <span className="text-[16px] text-primary font-semibold">{vinCode}</span>
                            </li>
                            <li className="text-[16px] text-secondary font-semibold">
                                Название аукциона: <span className="text-[16px] text-primary font-semibold">{city}</span>
                            </li>
                            <li className="text-[16px] text-secondary font-semibold">
                                Дата покупки: <span className="text-[16px] text-primary font-semibold">{new Date(saleDate).toLocaleDateString()}</span>
                            </li>
                        </ul>
                    </div>
                    <div className="mobile:rounded-sub-block-10 tablet:rounded-sub-block-26 bg-gradient-sub-block p-[38px] w-full">
                        <h2 className="text-24 text-primary font-bold mb-[32px]">Комментарий</h2>
                        <ul className="flex flex-col gap-4">
                            <li className="text-[16px] text-secondary font-semibold">
                                Двигатель: <span className="text-[16px] text-primary font-semibold">{engine}</span>
                            </li>
                            <li className="text-[16px] text-secondary font-semibold">
                                Топливо: <span className="text-[16px] text-primary font-semibold">{fuel}</span>
                            </li>
                            <li className="text-[16px] text-secondary font-semibold">
                                Пробег: <span className="text-[16px] text-primary font-semibold">{odometer} mi</span>
                            </li>
                            <li className="text-[16px] text-secondary font-semibold">
                                Ущерб: <span className="text-[16px] text-primary font-semibold">{damage}</span>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-[32px] mobile:max-w-full lg:max-w-[520px] w-full">
                    <div className="mobile:rounded-sub-block-10 tablet:rounded-sub-block-26 bg-gradient-sub-block p-[38px] w-full">
                        <h2 className="text-24 text-primary font-bold mb-[32px]">
                            Фин. информация
                        </h2>
                        <ul className="flex flex-col gap-4">
                            <li className="text-[16px] text-secondary font-semibold">
                                Предварительная стоимость: <span className="text-[16px] text-primary font-semibold">${preAccidentValue}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                </div>
                
            </div>
        </div>
        <div className='max-w-[1348px] mx-auto'>
        <Questions link={currentUrl}/>
        </div>
        <div className='mt-16'>
            <Footer />
        </div>
        </>
    );
};

export default LotData;
