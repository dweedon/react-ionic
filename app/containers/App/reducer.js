import { handleActions } from 'redux-actions';
import { fromJS } from 'immutable';

import {
  SET_BACKDROP_VISIBILITY,
} from './constants';

const initialState = fromJS({
  backdropVisibility: false,
});

export default handleActions({
  [SET_BACKDROP_VISIBILITY]: (state, { payload }) => state.set('backdropVisibility', payload)
}, initialState);