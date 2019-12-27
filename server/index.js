const express = require('express');
const path = require('path');

const app = express();
const port = 9000;

app.use(express.static(path.join(__dirname, '../dist')));

app.listen(port, () => console.log(`Gio's website listening on port ${port}`));