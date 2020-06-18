import { Action } from 'redux';
import { PER_PAGE } from '../helpers';

const ADD_USERS = 'ADD_USERS';
const INCREASE_VISIBLE = 'INCREASE_VISIBLE';

type AddUsers = Action<typeof ADD_USERS> & { users: User[] };
type IncreaseVisible = Action<typeof INCREASE_VISIBLE>;
type AvailableActions = AddUsers | IncreaseVisible;

export interface UsersState {
  list: User[];
  visible: number;
}

const initialUsersState: UsersState = {
  list: [],
  visible: PER_PAGE,
};

export const addUsers = (users: User[]): AddUsers => ({
  type: ADD_USERS,
  users,
});

export const increaseVisible = (): IncreaseVisible => ({
  type: INCREASE_VISIBLE,
});

const reducer = (usersState = initialUsersState, action: AvailableActions) => {
  switch (action.type) {
    case ADD_USERS:
      return {
        ...usersState,
        list: [...action.users, ...usersState.list],
      };

    case INCREASE_VISIBLE:
      return {
        ...usersState,
        visible: usersState.visible + PER_PAGE,
      };

    default:
      return usersState;
  }
};

export default reducer;
