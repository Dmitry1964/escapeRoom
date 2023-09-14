import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageMain from '../pages/page-main/page-main';
import BookingQuest from '../pages/booking-quest/booking-quest';
import { AppRoute } from '../constants/const';
import PageNotFound from '../pages/page-not found/page-not-found';

const App = () : JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoute.Main}>
        <Route
          index
          element={<PageMain/>}
        />

        <Route
          path={AppRoute.BookingQuest}
          element={<BookingQuest/>}
        />
        <Route
          path = '*'
          element={<PageNotFound/>}
        />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
