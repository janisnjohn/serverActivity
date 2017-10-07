//require /import hhtp module

var http = require('http');

//define a port to listen to
var PORT1 = 7000;
var PORT2 = 7500;
//handle requests and a generic function handle requests and responses

function handleRequest(request, response){

	response.end("You're looking good!! " + request.url);
}

function handleRequest2(request, response){

	response.end("You have some great looking hair! " + request.url);
}
//use node http prackage to create server.
//pass it the handleRequest function.

var server = http.createServer(handleRequest);

server.listen(PORT1, function() {

	console.log("Server listening on:  http://localhost:%s", PORT1);

});

var server2 = http.createServer(handleRequest2);

server2.listen(PORT2, function() {

	console.log("Server listening on:  http://localhost:%s", PORT2);
});