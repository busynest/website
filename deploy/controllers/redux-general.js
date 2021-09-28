import { store } from '../store';
import { closeDrawer } from './redux-drawer';
export const UPDATE_PAGE = 'UPDATE_PAGE';
export const PUBLIC_PROFILE = 'PUBLIC_PROFILE';
export const CURRENT_FEEDBACK = "CURRENT_FEEDBACK";
;
;
;
const start = {
    page: '',
    feedback: [],
    profile: []
};
export const app = (state = start, action) => {
    switch (action.type) {
        case UPDATE_PAGE: return { ...state, page: action.page };
        case PUBLIC_PROFILE: return { ...state, profile: action.profile };
        case CURRENT_FEEDBACK: return { ...state, feedback: action.feedback };
        default:
            return state;
    }
};
export const navigate = (path) => (dispatch) => {
    const page = path === '/' ? 'home' : decodeURIComponent(path.slice(1));
    dispatch(loadPage(page));
    window.scrollTo(0, 0);
    store.dispatch(closeDrawer());
};
const loadPage = (page) => async (dispatch) => {
    switch (page) {
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
            break;
        default:
            page = 'oops';
            await import('../wrong-page');
    }
    dispatch(updatePage(page));
};
const updatePage = (page) => {
    return {
        type: UPDATE_PAGE,
        page
    };
};
export const articleFeedback = (feedback) => {
    return { type: CURRENT_FEEDBACK, feedback };
};
export const profileInfo = (profile) => {
    return { type: PUBLIC_PROFILE, profile };
};
//# sourceMappingURL=redux-general.js.map