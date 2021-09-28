import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { lazyReducerEnhancer } from 'pwa-helpers/lazy-reducer-enhancer';
import { app } from './controllers/redux-general';
import { offline } from './controllers/redux-offline';
import { drawer } from './controllers/redux-drawer';
const devCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(state => state, devCompose(lazyReducerEnhancer(combineReducers), applyMiddleware(thunk)));
store.addReducers({
    app,
    drawer,
    offline
});
//# sourceMappingURL=store.js.map