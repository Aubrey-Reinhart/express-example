const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.get('/', (_, res) => {
    res.send('Express App');
});

const data = require('/data.json');

app.get('/recipes', (_, res) => {
    res.json({ ok: true, data });
    res.statusCode = 200;
})

app.listen(3000, () => {
    console.log(`server is running on port: ${port}`);
});