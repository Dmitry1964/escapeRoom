import { mainNavigationLevels } from '../../constants/const';
import DifficultyLevelItem from '../difficulty-level-item/difficulty-level-item';

const DifficultyLevelList = () : JSX.Element => {
  const a =2;
  return (
    <ul className="filter__list">
      {mainNavigationLevels.map((item) => (
        <DifficultyLevelItem  level = {item} key = {item.title} />
      ))}
    </ul>
  );
};

export default DifficultyLevelList;
