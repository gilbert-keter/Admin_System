
<script setup>

import demImage from '../../images/dem.jpg';
import demuImage from '../../images/demu.jpg';
import demuImage1 from '../../images/demu1.jpg';
import demuImage2 from '../../images/demu2.jpg';
import demuImage3 from '../../images/demu3.jpg';
</script>


<template>
 <section id= "carousel" class="min-h-screen font-roboto overflow-hidden -mt-7">
  <div class="slider-container relative w-full h-screen overflow-hidden">
    <!-- Slider -->
    <div 
      class="slider flex transition-transform duration-500 ease-out h-full"
      :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
    >
      <!-- Slide 1 -->
      <div class="box box1 w-full h-full flex-shrink-0 relative">
  <!-- Subtle dark overlay with lime tint -->
  <div class="absolute inset-0 bg-gradient-to-r from-lime-900/80 via-white/60 to-transparent z-10"></div>

  <!-- Background image -->
  <img
    :src="demImage"
    alt="demulla1"
    class="absolute inset-0 w-full h-full object-cover brightness-105 contrast-100"
  />

  <!-- Content Section -->
  <div class="details-container relative z-20">
    <div class="details text-left p-8 md:p-16 lg:p-20">
      <!-- Label -->
      <div class="inline-flex items-center px-6 py-2 rounded-full bg-orange-500/20 border border-orange-400/30 mb-6">
        <span class="w-2 h-2 bg-orange-400 rounded-full top-5 mr-4 animate-pulse"></span>
        <span class="text-sm font-medium text-orange-300">Innovation</span>
      </div>

      <!-- Headline -->
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-lg text-center mx-auto">
        Empowering <span class="text-lime-400">Communities</span> 
      </h1>

      <!-- Paragraph -->
      <p class="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl leading-relaxed drop-shadow">
        Driving inclusion and growth by connecting small businesses and individuals 
      </p>

      <!-- Buttons -->
      <div class="flex flex-col sm:flex-row gap-4">
        <button class="px-8 py-4 bg-lime-500 text-white rounded-xl font-semibold hover:bg-lime-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-lime-500/25">
          Get Started
        </button>
    
      </div>
    </div>
  </div>
</div>



          <!-- Slide 2 - Cloud Computing -->
          <div class="box box2 w-full flex-shrink-0 relative">
  <!-- Subtle lime gradient overlay focused on left side -->
  <div class="absolute inset-0 bg-gradient-to-r from-lime-700/80 via-lime-600/50 to-transparent backdrop-blur-[1px] z-10"></div>

  <!-- Background image -->
  <img 
    :src="demuImage"alt="Cloud Computing" 
    class="absolute inset-0 w-full h-full object-cover"
  >

  <!-- Content Container -->
  <div class="details-container relative z-20">
    <div class="details text-left p-8 md:p-16 lg:p-20">
      
      <!-- Tag/Badge -->
      <div class="inline-flex items-center px-4 py-2 rounded-full bg-lime-500/20 border border-lime-400/30 mb-6">
        <span class="w-2 h-2 bg-lime-400 rounded-full mr-2 animate-pulse"></span>
        <span class="text-sm font-medium text-lime-300">Finance</span>
      </div>
      
      <!-- Headline -->
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
        Digital Microfinance
        <span class="text-lime-400 block">Finance</span>
      </h1>

      <!-- Description -->
      <p class="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl leading-relaxed drop-shadow-sm">
        Driving inclusion and growth by connecting small businesses and individuals.
      </p>

      <!-- Buttons -->
      <div class="flex flex-col sm:flex-row gap-4">
        <button class="px-8 py-4 bg-lime-500 text-white rounded-xl font-semibold hover:bg-lime-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-lime-500/30">
          View Services
        </button>
        <button class="px-8 py-4 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 backdrop-blur-sm">
          Case Studies
        </button>
      </div>
    </div>

    <!-- Right-side illustration (optional) -->
    <div class="illustration flex justify-center items-center">
      <div class="cloud-element">
        <div class="server-rack"></div>
        <div class="glow"></div>
      </div>
    </div>
  </div>
