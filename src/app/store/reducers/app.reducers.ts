import { ActionReducerMap } from '@ngrx/store';

import { routerReducer } from '@ngrx/router-store';
import { IAppState } from '../state/app.state';
import { PicsReducer } from './Pics.reducers';
// import { SearchPhotosReducer } from './searchPhotos.reducers';
// import { SearchGroupsReducer } from './searchGroups.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  recentPics: PicsReducer,
  // searchPhotos: SearchPhotosReducer,
  // searchGroups: SearchGroupsReducer,
};
