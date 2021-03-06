var server = require('./server-r7');
var router = require('./router-r2');
var requestHandlers = require('./requestHandlers-r3');

var handle = {};
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['upload'] = requestHandlers.upload;

server.start(router.route, handle);
