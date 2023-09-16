import cn from 'classnames';
import { Link } from 'react-router-dom';
import { navigationList } from '../../constants/const';

const NavigationHeader = (): JSX.Element => {
  const a = 2;
  return (
    <nav className="main-nav header__main-nav">
      <ul className="main-nav__list">
        {navigationList.map((item) => (
          <li className="main-nav__item" key={item.title}>
            <Link
              className={cn('link', { 'active': item.isActive })}
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
