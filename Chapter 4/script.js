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

//Write notes to DOM
notes.forEach(function(el){
	document.writeln("<p>" + el + "</p>");
});