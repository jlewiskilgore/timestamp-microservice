var express = require('express')
var app = express();

app.get('/', function(req, res) {
    res.send('Timestamp Microservice API');
});

app.get('/:date', function(req, res) {
    var naturalDate = null;
    var unixDate = null;
    
    var userDate = req.params.date;
    
    if(Number(userDate)) {
        unixDate = userDate;
    }
    else if(new Date(userDate)) {
        naturalDate = userDate;
    }
    
    var result = {"unixTimestamp": unixDate, 
        "naturalLanguageTimestamp": naturalDate };
   
    res.json(result);
});

app.listen(8080, function() {
    console.log("Server Listening on Port 8080");
});