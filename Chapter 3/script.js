//Chapter notes
var notes = [];

notes.push("Chapter 3, objects examples:");

//Object examples
var emptyObject = {}
var person = {
	"first-name": "Bobby",
	"last-name": "Tables",
	biometrics: {
		eyeColour: "blue",
		height: 1.92
	}
}
notes.push(JSON.stringify(emptyObject));
notes.push(JSON.stringify(person));
notes.push(person.biometrics.eyeColour + ", " + person["last-name"]);

notes.push("Non-existant prop: person.bankCode || 'default' = " + (person.bankCode || 'default'));
notes.push("Guard against undefined prop: person && person.bankCode: " + (person && person.bankCode));
notes.push("Update & augment properties: person['first-name'] = 'Joe' and person['middle-name'] = 'Low'");
person['first-name'] = 'Joe';
person['middle-name'] = 'Low';
notes.push(JSON.stringify(person));

//Object are passed by reference
var anotherPerson = person;
anotherPerson.biometrics = "Secret!";
notes.push("Objects are passed by reference:" + JSON.stringify(person));

//Prototype chain, pay attention!
if (typeof Object.create !== 'function') {		//Check Object.create doesn't exist
 Object.create = function (o) {					//Make new object.create function
 var F = function () {};						//We will use a function to prototype
 F.prototype = o;								//Set the prototype to the passed object
 return new F();								//Return a new object with the desired prototype
 };
}

var protoPerson = Object.create(person)
notes.push("An object made with prototyping: " +
	JSON.stringify(protoPerson) +
	", protoPerson.biometrics = " +
	protoPerson.biometrics);
notes.push("We can also now add properties to a prototype and affect all prototyped children");

//Typeof
notes.push("We can use typeof to inspect property types, however any property on the prototype chain can produce a value")
notes.push("typeof person['first-name'] = " + (typeof person['first-name']));
notes.push("typeof person.biometrics = " + (typeof person.biometrics));
notes.push("typeof person.nonexistantProperty = " + (typeof person.nonexistantProperty));
notes.push("typeof person.toString = " + (typeof person.toString));

//Reflection
notes.push("Check for properties with for in or a for loop")
notes.push("To ensure ordering, add valus to an array and use a for loop (not for-in)")
var forNote = "<ul>"
for(var prop in person) {
	if(person.hasOwnProperty(prop) && typeof prop !== 'function') {
		forNote += '<li>person.' + prop + ' = ' + person[prop];
	}
}
forNote += "</ul>"
notes.push(forNote)

//Deleting properties
delete protoPerson.biometrics
notes.push("Deleting a property allows another from the prototype chain to be used: " + protoPerson.biometrics)
delete person.biometrics
notes.push("Deleted biometrics in person: " + protoPerson.biometrics)

//Global objects
var globalAppObj = globalAppObj || {}
globalAppObj.person = person
notes.push("we can use a global object to reduce potential for namespace conflicts: globalAppObj = " + JSON.stringify(globalAppObj))


//Write notes to DOM
notes.forEach(function(el){
	document.writeln("<p>" + el + "</p>");
})