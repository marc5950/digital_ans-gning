// Custom Cursor - Only initialize on devices with a mouse
const cursor = document.querySelector(".custom-cursor");

// Check if device supports hover (has a mouse)
const hasHover = window.matchMedia(
  "(hover: hover) and (pointer: fine)",
).matches;

if (cursor && hasHover) {
  let mouseX = 0;
  let mouseY = 0;
  let isMoving = false;

  // Optimized cursor movement with requestAnimationFrame
  function updateCursorPosition() {
    if (isMoving) {
      cursor.style.transform = `translate(${mouseX - 15}px, ${mouseY - 15}px)`;
      isMoving = false;
    }
    requestAnimationFrame(updateCursorPosition);
  }

  // Start the animation loop
  updateCursorPosition();

  // Throttled mousemove event
  document.addEventListener(
    "mousemove",
    (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isMoving = true;
    },
    { passive: true },
  );

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

  // Optimized hover effects with event delegation
  let isHovering = false;

  function updateHoverState(shouldHover) {
    if (shouldHover !== isHovering) {
      isHovering = shouldHover;
      cursor.classList.toggle("hover", shouldHover);
    }
  }

  // Use optimized event delegation
  document.addEventListener(
    "mouseover",
    (e) => {
      if (elementMatches(e.target, hoverElements)) {
        updateHoverState(true);
      }
    },
    { passive: true },
  );

  document.addEventListener(
    "mouseout",
    (e) => {
      if (elementMatches(e.target, hoverElements)) {
        updateHoverState(false);
      }
    },
    { passive: true },
  );

  // Optimized click effects
  document.addEventListener(
    "mousedown",
    () => {
      cursor.classList.add("click");
    },
    { passive: true },
  );

  document.addEventListener(
    "mouseup",
    () => {
      cursor.classList.remove("click");
    },
    { passive: true },
  );

  // Hide cursor when it leaves the window
  document.addEventListener(
    "mouseleave",
    () => {
      cursor.style.opacity = "0";
    },
    { passive: true },
  );

  document.addEventListener(
    "mouseenter",
    () => {
      cursor.style.opacity = "1";
    },
    { passive: true },
  );
}
