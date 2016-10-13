//Chapter notes
var notes = [];

notes.push("<strong>Chapter 4, function examples</strong>");

//Functions
//
notes.push("Functions are objects and linked to Function.prototype, which in turn is linked to Object.prototype");
notes.push("Functions are created with 2 hidden props; the context and function-code");
notes.push("Functions have their own prototype property that derives from itself (distinct to the hidden Functionl.prototype link)");
notes.push("A function object created by a function literal contains a link to it's outer context (ie, when a nested function, the outer function's properties). This is called a closure")


//Invocation
notes.push("When invoked, a function receives declared parameters, <strong>this</strong>, and arguments.");
notes.push("How <strong>this</strong> is defined depends on the invocation pattern;");
notes.push("<ul><li>The method invocation pattern</li>");
notes.push("<li>the function invocation pattern</li>");
notes.push("<li>the constructor invocation pattern</li>");
notes.push("<li>the apply invocation pattern</li></ul>");

//Method invocation
notes.push("A method invocation is a function stored as a property of an object; <strong>this</strong> is bound to that object");

var methodInvocationObject = {
	someNumber: 0,
	increment: function(inc) {
		this.someNumber += typeof inc == 'number' ? inc : 1
	}
}

notes.push("Object: " + JSON.stringify(methodInvocationObject))
var methodNote = "Before addition: " + methodInvocationObject.someNumber
methodInvocationObject.increment()
methodNote += ", after increment: " + methodInvocationObject.someNumber
methodInvocationObject.increment(5)
methodNote += ", and after second increment: " + methodInvocationObject.someNumber
notes.push(methodNote);


//Function invocation
function add(a, b) {return a + b; }
notes.push("</p><span style='text-decoration:underline'>This section makes use of an add function: function add(a, b) {return a + b; }</span><br /><p>")
notes.push("When a function is called via function-invocation, <strong>this</strong> is bound to the global object (as in <code>var a = sum(12, 3) //a = 15</code>)");
var functionInvocationObject = {
	value: 12,
	example: function(){
		var that = this;

		var helper = function(){
			that.value = add(that.value, that.value);
		}

		helper();
	}
}
notes.push(JSON.stringify(functionInvocationObject) + ", value = " + functionInvocationObject.value);
functionInvocationObject.example();
notes.push("Call object.example(), now value = " + functionInvocationObject.value);
notes.push("Uses the <strong>that</strong> helper; else 'this' is undefined in the child function");

//Constructor Invocation
var ConstructorInvocationExample = function(string) {
	this.status = string;
};
ConstructorInvocationExample.prototype.getStatus = function(){
	return this.status;
};
var ExampleConstructor = new ConstructorInvocationExample("//this string set via the new invocation//");
notes.push("When a function is invoked via the new prefix, a new object will be created and it's <strong>this</strong> property will be bound to that new object");
notes.push("Constructor invocation with the <strong>new</strong> keyword; status property: " + ExampleConstructor.getStatus());
notes.push("Functions intended to be used like this are called constructors");

//Apply Invocation
notes.push("Because JavaScript is a functional OO language, functions can have methods");
notes.push("<strong>apply(thisValue, argArray)</strong> takes a value for <strong>this</strong>, an array of arguments and applies it to a method.");
var array = [3,4];
var sum = add.apply(null, array);
notes.push("Eg; var array = [3,4]; var sum = add.apply(null, array) = " + sum);
var statusObject = { status: '//This is the status object//' };
notes.push("Also, var statusObject = { status: '//This is the status object//' }; var status = ConstructorInvocationExample.status.apply(statusObject) = " + ConstructorInvocationExample.prototype.getStatus.apply(statusObject));

//Arguments
var totalSum = function() {
	var sum = 0;
	for(var i = 0; i < arguments.length; i++) {
		sum += arguments[i];
	}
	return sum;
}
notes.push("Methods are invoked with a <strong>this</strong> variable and an <strong>arguments</strong> variable")
notes.push("totalSum(1,2,3,4,5) uses the arguments variable to calculate the total: " + totalSum(1,2,3,4,5));

