var notes = []

notes.push("<strong>Chapter 5, Inheritance</strong>")

notes.push("In javascript, objects can inherit from objects. There are no classes (pre ECMA Script 6) ")

notes.push("There are Pseudoclassical, Prototypal and Functional patterns available in JavaScript")

notes.push("<strong>Pseudoclassical</strong> A function contructor looks like: <pre>this.prototype = {constructor: this}</pre>")

var Person = function(name, age) {
	var _name = name
	var _age = age

	this.name = () => _name
	this.age = () => _age
}

var lucy = new Person("Lucy", 12)

notes.push("Made new person: " + lucy.name())

var Worker = function(job) {
	var _job = job
	this.job = () => _job
}
Worker.prototype = new Person("eve", 22)

var eve = new Worker("Spy")
notes.push("Inherited person into worker: " + eve.name() + " (" + eve.job() + ")")

notes.push("Passing an object of arguments instead of a series of arguments is helpful as they can be ordered any which way: <pre>var obj = maker({ param1: xyz, param2: zfe, ...})")

notes.push("<strong>Prototypal</strong> throws classes out the window and focuses on objects.")

notes.push("You can inherit by using <pre>Object.create(parent)</pre> and define unique functions on the newly created object")

notes.push("<strong>Functional</strong> inheritance works in JavaScript to allow for private variables")

notes.push("Objects can also be composed out of sub-parts")

//Write notes to DOM
notes.forEach(function(el){
	document.writeln("<p>" + el + "</p>")
});