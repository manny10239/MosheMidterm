const express = require('express');
const app = express();

const port = process.env.port || 3000;
const server = "localhost";

app.use(express.json());
app.use("/", express.static(__dirname + "/../client/"));

app.listen(port);
console.log(`Listening on: http://${server}:${port}`);

