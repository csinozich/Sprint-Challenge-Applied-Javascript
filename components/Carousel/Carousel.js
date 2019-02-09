class Carousel {
  constructor(element) {
    this.element = element;
    this.index = 1;
    this.place = this.element.dataset.place;
    this.image = document.querySelectorAll('.carImage');
    this.image[0].style.display = 'flex';
    this.left = document.querySelector('.left-button');
    this.right = document.querySelector('.right-button');
    this.left.addEventListener('click', () => this.leftClick());
    this.right.addEventListener('click', () => this.rightClick())
  }

  rightClick() {
    this.image.forEach(img => img.style.display = 'none');
    const position = Array.from(this.image).length;
    this.index +=1;
    if (this.index >=5) {
      this.index=1
    }
    else {
     this.index = count;
    }
    this.image[this.position].style.display = 'flex';
  }

  leftClick() {
    this.image.forEach(img => img.style.display = 'none');
    const position = Array.from(this.image).length-1;
    this.index -= 1;
    if (this.index <= 0) {
      this.index=4;
    }
    else {
      this.index = position;
    }
    this.image[this.position].style.display = 'flex';
  }
}

let carousel = document.querySelector('.carousel');

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
