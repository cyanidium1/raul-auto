'use client';
import Button from '@/components/UI/Button/Button';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hook';
import { openModalFeedback } from '@/Redux/feedbackFormSlice/feedbackFormSlice';
import { useRouter } from 'next/navigation';

const ButtonFeedback = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector(
    (state) => state.feedbackForm.isModalFeedbackOpen
  );

  const handleClick = () => {
    dispatch(openModalFeedback());
    router.push('/#order-form');
  };
  return (
    !isModalOpen && (
      <div className="fixed z-[200] mobile:bottom-5 mobile:right-5 tablet:bottom-10 tablet:right-10 ">
        <Button
          className="mobile:bg-white mobile:w-[60px] mobile:h-[60px] tablet:w-[126px] tablet:h-[126px] rounded-full text-red-600 mobile:text-[8px] tablet:text-[15px] font-bold uppercase transform transition duration-300 ease-in-out hover:scale-105 hover:text-gray-700"
          onClick={handleClick}
        >
          Підібрати авто
        </Button>
      </div>
    )
  );
};

export default ButtonFeedback;
