import { Dispatch } from 'react';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createSelector } from 'reselect';
import * as api from '../helpers';
import { API_URL_POSITIONS } from '../helpers';
import errorReducer, { setErrorMessage } from './error';
import loadingReducer, * as loadingActions from './loading';
import positionReducer, * as positionActions from './position';
import userReducer, * as userActions from './users';
import scrollReducer from './scroll';

const rootReducer = combineReducers({
  scrollStatus: scrollReducer,
  loading: loadingReducer,
  errorMessage: errorReducer,
  positions: positionReducer,
  users: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const getScrollStatus = (state: RootState) => state.scrollStatus.isShow;
export const isLoading = (state: RootState) => state.loading.isLoading;
export const isLoaded = (state: RootState) => state.loading.isLoaded;
export const getError = (state: RootState) => state.errorMessage;
export const getPositions = (state: RootState) => state.positions;
export const getUsersTotal = (state: RootState) => state.users.list.length;
export const getVisibleNumber = (state: RootState) => state.users.visible;
export const getUsers = (state: RootState) => state.users.list;
export { userActions, setErrorMessage };

export const getSortedUsers = createSelector(
  getUsers,
  (allUsers: User[]) => (
    [...allUsers].sort((a, b) => b.registration_timestamp - a.registration_timestamp)
  ),
);

export const getVisibleUser = createSelector(
  getSortedUsers,
  getVisibleNumber,
  (sortedUsers, number) => (
    sortedUsers.slice(0, number)
  ),
);

export const loadUsers = (url: string) => {
  return async (dispatch: Dispatch<any>) => {
    dispatch(loadingActions.startLoading());

    const response = await api.getData<ResponseUsers>(url);

    if (response.success) {
      dispatch(userActions.addUsers(response.users));
    } else {
      dispatch(setErrorMessage(`${response.message}`));

      return;
    }

    if (!response.links.next_url) {
      dispatch(loadingActions.finishLoading());

      return;
    }

    dispatch(loadUsers(response.links.next_url));
  };
};

export const loadPositions = () => {
  return async (dispatch: Dispatch<any>) => {
    const response = await api.getData<ResponsePositions>(API_URL_POSITIONS);

    if (response.success) {
      dispatch(positionActions.setPosition(response.positions));
    } else {
      dispatch(setErrorMessage(`${response.message}`));
    }
  };
};

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
