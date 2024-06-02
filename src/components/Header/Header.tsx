import Navigation from './Navigation/Navigation';
import UserBar from './UserBar/UserBar';
import Burger from './Burger/Burger';
const Header = () => {
  return (
    <header className="px-10 py-6 bg-gradient-sub-block flex justify-between">
      <Navigation />
      <UserBar />
      <Burger />
    </header>
  );
};

export default Header;
