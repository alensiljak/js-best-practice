/*
	Example of using 'with' to expand the execution scope.
http://jibbering.com/faq/notes/closures/
*/

/* create a global variable - y - that refers to an object:- */
var y = {x:5}; // object literal with an - x - property
console.log('in global, this = ' + this);

function exampleFuncWith(){
    var z;
    /* Add the object referred to by the global variable - y - to the
       front of he scope chain:-
    */
    with(y){
        /* evaluate a function expression to create a function object
           and assign a reference to that function object to the local
           variable - z - :-
        */
        z = function(){
            // ... // inner function expression body;
            console.log('in z, this = ' + this);
        }
    }
    z();
    // ... 
	console.log('in func, this = ' + this);
}

/* execute the - exampleFuncWith - function:- */
exampleFuncWith();
// z();