'use client';
import InputField from '@/components/UI/InputField/InputField';
import Button from '@/components/UI/Button/Button';
import DynamicForm from '@/components/UI/DynamicForm/DynamicForm';
import Container from '@/components/Container/Container';
import { FormikValues } from 'formik';
import { useState, useEffect } from 'react';
import { IoIosArrowUp, IoIosArrowDown, IoMdClose } from 'react-icons/io';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hook';
import {
  closeModalFeedback,
  openModalFeedback,
} from '@/Redux/feedbackFormSlice/feedbackFormSlice';
import * as yup from 'yup';
import { isValidPhoneNumber } from 'libphonenumber-js';

const initialValues = {
  date: 'Сьогодні',
  hour: '09',
  minute: '00',
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

const FormCall = () => {
  //   const [isVisible, setIsVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(initialValues.date);
  const [selectedHour, setSelectedHour] = useState(Number(initialValues.hour));
  const [selectedMinute, setSelectedMinute] = useState(
    Number(initialValues.minute)
  );
  const dispatch = useAppDispatch();
  const isVisible = useAppSelector(
    (state) => state.feedbackForm.isModalFeedbackOpen
  );

  useEffect(() => {
    // Проверяем, если форма уже была показана, то не показываем снова
    if (!sessionStorage.getItem('formShown')) {
      const timer = setTimeout(() => {
        dispatch(openModalFeedback());
        sessionStorage.setItem('formShown', 'true'); // Сохраняем, что форма была показана
      }, 30000); // 30 секунд

      return () => clearTimeout(timer);
    }
  }, [dispatch]);

  const handleSubmit = (values: FormikValues) => {
    console.log(values);
  };

  const increaseHour = (formikProps: any) => {
    setSelectedHour((prev) => (prev + 1) % 24);
    formikProps.setFieldValue(
      'hour',
      String((selectedHour + 1) % 24).padStart(2, '0')
    );
  };

  const decreaseHour = (formikProps: any) => {
    setSelectedHour((prev) => (prev === 0 ? 23 : prev - 1));
    formikProps.setFieldValue(
      'hour',
      String(selectedHour === 0 ? 23 : selectedHour - 1).padStart(2, '0')
    );
  };

  const increaseMinute = (formikProps: any) => {
    setSelectedMinute((prev) => (prev + 15) % 60);
    formikProps.setFieldValue(
      'minute',
      String((selectedMinute + 15) % 60).padStart(2, '0')
    );
  };

  const decreaseMinute = (formikProps: any) => {
    setSelectedMinute((prev) => (prev === 0 ? 45 : prev - 15));
    formikProps.setFieldValue(
      'minute',
      String(selectedMinute === 0 ? 45 : selectedMinute - 15).padStart(2, '0')
    );
  };

  const handleClose = () => {
    dispatch(closeModalFeedback());
  };

  if (!isVisible) return null;

  return (
    <section className="mx-[10px] fixed z-[200] inset-x-0 bottom-10 rounded-sub-block-22 border-[1px] border-gay-500 bg-black py-[48px] text-white transition-opacity duration-500 opacity-0 animate-fadeIn">
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 text-white text-[24px] cursor-pointer"
      >
        <IoMdClose />
      </button>
      <Container>
        <div className="w-full max-w-[926px] mx-auto">
          <h2 className="uppercase mobile:text-center tablet:text-left text-[20px] font-bold mb-[22px]">
            ПЕРЕДЗВОНИМО ВАМ
          </h2>
          <DynamicForm
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {(formikProps) => (
              <div className="flex mobile:flex-col mobile:gap-10 tablet:gap-0 mobile:justify-center mobile:items-center tablet:flex-row">
                {/* Date Select */}
                <div className="relative w-full max-w-[244px] mobile:mr-0 tablet:mr-[32px]">
                  <select
                    name="date"
                    value={selectedDate}
                    onChange={(e) => {
                      setSelectedDate(e.target.value);
                      formikProps.setFieldValue('date', e.target.value);
                    }}
                    className="bg-input-for-form-call border-[1px] border-gray-500 text-[12px] outline-none cursor-pointer font-medium text-white w-full h-[40px] rounded-sub-block-12 px-[16px] appearance-none pr-[32px]"
                  >
                    <option value="Сегодня">Сьогодні</option>
                    <option value="Завтра">Завтра</option>
                  </select>

                  <div className="absolute top-1/2 right-4 transform -translate-y-1/2 pointer-events-none">
                    <svg
                      className="w-3 h-3 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>

                {/* Hour Selector with Buttons */}
                <div className="flex tablet:mr-[32px]">
                  <div className="mr-[12px] w-[82px] h-[40px] flex items-center justify-center gap-[13px] bg-input-for-form-call border-[1px] border-gray-500 rounded-[8px]">
                    <div className="text-[28px] text-white font-medium">
                      {String(selectedHour).padStart(2, '0')}
                    </div>
                    <div>
                      <button
                        type="button"
                        onClick={() => decreaseHour(formikProps)}
                        className=""
                      >
                        <IoIosArrowUp />
                      </button>

                      <button
                        type="button"
                        onClick={() => increaseHour(formikProps)}
                        className=""
                      >
                        <IoIosArrowDown />
                      </button>
                    </div>
                  </div>

                  {/* Minute Selector with Buttons */}
                  <div className="w-[82px] h-[40px] flex items-center justify-center gap-[13px] bg-input-for-form-call border-[1px] border-gray-500 rounded-[8px]">
                    <div className="text-[28px] text-white font-medium">
                      {String(selectedMinute).padStart(2, '0')}
                    </div>
                    <div>
                      <button
                        type="button"
                        onClick={() => decreaseMinute(formikProps)}
                        className=""
                      >
                        <IoIosArrowUp />
                      </button>

                      <button
                        type="button"
                        onClick={() => increaseMinute(formikProps)}
                        className=""
                      >
                        <IoIosArrowDown />
                      </button>
                    </div>
                  </div>
                </div>
                <InputField
                  type="text"
                  name="phoneNumber"
                  placeholder="Номер телефону"
                  inputClassName="bg-input-for-form-call text-white border-[1px] border-gray-500 rounded-[12px] tablet:mr-[12px] px-[16px] placeholder:text-[12px] placeholder-gray-400 w-full max-w-[225px] h-[40px]"
                  errorClassName="absolute bottom-[10px] text-red-500 text-[16px] mt-1"
                />

                <Button
                  className="bg-red-600 text-white text-[14px] font-semibold rounded-sub-block-12 w-full max-w-[205px] h-[40px]"
                  type="submit"
                >
                  Чекаю дзвінок
                </Button>
              </div>
            )}
          </DynamicForm>
        </div>
      </Container>
    </section>
  );
};

export default FormCall;
