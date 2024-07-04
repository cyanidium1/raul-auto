'use client';
import DynamicForm from '@/components/UI/DynamicForm/DynamicForm';
import InputField from '@/components/UI/InputField/InputField';
import Button from '@/components/UI/Button/Button';
import { FormikValues } from 'formik';
import { sendMessage } from '@/app/utils/sendMessage';

const initialValues = {
  phone: '',
  telegram: '',
  name: '',
};

const UserContactsForm = () => {

  const handleSubmit = (values: FormikValues) => {
    console.log(values);

    const { phone, telegram, name } = values;
    const contactInfo = `Имя: ${name}, Телефон: ${phone}, Telegram: ${telegram}`;

    if (contactInfo.trim() !== '') {
      sendMessage(`Заявка на сотрудничество. ${contactInfo}`);
    }
  };

  return (
    <div className="max-w-[698px] mobile:rounded-sub-block-10 tablet:rounded-sub-block-26 desktop:rounded-sub-block-42 bg-gradient-sub-block mobile:p-[30px] md:p-[64px] mx-auto">
      <h2 className="max-w-[590px] text-center mobile:text-[20px] md:text-[33px] text-primary font-bold mb-[32px] md:mb-[64px] mx-auto">
        <span className="block">Оставь свои контакты,</span>
        <span className="block">и наша команда свяжется </span>
        <span className="block">с тобой в ближайшее время</span>
      </h2>
      <DynamicForm initialValues={initialValues} onSubmit={handleSubmit}>
        {(formikProps) => (
          <div className="flex flex-col items-center">
            <div className="flex flex-col md:flex-row mobile:gap-2 tablet:gap-6 items-center mb-[24px] w-full">
              <div className="flex-1 w-full">
                <InputField
                  type="tel"
                  name="phone"
                  placeholder="Номер телефона"
                  inputClassName="placeholder:text-placeholderText placeholder:text-18 text-primary placeholder:font-semibold flex border-solid border-[1px] border-primary rounded-sub-block-12 bg-input px-[20px] py-[18px] w-full h-[60px]"
                />
              </div>
              <div className="text-primary text-18 font-semibold">Или</div>
              <div className="flex-1 w-full">
                <InputField
                  type="text"
                  name="telegram"
                  placeholder="Telegram"
                  inputClassName="placeholder:text-placeholderText placeholder:text-18 text-primary placeholder:font-semibold flex border-solid border-[1px] border-primary rounded-sub-block-12 bg-input px-[20px] py-[18px] w-full h-[60px]"
                />
              </div>
            </div>
            <div className="mb-[40px] w-full">
              <InputField
                type="text"
                name="name"
                placeholder="Как вас зовут?"
                inputClassName="placeholder:text-placeholderText placeholder:text-18 text-primary placeholder:font-semibold flex border-solid border-[1px] border-primary rounded-sub-block-12 bg-input px-[20px] py-[18px] w-full h-[60px]"
              />
            </div>
            <Button
              className="bg-gradient-red text-primary text-18 font-bold rounded-sub-block-16 flex items-center justify-center px-[20px] py-[18px] w-full h-[60px]"
              type="submit"
            >
              Отправить
            </Button>
          </div>
        )}
      </DynamicForm>
    </div>
  );
};

export default UserContactsForm;
