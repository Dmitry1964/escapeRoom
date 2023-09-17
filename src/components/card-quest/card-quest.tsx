import { QuestType } from '../../../types/quest-types';
import { AppRoute } from '../../constants/const';
import { Link } from 'react-router-dom';
import { getQuestLevel } from '../../constants/utils';

type CardQuestProps = {
  questCard: QuestType;
}

const CardQuest = ({questCard} : CardQuestProps): JSX.Element => {
  const {title, previewImg, previewImgWebp, level, peopleMinMax, id} = questCard;
  const [min, max] = peopleMinMax;
  const questPageRef = `${AppRoute.Quest}/${id}`;

  return (
    <div className="quest-card">
      <div className="quest-card__img">
        <picture>
          <source
            type="image/webp"
            srcSet={previewImgWebp}
          />
          <img
            src={previewImg}
            width="344"
            height="232"
            alt={title}
          />
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <Link className="quest-card__link"
            to={questPageRef}
          >
            {title}
          </Link>
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width="11" height="14" aria-hidden="true">
              <use xlinkHref="#icon-person"></use>
            </svg>
            {min}&ndash;{max}&nbsp;чел
          </li>
          <li className="tags__item">
            <svg width="14" height="14" aria-hidden="true">
              <use xlinkHref="#icon-level"></use>
            </svg>
            {getQuestLevel(level)}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CardQuest;
