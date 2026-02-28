// options tell the observer when to fire
const options = {
  threshold: 0.5 // fire when 50% of the element is visible
};

// callback function is the thing you do when the observer is triggered
const myCallback = function(entries, observer) {
    // IntersectionObserver always gives you an array, even
    // if you know there will only ever be one element in it.
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // THE ELEMENT IS IN VIEW!
      myElement.classList.add("fade-in")
      
      // Stop watching so it only fades in once
      // observer.unobserve(entry.target); 
    }
  });
};

// hire the bouncer and tell him who to watch
const myBouncer = new IntersectionObserver(myCallback, options);

const myElement = document.querySelector(".about-inner-container");

// start observing!
myBouncer.observe(myElement);