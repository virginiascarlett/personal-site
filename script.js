import projectObjectArray from "./components/data.js";

// Test
console.log(projectObjectArray[0].getProjectHTML());


const handleButtonClick = function (event) {
  // 'currentTarget' is the button element that has the listener
  const button = event.currentTarget;

  // Get the ID from the HTML (e.g., "0", "1")
  // This corresponds to its index in the proj array
  const index = button.dataset.projectId;

  displayArea.innerHTML = projectObjectArray[index].getProjectHTML();

};

let displayArea = document.querySelector(".projects .display-area");
let projectButtons = document.querySelectorAll(".project-grid button");

projectButtons.forEach((btn) => {
    btn.addEventListener("click", (handleButtonClick))
});

