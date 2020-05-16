const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const router = require('./router');

var morgan = require('morgan')

const port = process.env.PORT || 5000;

const app = express();

app.set('port', port);
app.use(cookieParser())
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: false }))
    .use(express.static(path.resolve(__dirname, '../client/build')))
    .use(morgan('tiny'))
    .use('/', router);

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '..client/build', 'index.html'));
});

app.listen(app.get('port'), () => {
    console.log('Express server listening on port ' + app.get('port'));
});