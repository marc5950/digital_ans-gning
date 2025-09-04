const list = document.querySelector(".barchart ul");

// Mutable array ændrer det originale array
// array til at gemme tal
const arr = [];

// opdaterer listen hvert sekund
setInterval(update, 200);

// funktion til at opdatere listen
function update() {
	// rydder listen
	list.innerHTML = "";
	// tilføjer et nyt random tal til arrayet
	arr.push(Math.floor(Math.random() * 100) + 1);
	// hvis arrayet er længere end 20 fjernes det ældste tal
	if (arr.length === 20) {
		arr.shift();
	}
	// laver et li element for hvert tal i arrayet
	arr.forEach((num) => {
		const li = document.createElement("li");
		li.style.setProperty("--height", num);
		// tilføj li elementet til listen som et barn til list (ul)
		list.appendChild(li);
	});
}
