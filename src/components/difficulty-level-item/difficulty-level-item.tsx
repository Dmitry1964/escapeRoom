import { NavigationLevelsListType } from '../../../types/quest-types';

type DifficultyLevelItemProps = {
  level: NavigationLevelsListType;
}

const DifficultyLevelItem = ({level} : DifficultyLevelItemProps): JSX.Element => {
  const {name, title, isActive} = level;
  return (
    <li className="filter__item">
      <input onChange = {() => true} type="radio" name="level" id={title} checked = {isActive} />
      <label className="filter__label" htmlFor={title}>
        <span className="filter__label-text">{name}</span>
      </label>
    </li>
  );
};

export default DifficultyLevelItem;
