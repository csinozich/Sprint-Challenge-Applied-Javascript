class Carousel {
  constructor(element) {
    this.element = element;
    this.index = 1;
    this.place = this.element.dataset.place;
    this.left = document.querySelector('.left-button');
    this.right = document.querySelector('.right-button');
    this.left.addEventListener('click', () => this.leftClick());
    this.right.addEventListener('click', () => this.rightClick())
  }

  rightClick() {
    this.index +=1;
    if (this.index >=5) {
      this.index=1
    }
    this.element.querySelectorAll('.carImage').forEach(image => {
      image.classList.toggle('active-image', false)
    })
    this.element.querySelector(`.carImage[data-place='${this.index}']`).classList.toggle('activeImage', true)
  }

  leftClick() {
    this.index -= 1;
    if (this.index <= 0) {
      this.index=4;
    }
    else {
      this.element.querySelectorAll('.carImage').forEach(image => {
        image.classList.toggle('active-image', false)
      })
      this.element.querySelector(`.carImage[data-place'${this.index}]`).classList.toggle('activeImage', true)
    }
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
