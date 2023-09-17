import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageMain from '../pages/page-main/page-main';
import BookingQuest from '../pages/booking-quest/booking-quest';
import { AppRoute } from '../constants/const';
import PageNotFound from '../pages/page-not found/page-not-found';
import Contacts from '../pages/constacts/contacts';
import Login from '../pages/login/login';
import Quest from '../pages/quest/quest';

const App = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoute.Main}>
        <Route index element={<PageMain />} />

        <Route path={AppRoute.BookingQuest} element={<BookingQuest />} />
        <Route path={AppRoute.Contacts} element={<Contacts />} />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path={AppRoute.Quest} element={<Quest />}>
          <Route path=':questId' element={<Quest/>} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
