/*
	Launches a new process with the given command, with command line arguments in args. 
	If omitted, args defaults to an empty Array.
*/	

var spawn = require('child_process').spawn;

console.log('This example demonstrates executing another process and getting its output.');
console.log('This example uses spawn() to start a child process.');

var result = spawn("cmd");

result.stdout.setEncoding('utf-8');
result.stdout.on('data', function(data) {
	// do something
	//	console.log(err);	// null
	console.log(data);	// Hello World
	//	console.log(stderr);	// empty lines
	
	// result.disconnect(); this.disconnect();
	result.kill();
});

result.stderr.on('data', function(data){
	console.log('stderr: ' + data);
});

result.on('exit', function(code){
	console.log('child process exited with code ' + code);
});