import { NavigationGenresListType } from '../../../types/quest-types';
import cn from 'classnames';

type GenresItem = {
  itemMenu: NavigationGenresListType;
}

const GenresItem = ({itemMenu} : GenresItem): JSX.Element => {
  const {name, title, icon, isActive} = itemMenu;
  return (
    <li className="filter__item">
      <input onChange = {() => true} type="radio" name="type" id={title} checked = {isActive} />
      <label className="filter__label" htmlFor={title}>
        <svg className="filter__icon" width="26" height="30" aria-hidden="true">
          <use xlinkHref={icon}></use>
        </svg>
        <span className={cn('', {'filter__label-text' : isActive})}>{name}</span>
      </label>
    </li>
  );
};

export default GenresItem;
