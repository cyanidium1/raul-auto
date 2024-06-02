'use client';
import DynamicForm from '@/components/UI/DynamicForm/DynamicForm';
import InputField from '@/components/UI/InputField/InputField';
import { FormikValues } from 'formik';

const initialValues = {
  phone: '',
  name: '',
  comment: '',
};
const QuestionsForm = () => {
  const handleSubmit = (value: FormikValues) => {
    console.log(value);
  };
  return (
    <div>
      <DynamicForm initialValues={initialValues} onSubmit={handleSubmit}>
        {(formikProps) => (
          <div className="flex flex-col items-center">
            <div className="mb-[24px] flex-1 w-full">
              <InputField
                type="tel"
                name="phone"
                label="Номер телефона"
                placeholder="+ 380 000 00 00"
                labelClassName="text-16 mb-[16px] font-semibold"
                inputClassName="placeholder:text-placeholderText placeholder:text-18 text-primary placeholder:font-semibold flex border-solid border-[1px] border-primary rounded-sub-block-12 bg-input px-[20px] py-[18px] w-full h-[60px]"
              />
            </div>
            <div className="mb-[24px] w-full">
              <InputField
                type="text"
                name="name"
                label="Имя"
                placeholder="Фамилия Имя"
                labelClassName="text-16 mb-[16px] font-semibold"
                inputClassName="placeholder:text-placeholderText placeholder:text-18 text-primary placeholder:font-semibold flex border-solid border-[1px] border-primary rounded-sub-block-12 bg-input px-[20px] py-[18px] w-full h-[60px]"
              />
            </div>
            <div className="mb-[40px] w-full">
              <InputField
                as="textarea"
                name="comment"
                label="Комментарий"
                placeholder="Комментарий"
                labelClassName="text-16 mb-[16px] font-semibold"
                inputClassName="placeholder:text-placeholderText placeholder:text-18 text-primary placeholder:font-semibold border-solid border-[1px] border-primary rounded-sub-block-12 bg-input px-[20px] py-[18px] w-full h-[108px]"
              />
            </div>
            <button
              className="bg-gradient-red text-primary text-18 font-bold rounded-sub-block-16 flex items-center justify-center px-[20px] py-[18px] w-full h-[60px] transform transition duration-300 ease-in-out hover:scale-105 hover:text-hoverprimary focus:outline-focus outline-none"
              type="submit"
            >
              Отправить
            </button>
          </div>
        )}
      </DynamicForm>
    </div>
  );
};

export default QuestionsForm;
