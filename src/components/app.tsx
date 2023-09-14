import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageMain from '../pages/page-main/page-main';
import BookingQuest from '../pages/booking-quest/booking-quest';
import { AppRoute } from '../constants/const';

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
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
