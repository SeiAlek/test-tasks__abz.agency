import { Action } from 'redux';

const SET_SCROLL_HIDE = 'SET_SCROLL_HIDE';
const SET_SCROLL_SHOW = 'SET_SCROLL_SHOW';

export interface ScrollState {
  isShow: boolean;
}

const scrollState = { isShow: false };

export const setScrollHide = (): Action => ({ type: SET_SCROLL_HIDE });
export const setScrollShow = (): Action => ({ type: SET_SCROLL_SHOW });

const reducer = (state = scrollState, action: Action): ScrollState => {
  switch (action.type) {
    case SET_SCROLL_HIDE:
      return { isShow: false };

    case SET_SCROLL_SHOW:
      return { isShow: true };

    default:
      return state;
  }
};

export default reducer;
