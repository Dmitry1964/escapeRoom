import { AppRoute, AuthStatus } from '../../constants/const';
import { useAppSelector } from '../../hooks/hooks';
import Logo from '../logo/logo';
import NavigationHeader from '../nav-header/nav-header';
import { Link } from 'react-router-dom';

const Header = (): JSX.Element => {
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  return (
    <header className="header">
      <div className="container container--size-l">
        <Logo />
        <NavigationHeader />
        <div className="header__side-nav">
          {authStatus === AuthStatus.Auth ? (
            <Link className="btn btn--accent header__side-item" to="#">
              Выйти
            </Link>
          ) : (
            <Link className="btn btn--accen header__side-item" to={AppRoute.Login}>
              Войти
            </Link>
          )}
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
