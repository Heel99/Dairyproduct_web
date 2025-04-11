// const gallerycontainer = document.querySelector('.gallery-container');
// const galleryControlsContainer = document.querySelector('.gallery-controls');
// const galleryControls = ['previous', 'next'];
// const controlprevious = document.querySelector('gallery-controls-previous');
// const controlnext = document.querySelector('gallery-controls-next');

// const galleryitems = document.querySelectorAll('.gallery-item'); // Changed to querySelectorAll to select all gallery items.

// class Carousel {
//   constructor(container, items, controls) {
//     this.galleryControlsContainer = container;
//     this.galleryControls = controls;
//     this.carouselArray = [...items];
//   }

//   updateGallery() {
//     // Reset all gallery items
//     this.carouselArray.forEach(item => {
//       item.classList.remove('gallery-item-1', 'gallery-item-2', 'gallery-item-3', 'gallery-item-4', 'gallery-item-5');
//     });

//     // Assign new gallery item classes
//     this.carouselArray.slice(0, 5).forEach((item, index) => {
//       item.classList.add(`gallery-item-${index + 1}`);
//     });
//   }

//   setCurrentState(direction) {
//     // Shift the gallery array based on the direction
//     if (direction === 'previous') {
//       this.carouselArray.unshift(this.carouselArray.pop());
//     } else {
//       this.carouselArray.push(this.carouselArray.shift());
//     }
//     this.updateGallery();
//   }

//   // setControls() {
//   //   // Create and append the control buttons
//   //   this.galleryControls.forEach(control => {
//   //     const button = document.createElement('button');
//   //     button.className = `gallery-controls-${control}`;
//   //     button.innerText = control.charAt(0).toUpperCase() + control.slice(1);
//   //     this.galleryControlsContainer.appendChild(button);
//   //   });
//   // }

//   useControls() {
//     // Attach event listeners to the control buttons
//     const buttons = this.galleryControlsContainer.querySelectorAll('button');
//     buttons.forEach(button => {
//       button.addEventListener('click', (e) => {
//         e.preventDefault();
//         this.setCurrentState(button.classList.contains('gallery-controls-previous') ? 'previous' : 'next');
//       });
//     });
//   }
// }

// // Initialize the carousel
// const exampleCarousel = new Carousel(gallerycontainer, galleryitems, galleryControls);
// // exampleCarousel.setControls();
// exampleCarousel.useControls();


// Select gallery elements
const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous', 'next'];
const controlPrevious = document.querySelector('.gallery-controls-previous');
const controlNext = document.querySelector('.gallery-controls-next');
const galleryItems = document.querySelectorAll('.gallery-item');

class Carousel {
  constructor(container, items, controlsContainer, controls) {
    this.galleryContainer = container;
    this.galleryControlsContainer = controlsContainer;
    this.galleryControls = controls;
    this.carouselArray = [...items];

    this.useControls();
  }

  updateGallery() {
    // Reset all gallery items
    this.carouselArray.forEach(item => {
      item.classList.remove(
        'gallery-item-1',
        'gallery-item-2',
        'gallery-item-3',
        'gallery-item-4',
        'gallery-item-5'
      );
    });

    // Assign new gallery item classes
    this.carouselArray.slice(0, 5).forEach((item, index) => {
      item.classList.add(`gallery-item-${index + 1}`);
    });
  }

  setCurrentState(direction) {
    // Shift the gallery array based on direction
    if (direction === 'previous') {
      this.carouselArray.unshift(this.carouselArray.pop());
    } else {
      this.carouselArray.push(this.carouselArray.shift());
    }
    this.updateGallery();
  }

  useControls() {
    // Attach event listeners to the existing control buttons
    controlPrevious.addEventListener('click', () => this.setCurrentState('previous'));
    controlNext.addEventListener('click', () => this.setCurrentState('next'));
  }
}

// Initialize the carousel
const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControlsContainer, galleryControls);
