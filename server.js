//Install express server
const express = require('express');
const createProxyMiddleware = require('http-proxy-middleware');

const app = express();

app.use('/api/v1/*', createProxyMiddleware({ target: 'https://covid19-api.weedmark.systems', changeOrigin: true }));

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// Serve only the static files form the dist directory
app.use(express.static('./dist/COVID19Dashboard'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/COVID19Dashboard/'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);