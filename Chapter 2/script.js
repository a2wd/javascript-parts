//Chapter notes
var notes = [];
notes.push("Comments of the form // are preferred");

var numA = 1;
var numB = 1.000;
notes.push("JavaScript has 1 number type, 64bit floating point, as per Java's double:" + numA + " and " + numB);

//NaN
notes.push("NaN is not even equal to itself: NaN==NaN: " + (NaN == NaN) + ", use isNaN(NaN): " + isNaN(NaN))

//Infinity
notes.push("The value Infinity represents all values greater than 1.79769313486231570e+308.:" + 1.8e308)

//ECMA2015+
notes.push("JavaScript strings are 16-bit character arrays, emoji need special handling: " + String.fromCodePoint(0x1F495));

//Strings have length
var myString = "a string";
notes.push("myString = '" + myString + "', myString.length = " + myString.length);

//For & for..in
var forNote = "<ul>";
for(note in notes) {
	if(notes.hasOwnProperty(note))
		forNote += ("<li>obj | " + notes[note] + " | " + typeof notes[note] + "</li>")
}
notes.push(forNote + "</ul>");
//=====================================
forNote = "<ul>";
for(var x = 0; x < notes.length - 1; x++) {
	forNote += ("<li>obj | " + notes[x] + " | " + typeof notes[x] + "</li>")
}
notes.push(forNote + "</ul>");

//Write notes to DOM
notes.forEach(function(el){
	document.writeln("<p>" + el + "</p>");
})

//Example for adding methods to an object's prototype
Function.prototype.method = function(name, func) {
	this.prototype[name] = func;
	return this;
}