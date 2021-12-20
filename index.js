var express = require("express");
var path = require("path");

var app = express();

app.use(express.static(path.join(__dirname, "Page")));

app.get("/199473", function (req, res) {
  res.sendFile("./Page/199473/index.html");
});

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
