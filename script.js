window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
  
    // Allow the video to play for a moment before hiding
    setTimeout(() => {
      preloader.classList.add("hide");
      setTimeout(() => {
        preloader.style.display = "none";
      }, 600);
    }, 2000);
  
    // Hero slider logic
    const heroImages = document.querySelectorAll(".slider-img");
    let heroIndex = 0;
  
    function changeHeroImage() {
      heroImages.forEach((img) => img.classList.remove("active"));
      heroImages[heroIndex].classList.add("active");
      heroIndex = (heroIndex + 1) % heroImages.length;
    }
  
    if (heroImages.length > 0) {
      heroImages[heroIndex].classList.add("active");
      setInterval(changeHeroImage, 3000);
    }
  
    // Specialties image slider logic
    const specialtyImage = document.getElementById("specialty-img");
    const specialtySources = [
      "images/OS1.png",
      "images/OM1.png",
      "images/OM2.png"
    ];
    
    let specialtyIndex = 0;
    
    if (specialtyImage) {
      setInterval(() => {
        specialtyImage.style.opacity = 0; // fade out
    
        setTimeout(() => {
          specialtyIndex = (specialtyIndex + 1) % specialtySources.length;
          specialtyImage.src = specialtySources[specialtyIndex];
          specialtyImage.style.opacity = 1; // fade in
        }, 300); // timing should match CSS transition
      }, 3000);
    }
    
  }

);
  