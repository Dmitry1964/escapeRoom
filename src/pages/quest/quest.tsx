import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchQuestCardAction } from '../../store/api-actions';
import {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import { AppRoute, RequesrStatus } from '../../constants/const';
import { Link } from 'react-router-dom';
import { getQuestLevel } from '../../constants/utils';
import Loader from '../loader/loader';

const Quest = (): JSX.Element => {
  const {questId} = useParams();
  const dispatch = useAppDispatch();
  const questData = useAppSelector((state) => state.quest);
  const {title, description, previewImg, previewImgWeb, coverImg, level, type, peopleMinMax} = questData;
  const [min, max] = peopleMinMax;
  const loadQuestStatus = useAppSelector((state) => state.loadQuestStatus);

  useEffect(() => {
    if (questId) {
      dispatch(fetchQuestCardAction(questId));
    }
  }, [dispatch, questId]);

  return (
    <div className="wrapper">
      {loadQuestStatus === RequesrStatus.Pending && <Loader />}
      <Header />
      <main className="decorated-page quest-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source
              type="image/webp"
              srcSet= {previewImgWeb}
            />
            <img
              src={previewImg}
              srcSet={coverImg}
              width="1366"
              height="768"
              alt=""
            />
          </picture>
        </div>
        <div className="container container--size-l">
          <div className="quest-page__content">
            <h1 className="title title--size-l title--uppercase quest-page__title">
              {title}
            </h1>
            <p className="subtitle quest-page__subtitle">
              <span className="visually-hidden">Жанр:</span>{type}
            </p>
            <ul className="tags tags--size-l quest-page__tags">
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
            <p className="quest-page__description">{description}</p>
            <Link
              className="btn btn--accent btn--cta quest-page__btn"
              to={AppRoute.BookingQuest}
            >
              Забронировать
            </Link>
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="container container--size-l">
          <div className="socials">
            <ul className="socials__list">
              <li className="socials__item">
                <a
                  className="socials__link"
                  href="#"
                  aria-label="Skype"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  <svg
                    className="socials__icon socials__icon--default"
                    width="28"
                    height="28"
                    aria-hidden="true"
                  >
                    <use xlinkHref="#icon-skype-default"></use>
                  </svg>
                  <svg
                    className="socials__icon socials__icon--interactive"
                    width="28"
                    height="28"
                    aria-hidden="true"
                  >
                    <use xlinkHref="#icon-skype-interactive"></use>
                  </svg>
                </a>
              </li>
              <li className="socials__item">
                <a
                  className="socials__link"
                  href="#"
                  aria-label="ВКонтакте"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  <svg
                    className="socials__icon socials__icon--default"
                    width="28"
                    height="28"
                    aria-hidden="true"
                  >
                    <use xlinkHref="#icon-vk-default"></use>
                  </svg>
                  <svg
                    className="socials__icon socials__icon--interactive"
                    width="28"
                    height="28"
                    aria-hidden="true"
                  >
                    <use xlinkHref="#icon-vk-interactive"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Quest;
