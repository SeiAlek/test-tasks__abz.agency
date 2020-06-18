import { Action } from 'redux';

const SET_POSITIONS = 'SET_POSITIONS';

type SetPositions = Action<typeof SET_POSITIONS> & { positions: Profession[] };


const positionsState: Profession[] = [];

export const setPosition = (positions: Profession[]): SetPositions => ({
  type: SET_POSITIONS,
  positions,
});

const reducer = (positions = positionsState, action: SetPositions) => {
  switch (action.type) {
    case SET_POSITIONS:
      return [...action.positions];

    default:
      return positions;
  }
};

export default reducer;
