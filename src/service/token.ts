import { TOKEN_KEY_NAME } from '../constants/const';
import { Token } from '../../types/quest-types';

export const getToken = () : Token => {
  const token = localStorage.getItem(TOKEN_KEY_NAME);
  return token ?? '';
};

export const saveToken = (token : Token) => {
  localStorage.setItem(TOKEN_KEY_NAME, token);
};

export const dropToken = () : void => {
  localStorage.removeItem(TOKEN_KEY_NAME);
};
