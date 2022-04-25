const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (_, res) => {
    res.send('Express App');
});

app.listen(3000, () => {
    console.log(`server is running on port: ${port}`);
});