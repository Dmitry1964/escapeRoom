import {QuestType} from './quest-types';
import { store } from '../src/store';
import { AuthStatus } from '../src/constants/const';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type StateType = {
  questsList: QuestType[];
  loadQuestsListStatus: string;
  authorizationStatus: AuthStatus;
}
