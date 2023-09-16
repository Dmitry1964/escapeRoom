import GenresItem from '../genres-item/genres-item';
import { NavigationMainListType } from '../../../types/quest-types';

type GenresListProp = {
  genresMenu: NavigationMainListType[];
}

const GenresList = ({genresMenu} : GenresListProp) : JSX.Element => {
  const a = 2;
  return (
    <ul className='filter__list'>
      {genresMenu.map((item) => (
        <GenresItem itemMenu = {item} key = {item.title} />
      ))}
    </ul>
  );
};

export default GenresList;
