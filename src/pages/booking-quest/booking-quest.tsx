import { useAppSelector } from '../../hooks/hooks';
import Header from '../../components/header/header';
import { timeSpendingToday, timeSpendingTomorrow } from '../../constants/const';
import MyInput from '../../ui/my-input/my-input';
import Footer from '../../components/footer/footer';
import { useState } from 'react';

const BookingQuest = (): JSX.Element => {
  const questData = useAppSelector((state) => state.quest);
  const { title, previewImg, previewImgWeb, coverImg } = questData;
  const questId = useAppSelector((state) => state.quest.id);

  const [formData, setFormData] = useState({
    date: '',
    time: '',
    contactPerson: '',
    phone: '',
    withChildren: true,
    peopleCount: 1,
    placeId: questId,
  });

  const submitForm = (evt:React.FormEvent) => {
    evt.preventDefault();
  };


  return (
    <div className="wrapper">
      <Header />
      <main className="page-content decorated-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet={previewImgWeb} />
            <img
              src={previewImg}
              srcSet={coverImg}
              width="1366"
              height="1959"
              alt={title}
            />
          </picture>
        </div>
        <div className="container container--size-s">
          <div className="page-content__title-wrapper">
            <h1 className="subtitle subtitle--size-l page-content__subtitle">
              Бронирование квеста
            </h1>
            <p className="title title--size-m title--uppercase page-content__title">
              {title}
            </p>
          </div>
          <div className="page-content__item">
            <div className="booking-map">
              <div className="map">
                <div className="map__container">
                  <img src="img/map.png" width="890" height="600" />
                </div>
              </div>
              <p className="booking-map__address">
                Вы&nbsp;выбрали: наб. реки Карповки&nbsp;5, лит&nbsp;П, м.
                Петроградская
              </p>
            </div>
          </div>
          <form
            onSubmit={(evt) => submitForm(evt)}
            className="booking-form"
            action="https://echo.htmlacademy.ru/"
            method="post"
          >
            <fieldset className="booking-form__section">
              <legend className="visually-hidden">Выбор даты и времени</legend>
              <fieldset className="booking-form__date-section">
                <legend className="booking-form__date-title">Сегодня</legend>
                <div className="booking-form__date-inner-wrapper">
                  {timeSpendingToday.map((item) => (
                    <label
                      className="custom-radio booking-form__date"
                      key={item.id}
                    >
                      <MyInput
                        onChange={(evt) =>
                          setFormData({
                            ...formData,
                            date: evt.target.value,
                            time: evt.target.value,
                          })}
                        type={item.type}
                        id={item.id}
                        name={item.name}
                        value={item.value}
                      />
                      <span className="custom-radio__label">{item.time}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
              <fieldset className="booking-form__date-section">
                <legend className="booking-form__date-title">Завтра</legend>
                <div className="booking-form__date-inner-wrapper">
                  {timeSpendingTomorrow.map((item) => (
                    <label
                      className="custom-radio booking-form__date"
                      key={item.id}
                    >
                      <MyInput
                        onChange={(evt) =>
                          setFormData({
                            ...formData,
                            date: evt.target.value,
                            time: evt.target.value,
                          })}
                        type={item.type}
                        id={item.id}
                        name={item.name}
                        value={item.value}
                      />
                      <span className="custom-radio__label">{item.time}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
            </fieldset>
            <fieldset className="booking-form__section">
              <legend className="visually-hidden">Контактная информация</legend>
              <div className="custom-input booking-form__input">
                <label className="custom-input__label" htmlFor="name">
                  Ваше имя
                </label>
                <input
                  value={formData.contactPerson}
                  onChange={(evt) =>
                    setFormData({
                      ...formData,
                      contactPerson: evt.target.value,
                    })}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Имя"
                  required
                  pattern="[А-Яа-яЁёA-Za-z'- ]{1,}"
                />
              </div>
              <div className="custom-input booking-form__input">
                <label className="custom-input__label" htmlFor="tel">
                  Контактный телефон
                </label>
                <input
                  value={formData.phone}
                  onChange={(evt) =>
                    setFormData({ ...formData, phone: evt.target.value })}
                  type="tel"
                  id="tel"
                  name="tel"
                  placeholder="Телефон"
                  required
                  pattern="[0-9]{10,}"
                />
              </div>
              <div className="custom-input booking-form__input">
                <label className="custom-input__label" htmlFor="person">
                  Количество участников
                </label>
                <input
                  value={formData.peopleCount}
                  onChange={(evt) =>
                    setFormData({ ...formData, peopleCount: parseInt((evt.target.value), 10) })}
                  type="number"
                  id="person"
                  name="person"
                  placeholder="Количество участников"
                  required
                />
              </div>
              <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
                <input type="checkbox" id="children" name="children" checked />
                <span className="custom-checkbox__icon">
                  <svg width="20" height="17" aria-hidden="true">
                    <use xlinkHref="#icon-tick"></use>
                  </svg>
                </span>
                <span className="custom-checkbox__label">
                  Со&nbsp;мной будут дети
                </span>
              </label>
            </fieldset>
            <button
              className="btn btn--accent btn--cta booking-form__submit"
              type="submit"
            >
              Забронировать
            </button>
            <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--agreement">
              <input
                type="checkbox"
                id="id-order-agreement"
                name="user-agreement"
                required
              />
              <span className="custom-checkbox__icon">
                <svg width="20" height="17" aria-hidden="true">
                  <use xlinkHref="#icon-tick"></use>
                </svg>
              </span>
              <span className="custom-checkbox__label">
                Я&nbsp;согласен с
                <a
                  className="link link--active-silver link--underlined"
                  href="#"
                >
                  правилами обработки персональных данных
                </a>
                &nbsp;и пользовательским соглашением
              </span>
            </label>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookingQuest;
