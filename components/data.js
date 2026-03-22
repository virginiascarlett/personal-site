import Project from "./Project.js";

// ORDER OF PROJECTS MUST MATCH THE ORDER IN THE HTML FILE
const survey = new Project({
  // projtype: "Survey", 
  // year: "2025", 
  title: "A multi-campus survey of 295 open source contributors at the University of California", 
  descriptionArr: [
    {
      "paragraph": "Working for UC Santa Barbara and the UC OSPO Network, I spearheaded a multi-campus survey of open source contributors affiliated with the University of California. The first in-depth analysis of open source contributor needs from a university support staff perspective, this project uncovered a widespread struggle with project sustainability, making sustainability a key strategic direction for our program.",
    },
  {
    "button": [
      "https://ucospo.net/oss-resources/survey/",
      "Go to the survey website"
    ]
  }
], 
  imgSrc: "images/infographic-crop.png", 
  imgAltText: "preview of an infographic describing the 2025 UC OSPO survey, with bold percentages and modern abstract people", 
  imgWidth: 300, 
  imgHeight: 450
});

const hpcTutorial = new Project({
  // projtype: "Tutorial",
  // year: "2024",
  title: "HPC for Absolute Beginners",
  descriptionArr: [
    {
      "paragraph": "Most compute cluster documentation assumes prior computing knowledge, creating a barrier to entry for many scientists. To bridge this gap, I authored an accessible introduction to high-performance computing (HPC) for researchers without a computer science background. It was so popular among junior scientists at my institute that I adapted it for the public and published it on Medium.",
    },
    {
      "button": [
        "https://medium.com/@virginia.t.scarlett/hpc-for-absolute-beginners-47a6574e8830",
        "Read the tutorial"
      ]
    }
],
  imgSrc: "images/hpc2-crop.png",
  imgAltText: "A picture of server racks in a data center",
  imgWidth: 300,
  imgHeight: 450
})

const disUtilities = new Project({
  // projtype: "Software",
  // year: "2024",
  title: "DIS utilities: a tool for tracking institutional research outputs",
  descriptionArr: [
    {
      paragraph: "At HHMI's Janelia Research Campus, I led product management for an automated software pipeline that discovers new Janelia publications. This tool pulls researcher articles from the web into a MongoDB database for curation via a custom Flask application, saving the library over 150 hours of manual discovery and curation annually. More importantly, it fosters collaboration by keeping scientists informed of their colleagues’ latest discoveries."
    }, 
    {
      button: [
        "https://github.com/JaneliaSciComp/dis-utilities/tree/main",
        "Follow the project on GitHub"
      ] 
    }
  ],
  imgSrc: "images/altumcode_unsplash_900.jpg",
  imgAltText: "A software architecture diagram showing logos for various research sharing platforms, such as bioarchive and figshare, flowing into some python scripts",
  imgWidth: 300,
  imgHeight: 450
});

const dataReport = new Project({
  // projtype: "Internal Report",
  // year: "2024",
  title: "Distributing discovery: a qualitative survey of Janelia's data culture, and a plan for action",
  descriptionArr: [
    {
      paragraph: "At HHMI's Janelia Research Campus, I interviewed 60 scientists to assess their data management needs, synthesizing the findings into an internal report and several presentations. This research catalyzed a strategic reorganization of the Janelia Library."
    }, 
    {
      blockquote: [
        "\"I still find myself regularly referencing Virginia's 'Discovery' report when I want to gain some insight on approaches to open data at Janelia.\"",
        "-Michelle Avissar-Whiting, Director of Open Science Strategy at HHMI"
      ]
    }
  ],
  imgSrc: "images/janelia_report_cover.png", 
  imgAltText: "A picture of the cover of a report entitled Distributing Discovery by Virginia Scarlett", 
  imgWidth: 300, 
  imgHeight: 450,
  imgCustomClass: "janelia-image"
});


const plantBio = new Project({
  title: "Original plant biology research",
  descriptionArr: [
    {
      "paragraph": "I built my foundational research skills as a plant biologist. My early research was in the wet lab, investigating plant circadian rhythms and, later, cell wall composition for biofuels. During my PhD, I transitioned to computational experiments, using a biofuel model grass to weigh in on a long-standing debate about plant genetics. I was an NSF GRFP Fellow, mentored several students, and co-authored four papers.",
    },
    {
      "button": [
        "https://orcid.org/0000-0002-4156-2849",
        "View my CV on ORCID"
      ]
    }
],
  imgSrc: "images/brachy.png",
  imgAltText: "A picture of a grass in a pot against a black background",
  imgWidth: 300,
  imgHeight: 450
})

const projectObjectArray = [survey, hpcTutorial, disUtilities, dataReport, plantBio];

// Export the array to be used in other files
export default projectObjectArray;