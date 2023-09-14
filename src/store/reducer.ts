import {createReducer} from '@reduxjs/toolkit';
import { loadQuestsList } from './actions';
import {StateType} from '../../types/state-types';
import { RequesrStatus } from '../constants/const';
import { fetchQuestsAction } from './api-actions';

const initialState : StateType = {
  questsList: [],
  loadQuestsListStatus: RequesrStatus.Idle,
};

const reducer = createReducer(initialState,(builder) => {

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


});


export {reducer};
