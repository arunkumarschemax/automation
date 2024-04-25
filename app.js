const express = require('express')
const app = express();

app.get('/name', (re, res) => {
    res.send('Auto');
})

app.listen(5000, () => {
    console.log("server running successfully on 5000");
})