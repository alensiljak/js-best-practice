/*
	Runs a command in a shell and buffers the output.
	Exec works on the command line.
*/
var exec = require('child_process').exec;

console.log('This example demonstrates executing another process and getting its output.');

exec("dir", function(err, stdout, stderr) {
	// do something
//	console.log(err);	// null
	console.log(stdout);	// Hello World
//	console.log(stderr);	// empty lines
});
