const Spotify = require('spotify-web-api-node');
const express = require('express');
const path = require('path');
const router = new express.Router();

const CLIENT_ID = '';
const CLIENT_SECRET = ''
const REDIRECT_URI = '';
const STATE_KEY = 'spotify_auth_state';
const CLIENT_REDIRECT_URI = 'http://localhost:3000'

const scopes = ['playlist-modify-public', 'playlist-modify-private'];

const spotifyApi = new Spotify({
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
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

router.get('/api/login', (_, res) => {
    const state = generateRandomString(16);
    res.cookie(STATE_KEY, state);
    res.redirect(spotifyApi.createAuthorizeURL(scopes, state));
});

router.get('/api/callback', (req, res) => {
    const { code, state } = req.query;
    const storedState = req.cookies ? req.cookies[STATE_KEY] : null;

    // validate state
    if(state === null || state !== storedState) {
        res.redirect(`${CLIENT_REDIRECT_URI}/#/error/state mismatch`);
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
            res.redirect(`${CLIENT_REDIRECT_URI}/home/${access_token}/${refresh_token}`);
        }).catch(err => {
            res.redirect(`${CLIENT_REDIRECT_URI}/error/invalid token`);
        });
    }
})

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'../client/build/index.html'))
})

module.exports = router;