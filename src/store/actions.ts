import { createAction } from '@reduxjs/toolkit';
import {QuestType, QuestInfoType} from '../../types/quest-types';
import { Actions } from '../constants/actions';
import { AuthStatus } from '../constants/const';
import { AuthDataType, UserDataType } from '../../types/user-types';


export const loadQuestsList = createAction<QuestType[]>(Actions.loadQuestsList);
export const checkAuthorization = createAction<AuthStatus>(Actions.checkUserAuth);
export const loadUserData = createAction<AuthDataType>(Actions.loadUserData);
export const userLogin = createAction<UserDataType>(Actions.userLogin);
export const userLogout = createAction(Actions.userLogout);
export const loadQuest = createAction<QuestInfoType>(Actions.loadQuest);
