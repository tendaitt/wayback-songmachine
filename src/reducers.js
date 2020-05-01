import {
    SPOTIFY_TOKENS, SPOTIFY_ME_START, SPOTIFY_ME_SUCCESS, SPOTIFY_ME_FAILURE
} from './actions';
import { combineReducers } from 'redux';

const initialState = {
    accessToken: null,
    refreshToken: null,
    authenticated: false,
    
    user: {
        display_name: null
    }
};

function userInfo(state=initialState, action) {
    switch (action.type) {
        case SPOTIFY_TOKENS:
            const {accessToken, refreshToken} = action;
            return Object.assign({}, state, {
                accessToken: accessToken,
                refreshToken: refreshToken,
                authenticated: true
            });
        case SPOTIFY_ME_START:
            return Object.assign({}, state, {
                user: Object.assign({}, state.user, {loading: true})
            });
        case SPOTIFY_ME_SUCCESS:
            return Object.assign({}, state, {
                user: Object.assign({}, state.user, action.data, {loading: false})
            });
        case SPOTIFY_ME_FAILURE:
            return state;
        default:
            return state;
    }
}

const waybackApp = combineReducers({
    userInfo,
})

export default waybackApp;