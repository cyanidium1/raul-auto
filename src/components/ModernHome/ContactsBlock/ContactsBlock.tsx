'use client';
import { motion } from 'framer-motion';
import InputField from '@/components/UI/InputField/InputField';
import Button from '@/components/UI/Button/Button';
import DynamicForm from '@/components/UI/DynamicForm/DynamicForm';
import { FormikValues } from 'formik';
import * as yup from 'yup';
import { isValidPhoneNumber } from 'libphonenumber-js';

const initialValues = {
  phoneNumber: '',
};

const validationSchema = yup.object({
  phoneNumber: yup
    .string()
    .test(
      'valid-phone',
      'Номер телефону не валідний',
      (value) => value && isValidPhoneNumber(value)
    )
    .required('Номер телефону обов’язковий для заповнення'),
});

const ContactsBlock = () => {
  const handleSubmit = (value: FormikValues) => {
    console.log(value);
  };

  return (
<<<<<<< HEAD
    <section className="relative py-[64px] px-[40px] lg:py-[52px] lg:px-[] mobile:bg-[url('/contacs-mobile.jpg')] sm:bg-[url('/contacs-desktop.jpg')] mobile:bg-no-repeat mobile:bg-center mobile:bg-cover">
      <div className="absolute top-0 left-0 right-0 h-[40px] bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-[40px] bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
      <DynamicForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
=======
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative py-[64px] px-[40px] lg:py-[52px] mobile:bg-[url('/contacs-mobile.jpg')] sm:bg-[url('/contacs-desktop.jpg')] mobile:bg-no-repeat mobile:bg-center mobile:bg-cover"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        viewport={{ once: true, amount: 0.3 }}
        className="absolute top-0 left-0 right-0 h-[40px] bg-gradient-to-b from-black to-transparent pointer-events-none"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="absolute bottom-0 left-0 right-0 h-[40px] bg-gradient-to-b from-transparent to-black pointer-events-none"
      ></motion.div>

      <DynamicForm initialValues={initialValues} onSubmit={handleSubmit}>
>>>>>>> 89d0f188f5a8f893ccce202dfd0a72745ddc026b
        {(formikProps) => (
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true, amount: 0.3 }}
              className="max-w-[270px] lg:max-w-[650px] mb-[16px] mx-auto text-[28px] lg:text-[48px] text-white uppercase text-center font-bold"
            >
              Залиште номер і ми передзвонимо вам
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true, amount: 0.3 }}
              className="mx-auto max-w-[290px] lg:max-w-[620px] uppercase text-[16px] lg:text-[24px] text-center text-red-600 mb-[46px] lg:mb-[48px] font-bold"
            >
              Не дзвонимо за 30 хвилин - даруємо знижку $99
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="lg:flex lg:justify-center lg:gap-[10px]"
            >
              <div className="mx-auto lg:mx-0 max-w-[313px] lg:max-w-[225px] mb-[10px] lg:mb-0">
                <InputField
                  type="text"
                  name="phoneNumber"
                  placeholder="Введіть Ваш номер"
                  inputClassName="px-[16px] opacity-gradient w-full h-[48px] lg:h-[40px] rounded-[12px] placeholder:text-[12px] placeholder:text-[#a1a1aa] text-[#a1a1aa]"
                  errorClassName="absolute bottom-[10px] text-red-500 text-[16px] mt-1"
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
            </motion.div>
          </div>
        )}
      </DynamicForm>
    </motion.section>
  );
};

export default ContactsBlock;
