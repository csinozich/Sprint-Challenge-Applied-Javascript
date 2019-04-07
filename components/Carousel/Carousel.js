class Carousel {
  constructor(element) {
    this.element = element;
    this.index = 0;
    this.image = element.querySelectorAll('.carImage');
    this.left = element.querySelector('.left-button');
    this.right = element.querySelector('.right-button');
    this.left.addEventListener('click', () => this.leftClick(index));
    this.right.addEventListener('click', () => this.rightClick(index));
    this.image[0].style.display = 'block';
  }

  currentImage() {
    document.querySelectorAll('.carImage').forEach(img => img.style.display = 'none');
    this.image[this.index].style.display = 'block';
  }

  leftClick() {
    this.index--;
    if(this.index < 0) {
      this.index = this.image.length-1
    }
    this.currentImage();
  }

  rightClick() {
    this.index++;
    if(this.index > 3) {
      this.index = 0
    }
    this.currentImage();
  }
}

let carousel = document.querySelector('.carousel')
Array.from(carousel).map(img => new Carousel(img));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
