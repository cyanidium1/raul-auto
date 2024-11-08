import Navigation from './Navigation/Navigation';
import UserBar from './UserBar/UserBar';
import Burger from './Burger/Burger';
import Container from '@/components/Container/Container';
import LanguageSelection from '@/components/UI/LanguageSelection/LanguageSelection';
const Header = () => {
  return (
    <Container>
      <header className="mobile:pt-[13px] tablet:pt-[20px] pb-[12px] flex justify-between items-center">
        <Navigation />
        <UserBar />
        <div className="flex items-center gap-[16px]">
          <div className="pointuserbar:hidden">
            <LanguageSelection />
          </div>
          <Burger />
        </div>
      </header>
    </Container>
  );
};

export default Header;
