import { createReducer } from '@reduxjs/toolkit';
import { loadQuestsList, checkAuthorization, loadQuest } from './actions';
import { StateType } from '../../types/state-types';
import { AuthStatus, RequesrStatus } from '../constants/const';
import { fetchQuestsAction, fetchQuestCardAction } from './api-actions';

const initialState: StateType = {
  questsList: [],
  quest: {
    id: '',
    title: '',
    previewImg: '',
    previewImgWeb: '',
    level: '',
    type: '',
    peopleMinMax: [],
    description: '',
    coverImg: '',
    coverImgWeb: '',
  },
  loadQuestsListStatus: RequesrStatus.Idle,
  loadQuestStatus: RequesrStatus.Idle,
  authorizationStatus: AuthStatus.Unknown,
};

const reducer = createReducer(initialState, (builder) => {
  // Загрузка списка квестов, статус загрузки
  builder.addCase(loadQuestsList, (state, action) => {
    state.questsList = action.payload;
  });

  builder.addCase(fetchQuestsAction.pending, (state) => {
    state.loadQuestsListStatus = RequesrStatus.Pending;
  });

  builder.addCase(fetchQuestsAction.fulfilled, (state) => {
    state.loadQuestsListStatus = RequesrStatus.Fulfilled;
  });

  builder.addCase(fetchQuestsAction.rejected, (state) => {
    state.loadQuestsListStatus = RequesrStatus.Rejected;
  });

  // загрузка карточки квеста
  builder.addCase(loadQuest, (state, action) => {
    state.quest = action.payload;
  });

  builder.addCase(fetchQuestCardAction.pending, (state) => {
    state.loadQuestStatus = RequesrStatus.Pending;
  });

  builder.addCase(fetchQuestCardAction.fulfilled, (state) => {
    state.loadQuestStatus = RequesrStatus.Fulfilled;
  });


  // проверка авторизации

  builder.addCase(checkAuthorization, (state, action) => {
    state.authorizationStatus = action.payload;
  });
});

export { reducer };
