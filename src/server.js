const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const router = require('./authorization');

const port = process.env.PORT || 3000;

const app = express();

app.set('port', port);
app.use(cookieParser())
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: false }))
    .use(express.static(path.resolve(__dirname, '../public')))
    .use('/', router);

app.listen(app.get('port'), () => {
    console.log('Express server listening on port ' + app.get('port'));
});