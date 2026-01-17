import Project from './components/Project.js';

// Test
const myProject = new Project(
  "2025 ospo survey", 
  "Survey", 
  "2025", 
  "The UC OSPO Network Survey: perspectives from open source contributors at the University of California", 
  [
    "In my role at the UC Santa Barbara Library, a member of the UC OSPO Network, I led a multi-campus survey of nearly 300 open source contributors affiliated with the University of California (UC). This is the first in-depth survey of open source contributor needs from the perspective of university support staff.",
    "In addition to making the data available, we have submitted a scholarly article for peer review (preprint already available on SocArxiv)."
], 
  "https://github.com/UC-OSPO-Network/ospo-survey-analysis", 
  "Follow the project on GitHub", 
  "images/uc-ospo-logo.png", 
  "logo for the UC OSPO Network, which consists of abstract shapes resembling a person moving forward", 
  298, 
  534
);

console.log(myProject.getProjectHTML());

// THE PLAN
// Put data in a data.js file inside components/
// In script.js, create an array of project objects
// Create a variable for the display area using document.querySelector
// Create a variable that selects all the project buttons using document.querySelectorAll
// Iterate through the project buttons using forEach, and create an event listener for each project button that, when clicked, calls up the HTML like so: displayArea.innerHTML = projects[0].generateImageHtml()