/*
* console demo.
*/

// alert is a browser window property.
// alert('yo');

console.log('yo, mate');

//
// read from console.

process.stdin.resume();
process.stdin.setEncoding('utf8');
 
process.stdin.on('data', function (chunk) {
	process.stdout.write('data: ' + chunk);
});