import { Action } from '@ngrx/store'

export const ADD_RECENT_PICS = '[PHOTOS] Add'
export const ADD_SEARCHED_QUERY_PICS = '[PHOTOS] AddSearchPics'
export const ADD_SEARCHED_QUERY_GROUPS = '[PHOTOS] AddSearchGroups'

export class AddRecentPics implements Action {
    readonly type = ADD_RECENT_PICS

    constructor(public payload: any) { }
}

export class AddSearchQueryPics implements Action {
    readonly type = ADD_SEARCHED_QUERY_PICS

    constructor(public payload: any) { }
}

export class AddSearchQueryGrps implements Action {
    readonly type = ADD_SEARCHED_QUERY_GROUPS

    constructor(public payload: any) { }
}
export type Actions = AddRecentPics | AddSearchQueryPics | AddSearchQueryGrps