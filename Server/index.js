const express = require('express');
const app = express();
const fitapp = require('./fitApp/controller');

const port = process.env.port || 3000;
const server = "localhost";

app.use(express.json());
app.use("/", express.static(__dirname + "/../client/"));

app.use(express.urlencoded({extended: true}));
app.use('/fitapp', fitapp);

app.listen(port);
console.log(`Listening on: http://${server}:${port}`);

