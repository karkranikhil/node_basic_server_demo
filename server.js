const express = require('express');
const app = express();
const cors = require('cors')
var fs = require("fs");
const data = fs.readFileSync("jsondata.json");
app.get('/user', cors(), (req, res) => {
    var jsondata = JSON.parse(data);
    res.json(jsondata);
});

app.listen(3000, () => console.log('app listening on port 3000!'));