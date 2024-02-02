let movies = [
    {
      name: "Hunting In Venice",
      des: "A Haunting in Venice is a 2023 American mystery film produced and directed by Kenneth Branagh streaming service Disney+ .",
      image: "./image/slider1.jpeg",
    },
    {
      name: "MISSION IMPOSSIBLE",
      des: "series of American action spy films, based on the 1966 TV series created by Bruce Geller streaming service Disney+",
      image: "./image/slider2.jpg",
    },
    {
      name: "HEART OF STONE",
      des: "Its plot follows an international intelligence operative who must embark on a dangerous mission to protect a mysterious artificial intelligence system known as streaming service Disney+",
      image: "./image/slider3.jpg",
    },
  
    {
      name: "Raya and the Last Dragon",
      des: "Raya and the Last Dragon is an animated Disney film released in 2021.",
      image: "./image/slider4.jpg",
    },
  
    {
      name: "Operation Fortune",
      des: "Luca is a Disney-Pixar animated film released in 2021.",
      image: "./image/slider5.jpeg",
    },
  ];
  
  const carousel = document.querySelector(".carousel");
  let sliders = [];
  
  let slideIndex = 0; // track the current slide
  
  const createSlide = () => {
    if (slideIndex >= movies.length) {
      slideIndex = 0;
    }
  
    // create DOM Elements
    let slide = document.createElement("div");
    let imgElement = document.createElement("img");
    let content = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
  
    // attaching all element
    imgElement.appendChild(document.createTextNode(""));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);
  
    // setting up images
    imgElement.src = movies[slideIndex].image;
    slideIndex++;
  
    // setting elements classnames
    slide.className = "slider";
    content.className = "slide-content";
    h1.className = "movie-title";
    p.className = "movie-des";
  
    sliders.push(slide);
  
    if (sliders.length) {
      sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
        30 * (sliders.length - 2)
      }px)`;
    }
  };
  
  for (let i = 0; i < 3; i++) {
    createSlide();
  }
  
  setInterval(() => {
    createSlide();
  }, 3000);
  
  // video cards
  
  const videoCards = document.querySelectorAll(".video-card");
  
  videoCards.forEach((item) => {
    item.addEventListener("mouseover", () => {
      let video = item.children[1];
      video.play();
    });
    item.addEventListener("mouseleave", () => {
      let video = item.children[1];
      video.pause();
    });
  });
  
  // cards sliders
  
  let cardContainers = document.querySelectorAll(".card-container");
  let preBtns = document.querySelectorAll(".pre-btn");
  let nxtBtns = document.querySelectorAll(".nxt-btn");
  
  // Function to scroll the card container to the left
  function scrollLeft(container) {
    container.scrollLeft -= container.clientWidth;
  }
  
  // Function to scroll the card container to the right
  function scrollRight(container) {
    container.scrollLeft += container.clientWidth;
  }
  
  // Attach click event listeners to previous and next buttons
  preBtns.forEach((preBtn, index) => {
    preBtn.addEventListener("click", () => {
      scrollLeft(cardContainers[index]);
    });
  });
  
  nxtBtns.forEach((nxtBtn, index) => {
    nxtBtn.addEventListener("click", () => {
      scrollRight(cardContainers[index]);
    });
  });