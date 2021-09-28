export const UPDATE_OFFLINE = 'UPDATE_OFFLINE';
export const OPEN_SNACKBAR = 'OPEN_SNACKBAR';
export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';
;
;
;
const start = {
    offline: false,
    snackbarOpened: false,
};
export const offline = (state = start, action) => {
    switch (action.type) {
        case UPDATE_OFFLINE: return { ...state, offline: action.offline };
        case OPEN_SNACKBAR: return { ...state, snackbarOpened: true };
        case CLOSE_SNACKBAR: return { ...state, snackbarOpened: false };
        default:
            return state;
    }
};
let snackbarTimer;
export const showSnackbar = () => (dispatch) => {
    dispatch({
        type: OPEN_SNACKBAR
    });
    clearTimeout(snackbarTimer);
    snackbarTimer = window.setTimeout(() => dispatch({ type: CLOSE_SNACKBAR }), 3000);
};
export const updateOffline = (offline) => (dispatch, getState) => {
    if (offline !== getState().offline.offline) {
        dispatch(showSnackbar());
    }
    dispatch({
        type: UPDATE_OFFLINE,
        offline
    });
};
//# sourceMappingURL=redux-offline.js.map