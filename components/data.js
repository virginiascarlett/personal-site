import Project from "./Project.js";

// ORDER OF PROJECTS MUST MATCH THE ORDER IN THE HTML FILE
const survey = new Project({
  // projtype: "Survey", 
  // year: "2025", 
  title: "A multi-campus survey of 295 open source contributors at the University of California", 
  descriptionArr: [
    {
      "paragraph": "In my role at the UC Santa Barbara Library, a member of the UC OSPO Network, I led a multi-campus survey of nearly 300 open source contributors affiliated with the University of California (UC). This is the first in-depth survey of open source contributor needs from the perspective of university support staff.",
    },
    {
    "paragraph": "In addition to making the data available, we have submitted a scholarly article for peer review (preprint already available on SocArxiv)."
  },
  {
    "button": [
      "https://github.com/UC-OSPO-Network/ospo-survey-analysis",
      "Follow the project on GitHub"
    ]
  }
], 
  imgSrc: "images/uc-ospo-logo.png", 
  imgAltText: "logo for the UC OSPO Network, which consists of abstract shapes resembling a person moving forward", 
  imgWidth: 298, 
  imgHeight: 534
});

const hpcTutorial = new Project({
  // projtype: "Tutorial",
  // year: "2024",
  title: "HPC for Absolute Beginners",
  descriptionArr: [
    {
      "paragraph": "While many universities and national labs have excellent documentation for their compute clusters, that documentation almost universally assumes that the reader has some foundational computing knowledge. I wrote this accessible introduction to high-performance computing for researchers with no background in computer science.",
    },
    {
    "paragraph": "Some colleagues at the UC Davis compute cluster liked it so much, they adapted it and incorporated it into their own documentation!"
    },
    {
      "button": [
        "https://medium.com/@virginia.t.scarlett/hpc-for-absolute-beginners-47a6574e8830",
        "Read the tutorial"
      ]
    }
],
  imgSrc: "images/pexels-brett-sayles-crop_copy.jpg",
  imgAltText: "A picture of server racks in a data center",
  imgWidth: 300,
  imgHeight: 400
})

const disUtilities = new Project({
  // projtype: "Software",
  // year: "2024",
  title: "DIS utilities: a tool for tracking institutional research outputs",
  descriptionArr: [
    {
      paragraph: "While at the Howard Hughes Medical Institute's Janelia Research Campus, I helped design a software pipeline for automatically tracking articles and datasets produced by researchers at our institute. Found works are automatically added to a MongoDB database, and can be curated through a user-friendly Flask application. It's a bespoke tool that was never designed to be used outside of Janelia, but it served our purposes, and it's still in use at Janelia today."
    }, 
    {
      button: [
        "https://github.com/JaneliaSciComp/dis-utilities/tree/main",
        "Follow the project on GitHub"
      ] 
    }
  ],
  imgSrc: "images/DIS_architecture_crop.png",
  imgAltText: "A software architecture diagram showing logos for various research sharing platforms, such as bioarchive and figshare, flowing into some python scripts",
  imgWidth: 838,
  imgHeight: 900
});

const dataReport = new Project({
  // projtype: "Internal Report",
  // year: "2024",
  title: "Distributing discovery: a qualitative survey of Janelia's data culture, and a plan for action",
  descriptionArr: [
    {
      paragraph: "In my role at the Howard Hughes Medical Institute's Janelia Research Campus, I interviewed 60 scientists about their data management needs. I summarized this qualitative survey in an internal report and multiple talks. This project helped catalyze a reorganization of the Janelia Library."
    }, 
    {
      blockquote: [
        "\"It's not just anyone who will take on the Sisyphean task of understanding and documenting the data management behaviors of an entire institution, but even fewer will do it in a way that creates something genuinely useful. It's two years old now, and I still find myself regularly referencing Virginia's 'Discovery' report when I want to gain some insight on approaches to open data at Janelia.\"",
        "-Michelle Avissar-Whiting, Director of Open Science Strategy at HHMI"
      ]
    }
  ],
  imgSrc: "images/janelia_report_cover.png",
  imgAltText: "A picture of the cover of a report entitled Distributing Discovery by Virginia Scarlett",
  imgWidth: 652,
  imgHeight: 844
});

const projectObjectArray = [survey, hpcTutorial, disUtilities, dataReport];

// Export the array to be used in other files
export default projectObjectArray;