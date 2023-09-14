import { AppDispatch, State } from '../../types/state-types';
import { QuestType } from '../../types/quest-types';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import { APIRoute } from '../constants/const';
import { loadQuestsList } from './actions';


export const fetchQuestsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>('data/fetchQuestsList', async (_arg, {dispatch, extra: api}) => {
  const {data} = await api.get<QuestType[]>(APIRoute.QuestList);
  dispatch(loadQuestsList(data));
});


