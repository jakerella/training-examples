
var cluster = require('cluster'),
    http = require('http')
    route = require('./router.js');

if (cluster.isMaster) {
    cluster.fork();
    cluster.fork();
    
    cluster.on('exit', function() {
        console.log('A worker died. :(');
    });

    cluster.on('online', function() {
        console.log('A worker is now online');
    });

    cluster.on('listening', function(worker, address) {
        console.log('A worker is now connected to ' + address.port);
    });
    
} else {

    var server = http.createServer(function(request, response) {
        route(request, function(err, content) {
            if (err) {
                response.statusCode = err;
                response.setHeader('Content-Type', 'text/plain');
                
                response.end(''+err);
            } else {
                response.writeHead(200, {
                    'Content-Type': 'text/html'
                });
                response.end(content);
            }
        });
        
    }).listen(process.env.PORT || 8686, function() {
        console.log('Server running on port 8686');
    });

}