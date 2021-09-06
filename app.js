const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'))
});



app.listen(8000, () => console.log("Levantando un servidor con Express")
);