const express = require('express')
const app = express();
const path = require('path')

app.use(express.static(path.join(_dirname, '/frontend/build')));

app.get('/name', (re, res) => {
    res.send('Auto');
})

app.listen(5000, () => {
    console.log("server running successfully on 5000");
})