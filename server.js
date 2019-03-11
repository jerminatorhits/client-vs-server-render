const express = require('express');
const app = express();
const serveIndex = require('serve-index');

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/client', (req, res) => res.sendFile('templates/client.html', { root: __dirname }));
app.get('/server', (req, res) => res.sendFile('templates/server.html', { root: __dirname }));

app.listen(3000, () => console.log('Hello World app listening on port 3000!'));