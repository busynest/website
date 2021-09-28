
declare global {
  interface Window {
    process?: Object;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

import {
  createStore,
  compose,
  applyMiddleware,
  combineReducers,
  Reducer,
  StoreEnhancer
} from 'redux';

import thunk, { ThunkMiddleware }   from 'redux-thunk';
import { lazyReducerEnhancer }      from 'pwa-helpers/lazy-reducer-enhancer';

import { app, appAction, AppState }               from './controllers/redux-general';
import { offline, offlineState, offlineAction }   from './controllers/redux-offline';
import { drawer, drawerState, drawerAction }      from './controllers/redux-drawer';
// import { project, projectState, projectAction }   from './factory/state-project';

export interface RootState {
  app?:       AppState;
  offline?:   offlineState;
  drawer?:    drawerState;
  // project?:   projectState;
}

// Merge Typescript Factory
export type RootAction = appAction | offlineAction | drawerAction ;

// Sets up a Chrome extension for time travel debugging. See https://github.com/zalmoxisus/redux-devtools-extension for more information.
const devCompose: <Ext0, Ext1, StateExt0, StateExt1>(
  f1: StoreEnhancer<Ext0, StateExt0>, f2: StoreEnhancer<Ext1, StateExt1>
) => StoreEnhancer<Ext0 & Ext1, StateExt0 & StateExt1> =
 window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

 // RESUX STORE -- WITH MIDDLEWARE
 export const store = createStore(
  state => state as Reducer <RootState, RootAction>,
  devCompose(
      lazyReducerEnhancer(combineReducers),
      applyMiddleware( thunk as ThunkMiddleware <RootState, RootAction> )
  )
);

store.addReducers({
  app,
  drawer,
  offline
  });
