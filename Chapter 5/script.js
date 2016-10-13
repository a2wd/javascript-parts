var notes = [];

notes.push("<strong>Chapter 5, Inheritance</strong>");



//Write notes to DOM
notes.forEach(function(el){
	document.writeln("<p>" + el + "</p>");
});