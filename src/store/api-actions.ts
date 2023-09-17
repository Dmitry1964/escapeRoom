import { AppDispatch, State } from '../../types/state-types';
import { QuestType, QuestInfoType } from '../../types/quest-types';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import { APIRoute, AppRoute, AuthStatus } from '../constants/const';
import { checkAuthorization, loadQuestsList, loadUserData, loadQuest } from './actions';
import {AuthDataType, UserDataType} from '../../types/user-types';
import { saveToken } from '../service/token';

// загрузка списка квестов
export const fetchQuestsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>('data/fetchQuestsList', async (_arg, {dispatch, extra: api}) => {
  const {data} = await api.get<QuestType[]>(APIRoute.QuestList);
  dispatch(loadQuestsList(data));
});

// закрузка  квеста
export const fetchQuestCardAction = createAsyncThunk<
  void,
  QuestType['id'],
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
    }
>('data/fetchQuest', async (questId, {dispatch, extra: api}) => {
  const {data} = await api.get<QuestInfoType>(`${AppRoute.Quest}/${questId}`);
  dispatch(loadQuest(data));
});

// Проверка авторизации
export const checkAuthorizationAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>('user/checkAuth', async(_arg, {dispatch, extra: api}) => {
  try{
    const {data} = await api.get<AuthDataType>(APIRoute.Login);
    dispatch(checkAuthorization(AuthStatus.Auth));
    dispatch(loadUserData(data));
  } catch {
    dispatch(checkAuthorization(AuthStatus.NoAuth));
  }
});

// регистрация пользователя
export const userLoginAction = createAsyncThunk<void,
  UserDataType,
  {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>('user/login', async (loginData, {dispatch, extra:api}) => {
  const {data} = await api.post<AuthDataType>(APIRoute.Login, loginData);
  saveToken(data.token);
  dispatch(checkAuthorization(AuthStatus.Auth));
});

export const userLogoutAction = createAsyncThunk<
void,
undefined,
{
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>('user/logout', async(_arg, {dispatch, extra: api}) => {
  await api.delete(APIRoute.Logout);
  dispatch(checkAuthorization(AuthStatus.NoAuth));
});
