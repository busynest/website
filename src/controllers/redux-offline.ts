
// iterable interface

import { Action }                   from 'redux';
import { ThunkAction }              from 'redux-thunk';
import { RootState, RootAction }    from '../store';
import { Reducer }                  from "redux";
import { ActionCreator}             from 'redux';

// Module 'Declaration' Bindings to functions, objects, or primitive values
export const UPDATE_OFFLINE         = 'UPDATE_OFFLINE';
export const OPEN_SNACKBAR          = 'OPEN_SNACKBAR';
export const CLOSE_SNACKBAR         = 'CLOSE_SNACKBAR';

// < > Typescript Interface - Object
export interface offlineState {
    offline:          boolean,
    snackbarOpened:   boolean,
}

// < > Typescript Interface Object - Action Array Function

export interface setOffline       extends Action<'UPDATE_OFFLINE'>      { offline: boolean };
export interface setSnackbar      extends Action<'OPEN_SNACKBAR'>       {  };
export interface setSnackbars     extends Action<'CLOSE_SNACKBAR'>      {  };

// Merge < > Typescript Interface.
export type offlineAction = setOffline | setSnackbar | setSnackbars ; 

// Array < > Typescript Type Iterable.
export type ThunkResult = ThunkAction <void, RootState, undefined, offlineAction>;




/** Reducer */
const start : offlineState = {
    offline:        false,
    snackbarOpened: false,
  };
  
  // < > Typescript Reducer Function
  export const offline : Reducer <offlineState, RootAction> = ( state = start, action ) => {
    switch ( action.type ) {
  
      case UPDATE_OFFLINE:    return { ...state, offline: action.offline };
      case OPEN_SNACKBAR:     return { ...state, snackbarOpened:  true };
      case CLOSE_SNACKBAR:    return { ...state, snackbarOpened:  false };

    default:
      return state;
  
    }
  }




// SHOW SNACKBAR
let snackbarTimer: number;

export const showSnackbar: ActionCreator<ThunkResult> = () => (dispatch) => {
  dispatch({
    type: OPEN_SNACKBAR
  });
  clearTimeout(snackbarTimer);
  snackbarTimer = window.setTimeout(() =>
    dispatch({ type: CLOSE_SNACKBAR }), 3000);
};

// UPDATE OFFLINE
export const updateOffline: ActionCreator<ThunkResult> = (offline: boolean) => (dispatch, getState) => {
  // Show the snackbar only if offline status changes.
  if (offline !== getState().offline!.offline) {
    dispatch(showSnackbar());
  }
  dispatch({
    type: UPDATE_OFFLINE,
    offline
  });
};
