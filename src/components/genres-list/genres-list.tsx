import GenresItem from '../genres-item/genres-item';
import { NavigationGenresListType } from '../../../types/quest-types';

type GenresListProp = {
  genresMenu: NavigationGenresListType[];
};

const GenresList = ({ genresMenu }: GenresListProp): JSX.Element => (
  <ul className="filter__list">
    {genresMenu.map((item) => (
      <GenresItem itemMenu={item} key={item.title} />
    ))}
  </ul>
);

export default GenresList;