</div>


          <!-- Slide 3 - Cybersecurity -->
          <div class="box box3 w-full flex-shrink-0 relative">
  <!-- Overlay: darker lime-gold blend for trust + warmth -->
  <div class="absolute inset-0 bg-gradient-to-r from-lime-800 via-lime-700/80 to-transparent z-10"></div>

  <!-- Background image: black business owner using a laptop -->
  <img 
    :src="demuImage1" 
    alt="Digital Microfinance" 
    class="absolute inset-0 w-full h-full object-cover"
  >

  <!-- Content -->
  <div class="details-container relative z-20">
    <div class="details text-left p-8 md:p-16 lg:p-20">
      
      <!-- Tag -->
      <div class="inline-flex items-center px-4 py-2 rounded-full bg-lime-500/20 border border-lime-400/30 mb-6">
        <span class="w-2 h-2 bg-lime-400 rounded-full mr-2 animate-pulse"></span>
        <span class="text-sm font-medium text-lime-300">Trust</span>
      </div>

      <!-- Title -->
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
        Trusted Digital
        <span class="text-lime-400 block">Lending Platform</span>
      </h1>

      <!-- Description -->
      <p class="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl leading-relaxed">
        Empower your clients with secure and transparent lending solutions.  
      </p>

      <!-- Buttons -->
      <div class="flex flex-col sm:flex-row gap-4">
        <button class="px-8 py-4 bg-lime-500 text-white rounded-xl font-semibold hover:bg-lime-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-lime-500/25">
          Learn More
        </button>
        <button class="px-8 py-4 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 backdrop-blur-sm">
          Our Guarantee
        </button>
      </div>
    </div>

    <div class="illustration flex justify-center items-center">
      <div class="trust-element">
        <div class="shield"></div>
        <div class="glow"></div>
      </div>
    </div>
  </div>
</div>


         <!-- Slide 4 - Smart Lending Analytics -->
<div class="box box4 w-full flex-shrink-0 relative">
  <!-- Gradient overlay: orange warmth fading into transparent right side -->
  <div class="absolute inset-0 bg-gradient-to-r from-orange-800 via-orange-700/80 to-transparent z-10"></div>

  <!-- Background image: Black business owner reviewing financial data -->
  <img 
    :src="demuImage2" 
    alt="Lending Analytics" 
    class="absolute inset-0 w-full h-full object-cover"
  >

  <!-- Content Section -->
  <div class="details-container relative z-20">
    <div class="details text-left p-8 md:p-16 lg:p-20">

      <!-- Tag -->
      <div class="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/20 border border-orange-400/30 mb-6">
        <span class="w-2 h-2 bg-orange-400 rounded-full mr-2 animate-pulse"></span>
        <span class="text-sm font-medium text-orange-300">Analytics</span>
      </div>

      <!-- Title -->
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
        Smart Lending
        <span class="text-orange-400 block">Analytics Platform</span>
      </h1>

      <!-- Description -->
      <p class="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl leading-relaxed">
        Harness data to understand borrower patterns, improve loan performance.
      
      </p>

      <!-- Buttons -->
      <div class="flex flex-col sm:flex-row gap-4">
        <button class="px-8 py-4 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-orange-500/25">
          Explore Insights
        </button>
        <button class="px-8 py-4 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 backdrop-blur-sm">
          Request Demo
        </button>
      </div>
    </div>

    <!-- Optional illustration placeholder -->
    <div class="illustration flex justify-center items-center">
      <div class="analytics-element">
        <div class="chart"></div>
        <div class="glow"></div>
      </div>
    </div>
  </div>
</div>


         <!-- Slide 5 - Empowering Digital Finance -->
