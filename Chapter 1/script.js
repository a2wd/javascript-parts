//Simply writing to the DOM
document.writeln("Hello, world");

//Example for adding methods to an object's prototype
Function.prototype.method = function(name, func) {
	this.prototype[name] = func
	return this
}