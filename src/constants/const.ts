import {
  NavigationListType,
  NavigationGenresListType,
  NavigationLevelsListType,
  TimeSpendingType,
} from '../../types/quest-types';

export enum AppRoute {
  Main = '/',
  Quest = '/quest',
  Contacts = '/contacts',
  Login = '/login',
  BookingQuest = '/booking',
  Reservation = '/reservation',
  PageNotFound = '*',
}

export enum APIRoute {
  QuestList = '/quest',
  Login = '/login',
  Logout = '/logout',
}

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'ANKNOWN',
}

export enum RequesrStatus {
  Idle = 'idle',
  Pending = 'pending',
  Fulfilled = 'fulfilled',
  Rejected = 'rejected',
}

export enum QuestGenres {
  AllQuests = 'Все квесты',
  Adventures = 'Приключения',
  Horror = 'Ужасы',
  Mystic = 'Мистика',
  Detective = 'Детектив',
  SciFi = 'Sci-fi',
}

export enum QuestIntricacy {
  Any = 'Любой',
  Easy = 'Лёгкий',
  Medium = 'Средний',
  Hard = 'Сложный',
}

export enum QuestLevel {
  hard = 'hard',
  medium = 'medium',
  easy = 'easy',
}

export const navigationList: NavigationListType[] = [
  {
    title: 'квесты',
    isActive: true,
    url: AppRoute.Main,
  },

  {
    title: 'контакты',
    isActive: false,
    url: AppRoute.Contacts,
  },

  {
    title: 'мои бронирования',
    isActive: false,
    url: AppRoute.Reservation,
  },
];

export const menuItem = 'мои бронирования';

export const mainNavigationQuests: NavigationGenresListType[] = [
  {
    name: 'Все квесты',
    title: 'all',
    isActive: true,
    icon: '#icon-all-quests',
  },

  {
    name: 'Приключения',
    title: 'adventure',
    isActive: false,
    icon: '#icon-adventure',
  },

  {
    name: 'Ужасы',
    title: 'horror',
    isActive: false,
    icon: '#icon-horror',
  },

  {
    name: 'Мистика',
    title: 'mystic',
    isActive: false,
    icon: '#icon-mystic',
  },

  {
    name: 'Детектив',
    title: 'detective',
    isActive: false,
    icon: '#icon-detective',
  },

  {
    name: 'Sci-fi',
    title: 'sciFi',
    isActive: false,
    icon: '#icon-sci-fi',
  },
];

export const mainNavigationLevels: NavigationLevelsListType[] = [
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
  },
];

export const timeSpendingToday: TimeSpendingType[] = [
  {
    type: 'radio',
    id: 'today9h45m',
    name: 'date',
    checked: true,
    required: true,
    value: 'today9h45m',
    time: '9-45'
  },

  {
    type: 'radio',
    id: 'today15h00m',
    name: 'date',
    required: true,
    value: 'today15h00m',
    checked: false,
    time: '15-00'
  },

  {
    type: 'radio',
    id: 'today17h30m',
    name: 'date',
    required: true,
    value: 'today17h30m',
    checked: false,
    time: '17-30'
  },

  {
    type: 'radio',
    id: 'today19h30m',
    name: 'date',
    required: true,
    value: 'today19h30m',
    checked: false,
    time: '19-30'
  },

  {
    type: 'radio',
    id: 'today21h30m',
    name: 'date',
    required: true,
    value: 'today21h30m',
    checked: false,
    time: '21-30'
  },
];

export const timeSpendingTomorrow : TimeSpendingType[] = [
  {
    type: 'radio',
    id: 'tomorrow11h00m',
    name: 'date',
    checked: true,
    required: true,
    value: 'tomorrow11h00m',
    time: '11-00'
  },

  {
    type: 'radio',
    id: 'tomorrow15h00m',
    name: 'date',
    required: true,
    value: 'tomorrow15h00m',
    checked: false,
    time: '15-00'
  },

  {
    type: 'radio',
    id: 'tomorrow17h30m',
    name: 'date',
    required: true,
    value: 'tomorrow17h30m',
    checked: false,
    time: '17-30'
  },

  {
    type: 'radio',
    id: 'tomorrow19h45m',
    name: 'date',
    required: true,
    value: 'tomorrow19h45m',
    checked: false,
    time: '19-45'
  },

  {
    type: 'radio',
    id: 'tomorrow21h30m',
    name: 'date',
    required: true,
    value: 'tomorrow21h30m',
    checked: false,
    time: '21-30'
  },
];

export const TOKEN_KEY_NAME = 'escape-from-token';

export const BACKEND_URL =
  'https://grading.design.pages.academy/v1/escape-room/';
export const REQUEST_TIMEOUT = 5000;
