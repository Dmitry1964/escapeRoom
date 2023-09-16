import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchQuestsAction } from '../../store/api-actions';
import { useEffect } from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Loader from '../loader/loader';
import { RequesrStatus } from '../../constants/const';
import QuestsList from '../../components/quests-list/quests-list';
import { mainNavigationQuests } from '../../constants/const';
import GenresList from '../../components/genres-list/genres-list';
import DifficultyLevelList from '../../components/difficulty-level-list/difficulty-level-list';


const PageMain = () : JSX.Element => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchQuestsAction());
  }, [dispatch]);

  const loadStatus = useAppSelector((state) => state.loadQuestsListStatus);
  const questsList = useAppSelector((state) => state.questsList);

  return (
    <div className = 'wrapper'>
      <Header />
      {loadStatus === RequesrStatus.Pending && <Loader/>}
      <main className="page-content">
        <div className="container">
          <div className="page-content__title-wrapper">
            <h1 className="subtitle page-content__subtitle">квесты в Санкт-Петербурге
            </h1>
            <h2 className="title title--size-m page-content__title">Выберите тематику</h2>
          </div>
          <div className="page-content__item">
            <form className="filter" action="#" method="get">
              <fieldset className="filter__section">
                <legend className="visually-hidden">Тематика</legend>
                <GenresList genresMenu = {mainNavigationQuests}/>
              </fieldset>
              <fieldset className="filter__section">
                <legend className="visually-hidden">Сложность</legend>
                <DifficultyLevelList />
              </fieldset>
            </form>
          </div>
          <h2 className="title visually-hidden">Выберите квест</h2>
          <QuestsList questsList = {questsList}/>
        </div>
      </main>
      <Footer />
    </div>


  );
};

export default PageMain;
