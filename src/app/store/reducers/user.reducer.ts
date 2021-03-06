import {Action, createReducer} from '@ngrx/store';

export interface IUser {
  name: string;
  bonuses: number;
}

const initialState: IUser = {
  name: 'Serg',
  bonuses: 0.8,
};

const reducer = createReducer(
  initialState,
);

export default function userReducer(state: any, action: Action): any {
  return reducer(state, action);
  }
