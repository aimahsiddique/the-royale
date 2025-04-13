window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
  
    // Allow the video to play for a moment before hiding
    setTimeout(() => {
      preloader.classList.add("hide");
      setTimeout(() => {
        preloader.style.display = "none";
      }, 600);
    }, 2000);
  
    // Slider logic
    const images = document.querySelectorAll(".slider-img");
    let currentIndex = 0;
  
    function changeImage() {
      images.forEach((img) => img.classList.remove("active"));
      images[currentIndex].classList.add("active");
      currentIndex = (currentIndex + 1) % images.length;
    }
  
    if (images.length > 0) {
      images[currentIndex].classList.add("active");
      setInterval(changeImage, 3000);
    }
  });
  