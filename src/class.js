/*
JavaScript Class Template 
*/

function CostCalculator() {
    // Enforce usage of 'new' keyword.
    if (false === (this instanceof CostCalculator)) {
        return new CostCalculator();
    }

    /* private members */

    var privateVar = 5;

	var privateMethod = function () {
        // can access private members.
        return privateVar + 3;
    };

    /* public members */

    this.publicVar = 10;

    this.proxyMethod = function () {
        console.log("this one calls internal function:" + privateMethod());
    };

    this.publicMethod = function () {
        // can reference internal members
        console.log('public but can access private: ' + privateVar);
    };

    return null;
}

// another way to create a public method.
TotalCalculation.prototype.anotherPublicMethod = function () {
// console.log("public but can't access private. Can access public: " + this.publicVar);
