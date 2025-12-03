


<template>

  <section class="bg-white -mt-5 font-roboto max-w-6xl mx-auto p-12 md:p-16 transform">
  <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
    
    <!-- Left Content: Title + Short Description + Features -->
    <div class="flex-1 flex flex-col justify-center space-y-6">
      
      <!-- Title -->
      <h2 class="text-4xl md:text-4xl font-bold leading-snug text-gray-900">
        When You 
        <span class="inline-block bg-lime-600 px-4 py-1 text-black font-bold text-xl rounded-l-2xl rounded-r-none">Need</span>
        It Most Urgent 
        <span class="bg-lime-200 px-2 rounded">Financial Solution</span>
      </h2>

      <!-- Short Description -->
      <p class="text-gray-600 text-lg max-w-lg">
        Quick, reliable, and affordable financial aid when you need it the most. Our team ensures comfort, efficiency, and lasting results.
      </p>

      <!-- Feature Grid: Horizontal layout -->
      <div class="grid grid-cols-2 gap-6 mt-4">
        <div class="flex gap-4 items-start">
          <i class="fa-regular fa-clock text-green-700 text-2xl"></i>
          <div>
            <h3 class="font-semibold text-lg">Quick Cash</h3>
            <p class="text-gray-600 text-sm">Get instant loan with minimal waiting time.</p>
          </div>
        </div>

        <div class="flex gap-4 items-start">
          <i class="fa-solid fa-percent text-green-700 text-2xl"></i>
          <div>
            <h3 class="font-semibold text-lg">Efficiency</h3>
            <p class="text-gray-600 text-sm">Streamlined Process for maximum clients efficiency.</p>
          </div>
        </div>

        <div class="flex gap-4 items-start">
          <i class="fa-solid fa-tooth text-green-700 text-2xl"></i>
          <div>
            <h3 class="font-semibold text-lg">Durability</h3>
            <p class="text-gray-600 text-sm">Long-lasting financial solutions for peace of mind.</p>
          </div>
        </div>

        <div class="flex gap-4 items-start">
          <i class="fa-regular fa-smile text-green-700 text-2xl"></i>
          <div>
            <h3 class="font-semibold text-lg">Comfort</h3>
            <p class="text-gray-600 text-sm">Client-focused care for a smooth experience.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Image -->
    <div class="flex-1 relative">
      <img
        :src="demImage"
        alt="Demulla"
        class="rounded-2xl object-cover w-full h-[480px]"
      />
      <div class="absolute -bottom-10 -left-10 bg-lime-600 text-white rounded-lg p-8">
        <i class="fa-solid  fa-money-bill text-4xl md:text-10xl"></i>
      </div>
    </div>
  </div>
</section>


 <section class="relative flex items-center justify-center min-h-screen px-6 bg-white-100">

  <!-- ⭐ Rounded Container That Holds the Background -->
  <div class="relative max-w-5xl w-full min-h-[250px] rounded-3xl overflow-hidden shadow-2xl">

    <!-- Background Image -->
    <img 
      :src="demImage" 
      alt="background"
      class="absolute inset-0 w-full h-full object-cover brightness-70 saturate-90 blur-[1px]"
    >

    <!-- Left Lime Gradient -->
    <div class="absolute inset-0 bg-gradient-to-r from-lime-700/80 via-lime-600/60 to-transparent z-10"></div>

    <!-- Right White Fade -->
    <div class="absolute inset-0 bg-gradient-to-l from-white/40 via-transparent to-transparent z-20"></div>

    <!-- Centered Card Inside the Rounded Background -->
    <div class="relative z-30 flex items-center justify-center h-full p-8">
      
      <div class="bg-white/95 rounded-3xl shadow-xl max-w-3xl w-full p-12 min-h-[450px] text-center backdrop-blur-md">
        
        <!-- Icon -->
        <div class="w-20 h-20 bg-lime-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
          <i class="fas fa-car text-white text-3xl"></i>
        </div>

        <h1 class="text-4xl md:text-5xl font-bold text-lime-600 mb-4">
          Most Affordable Traffic Ticket Dismissal
        </h1>

        <p class="text-lg text-gray-700 mb-8 max-w-xl mx-auto">
          Beat your traffic ticket without going to court — simple, fast, and reliable.
        </p>

        <div class="flex flex-wrap justify-center gap-4">
          <a class="bg-lime-400 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-lime-500 transition-transform hover:-translate-y-1">
            Dismiss My Ticket
          </a>
          <a class="border-2 border-lime-400 text-lime-400 font-semibold px-8 py-3 rounded-full hover:bg-lime-50 transition-transform hover:-translate-y-1">
            Learn More
          </a>
        </div>

      </div>

    </div>

  </div>

