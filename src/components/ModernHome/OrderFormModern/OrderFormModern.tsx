'use client';
import InputField from '@/components/UI/InputField/InputField';
import Button from '@/components/UI/Button/Button';
import DynamicForm from '@/components/UI/DynamicForm/DynamicForm';
import Container from '@/components/Container/Container';
import { FormikValues } from 'formik';
import { useState } from 'react';

const initialValues = {
  name: '',
  phoneNumber: '',
  brand: '',
  model: '',
  mileage: 50000,
  year: 2020,
};

const OrderFormModern = () => {
  const [mileage, setMileage] = useState(50000);
  const [year, setYear] = useState(2020);
  const currentYear = new Date().getFullYear();

  const handleSubmit = (value: FormikValues) => {
    console.log(value);
  };
  return (
    <Container>
      <section className="bg-white rounded-[20px] py-[32px] tabletplus:py-[50px] tabletplus:px-[80px] px-[35px]">
        <DynamicForm initialValues={initialValues} onSubmit={handleSubmit}>
          {(formikProps) => (
            <div>
              <h2 className="mx-auto max-w-[225px] tablet:max-w-full text-center text-[24px] tabletplus:text-[32px] font-semibold mb-[10px] tabletplus:mb-[14px]">
                Замовте підбір авто
              </h2>
              <p className="mx-auto max-w-[235px] tabletplus:max-w-[320px] text-center text-[14px] tabletplus:text-[16px] mb-[24px] tabletplus:mb-[49px]">
                Наші менеджери зв’яжуться з вами протягом кількох хвилин
              </p>
              <div className="tablet:mb-[26px] tablet:max-w-[470px] tablet:w-full tablet:flex tablet:flex-wrap tablet:gap-x-[20px] tablet:gap-y-[8px]">
                <div className="mx-auto max-w-[243px] tabletplus:max-w-[225px] mb-[12px] tablet:mb-0">
                  <InputField
                    type="text"
                    name="name"
                    placeholder="Ім’я"
                    inputClassName="input-order-bg border-[1px] border-gray-400 px-[16px] w-full h-[40px] rounded-[12px] placeholder:text-[12px] placeholder:text-[#a1a1aa] text-black"
                  />
                </div>
                <div className="mx-auto max-w-[243px] tabletplus:max-w-[225px] mb-[12px] tablet:mb-0">
                  <InputField
                    type="text"
                    name="phoneNumber"
                    placeholder="Номер телефону"
                    inputClassName="input-order-bg border-[1px] border-gray-400 px-[16px] w-full h-[40px] rounded-[12px] placeholder:text-[12px] placeholder:text-[#a1a1aa] text-black"
                  />
                </div>
                <div className="mx-auto max-w-[243px] tabletplus:max-w-[225px] mb-[12px] tablet:mb-0">
                  <InputField
                    type="text"
                    name="brand"
                    placeholder="Бренд"
                    inputClassName="input-order-bg border-[1px] border-gray-400 px-[16px] w-full h-[40px] rounded-[12px] placeholder:text-[12px] placeholder:text-[#a1a1aa] text-black"
                  />
                </div>
                <div className="mx-auto max-w-[243px] tabletplus:max-w-[225px] mb-[20px] tablet:mb-0">
                  <InputField
                    type="text"
                    name="model"
                    placeholder="Модель"
                    inputClassName="input-order-bg border-[1px] border-gray-400 px-[16px] w-full h-[40px] rounded-[12px] placeholder:text-[12px] placeholder:text-[#a1a1aa] text-black"
                  />
                </div>
              </div>
              <div className="tablet:flex tablet:gap-[20px] tablet:w-full tablet:mb-[50px]">
                <div className="max-w-[243px] tablet:w-full mb-[20px] tablet:mb-0">
                  <label className="text-[12px] mb-[8px] font-medium">
                    Пробіг
                  </label>
                  <input
                    type="range"
                    name="mileage"
                    min="0"
                    max="2000000"
                    step="5000"
                    value={mileage}
                    onChange={(e) => {
                      setMileage(Number(e.target.value));
                      formikProps.setFieldValue('mileage', e.target.value);
                    }}
                    className="w-full h-[2px]"
                  />
                  <div className="text-center mt-2 text-[#a1a1aa]">
                    {mileage} км
                  </div>
                </div>
                <div className="max-w-[243px] tablet:w-full mb-[36px] tablet:mb-0">
                  <label className="text-[12px] mb-[8px] font-medium">
                    Рік випуску
                  </label>
                  <input
                    type="range"
                    name="year"
                    min="1970"
                    max={currentYear}
                    value={year}
                    onChange={(e) => {
                      setYear(Number(e.target.value));
                      formikProps.setFieldValue('year', e.target.value);
                    }}
                    className="w-full h-[2px]"
                  />
                  <div className="text-center mt-2 text-[#a1a1aa]">
                    {year} рік
                  </div>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[313px] tablet:max-w-[205px]">
                <Button
                  className="mx-auto bg-gradient-red text-primary text-[14px] font-semibold rounded-sub-block-12 w-full h-[48px] tablet:h-[40px]"
                  type="submit"
                >
                  Надіслати
                </Button>
              </div>
            </div>
          )}
        </DynamicForm>
      </section>
    </Container>
  );
};

export default OrderFormModern;
