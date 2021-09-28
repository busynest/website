
import { Action, Reducer, ActionCreator }  from 'redux';
import { ThunkAction }            from 'redux-thunk';
import { RootState, RootAction }  from '../store';

// Module 'Declaration' Bindings to functions, objects, or primitive values
export const OPEN_SIGN  = 'OPEN_SIGN';
export const CLOSE_SIGN = 'CLOSE_SIGN';

// < > Module Interface Object - extends Action Array - wit Payload Function
export interface drawerState { drawer: boolean }

// < > Module Interface Object - extends Action Array - wit Payload Function
export interface openSign     extends Action<'OPEN_SIGN'>          {  };
export interface closeSign    extends Action<'CLOSE_SIGN'>         {  };

// < > Merge Declarations to Combine Type Interfaces.
export type drawerAction = openSign | closeSign ;

// < > Array Type Iterable.
export type drawerResult = ThunkAction<void, RootState, undefined, drawerAction>;

const start: drawerState = { drawer: false };
  
export const drawer: Reducer<drawerState, RootAction> = ( state = start, action ) => {
  switch ( action.type ) {

    case OPEN_SIGN:         return { ...state, drawer:          true };
    case CLOSE_SIGN:        return { ...state, drawer:          false };

  default: return state;

  }
}

// DRAWER STATE
export const setDrawer: ActionCreator<drawerResult> = ( drawer: boolean ) => (dispatch, getState) => {
    if ( getState().drawer!.drawer === false)  { dispatch({ type: OPEN_SIGN, drawer }); }
    else                                        { dispatch({ type: CLOSE_SIGN, drawer }); }
  }
  
  // DRAWER CLOSE
  export const closeDrawer: ActionCreator<closeSign> = ( drawer:  boolean ) => {
    return { type: CLOSE_SIGN, drawer }
  };
  
  