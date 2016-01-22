var server = require('./server-r7');
var router = require('./router-r2');
var requestHandlers = require('./requestHandlers-r5');

var handle = {};
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;
handle['show'] = requestHandlers.show;

server.start(router.route, handle);
