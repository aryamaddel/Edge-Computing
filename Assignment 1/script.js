// ==================== Dynamic Time Display ====================
function updateDynamicTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  let greeting;
  let emoji;

  if (hours >= 5 && hours < 12) {
    greeting = "Good Morning";
    emoji = "🌅";
  } else if (hours >= 12 && hours < 17) {
    greeting = "Good Afternoon";
    emoji = "☀️";
  } else if (hours >= 17 && hours < 21) {
    greeting = "Good Evening";
    emoji = "🌆";
  } else {
    greeting = "Good Night";
    emoji = "🌙";
  }

  const timeString = `${emoji} ${greeting} • ${
    hours % 12 || 12
  }:${minutes}:${seconds} ${hours >= 12 ? "PM" : "AM"}`;
  document.getElementById("dynamic-time").textContent = timeString;
}

// Update time every second
setInterval(updateDynamicTime, 1000);
updateDynamicTime();

// ==================== Current Date Display ====================
function updateCurrentDate() {
  const now = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const dateString = now.toLocaleDateString("en-US", options);
  document.getElementById("current-date").textContent = dateString;
}

updateCurrentDate();

// ==================== Lewis Hamilton Quotes ====================
const hamiltonQuotes = [
  "Still I rise.",
  "I feel like I can always do better. I'm never satisfied.",
  "You have to believe in yourself when no one else does.",
  "Winning is great, but it's the journey that matters.",
  "Never give up, no matter what.",
  "I don't aspire to be like other drivers - I aspire to be unique in my own way.",
  "The way I drive, the way I handle a car, is an expression of my inner feelings.",
  "You learn more from your mistakes than your successes.",
  "Dream big, work hard, stay focused, and surround yourself with good people.",
  "I always want to be the best I can be and push myself to the limit."
];

function displayHamiltonQuote() {
  const quoteElement = document.getElementById('hamilton-quote');
  // Use visit count to determine which quote to show
  let visits = localStorage.getItem('visitCount') || 1;
  const quoteIndex = (parseInt(visits) - 1) % hamiltonQuotes.length;
  quoteElement.textContent = `"${hamiltonQuotes[quoteIndex]}"`;
}

displayHamiltonQuote();

// ==================== Visit Counter ====================
function updateVisitCount() {
  let visits = localStorage.getItem("visitCount");
  if (!visits) {
    visits = 0;
  }
  visits = parseInt(visits) + 1;
  localStorage.setItem("visitCount", visits);

  // Animate the counter
  animateCounter("visit-count", 0, visits, 1000);
}

function animateCounter(elementId, start, end, duration) {
  const element = document.getElementById(elementId);
  const range = end - start;
  const increment = range / (duration / 16);
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= end) {
      current = end;
      clearInterval(timer);
    }
    element.textContent = Math.floor(current);
  }, 16);
}

updateVisitCount();

// ==================== Speed Animation ====================
function animateSpeed() {
  const maxSpeed = 350;
  let currentSpeed = 0;
  const speedElement = document.getElementById("current-speed");

  const speedInterval = setInterval(() => {
    currentSpeed += Math.random() * 15;
    if (currentSpeed >= maxSpeed) {
      currentSpeed = maxSpeed;
      clearInterval(speedInterval);
      // Start deceleration after reaching max
      setTimeout(() => {
        const decelInterval = setInterval(() => {
          currentSpeed -= Math.random() * 20;
          if (currentSpeed <= 0) {
            currentSpeed = 0;
            clearInterval(decelInterval);
            // Restart animation
            setTimeout(animateSpeed, 2000);
          }
          speedElement.textContent = Math.floor(currentSpeed);
        }, 50);
      }, 1000);
    }
    speedElement.textContent = Math.floor(currentSpeed);
  }, 50);
}

animateSpeed();

// ==================== Time on Site ====================
let timeOnSite = 0;

function updateTimeOnSite() {
  timeOnSite++;
  const minutes = Math.floor(timeOnSite / 60);
  const seconds = timeOnSite % 60;
  document.getElementById("lap-time").textContent = `${minutes}:${seconds
    .toString()
    .padStart(2, "0")}`;
}

