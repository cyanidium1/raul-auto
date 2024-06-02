import DynamicComponentPage from '@/components/Profile/DynamicComponentPage/DynamicComponentPage';

interface ParamsId {
  id: string;
}
const DynamicPage = ({ id }: ParamsId) => {
  return (
    <section className="mobile:pt-[50px] tablet:pt-[70px] desktop:pt-[112px] px-3">
      <DynamicComponentPage id={id} />
    </section>
  );
};

export default DynamicPage;
