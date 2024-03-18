const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const { attack } = require('./bot');

const app = express();
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/attack', async (req, res) => {
    console.log(req.body.name)
    const result = await attack(req.body.name);
 
    res.send(`Password: ${result}`);
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});