setInterval(updateTimeOnSite, 1000);

// ==================== Carousel Functionality ====================
const track = document.getElementById("carouselTrack");
const slides = document.querySelectorAll(".carousel-slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const indicatorsContainer = document.getElementById("indicators");

let currentSlide = 0;
const totalSlides = slides.length;

// Create indicators
for (let i = 0; i < totalSlides; i++) {
  const indicator = document.createElement("div");
  indicator.classList.add("indicator");
  if (i === 0) indicator.classList.add("active");
  indicator.addEventListener("click", () => goToSlide(i));
  indicatorsContainer.appendChild(indicator);
}

const indicators = document.querySelectorAll(".indicator");

function updateCarousel() {
  // Update track position
  track.style.transform = `translateX(-${currentSlide * 100}%)`;

  // Update active slide
  slides.forEach((slide, index) => {
    slide.classList.toggle("active", index === currentSlide);
  });

  // Update active indicator
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle("active", index === currentSlide);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateCarousel();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateCarousel();
}

function goToSlide(index) {
  currentSlide = index;
  updateCarousel();
}

// Event listeners
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Auto-advance carousel
let autoAdvance = setInterval(nextSlide, 5000);

// Pause auto-advance on hover
const carouselContainer = document.querySelector(".carousel-container");
carouselContainer.addEventListener("mouseenter", () => {
  clearInterval(autoAdvance);
});

carouselContainer.addEventListener("mouseleave", () => {
  autoAdvance = setInterval(nextSlide, 5000);
});

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    prevSlide();
    clearInterval(autoAdvance);
    autoAdvance = setInterval(nextSlide, 5000);
  } else if (e.key === "ArrowRight") {
    nextSlide();
    clearInterval(autoAdvance);
    autoAdvance = setInterval(nextSlide, 5000);
  }
});

// Touch/Swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

carouselContainer.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

carouselContainer.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  if (touchEndX < touchStartX - 50) {
    nextSlide();
    clearInterval(autoAdvance);
    autoAdvance = setInterval(nextSlide, 5000);
  }
  if (touchEndX > touchStartX + 50) {
    prevSlide();
    clearInterval(autoAdvance);
    autoAdvance = setInterval(nextSlide, 5000);
  }
}

// ==================== Smooth Scroll Navigation ====================
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    // Remove active class from all links
    document
      .querySelectorAll(".nav-link")
      .forEach((l) => l.classList.remove("active"));

    // Add active class to clicked link
    this.classList.add("active");

    // Smooth scroll to section
    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      const navHeight = document.querySelector(".navbar").offsetHeight;
      const targetPosition = targetSection.offsetTop - navHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// ==================== Scroll-based Navigation Highlighting ====================
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");
  const navHeight = document.querySelector(".navbar").offsetHeight;

  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - navHeight - 100;
    const sectionHeight = section.clientHeight;

    if (
      window.pageYOffset >= sectionTop &&
      window.pageYOffset < sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// ==================== Intersection Observer for Animations ====================
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe elements for animation
document
  .querySelectorAll(".feature-card, .info-card, .tech-item")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "all 0.6s ease";
    observer.observe(el);
  });

// ==================== Preload Images ====================
function preloadImages() {
  const images = document.querySelectorAll('img[loading="lazy"]');

  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.src;
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));
  }
}

preloadImages();

// ==================== Console Easter Egg ====================
console.log(
  "%c🏎️ F1 Racing Hub",
  "font-size: 20px; font-weight: bold; color: #E10600;"
);
console.log(
  "%cBuilt for Edge Computing Assignment",
  "font-size: 12px; color: #FFD700;"
);
console.log(
  "%cHosted on Vercel Cloud Platform",
  "font-size: 12px; color: #00C7B7;"
);

// ==================== Performance Monitoring ====================
window.addEventListener("load", () => {
  const loadTime = performance.now();
  console.log(
    `%c⚡ Page loaded in ${Math.round(loadTime)}ms`,
    "color: #00FF00; font-weight: bold;"
  );
});
