var http = require('http');
var options = {
        method: 'HEAD',
        host: '127.0.0.1',
        port: '48080'        
}; // isaaxd server

var req = http.request(options, function(res) {
            console.log('Hello Isaax! %s %s', res.statusCode, res.statusMessage);
})

req.end();

