export enum AppRoute {
  Main = '/',
  Quest = '/qiuest',
  Contacts = '/contacts',
  Login = '/login',
  BookingQuest = '/booking-quest',
  UserBooking = '/user-booking',
  PageNotFound = '*'
}

export enum APIRoute {
  QuestList = '/quest',
}

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AYTH',
  Unknown = 'ANKNOWN'
}

export enum RequesrStatus {
  Idle = 'idle',
  Pending = 'pending',
  Fulfilled = 'fulfilled',
  Rejected = 'rejected',
}


// export enum QuestGenres {
//   AllQuests = 'Все квесты',
//   Adventures = 'Приключения',
//   Horror = 'Ужасы',
//   Mystic = 'Мистика',
//   Detective = 'Детектив',
//   SciFi = 'Sci-fi'
// }

export enum QuestIntricacy {
  Any = 'Любой',
  Soft = 'Лёгкий',
  Middle = 'Средний',
  Hard = 'Сложный'
}

export const TOKEN_KEY_NAME = 'escape-from-token';

export const BACKEND_URL = 'https://grading.design.pages.academy/v1/escape-room/';
export const REQUEST_TIMEOUT = 5000;

