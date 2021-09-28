import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState, RootAction } from '../store';
import { Reducer } from "redux";
import { ActionCreator } from 'redux';
export declare const UPDATE_OFFLINE = "UPDATE_OFFLINE";
export declare const OPEN_SNACKBAR = "OPEN_SNACKBAR";
export declare const CLOSE_SNACKBAR = "CLOSE_SNACKBAR";
export interface offlineState {
    offline: boolean;
    snackbarOpened: boolean;
}
export interface setOffline extends Action<'UPDATE_OFFLINE'> {
    offline: boolean;
}
export interface setSnackbar extends Action<'OPEN_SNACKBAR'> {
}
export interface setSnackbars extends Action<'CLOSE_SNACKBAR'> {
}
export declare type offlineAction = setOffline | setSnackbar | setSnackbars;
export declare type ThunkResult = ThunkAction<void, RootState, undefined, offlineAction>;
export declare const offline: Reducer<offlineState, RootAction>;
export declare const showSnackbar: ActionCreator<ThunkResult>;
export declare const updateOffline: ActionCreator<ThunkResult>;
//# sourceMappingURL=redux-offline.d.ts.map