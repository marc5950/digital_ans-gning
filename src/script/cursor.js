// Custom Cursor - Only initialize on devices with a mouse
const cursor = document.querySelector(".custom-cursor");

// Check if device supports hover (has a mouse)
const hasHover = window.matchMedia(
  "(hover: hover) and (pointer: fine)",
).matches;

if (cursor && hasHover) {
  let mouseX = 0;
  let mouseY = 0;

  // Update mouse position and cursor position
  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";
  });

  // Hover effects for interactive elements
  const hoverElements = [
    "a",
    "button",
    '[role="button"]',
    'input[type="submit"]',
    'input[type="button"]',
    'input[type="color"]',
    'input[type="checkbox"]',
    ".demo-card",
    ".progress-btn",
    ".demo-btn",
    ".toggle-switch",
    ".theme-switch",
    ".theme-switch__container",
  ].join(", ");

  function elementMatches(element, selector) {
    if (!element || typeof element.matches !== "function") {
      return false;
    }
    return element.matches(selector);
  }

  // Add hover effects
  function addHoverEffects() {
    const elements = document.querySelectorAll(hoverElements);

    elements.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        cursor.classList.add("hover");
      });

      element.addEventListener("mouseleave", () => {
        cursor.classList.remove("hover");
      });
    });
  }

  // Initialize hover effects when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", addHoverEffects);
  } else {
    addHoverEffects();
  }

  // Click effect
  document.addEventListener("mousedown", () => {
    cursor.classList.add("click");
  });

  document.addEventListener("mouseup", () => {
    cursor.classList.remove("click");
  });

  // Hide cursor when it leaves the window
  document.addEventListener("mouseleave", () => {
    cursor.style.opacity = "0";
  });

  document.addEventListener("mouseenter", () => {
    cursor.style.opacity = "1";
  });
}
