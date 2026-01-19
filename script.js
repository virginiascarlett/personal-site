import projectObjectArray from "./components/data.js";

// Test - for debugging
// console.log(projectObjectArray[0].getProjectHTML());

const handleButtonClick = function (event) {
  // 'currentTarget' is the button element that has the listener
  const button = event.currentTarget;

  // Get the ID from projects.html (e.g., "0", "1")
  // This corresponds to its index in the proj array
  const clickedIndex = button.dataset.projectId;
  // Target the content container
  let projectCards = document.querySelectorAll(".project-showcase");
  projectCards.forEach((card, index) => {
    card.classList.remove('active');
    if (index == clickedIndex) {
      // Test - for debugging
      console.log(card.innerHTML)
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
projectButtons.forEach((btn) => {
    btn.addEventListener("click", (handleButtonClick))
});

