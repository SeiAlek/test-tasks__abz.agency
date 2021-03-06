import { Action } from 'redux';

const START_LOADING = 'START_LOADING';
const FINISH_LOADING = 'FINISH_LOADING';
const SET_LOADED = 'SET_LOADED';

export interface LoadingState {
  isLoading: boolean;
  isLoaded: boolean;
}

const loadingState: LoadingState = {
  isLoading: false,
  isLoaded: false,
};

export const startLoading = (): Action => ({ type: START_LOADING });
export const finishLoading = (): Action => ({ type: FINISH_LOADING });
export const setLoaded = (): Action => ({ type: SET_LOADED });

const reducer = (state = loadingState, action: Action) => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case FINISH_LOADING:
      return {
        ...state,
        isLoading: false,
      };

    case SET_LOADED:
      return {
        ...state,
        isLoaded: true,
      };

    default:
      return state;
  }
};

export default reducer;
