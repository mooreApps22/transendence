
function putElement(id, text)
{
	document.getElementById(id).textContent = text;
}

const pi = 3.14159;
let r;
let filledOut = false;

putElement("myTextLabel", "Enter number:");
putElement("btn", "submit");

putElement("myH1", "Area Finder");
putElement("p1", "By Skyy Moore");
putElement("p2", "Did you even wonder what the area of a certain circle was?");

document.getElementById("btn").onclick = function(){
	r = document.getElementById("user_input").value;	
	r = Number(r);
	area = pi * r ** 2;
	putElement("p3", `The area of the circle is ${area.toFixed(2)} units.`);
}; 


