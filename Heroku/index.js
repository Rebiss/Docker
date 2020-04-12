const express = require('express');
const app     = express();

const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || 'localhost';

app.get('/', (req,res) => res.end('<p> <h1> Root </h1> </p>'));
app.get('/urs', (req,res) => res.end('<p> User </p>'));

app.listen(PORT, () => console.log(` Server run ${HOST}:${PORT} `))