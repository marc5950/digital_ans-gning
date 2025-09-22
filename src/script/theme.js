const checkbox = document.getElementById("theme-checkbox");
const body = document.body;

// Sæt default tema til dark mode
const savedTheme = localStorage.getItem("theme");
const defaultTheme = savedTheme || "dark"; // Default til dark mode hvis intet er gemt

// Sæt tema og checkbox status
body.setAttribute("data-theme", defaultTheme);
checkbox.checked = defaultTheme === "dark";

// Skift tema når checkbox ændres
checkbox.addEventListener("change", () => {
  const newTheme = checkbox.checked ? "dark" : "light";
  body.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});
