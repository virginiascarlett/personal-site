class Project {
  // Notice the curly braces { } surrounding the parameters
  // I'm passing an object and telling javascript to unpack it
  // This allows me to use keywords during instantiation
  constructor({
    title,
    descriptionArr,
    externalLink,
    externalLinkText,
    imgSrc,
    imgAltText,
    imgWidth,
    imgHeight
  }) {
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

    return this.descriptionArr.map(contentBlock => {
      const type = Object.keys(contentBlock)[0]; //key
      const data = contentBlock[type]; //value

      if (type === 'paragraph') {
        // data is a string
        return `<p>${data}</p>`;
      }

      else if (type === 'button') {
        // data is an array: [url, text]
        return `
          <a class="btn" href="${data[0]}" target="_blank">
            ${data[1]}
          </a>`;
      } 
      
      else if (type === 'blockquote') {
        // data is an array: [quoteString, citeString]
        return `
          <blockquote>
            <p>${data[0]}</p>
            <cite>${data[1]}</cite>
          </blockquote>`;
      }
      
    // Concatenate the content blocks
    }).join('');
  }
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
        <h3>${this.title}</h3>
          ${this.getDescriptionHTML()}
      </div>
      ${this.getFigureHTML()}
    </div>
    `
}
};

export default Project;