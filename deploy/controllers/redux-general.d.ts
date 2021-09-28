import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState, RootAction } from '../store';
import { Reducer, ActionCreator } from "redux";
export declare const UPDATE_PAGE = "UPDATE_PAGE";
export declare const PUBLIC_PROFILE = "PUBLIC_PROFILE";
export declare const CURRENT_FEEDBACK = "CURRENT_FEEDBACK";
export interface AppState {
    page: string;
    feedback: object;
    profile: object;
}
export interface setPage extends Action<'UPDATE_PAGE'> {
    page: string;
}
export interface profileData extends Action<'PUBLIC_PROFILE'> {
    profile: object;
}
export interface userFeedback extends Action<"CURRENT_FEEDBACK"> {
    feedback: object;
}
export declare type appAction = setPage | profileData | userFeedback;
export declare type ThunkResult = ThunkAction<void, RootState, undefined, appAction>;
export declare const app: Reducer<AppState, RootAction>;
export declare const navigate: ActionCreator<ThunkResult>;
export declare const articleFeedback: ActionCreator<userFeedback>;
export declare const profileInfo: ActionCreator<profileData>;
//# sourceMappingURL=redux-general.d.ts.map