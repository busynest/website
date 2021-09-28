
// iterable interface
import { Action }                   from 'redux';
import { ThunkAction }              from 'redux-thunk';
import { store, RootState, RootAction }    from '../store';
import { Reducer, ActionCreator }   from "redux";
import { closeDrawer }              from './redux-drawer';

// Module 'Declaration' Bindings to functions, objects, or primitive values
export const UPDATE_PAGE            = 'UPDATE_PAGE';
export const PUBLIC_PROFILE         = 'PUBLIC_PROFILE';
export const CURRENT_FEEDBACK       = "CURRENT_FEEDBACK";         // FEEDBACK POSTS

// < > Module 'Interface' Object
export interface AppState {
    page:             string,
    feedback:         object,
    profile:          object
}

// < > Module Interface Object - extends Action Array - wit Payload Function
export interface setPage          extends Action<'UPDATE_PAGE'>         { page: string };
export interface profileData      extends Action<'PUBLIC_PROFILE'>      { profile: object };
export interface userFeedback     extends Action<"CURRENT_FEEDBACK">    { feedback: object };

// < > Merge Declarations to Combine Type Interfaces.
export type appAction = setPage | profileData | userFeedback ; 

// < > Array Type Iterable. Immutable state context 
export type ThunkResult = ThunkAction <void, RootState, undefined, appAction>;

// Object Initializer Notation
const start : AppState = {
    page:           '',
    feedback:       [],
    profile:        []
  };
  
  // < > Typescript Reducer Function
  export const app : Reducer <AppState, RootAction> = ( state = start, action ) => {
    switch ( action.type ) {
      case UPDATE_PAGE:         return { ...state, page:      action.page };
      case PUBLIC_PROFILE:      return { ...state, profile:   action.profile };
      case CURRENT_FEEDBACK:    return { ...state, feedback:  action.feedback };
      default:
        return state;
    }
  }

// Action - Helper Functions

// URL NAVTIGATION
export const navigate : ActionCreator<ThunkResult> = (path: string) => (dispatch) => {
  const page = path === '/' ? 'home' : decodeURIComponent( path.slice(1) );
  // if ( page === "network" && window.location.hash ) { dispatch(loadPage('network')); }
  dispatch(loadPage(page));
  window.scrollTo(0,0);
  store.dispatch(closeDrawer());
};

// LOAD PAGE
const loadPage: ActionCreator<ThunkResult> = (page: string) => async (dispatch) => {
  switch(page) {

/** Landing Page / Search */

    case 'home':
      import('../home');
      break;

    case 'page':
      import('../page');
      break;

    case 'feedback':
      import('../feedback');
      break;

    case 'privacy':
      // import('../terms');
      break;
  
    default:
      page = 'oops';
      await import('../wrong-page');
  }

  dispatch(updatePage(page));
}

// UPDATE PAGE
const updatePage: ActionCreator<setPage> = (page: string) => {
  return {
    type: UPDATE_PAGE,
    page
  };
}

export const articleFeedback : ActionCreator<userFeedback> = ( feedback: object  ) => {
  return { type: CURRENT_FEEDBACK, feedback }
};


export const profileInfo : ActionCreator<profileData> = ( profile: object ) => {
  return { type: PUBLIC_PROFILE, profile };
};






  
      // case SELECT_TITLE:   return { ...state, current: action.current };
      // case OPEN_CLOSE:          return { ...state, active:  action.active };
      // case SELECT_TITLE:        return { ...state, title:   action.title };



// export const OPEN_CLOSE             = 'OPEN_CLOSE';
// export const COMMUNITY_PUBLISH      = 'COMMUNITY_PUBLISH';
// export const PUBLIC_CONTRACT        = 'PUBLIC_CONTRACT';
// export const INDIVIDUAL_PROFILE     = "LOGGED_STATE";
// export const SELECT_TITLE           = 'SELECT_TITLE';
// export const INDIVIDUAL_CONTRACT    = 'INDIVIDUAL_CONTRACT';      // PUBLISH INDIVIDUAL
// export const INDIVIDUAL_ID          = 'INDIVIDUAL_ID';            // IDENTIFICATION        
// export const PUBLIC_ID              = 'PUBLIC_ID';                // PUBLIC ID


// export interface customerID       extends Action<'INDIVIDUAL_ID'>       {  };
// export interface customerID3      extends Action<'PUBLIC_ID'>           { pid: string };
// export interface menuSelect       extends Action<'SELECT_TITLE'>        { title: string };
// export interface menuDrawer       extends Action<'OPEN_CLOSE'>          { active: string };
// export interface publishConsent   extends Action<'COMMUNITY_PUBLISH'>   {  };
// export interface journalEntry     extends Action<"LOGGED_STATE">        { user: boolean };
// export interface publishConsent2  extends Action<'INDIVIDUAL_CONTRACT'>  {  };
// export interface publishConsent3  extends Action<'PUBLIC_CONTRACT'>     {  };




/*
  // TITLE PAGE - < > Typescript + Redux = Action Array returned action "type"
  export const titlePage: ActionCreator <appAction> = ( title: string ) => {
    switch(title) {
  
      case 'appetizers':
        break;
      case 'sides':
        break;
      case 'entrees':
        break;
      case 'fish':
        break;
      case 'steaks':
          break;
    
      default:
        title = 'appetizers';
    
      }
    
    // dispatch(updateTitlePage(page));
    return { type: SELECT_TITLE, title }
  }

*/

  // export const current_User : ActionCreator<currentUser> = ( user:  boolean ) => {
     // return { type: CURRENT_USER, user };
    // };
