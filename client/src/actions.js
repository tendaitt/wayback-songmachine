import Spotify from 'spotify-web-api-js';

const spotifyAPI = new Spotify();

export const SEARCH = 'SEARCH';
export const SPOTIFY_TOKENS = 'SPOTIFY_TOKENS';
export const SPOTIFY_ME_START = 'SPOTIFY_USER_INFO';
export const SPOTIFY_ME_SUCCESS = 'SPOTIFY_USER_INFO';
export const SPOTIFY_ME_FAILURE = 'SPOTIFY_USER_INFO';
export const AUTHENTICATED = 'AUTHENTICATED';

export function setTokens({accessToken, refreshToken}) {
    if (accessToken) {
        spotifyAPI.setAccessToken(accessToken);
    }
    return { type: SPOTIFY_TOKENS, accessToken, refreshToken};
}

export function getUserInfo() {
    return dispatch => {
        dispatch({ type: SPOTIFY_ME_START });
        spotifyAPI.getMe().then(data => {
            dispatch({ type: SPOTIFY_ME_SUCCESS, data: data });
        }).catch(e => {
            dispatch({ type: SPOTIFY_ME_FAILURE, error: e});
        });
    };
}
