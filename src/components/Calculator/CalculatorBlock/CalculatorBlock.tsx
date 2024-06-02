import InpuDataCalculator from '../InpuDataCalculator/InpuDataCalculator';
import TotalAmountCalculator from '../TotalAmountCalculator/TotalAmountCalculator';
const CalculatorBlock = () => {
  return (
    <div className="mobile:pt-[20px] mobile:pb-[20px] tablet:pt-[52px] tablet:pb-[52px]">
      <div className="max-w-[1696px] mx-auto">
        <div className="flex gap-[32px] justify-center items-center flex-wrap desktop:flex-nowrap">
          <InpuDataCalculator />
          <TotalAmountCalculator />
        </div>
      </div>
    </div>
  );
};

export default CalculatorBlock;
