import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageMain from '../pages/page-main/page-main';
import BookingQuest from '../pages/booking-quest/booking-quest';
import { AppRoute } from '../constants/const';
import PageNotFound from '../pages/page-not found/page-not-found';
import Contacts from '../pages/constacts/contacts';
import Login from '../pages/login/login';
import Quest from '../pages/quest/quest';
import PrivateRouter from './private-route/private-route';
import { useAppSelector } from '../hooks/hooks';
import MyQuests from '../pages/my-quests/my-quests';

const App = (): JSX.Element => {
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main}>
          <Route index element={<PageMain />} />
          <Route path={AppRoute.Contacts} element={<Contacts />} />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route path={AppRoute.Quest} element={<Quest />}>
            <Route path=":questId" element={<Quest />} />
          </Route>
          <Route
            path={AppRoute.BookingQuest}
            element={
              <PrivateRouter authorizationStatus={authStatus}>
                <BookingQuest />
              </PrivateRouter>
            }
          />
          <Route
            path={AppRoute.Reservation}
            element={
              <PrivateRouter authorizationStatus={authStatus}>
                <MyQuests />
              </PrivateRouter>
            }
          />

          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
