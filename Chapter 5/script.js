var notes = [];

notes.push("<strong>Chapter 5, Inheritance</strong>");

notes.push("In javascript, objects can inherit from objects. There are no classes (pre ECMA Script 6) ")


//Write notes to DOM
notes.forEach(function(el){
	document.writeln("<p>" + el + "</p>");
});