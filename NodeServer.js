var http = require("http");
var express = require('express');
var app = express();
var fs = require("fs");


/* Default site */
app.get('/', function (req, res) { res.sendFile(__dirname + "/" + "home.htm"); console.log("request received for '/' at " + Date()); })
app.get('/#', function (req, res) { res.sendFile(__dirname + "/" + "home.htm"); console.log("request received for '/#' at " + Date()); })
app.get('#', function (req, res) { res.sendFile(__dirname + "/" + "home.htm"); console.log("request received for '#' at " + Date()); })
app.get('#/', function (req, res) { res.sendFile(__dirname + "/" + "home.htm"); console.log("request received for '#/' at " + Date()); })

/* Get library files */
app.get('/aiweb/libraries/css/bootstrap.min.css', function (req, res) { res.sendFile(__dirname + "/" + "libraries/css/bootstrap.min.css"); console.log("request received for 'bootstrap.min.css' and served" ); })
app.get('/aiweb/libraries/css/bootstrap-theme.min.css', function (req, res) { res.sendFile(__dirname + "/" + "libraries/css/bootstrap-theme.min.css"); console.log("request received for 'bootstrap-theme.min.css' and served"); })
app.get('/aiweb/libraries/js/bootstrap.min.js', function (req, res) { res.sendFile(__dirname + "/" + "libraries/js/bootstrap.min.js"); console.log("request received for 'bootstrap.min.js' and served"); })

/* Check Conn */
app.get('/CheckConn', function (req, res) { console.log("request received for '/CheckConn' at " + Date()); res.send("GET request successfully received and replied at " + Date()); })


/* Get ajax Data */
app.get('/listUsers', function (req, res) {
    console.log("request for list users received @" + Date() + " proceeding to read items at " + __dirname + "/data/users.json");
    fs.readFile(__dirname + "/data/users.json", 'utf8', function (err, data) {
        if (err) { console.log('error in readfile [' + data + '] '); res.send("request acknowledged to '/listUsers' at " + Date() + "; Error in readfile [" + data + "]"); }
        else { console.log('successfully read the file at ' + Date() + '[' /*+ data */ + '] '); res.send(data); }
    });
});
app.get('/experience', function (req, res) {
    console.log("request for exerience received @" + Date() + " proceeding to read items at " + __dirname + "/data/experience.json");
    fs.readFile(__dirname + "/data/experience.json", 'utf8', function (err, data) {
        if (err) { console.log('error in readfile [' + data + '] '); res.send("request acknowledged to '/experience' at " + Date() + "; Error in readfile [" + data + "]"); }
        else { console.log('successfully read the file at ' + Date() + '[' /*+ data */ + '] '); res.send(data); }
    });
});



var appPort = 2025;

var server = app.listen(appPort, function () {
    var host = server.address().address
    var port = server.address().port
    // Console will print the message
    console.log("MEAN testing app listening at http://%s:%s", host, port)
})


