import { Action, Reducer, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState, RootAction } from '../store';
export declare const OPEN_SIGN = "OPEN_SIGN";
export declare const CLOSE_SIGN = "CLOSE_SIGN";
export interface drawerState {
    drawer: boolean;
}
export interface openSign extends Action<'OPEN_SIGN'> {
}
export interface closeSign extends Action<'CLOSE_SIGN'> {
}
export declare type drawerAction = openSign | closeSign;
export declare type drawerResult = ThunkAction<void, RootState, undefined, drawerAction>;
export declare const drawer: Reducer<drawerState, RootAction>;
export declare const setDrawer: ActionCreator<drawerResult>;
export declare const closeDrawer: ActionCreator<closeSign>;
//# sourceMappingURL=redux-drawer.d.ts.map