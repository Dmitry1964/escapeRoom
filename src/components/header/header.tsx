import Logo from '../logo/logo';
import NavigationHeader from '../nav-header/nav-header';

const Header = () : JSX.Element => {
  const a = 2;
  return (
    <header className="header">
      <div className="container container--size-l">
        <Logo />
        <NavigationHeader />
        <div className="header__side-nav">
          <a className="btn btn--accent header__side-item" href="#">
            Выйти
          </a>
          <a
            className="link header__side-item header__phone-link"
            href="tel:88003335599"
          >
            8 (000) 111-11-11
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
