import {createReducer} from '@reduxjs/toolkit';
import { loadQuestsList } from './actions';
import {StateType} from '../../types/state-types';




const initialState : StateType = {
  questsList: []
};

const reducer = createReducer(initialState,(builder) => {
  builder.addCase(loadQuestsList, (state, action) => {
    state.questsList = action.payload;
  });
});


export {reducer};
