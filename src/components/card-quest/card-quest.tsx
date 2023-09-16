import { QuestType } from '../../../types/quest-types';
import { QuestIntricacy, QuestLevel } from '../../constants/const';

type CardQuestProps = {
  questCard: QuestType;
}

const CardQuest = ({questCard} : CardQuestProps): JSX.Element => {
  const {title, previewImg, previewImgWebp, level, peopleMinMax} = questCard;
  const [min, max] = peopleMinMax;

  const getQuestLevel = () => {
    switch(level) {
      case QuestLevel.hard:
        return QuestIntricacy.Hard;
      case QuestLevel.medium:
        return QuestIntricacy.Medium;
      case QuestLevel.easy:
        return QuestIntricacy.Easy;
    }
  };

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
          <a className="quest-card__link" href="quest.html">
            {title}
          </a>
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
            {getQuestLevel()}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CardQuest;
