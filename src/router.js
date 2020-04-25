const Spotify = require('spotify-web-api-node');
const express = require('express');
const router = new express.Router();

const CLIENT_ID = '';
const REDIRECT_URI = '';
const STATE_KEY = 'spotify_auth_state';

const scopes = ['playlist-modify-public', 'playlist-modify-private'];

const spotifyApi = new Spotify({
    clientId: CLIENT_ID,
    redirectUri: REDIRECT_URI
})

const generateRandomString = function(length) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};

router.get('/login', (_, res) => {
    const state = generateRandomString(16);
    res.cookie(STATE_KEY, state);
    res.redirect(spotifyApi.createAuthorizeURL(scopes, state));
});

router.get('/callback', (req, res) => {
    const { code, state } = req.query;
    const storedState = req.cookies ? req.cookies[STATE_KEY] : null;

    // validate state
    if(state === null || state !== storedState) {
        res.redirect('/#/error/state mismatch');
    } else {
        res.clearCookie(STATE_KEY);
        spotifyApi.authorizationCodeGrant(code).then(data => {
            const { access_token, refresh_token} = data.body;

            // set the access token on the API object to use it in later calls
            spotifyApi.setAccessToken(access_token);
            spotifyApi.setRefreshToken(refresh_token);

            // use the access token to access the Spotify Web API
            spotifyApi.getMe().then(({ body }) => {
                console.log(body);
            });

            res.redirect(`/#/user/${access_token}/${refresh_token}`);
        }).catch(err => {
            res.redirect('/#/error/invalid token');
        });
    }
})

module.exports = router;