<div class="box box5 w-full flex-shrink-0 relative">
  <!-- Lime & cyan gradient overlay -->
  <div class="absolute inset-0 bg-gradient-to-r from-lime-700 via-lime-600/70 to-transparent z-10"></div>

  <!-- Background image: African entrepreneurs using digital tools or mobile banking -->
  <img 
    :src="demuImage3"
    alt="Empowering Digital Finance"
    class="absolute inset-0 w-full h-full object-cover"
  >

  <!-- Content container -->
  <div class="details-container relative z-20">
    <div class="details text-left p-8 md:p-16 lg:p-20">
      <!-- Tag -->
      <div class="inline-flex items-center px-4 py-2 rounded-full bg-lime-500/20 border border-lime-400/30 mb-6">
        <span class="w-2 h-2 bg-lime-400 rounded-full mr-2 animate-pulse"></span>
        <span class="text-sm font-medium text-lime-300">Empowerment</span>
      </div>

      <!-- Title -->
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
        Empowering Communities
        <span class="text-lime-400 block">Through Digital Finance</span>
      </h1>

      <!-- Description -->
      <p class="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl leading-relaxed">
        Driving inclusion and growth by connecting small businesses, entrepreneurs, 
        and individuals.
      </p>

      <!-- Buttons -->
      <div class="flex flex-col sm:flex-row gap-4">
        <button class="px-8 py-4 bg-lime-500 text-white rounded-xl font-semibold hover:bg-lime-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-lime-500/25">
          Join the Movement
        </button>
        <button class="px-8 py-4 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 backdrop-blur-sm">
          Learn How
        </button>
      </div>
    </div>

    <!-- Optional: subtle animated graphic or icon section -->
    <div class="illustration flex justify-center items-center">
      <div class="transform-element">
        <div class="gears"></div>
        <div class="glow"></div>
      </div>
    </div>
  </div>
</div>
</div>

        <!-- Navigation Arrows -->
        <button 
          @click="prevSlide" 
          class="prev absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 cursor-pointer z-30 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 hover:border-white/40 group"
        >
          <svg class="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
        
        <button 
          @click="nextSlide" 
          class="next absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 cursor-pointer z-30 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 hover:border-white/40 group"
        >
          <svg class="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>

        <!-- Progress Bar -->
        <div class="absolute top-0.5 left-1/2 transform -translate-x-1/2 z-30 w-48">
          <div class="bg-white/20 rounded-full h-1">
            <div 
              class="bg-white h-1 rounded-full transition-all duration-300 ease-out"
              :style="{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }"
            ></div>
          </div>
        </div>

        <!-- Enhanced Trail/Dots Navigation -->
        <div class="trail absolute bottom-20 left-1/2 transform -translate-x-1/2 flex items-center gap-3 z-30">
          <div 
            v-for="(slide, index) in totalSlides" 
            :key="index" 
            @click="goToSlide(index)"
            class="cursor-pointer transition-all duration-300 flex flex-col items-center group"
          >
            <div 
              class="w-3 h-3 rounded-full bg-lime-700 transition-all duration-300 group-hover:scale-125"
              :class="currentSlide === index ? 'bg-lime-700 scale-125' : 'bg-white/40'"
            ></div>
            
          </div>
        </div>
      </div>
 </section>
 <!-- ✅ Who We Are Section (Floating Inside Carousel) -->
    <!-- Who We Are Section -->
  <section class="relative -mt-60 bg-lime-700 font-roboto rounded-xl max-w-6xl mx-auto p-12 md:p-16 transform ">
    <div class="grid md:grid-cols-2 gap-10 transform ">
      <!-- Left: Title -->
      <div class="space-y-6 p-6">
        <p class="uppercase text-orange-400 font-bold tracking-wide">Who We Are</p>
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight text-white">
          A Game Changer in <span class="text-white">Providing Finance Solutions</span>
        </h1>
        <a href="#" class="inline-block bg-orange-400 text-white font-medium px-8 py-3 rounded-full shadow-md hover:bg-lime-600 transform hover:-translate-y-1 transition-all">Learn more about us</a>
      </div>

      <!-- Right: Description + Mission/Vision/Goal -->
      <div class="space-y-6 text-white text-lg leading-relaxed">
        <p>We are a trusted traffic solutions company that helps drivers resolve traffic issues quickly, affordably, and legally.</p>
        <p><strong class="text-orange-400">Mission:</strong> Simplify traffic ticket dismissals while promoting safer driving through technology.</p>
        <p><strong class="text-orange-400">Vision:</strong> To become the most trusted digital traffic justice platform.</p>
        <p><strong class="text-orange-400">Goal:</strong> Ensure no driver faces unfair penalties through innovation and transparency.</p>
      </div>
    </div>
  </section>
 

