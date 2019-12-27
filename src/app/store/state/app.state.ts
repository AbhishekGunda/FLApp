import { RouterReducerState } from '@ngrx/router-store';


export const initialRecentPicsState: any = {
  photos: []
};

export const initialSearchPhotosState: any = {
  photos: []
};

export const initialSearchGroupsState: any = {
  groups: []
};


export interface IAppState {
  router?: RouterReducerState;
  recentPics: any;
  searchPhotos: any,
  searchGroups: any,
}

export const initialAppState: any = {
  recentPics: initialRecentPicsState,
  searchPhotos: initialSearchPhotosState,
  searchGroups: initialSearchGroupsState,
};

export function getInitialState(): IAppState {
  return initialAppState;
}
