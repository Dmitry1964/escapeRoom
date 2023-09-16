import { NavigationListType, NavigationGenresListType, NavigationLevelsListType } from '../../types/quest-types';

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
  Login = '/login',
  Logout = '/logout',
}

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
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

export const mainNavigationQuests : NavigationGenresListType[] = [
  {
    name: 'Все квесты',
    title: 'all',
    isActive: true,
    icon: '#icon-all-quests'
  },

  {
    name: 'Приключения',
    title: 'adventure',
    isActive: false,
    icon: '#icon-adventure'
  },

  {
    name: 'Ужасы',
    title: 'horror',
    isActive: false,
    icon: '#icon-horror'
  },

  {
    name: 'Мистика',
    title: 'mystic',
    isActive: false,
    icon: '#icon-mystic'
  },

  {
    name: 'Детектив',
    title: 'detective',
    isActive: false,
    icon: '#icon-detective'
  },

  {
    name: 'Sci-fi',
    title: 'sciFi',
    isActive: false,
    icon: '#icon-sci-fi'
  },
];

export const mainNavigationLevels : NavigationLevelsListType[] = [
  {
    title: 'any',
    name: 'Любой',
    isActive: true,
  },

  {
    title: 'easy',
    name: 'Лёгкий',
    isActive: false,
  },

  {
    title: 'medium',
    name: 'Средний',
    isActive: false,
  },

  {
    title: 'hard',
    name: 'Сложный',
    isActive: false,
  }
];

export const TOKEN_KEY_NAME = 'escape-from-token';

export const BACKEND_URL = 'https://grading.design.pages.academy/v1/escape-room/';
export const REQUEST_TIMEOUT = 5000;

