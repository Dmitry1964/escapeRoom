import cn from 'classnames';
import { Link } from 'react-router-dom';
import { AuthStatus, navigationList } from '../../constants/const';

type NavHeaderProps = {
  menuItem?: string;
  authStatus?: string;
}

const NavigationHeader = ({menuItem, authStatus} : NavHeaderProps): JSX.Element => {
  const a = 2;
  return (
    <nav className="main-nav header__main-nav">
      <ul className="main-nav__list">
        {navigationList.map((item) => (
          <li className="main-nav__item" key={item.title}>
            <Link
              className={cn('link', { 'active': item.isActive, 'visually-hidden': menuItem === item.title && authStatus === AuthStatus.NoAuth })}
              to={item.url}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationHeader;
