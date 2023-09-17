import FormLogin from '../../components/form-login/form-login';
import Header from '../../components/header/header';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';
import { AppRoute, AuthStatus } from '../../constants/const';

const Login = () : JSX.Element => {
  const NO_VISIBILITY = true;
  const loginStatus = useAppSelector((state) => state.authorizationStatus);
  return (
    <div className="wrapper">
      {loginStatus === AuthStatus.Auth && <Navigate to={AppRoute.Main} />}
      <Header visibility = {NO_VISIBILITY} />
      <main className="decorated-page login">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source
              type="image/webp"
              srcSet="img/content/maniac/maniac-size-m.webp, img/content/maniac/maniac-size-m@2x.webp 2x"
            />
            <img
              src="img/content/maniac/maniac-size-m.jpg"
              srcSet="img/content/maniac/maniac-size-m@2x.jpg 2x"
              width="1366"
              height="768"
              alt=""
            />
          </picture>
        </div>
        <div className="container container--size-l">
          <div className="login__form">
            <FormLogin />
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

export default Login;
