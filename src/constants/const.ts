import { NavigationListType, NavigationMainListType } from '../../types/quest-types';

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
  Easy = 'Лёгкий',
  Medium = 'Средний',
  Hard = 'Сложный'
}

export enum QuestLevel {
  hard = 'hard',
  medium = 'medium',
  easy = 'easy'
}


export const navigationList: NavigationListType[] = [
  {
    title: 'квесты',
    isActive: true,
    url: AppRoute.Main
  },

  {
    title: 'контакты',
    isActive: false,
    url: AppRoute.Contacts
  },

  {
    title: 'мои бронирования',
    isActive: false,
    url: AppRoute.UserBooking,
  },
];

export const mainNavigationQuests : NavigationMainListType[] = [
  {
    name: 'Все квесты',
    title: 'all',
    isActive: true,
    icon: '#icon-all-quests'
  },

  {
    name: 'Приключения',
    title: '',
    isActive: false,
    icon: '#icon-all-quests'
  },

  {
    name: 'Ужасы',
    title: '',
    isActive: false,
    icon: '#icon-all-quests'
  },

  {
    name: 'Мистика',
    title: '',
    isActive: false,
    icon: '#icon-all-quests'
  },

  {
    name: 'Детектив',
    title: '',
    isActive: false,
    icon: '#icon-all-quests'
  },

  {
    name: 'Sci-fi',
    title: '',
    isActive: false,
    icon: '#icon-all-quests'
  },
];


export const TOKEN_KEY_NAME = 'escape-from-token';

export const BACKEND_URL = 'https://grading.design.pages.academy/v1/escape-room/';
export const REQUEST_TIMEOUT = 5000;

