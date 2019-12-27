import { ActionReducerMap } from '@ngrx/store';

import { routerReducer } from '@ngrx/router-store';
import { IAppState } from '../state/app.state';
import { recentPicsReducer } from './recentPics.reducers';
import { SearchPhotosReducer } from './searchPhotos.reducers';
import { SearchGroupsReducer } from './searchGroups.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  recentPics: recentPicsReducer,
  searchPhotos: SearchPhotosReducer,
  searchGroups: SearchGroupsReducer,
};
