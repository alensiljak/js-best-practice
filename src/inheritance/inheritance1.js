/*
	Inheritance. Class2 gets it's prototype set to an instance of Class1.
*/

function Class1(someValue){
	this.number = someValue;
}

function Class2(someValue){
	this.text = someValue;
}

Class2.prototype = new Class1(3);

var newObject = new Class2("blah");

console.log(newObject.number);
console.log(newObject.text);