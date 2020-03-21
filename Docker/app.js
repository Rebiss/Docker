const express = require('express');
const app     = express();
const port    = 3000;

app.get('/', (_,res) => res.send('Simle Docker Contener'));
app.listen(port, () => console.log(`Server Run in ${port}`))