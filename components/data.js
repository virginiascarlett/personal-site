import Project from "./Project.js";

// ORDER OF PROJECTS MUST MATCH THE ORDER IN THE HTML FILE
const survey = new Project({
  projtype: "Survey", 
  year: "2025", 
  title: "The UC OSPO Network Survey: perspectives from open source contributors at the University of California", 
  descriptionArr: [
    "In my role at the UC Santa Barbara Library, a member of the UC OSPO Network, I led a multi-campus survey of nearly 300 open source contributors affiliated with the University of California (UC). This is the first in-depth survey of open source contributor needs from the perspective of university support staff.",

    "In addition to making the data available, we have submitted a scholarly article for peer review (preprint already available on SocArxiv)."
], 
  externalLink: "https://github.com/UC-OSPO-Network/ospo-survey-analysis", 
  externalLinkText: "Follow the project on GitHub", 
  imgSrc: "images/uc-ospo-logo.png", 
  imgAltText: "logo for the UC OSPO Network, which consists of abstract shapes resembling a person moving forward", 
  imgWidth: 298, 
  imgHeight: 534
});

const projectObjectArray = [survey];

// Export the array to be used in other files
export default projectObjectArray;