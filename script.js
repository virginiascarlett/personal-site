import projectObjectArray from "./components/data.js";

// Test - for debugging
// console.log(projectObjectArray[0].getProjectHTML());

// Roving tabindex accessibility pattern: the Tab key
// should only drop the user onto the active tab. From there,
// they use the Left and Right Arrow keys to switch between projects.
// When they press Tab again, it takes them out of the buttons
// and into the display panel.

// For accessibility: When an arrow key is pressed,
// calculate the next tab, move the user's keyboard focus
// to it, and automatically click it to load the project.
const handleTabKeydown = function (event) {
  // Only listen for Left and Right arrow keys
  if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;

  const allTabs = Array.from(document.querySelectorAll('.project-button-grid .btn'));
  const currentIndex = allTabs.indexOf(event.currentTarget);
  let newIndex;

  if (event.key === 'ArrowRight') {
    // Move right, wrap to the beginning if at the end
    newIndex = (currentIndex + 1) % allTabs.length;
  } else if (event.key === 'ArrowLeft') {
    // Move left, wrap to the end if at the beginning
    newIndex = (currentIndex - 1 + allTabs.length) % allTabs.length;
  }

  // Move focus to the new tab and trigger the click event to show the panel
  allTabs[newIndex].focus();
  allTabs[newIndex].click(); 
};

const handleButtonClick = function (event) {
  // 'currentTarget' is the button element that has the listener
  const button = event.currentTarget;

  // Get the ID from projects.html (e.g., "0", "1")
  // This corresponds to its index in the proj array
  const clickedIndex = button.dataset.projectId;

  // For debugging
  console.log(`Button clicked! Looking for project ID: ${clickedIndex}`);

  // --- Accessibility attributes for tabs/buttons ---
  const allTabs = document.querySelectorAll('.project-button-grid .btn');
  allTabs.forEach(tab => {
    tab.setAttribute('aria-selected', 'false');
    tab.setAttribute('tabindex', '-1');
  });

  button.setAttribute('aria-selected', 'true');
  button.setAttribute('tabindex', '0');

  const panel = document.getElementById('project-panel');
  if (panel) {
    panel.setAttribute('aria-labelledby', button.id);
  }

  // --- Target the content container ---
  let projectCards = document.querySelectorAll(".project-showcase");
  projectCards.forEach((card, index) => {
    card.classList.remove('active');
    if (index == clickedIndex) {
      // Test - for debugging
      //console.log(card.innerHTML)
      card.classList.add('active')
    }
  });
};

// Concatenate all projects into one big blob of HTML
const allHTML = projectObjectArray.map((project) => {
  return project.getProjectHTML();
}).join('')

// Inject all projects into the DOM immediately
const displayArea = document.querySelector(".projects .display-area");
// 'beforeend' puts the projects AFTER the starter screen
displayArea.insertAdjacentHTML('beforeend', allHTML);

// Event listeners will swap which card is 'active'.
// We'll use CSS to 'stack' the cards on top of each other and make
// sure only the 'active' card is visible.
// This ensures that the showcase area is always appropriately sized for
// the largest card.
const projectButtons = document.querySelectorAll(".project-button-grid button");
projectButtons.forEach((btn, index) => {
    btn.addEventListener("click", (handleButtonClick));
    btn.addEventListener("keydown", handleTabKeydown);

    // Initialize tabindex
    if (index === 0) {
        btn.setAttribute('tabindex', '0');
    } else {
        btn.setAttribute('tabindex', '-1');
    }
});

