// import { UserActions } from '../actions/user.actions';
import { initialRecentPicsState } from '../state/app.state';
import * as PicActions from '../actions/Pics.actions';

export const PicsReducer = (
  state = initialRecentPicsState,
  action: PicActions.Actions,
): any => {
  switch (action.type) {
    case PicActions.ADD_RECENT_PICS:
      return {
        ...state,
        recentPhotos: action.payload
      };
    case PicActions.ADD_SEARCHED_QUERY_PICS:
      return {
        ...state,
        searchQueryPhotos: action.payload
      };
    case PicActions.ADD_SEARCHED_QUERY_GROUPS:
      return {
        ...state,
        searchQueryGroups: action.payload
      };
    default:
      return state;
  }
};
