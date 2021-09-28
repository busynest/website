declare global {
    interface Window {
        process?: Object;
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
import { compose } from 'redux';
import { appAction, AppState } from './controllers/redux-general';
import { offlineState, offlineAction } from './controllers/redux-offline';
import { drawerState, drawerAction } from './controllers/redux-drawer';
export interface RootState {
    app?: AppState;
    offline?: offlineState;
    drawer?: drawerState;
}
export declare type RootAction = appAction | offlineAction | drawerAction;
export declare const store: import("redux").Store<{}, import("redux").Action<any>> & import("pwa-helpers/lazy-reducer-enhancer").LazyStore & {
    dispatch: import("redux-thunk").ThunkDispatch<RootState, undefined, RootAction>;
};
//# sourceMappingURL=store.d.ts.map