class Project {
  // Notice the curly braces { } surrounding the parameters
  // I'm passing an object and telling javascript to unpack it
  // This allows me to use keywords during instantiation
  constructor({
    projtype,
    year,
    title,
    descriptionArr,
    externalLink,
    externalLinkText,
    imgSrc,
    imgAltText,
    imgWidth,
    imgHeight
  }) {
    this.projtype = projtype;
    this.year = year;
    this.title = title;
    this.descriptionArr = descriptionArr;
    this.externalLink = externalLink;
    this.externalLinkText = externalLinkText;
    this.imgSrc = imgSrc;
    this.imgAltText = imgAltText;
    this.imgWidth = imgWidth;
    this.imgHeight = imgHeight;
  }
  getDescriptionHTML() {
    // take in an array of strings and
    // output one string of concatenated paragraphs
    return this.descriptionArr
      .map(paragraph => `<p>${paragraph}</p>`)
      .join('');
  }
  getExternalLinkHTML() {
    // if there is no external link, return an empty string
    if (!this.externalLink) return '';

    return `
    <a class="btn" href="${this.externalLink}" target="_blank">
    "${this.externalLinkText}"
    </a>
    `;
  };
  getFigureHTML() {
    return `
      <figure>
        <img 
          src="${this.imgSrc}" 
          alt="${this.imgAltText}" 
          width="${this.imgWidth}" 
          height="${this.imgHeight}"
        >
      </figure>
    `;
  }
  getProjectHTML() {
    return `
    <div class="project-showcase">
      <div class="project-description">
        <p class="project-category-text">${this.projtype} | ${this.year}</p>
        <h3>${this.title}</h3>
          ${this.getDescriptionHTML()}
          ${this.getExternalLinkHTML()}
      </div>
      ${this.getFigureHTML()}
    </div>
    `
}
};

export default Project;