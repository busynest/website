export const OPEN_SIGN = 'OPEN_SIGN';
export const CLOSE_SIGN = 'CLOSE_SIGN';
;
;
const start = { drawer: false };
export const drawer = (state = start, action) => {
    switch (action.type) {
        case OPEN_SIGN: return { ...state, drawer: true };
        case CLOSE_SIGN: return { ...state, drawer: false };
        default: return state;
    }
};
export const setDrawer = (drawer) => (dispatch, getState) => {
    if (getState().drawer.drawer === false) {
        dispatch({ type: OPEN_SIGN, drawer });
    }
    else {
        dispatch({ type: CLOSE_SIGN, drawer });
    }
};
export const closeDrawer = (drawer) => {
    return { type: CLOSE_SIGN, drawer };
};
//# sourceMappingURL=redux-drawer.js.map