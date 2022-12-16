const express = require('express');
const app = express();

app.use("/static", express.static("public"));
// add public folder to the webserver but using /static path

app.listen(5001, () => {console.log ('Listening on Port 5001')});