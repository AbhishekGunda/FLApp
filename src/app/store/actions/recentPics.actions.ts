import { Action } from '@ngrx/store'

// Section 2
export const ADD_RECENT_PICS = '[PHOTOS] Add'

// Section 3
export class AddRecentPics implements Action {
    readonly type = ADD_RECENT_PICS

    constructor(public payload: any) { }
}


// Section 4
export type Actions = AddRecentPics 