//Return values
notes.push("Functions always return a value - <em>undefined</em> if nothing else is specified.");
notes.push("If the function is invoked with <strong>new</strong> and it doesn't return an object, <strong>this</strong> (the new object) is returned")

//Errors
notes.push("We should use <strong>throw</strong> to throw an Error or custom object when something goes awry. We can use try/catch")
try {
throw {"name": "FakeError", "message": "**This is an error example**"}
}
catch(e) {
	notes.push("An error was thrown: " + e.message);
}

//Augmenting types
Number.prototype.int = function() {
	return Math[this < 0 ? "ceil" : "floor"](this);
}
var aNumber = (-10/3)
notes.push("We can augment functions and built in objects, ie adding a .int to Number: (-3/10).int() = " + (-10/3).int());

//Recursion
notes.push("We can use recursion in JS, which is useful for many problems, and very salient with tree like structures such as the DOM.");
notes.push("JavaScript does not have tail-call optimisation so deep recursion can fail by exhausting the stack (unless you use trampolining).")

//Scope
notes.push("JavaScript has function scope not block scope - define variables at the top of the consuming function")

//Closure
var closureObject = function () {
	var value = 0;
	return {
		increment: function (inc) {
			value += typeof inc === 'number' ? inc : 1;
		},
		getValue: function () {
			return value;
		}
	};
}();
notes.push("<strong>Closure</strong> - inner functions get access to parent function variables (except this/arguments).")
notes.push("closureObject: " + closureObject.getValue() + ", then closureObject.increment(5) and val = " + closureObject.getValue(closureObject.increment(5)) + ". Can't get value: " + closureObject.value)
notes.push("Another closure is created in the following call to setTimeout which sets the page colour to yellow then fades back to white")
// Define a function that sets a DOM node's color
// to yellow and then fades it to white.
var fade = function (node) {
	var level = 1;
	var step = function () {
		var hex = level.toString(16);
		node.style.backgroundColor = '#FFFF' + hex + hex;
		if (level < 15) {
			level += 1;
			setTimeout(step, 100);
		}
	};
	setTimeout(step, 100);
};
fade(document.body);
notes.push("It's also important to remember that the variables in the inner function are references to the actual variables - not copies")
notes.push("This is illustrated in the following add_the_handlers functions which log to the console")
var add_the_handlers_bad = function (nodes) {
	var i;
	for (i = 0; i < nodes.length; i += 1) {
		nodes[i].onclick = function (e) {
			console.log("Bad add handlers: " + i);
		};
	}
};

var add_the_handlers_good = function (nodes) {
	var i;
	for (i = 0; i < nodes.length; i += 1) {
		nodes[i].onclick = function (x) {
			return function (e) {
				console.log("Good add handlers: " + x);
			};
		}(i);
	}
};

notes.push("As functions in javascript are first-class members, you can pass them as a parameter to a function to use as a callback")
notes.push("A modular design can be adopted by making use of closures to hide private variables and just return public variables")
notes.push("Libraries like jQuery enable <strong>cascading </strong> calls by returning <strong>this</strong> instead of undefined")
notes.push("We can simulate functional programming style currying with a function override curry method")

var memoizer = function (memo, fundamental) {
	var shell = function (n) {
		var result = memo[n];
		if (typeof result !== 'number') {
			result = fundamental(shell, n);
			memo[n] = result;
		}
		return result;
	};
	return shell;
};
var fibonacci = memoizer([0, 1], function (shell, n) {
 return shell(n - 1) + shell(n - 2);
});
notes.push("With recursive functions, like fibonacci and factorial, we can make use of memoization (storing previous values) to save computation")

//Write notes to DOM
notes.forEach(function(el){
	document.writeln("<p>" + el + "</p>");
});

// add_the_handlers_bad(document.getElementsByTagName("p"))
add_the_handlers_good(document.getElementsByTagName("p"))