</template>

<script>
import { gsap } from 'gsap';



export default {
  name: 'ProfessionalSlider',
  data() {
    return {
      currentSlide: 0,
      totalSlides: 4,
      autoPlayInterval: null,
      intervalDuration: 6000,
    }
  },
  mounted() {
    this.startAutoPlay();
    this.initializeAnimations();
  },
  beforeUnmount() {
    this.stopAutoPlay();
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
      this.animateSlide();
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
      this.animateSlide();
    },
    goToSlide(index) {
      this.currentSlide = index;
      this.animateSlide();
    },
    startAutoPlay() {
      this.autoPlayInterval = setInterval(() => {
        this.nextSlide();
      }, this.intervalDuration);
    },
    stopAutoPlay() {
      if (this.autoPlayInterval) {
        clearInterval(this.autoPlayInterval);
      }
    },
    initializeAnimations() {
      this.tl = gsap.timeline({ defaults: { duration: 0.8, ease: "power2.out" } });
      this.tl.from(".details", { x: -50, opacity: 0 })
          .from(".illustration", { x: 50, opacity: 0 }, "-=0.6")
          .from("button", { y: 30, opacity: 0, stagger: 0.1 }, "-=0.4");
    },
    animateSlide() {
      if (this.tl) {
        this.tl.restart();
      }
    }
  }
}
</script>

<style scoped>
.slider-container {
  height: 80vh;
  min-height: 600px;
  max-height: 800px;
}

.details-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  height: 100%;
  width: 100%;
  position: relative;
  z-index: 20;
}

@media (max-width: 768px) {
  .slider-container {
    height: 70vh;
    min-height: 500px;
  }
  
  .details-container {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
  }
  
  .details {
    grid-row: 2;
    text-align: center;
    padding: 2rem !important;
  }
  
  .illustration {
    grid-row: 1;
    padding: 2rem;
  }
}

/* Floating Animation for Illustration Elements */
.floating-element,
.cloud-element,
.security-element,
.analytics-element,
.transform-element {
  position: relative;
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(2deg); }
}

/* Custom illustration styles */
.chip {
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #3B82F6, #1D4ED8);
  border-radius: 20px;
  position: relative;
  transform: rotate(45deg);
  box-shadow: 0 20px 40px rgba(59, 130, 246, 0.3);
}

.chip::before {
  content: '';
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  background: linear-gradient(135deg, #1E40AF, #1E3A8A);
  border-radius: 12px;
  border: 2px solid rgba(255, 255, 255, 0.1);
}

.server-rack {
  width: 100px;
  height: 140px;
  background: linear-gradient(135deg, #10B981, #059669);
  border-radius: 8px;
  position: relative;
  box-shadow: 0 20px 40px rgba(16, 185, 129, 0.3);
}

.server-rack::before {
  content: '';
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  height: 80px;
  background: #065F46;
  border-radius: 4px;
}

.shield {
  width: 100px;
  height: 120px;
  background: linear-gradient(135deg, #8B5CF6, #7C3AED);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  box-shadow: 0 20px 40px rgba(139, 92, 246, 0.3);
}

.chart {
  width: 120px;
  height: 100px;
  background: linear-gradient(135deg, #F59E0B, #D97706);
  border-radius: 10px;
  position: relative;
  box-shadow: 0 20px 40px rgba(245, 158, 11, 0.3);
}

.chart::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 10px;
  right: 10px;
  height: 60%;
  background: #92400E;
  border-radius: 6px 6px 0 0;
}

.gears {
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #06B6D4, #0891B2);
  border-radius: 50%;
  position: relative;
  box-shadow: 0 20px 40px rgba(6, 182, 212, 0.3);
  animation: rotate 20s linear infinite;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%);
  border-radius: 50%;
  z-index: -1;
}

/* Custom scrollbar for slider */
.slider-container::-webkit-scrollbar {
  display: none;
}

/* Gradient overlays for better text readability */
.box::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(17, 24, 39, 0.9) 0%,
    rgba(17, 24, 39, 0.7) 50%,
    rgba(17, 24, 39, 0.3) 100%
  );
  z-index: 15;
}
</style>