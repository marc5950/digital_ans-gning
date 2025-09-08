const checkbox = document.getElementById("theme-checkbox");
const body = document.body;

// Skift tema når checkbox ændres
checkbox.addEventListener("change", () => {
	if (checkbox.checked) {
		body.setAttribute("data-theme", "dark");
	} else {
		body.setAttribute("data-theme", "light");
	}
});

// (Valgfrit) Husk brugerens valg med localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
	body.setAttribute("data-theme", savedTheme);
	checkbox.checked = savedTheme === "dark";
}

checkbox.addEventListener("change", () => {
	const newTheme = checkbox.checked ? "dark" : "light";
	body.setAttribute("data-theme", newTheme);
	localStorage.setItem("theme", newTheme);
});
