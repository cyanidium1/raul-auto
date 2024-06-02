'use client';
import DynamicForm from '@/components/UI/DynamicForm/DynamicForm';
import InputField from '@/components/UI/InputField/InputField';
import { FormikValues } from 'formik';

const initialValues = {
  password: '',
  newpassword: '',
};

const ChangePassword = () => {
  const handleSubmit = (value: FormikValues) => {
    console.log(value);
  };
  return (
    <div className="bg-gradient-sub-block rounded-sub-block-26 p-[38px] mobile:w-full desktop:max-w-[544px] w-full">
      <h2 className="text-primary text-24 font-bold mb-[32px]">
        Изменить пароль
      </h2>
      <DynamicForm initialValues={initialValues} onSubmit={handleSubmit}>
        {(formikProps) => (
          <div className="flex flex-col gap-6">
            <div>
              <InputField
                type="password"
                name="password"
                label="Пароль"
                placeholder="Введите старый пароль"
                labelClassName="text-18 mb-[10px] font-semibold"
                inputClassName="placeholder:text-placeholderText placeholder:text-18 text-primary placeholder:font-semibold flex border-solid border-[1px] border-primary rounded-sub-block-12 bg-input px-[20px] py-[18px] w-full h-[60px]"
              />
            </div>
            <div>
              <div className="flex items-center gap-3">
                <div className="w-full">
                  <InputField
                    type="password"
                    name="newpassword"
                    label="Новый пароль"
                    placeholder="Введите новый пароль"
                    labelClassName="text-18 mb-[10px] font-semibold"
                    inputClassName="placeholder:text-placeholderText placeholder:text-18 text-primary placeholder:font-semibold flex border-solid border-[1px] border-primary rounded-sub-block-12 bg-input px-[20px] py-[18px] w-full h-[60px]"
                  />
                </div>
                <div className="self-end">
                  <button
                    className="flex items-center justify-center w-[126px] h-[60px] rounded-sub-block-12 bg-copybtn py-[18px] px-[20px] font-bold text-18 text-primary transform transition duration-300 ease-in-out hover:scale-105 hover:text-hoverprimary focus:outline-focus outline-none"
                    type="submit"
                  >
                    Изменить
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </DynamicForm>
    </div>
  );
};

export default ChangePassword;
