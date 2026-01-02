// Dynamic Time Display
function updateTime() {
    const now = new Date();
    
    // Format time
    const timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };
    const timeString = now.toLocaleTimeString('en-US', timeOptions);
    
    // Format date
    const dateOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    const dateString = now.toLocaleDateString('en-US', dateOptions);
    
    // Update DOM
    document.getElementById('currentTime').textContent = timeString;
    document.getElementById('currentDate').textContent = dateString;
}

// Carousel Functionality
class Carousel {
    constructor() {
        this.track = document.getElementById('carouselTrack');
        this.slides = document.querySelectorAll('.carousel-slide');
        this.prevBtn = document.querySelector('.carousel-btn.prev');
        this.nextBtn = document.querySelector('.carousel-btn.next');
        this.indicatorsContainer = document.getElementById('indicators');
        
        this.currentIndex = 0;
        this.totalSlides = this.slides.length;
        
        this.init();
    }
    
    init() {
        // Create indicators
        this.createIndicators();
        
        // Event listeners
        this.prevBtn.addEventListener('click', () => this.prev());
        this.nextBtn.addEventListener('click', () => this.next());
        
        // Auto-play carousel
        this.startAutoPlay();
        
        // Pause on hover
        const carousel = document.querySelector('.carousel');
        carousel.addEventListener('mouseenter', () => this.stopAutoPlay());
        carousel.addEventListener('mouseleave', () => this.startAutoPlay());
    }
    
    createIndicators() {
        for (let i = 0; i < this.totalSlides; i++) {
            const indicator = document.createElement('div');
            indicator.classList.add('indicator');
            if (i === 0) indicator.classList.add('active');
            indicator.addEventListener('click', () => this.goToSlide(i));
            this.indicatorsContainer.appendChild(indicator);
        }
        this.indicators = document.querySelectorAll('.indicator');
    }
    
    updateCarousel() {
        const offset = -this.currentIndex * 100;
        this.track.style.transform = `translateX(${offset}%)`;
        
        // Update indicators
        this.indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentIndex);
        });
    }
    
    next() {
        this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
        this.updateCarousel();
    }
    
    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
        this.updateCarousel();
    }
    
    goToSlide(index) {
        this.currentIndex = index;
        this.updateCarousel();
    }
    
    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => this.next(), 4000);
    }
    
    stopAutoPlay() {
        clearInterval(this.autoPlayInterval);
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Update time immediately and then every second
    updateTime();
    setInterval(updateTime, 1000);
    
    // Initialize carousel
    new Carousel();
});