</section>


 <section class="bg-gray-50 py-20 px-6 md:px-12">
    <div class="text-center mb-12">
      <h2 class="text-4xl font-bold text-black">Our Featured Work</h2>
      <p class="max-w-2xl mx-auto text-black-400 mt-3">
        A curated selection of projects where creativity meets strategy. Explore how we craft visually stunning and user-friendly digital experiences.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
      <div
        v-for="(item, idx) in works"
        :key="idx"
        class="bg-lime-700 rounded-2xl p-4 shadow-lg transition transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
      >
        <img :src="demImage" :alt="item.title" class="rounded-xl w-full object-cover" />
        <div class="flex flex-wrap gap-2 mt-4">
          <span v-for="tag in item.tags" :key="tag" class="text-xs bg-white/10 text-gray-300 py-1 px-3 rounded-full">
            {{ tag }}
          </span>
        </div>
        <h3 class="text-white text-xl font-semibold mt-4">{{ item.title }}</h3>
        <a :href="item.link" target="_blank" class="text-blue-400 text-sm mt-2 inline-block hover:underline">Visit Website →</a>
      </div>
    </div>
  </section>






  <section class="bg-gray-50 py-20 font-roboto px-6 md:px-12">

  <!-- Header -->
  <div class="text-center mb-16">
    <h2 class="text-4xl font-bold text-black">Our Services</h2>
    <p class="max-w-2xl mx-auto text-black mt-3">
      We craft world-class digital experiences that elevate your brand and drive results.
      From strategy to execution, we bring your vision to life with creativity and precision.
    </p>
  </div>

  <!-- SERVICE ROWS -->
  <div class="max-w-7xl mx-auto space-y-20">

    <div
      v-for="(service, index) in services"
      :key="service.title"
      class="flex flex-col md:flex-row items-center gap-10 p-6"
      :class="index % 2 === 1 ? 'md:flex-row-reverse' : ''"
    >
      <!-- TEXT -->
      <div class="flex-1 pl-6 rounded-2xl p-10 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all border-r-8 border-r-lime-600 flex gap-6">
        <div class="absolute left-0 top-0 h-full w-1 bg-gradient-to-r from-orange-500/70 via-orange-500/20 to-transparent rounded-full"></div>
        <h3 class="text-2xl font-semibold text-orange-600 mb-6">
          {{ service.title }}
        </h3>

        <ul class="space-y-3">
          <li
            v-for="feature in service.features"
            :key="feature"
            class="text-black flex items-start gap-2"
          >
            <span class="text-blue-400 text-lg leading-none mt-1">•</span>
            <span>{{ feature }}</span>
          </li>
        </ul>
      </div>

      <!-- IMAGE -->
      <div class="flex-1 rounded-2xl overflow-hidden relative  backdrop-blur-2xl ">
        <img
          :src="demImage"
          class="rounded-xl w-full object-cover"
          :alt="service.title"
        />
        <div class="absolute inset-0 rounded-xl border border-lime-600 pointer-events-none"></div>
      </div>
    </div>

  </div>
