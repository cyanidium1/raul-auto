'use client';
import InputField from '@/components/UI/InputField/InputField';
import Button from '@/components/UI/Button/Button';
import DynamicForm from '@/components/UI/DynamicForm/DynamicForm';
import { FormikValues } from 'formik';

const initialValues = {
  phoneNumber: '',
};

const ContactsBlock = () => {
  const handleSubmit = (value: FormikValues) => {
    console.log(value);
  };

  return (
    <section className="relative py-[64px] px-[40px] lg:py-[52px] lg:px-[] mobile:bg-[url('/contacs-mobile.jpg')] sm:bg-[url('/contacs-desktop.jpg')] mobile:bg-no-repeat mobile:bg-center mobile:bg-cover">
      <div className="absolute top-0 left-0 right-0 h-[40px] bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-[40px] bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
      <DynamicForm initialValues={initialValues} onSubmit={handleSubmit}>
        {(formikProps) => (
          <div>
            <h2 className="max-w-[270px] lg:max-w-[650px] mb-[16px] mx-auto text-[28px] lg:text-[48px] text-white uppercase text-center font-bold">
              Залиште номер і ми передзвонимо вам
            </h2>
            <p className="mx-auto max-w-[290px] lg:max-w-[620px] uppercase text-[16px] lg:text-[24px] text-center text-red-600 mb-[46px] lg:mb-[48px] font-bold">
              Не дзвонимо за 30 хвилин - даруємо знижку $99
            </p>
            <div className="lg:flex lg:justify-center lg:gap-[10px]">
              <div className="mx-auto lg:mx-0 max-w-[313px] lg:max-w-[225px] mb-[10px] lg:mb-0">
                <InputField
                  type="text"
                  name="phoneNumber"
                  placeholder="Введіть Ваш номер"
                  inputClassName="px-[16px] opacity-gradient w-full h-[48px] lg:h-[40px] rounded-[12px] placeholder:text-[12px] placeholder:text-[#a1a1aa] text-[#a1a1aa]"
                />
              </div>
              <div className="mx-auto lg:mx-0 w-full max-w-[313px] lg:max-w-[132px]">
                <Button
                  className="mx-auto bg-gradient-red text-primary text-[14px] font-semibold rounded-sub-block-12 w-full h-[48px] lg:h-[40px]"
                  type="submit"
                >
                  Надіслати
                </Button>
              </div>
            </div>
          </div>
        )}
      </DynamicForm>
    </section>
  );
};

export default ContactsBlock;
