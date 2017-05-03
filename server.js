var express = require('express')
var app = express();

app.get('/', function(req, res) {
    res.send(
        '<h1>Timestamp Microservice API</h1>'+
        '<br>'+
        '<code>https://timestamp-microservice-jlewiskilgore.c9users.io/[datestring]</code>'+
        '<br>'+
        '<br>'+
        '<h3>Example Useage: </h3>'+
        '<br>'+
        '<code>https://timestamp-microservice-jlewiskilgore.c9users.io/July%2022,%201988</code>'+
        '<br>'+
        '<br>'+
        '<code>https://timestamp-microservice-jlewiskilgore.c9users.io/585547200</code>'+
        '<br>'+
        '<br>'+
        '<h3>Sample Output: </h3>'+
        '<br>'+
        '{"unixTimestamp": 585532800,"naturalLanguageTimestamp":"July 22, 1988"}'
    );
});

app.get('/:date', function(req, res) {
    var naturalDate = null;
    var unixDate = null;
    
    var day;
    var month;
    var year;
    
    var fullMonth = ["January", "February", "March", "April", "May",
    "Juny", "July", "August", "September", "October", "November", "December"];
    
    var userDate = req.params.date;
    
    if(Number(userDate)) {
        unixDate = userDate;
        naturalDate = new Date(unixDate * 1000);
        
        day = naturalDate.getDate();
        month = naturalDate.getMonth();
        year = naturalDate.getFullYear();
        
        naturalDate = fullMonth[month] + " " + day + ", " + year;
        
    }
    else if(new Date(userDate)) {
        naturalDate = userDate;
        
        unixDate = new Date(naturalDate).getTime() / 1000;
    }
    
    var result = {"unixTimestamp": unixDate, 
        "naturalLanguageTimestamp": naturalDate };
   
    res.json(result);
});

app.listen(8080, function() {
    console.log("Server Listening on Port 8080");
});