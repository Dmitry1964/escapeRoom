import { createAction } from '@reduxjs/toolkit';
import {QuestType} from '../../types/quest-types';
import { Actions } from '../constants/actions';


export const loadQuestsList = createAction<QuestType[]>(Actions.loadQuestsList);
