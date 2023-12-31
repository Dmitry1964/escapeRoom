import Header from '../../components/header/header';

const PageNotFound = (): JSX.Element => (
  <div className="wrapper">
    <Header />
    <main className="decorated-page quest-page">
      <div className="decorated-page__decor" aria-hidden="true">
        <picture>
          <img
            src="img/content/page-not-found/page-not-found.jpg"
            srcSet="img/content/page-not-found/page-not-found@2x.jpg 2x"
            width="1366"
            height="768"
            alt=""
          />
        </picture>
      </div>
      <div className="container container--size-l">
        <div className="quest-page__content">
          <h1 className="title title--size-l title--uppercase quest-page__title">
            page not found
          </h1>
          <a
            className="btn btn--accent btn--cta quest-page__btn"
            href="booking.html"
          >
            go to page main
          </a>
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

export default PageNotFound;
