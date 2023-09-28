const slider = document.getElementById("slider");
const sliderComputed = window.getComputedStyle(slider);
const sliderWidth = parseFloat(sliderComputed.getPropertyValue("width"));
const carousel = document.querySelector(".carousel");
const navDots = document.querySelector(".nav-dots");

class Image {
  constructor(link) {
    this.link = link;
  }
}

const images = [
  new Image("./imgs/img1.jpg"),
  new Image("./imgs/img2.jpg"),
  new Image("./imgs/img3.jpg"),
];

const createDot = (index) => {
  const dot = document.createElement("li");
  dot.classList.add("dot");

  const button = document.createElement("button");
  button.classList.add("dot-button");
  button.setAttribute("data-index", index);

  if (index === 0) button.classList.add("selected");

  button.addEventListener("click", () => {
    // define selected
    const buttons = document.querySelectorAll(".dot-button");
    buttons.forEach((btn) => {
      btn.classList.remove("selected");
    });
    button.classList.add("selected");

    // move to image selected
    slider.style.transform = `translateX(-${index * slider.clientWidth}px)`;
    slider.setAttribute("data-index", index);
  });

  dot.appendChild(button);
  navDots.appendChild(dot);
};

const createCarousel = () => {
  slider.setAttribute("data-index", 0);
  images.forEach((image, index) => {
    const img = document.createElement("img");
    img.classList.add("slider-img");
    img.setAttribute("data-index", index);
    img.src = image.link;
    img.style.left = `${sliderWidth * index}px`;
    slider.appendChild(img);

    createDot(index);
  });
};

const buttonUpdater = (currentIndex) => {
  const dotButtons = document.querySelectorAll(".dot-button");
  dotButtons.forEach((button) => {
    const dataIndex = button.getAttribute("data-index");
    if (dataIndex !== String(currentIndex)) {
      button.classList.remove("selected");
    } else {
      button.classList.add("selected");
    }
  });
};

carousel.addEventListener("click", (e) => {
  if (e.target.className === "left-arrow") {
    let currentIndex = slider.getAttribute("data-index");
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    slider.style.transform = `translateX(-${
      currentIndex * slider.clientWidth
    }px)`;
    slider.setAttribute("data-index", currentIndex);
    buttonUpdater(currentIndex);
  }

  if (e.target.className === "right-arrow") {
    let currentIndex = slider.getAttribute("data-index");
    currentIndex = (currentIndex + 1) % images.length;
    slider.style.transform = `translateX(-${
      currentIndex * slider.clientWidth
    }px)`;
    slider.setAttribute("data-index", currentIndex);
    buttonUpdater(currentIndex);
  }
});

const timeout = () => {
  const nextImg = document.querySelector(".right-arrow");
  nextImg.click();
};

let timer = setInterval(timeout, 5000);

carousel.addEventListener("mouseenter", () => {
  clearInterval(timer);
});

carousel.addEventListener("mouseleave", () => {
  timer = setInterval(timeout, 5000);
});

createCarousel();