</section>










 <section class="relative w-full max-w-7xl font-roboto mx-auto pt-16 pb-28">

  <!-- TEXT CONTENT (Top section) -->
  <div class="text-center space-y-3 mb-8">
    <h2 class="text-3xl md:text-4xl font-bold text-gray-900">
      Testimonials
    </h2>

    <p class="text-xl text-gray-700">Trusted by leaders</p>
    <p class="text-xl text-gray-700 mb-2">from various industries</p>

    <p class="text-gray-600 text-lg max-w-2xl mx-auto">
      Learn why professionals trust our solutions to complete their
      customer journeys.
    </p>
  </div>

  <!-- BUTTON (Bottom section) -->
  <div class="text-center -mt-2 mb-4">
    <button
      class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 
             rounded-lg transition duration-300 inline-flex items-center"
    >
      Read Success Stories
      <svg
        class="w-4 h-4 ml-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        ></path>
      </svg>
    </button>
  </div>

  <!-- Curve Collage (Middle section) -->
  <div class="relative w-full h-[150px] -mt-27 flex justify-center  mb-10">
    <div
      v-for="(img, i) in images"
      :key="i"
      class="absolute w-32 h-44 rounded-xl overflow-hidden shadow-xl
             transition-transform duration-500 hover:scale-110
             hover:rotate-0 animate-float group"
      :style="curve(i)"
    >
      <img :src="demImage" class="w-full h-full object-cover rounded-xl" />

      <div
        class="absolute inset-0 rounded-xl bg-white/10 opacity-0 
               group-hover:opacity-20 transition"
      ></div>
    </div>
  </div>
  

 </section>

          

</template>


<script setup>

import demImage from '../../images/dem.jpg'



import { ref } from 'vue'



const images = [
  '/img/p1.jpg',
  '/img/p2.jpg',
  '/img/p3.jpg',
  '/img/p4.jpg',
  '/img/p5.jpg',
  '/img/p6.jpg',
  '/img/p7.jpg',
  '/img/p8.jpg',
];

// S-curve formula (incline → decline)
const curve = (i) => {
  const spacing = 150;     // horizontal spacing
  const x = i * spacing;   // base X

  // S-curve Y positions using a sine wave
  const y = 200 + Math.sin(i * 0.7) * 120;

  const rotations = [ -6, -3, 0, 3, 6, 10];

  return {
    left: `${x}px`,
    top: `${y}px`,
    transform: `rotate(${rotations[i % rotations.length]}deg)`,
    animationDelay: `${i * 0.3}s`,
  };
};

 

const services = ref([
  {
    title: "UI/UX Design",
    image: "https://via.placeholder.com/900x600?text=UI+UX+Design",
    features: [
      "Wireframing & Prototyping",
      "User Interface (UI) Design",
      "User Experience (UX) Research",
      "Web & Mobile App Design",
    ],
  },
  {
    title: "Identity",
    image: "https://via.placeholder.com/900x600?text=Branding",
    features: [
      "Logo & Visual Identity",
      "Brand Strategy & Positioning",
      "Typography & Color Guidelines",
      "Brand Collateral Design",
    ],
  },
  {
    title: "Website Design & Development",
    image: "https://via.placeholder.com/900x600?text=Web+Development",
    features: [
      "Custom Website Design",
      "Frontend & Backend Development",
      "E-commerce Development",
      "CMS Integration (WordPress, Webflow)",
    ],
  },
])

const works = ref([
  {
    image: 'https://via.placeholder.com/800x500?text=Real+Estate+1',
    tags: ['Real Estate', 'Property', 'Template'],
    title: 'Real Estate Website Design',
    link: '#',
  },
  {
    image: 'https://via.placeholder.com/800x500?text=Real+Estate+2',
    tags: ['Real Estate', 'Property', 'Template'],
    title: 'Real Estate Website Design',
    link: '#',
  },
  {
    image: 'https://via.placeholder.com/800x500?text=Real+Estate+2',
    tags: ['Real Estate', 'Property', 'Template'],
    title: 'Real Estate Website Design',
    link: '#',
  },
])


const serviceCards = [
  {
    title: "Fullstack Website Development",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
    points: ["Frontend + Backend", "SEO Marketing", "CMS Integration", "User Statistics"]
  },
  {
    title: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7",
    points: ["App Design", "User Research", "Wireframing", "Prototyping"]
  },
  {
    title: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    points: ["Social Media", "Email Campaigns", "Brand Strategy", "Analytics"]
  }
];

        





</script>



