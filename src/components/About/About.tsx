import Image from 'next/image';




const About = () => {
    return (
        <div className="pt-[80px] pb-[96px]">
            <div className="tablet:flex tablet:space-x-2 mx-auto">
                <Image
                    className="mx-auto rounded-3xl"
                    src="/admin-photo.png"
                    alt="admin photo"
                    width={496}
                    height={800}
                />
                <div className="tablet:w-2/3 mobile:mt-3 tablet:mt-0 mobile:mx-auto  mobile:rounded-sub-block-10 tablet:rounded-sub-block-26 mobile:p-[32px] bg-mapbg">
                    <h2 className="text-[40px] leading-[35px] mb-[20px] text-primary text-center font-bold">
                        Raul Gobadze
                    </h2>
                    <div className="font-medium text-[16px] text-secondary text-center mb-[22px] mx-auto">
                        Владелец компании
                    </div>
                    <div className="mx-auto space-y-8">
                        {/* Параграф 1 */}
                        <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg">
                            <p className="text-gray-200">
                                Меня зовут Рауль. Я родом из высокогорной Грузии - Батуми. Прекрасный солнечный город.
                                На моё 12 летее, моя семья переехала в Украину. И здесь я закончил школу в Киеве.
                                Получил высшее образование в сфере "таможни и логистики".
                            </p>
                        </div>

                        {/* Параграф 2 */}
                        <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg">
                            <p className="text-gray-200">
                                С 1994 года, жизнь моего отца стала тесно связана с грузовыми перевозками. Из-за этого
                                в моём детстве неоднократно появлялась различная техника, начиная с машин заканчивая
                                гигантскими сухогрузами. Со временем и я начал принимать участие в семейном бизнесе.
                            </p>
                        </div>

                        {/* Параграф 3 */}
                        <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg">
                            <p className="text-gray-200">
                                В 2012 когда мне исполнилось 18 лет, мой друг, помог мне привести первую машину с
                                Америки. Она прибыла ко мне в Грузию. Спустя пару месяцев после эксплуатации, я решил
                                её продать, и моему щастью и удивлению не было предела. Это были первые в моей жизни,
                                настолько лёгкие и большие деньги.
                            </p>
                        </div>

                        {/* Параграф 4 */}
                        <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg">
                            <p className="text-gray-200">
                                Спустя какое-то время, у меня образовался мини бизнес, я покупал машины в Америке и
                                перепродавал их в Грузии. Позже я начал привозить прямо машины на заказ под человека.
                                Первым испытуемым был мой брат, и ему настолько понравилась эта сфера бизнеса, что на
                                данный момент мы с ним привезли более 1000 автомобилей на рынок.
                            </p>
                        </div>

                        {/* Параграф 5 */}
                        <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg">
                            <p className="text-gray-200">
                                В 2016 году на тот момент мне уже исполнилось 22 года, в Украине закончил университет.
                                Начал интересоваться автомобильным рынком в Украине. Получил лицензии таможенного
                                брокера, открыл брокерскую компанию.
                            </p>
                        </div>

                        {/* Параграф 6 */}
                        <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg">
                            <p className="text-gray-200">
                                И на данный момент, доверяя нашему профессионализму и опыту, мы являемся официальными
                                партнерами - Автомобильного дома "Mercedes-Benz, Lexus, KIA Motors, Hyundai и более...".
                            </p>
                        </div>

                        {/* Параграф 7 */}
                        <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg">
                            <p className="text-gray-200">
                                В 2017 на Одесском порту встречал свою первую машину с Америки, куплена для Украиского
                                рынка. После удачного опыта, начали поступать заказы от абсолютно разных людей, которые
                                находили меня через знакомых или социальные сети.
                            </p>
                        </div>

                        {/* Параграф 8 */}
                        <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg ">
                            <p className="text-gray-200">
                                В 2018 наш месячный оборот автомобилей составлял более 100 автомобилей.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 mb-[25px] max-w-72 mx-auto mt-4">
                        <a
                            className="max-w-full h-[44px] flex items-center justify-center py-[14px] px-[24px] rounded-sub-block-10 bg-input text-16 font-bold text-primary transition duration-300 ease-in-out hover:scale-105 focus:outline-focus outline-none"
                            href="tel:+380737727373"
                        >
                            +380 73 772 73 73
                        </a>
                        <a
                            className="max-w-full h-[44px] flex items-center justify-center py-[14px] px-[24px] rounded-sub-block-10 bg-input text-16 font-bold text-primary transition duration-300 ease-in-out hover:scale-105 focus:outline-focus outline-none"
                            href="https://t.me/RAUL_AVTO"
                        >
                            @raul_avto
                        </a>
                    </div>
                    <ul className="flex gap-4 mobile:items-center mobile:justify-center">
                        <li>
                            <a className="focus:outline-focus outline-none" href="https://t.me/RAUL_AVTO" rel='noreferrer'>
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

export default About;
