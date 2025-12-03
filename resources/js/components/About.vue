<template>
<section id="AboutCaro" class="min-h-screen bg-white/10 -mt-5 font-roboto text-white overflow-hidden">
  <div class="slider-container relative w-full h-screen overflow-hidden">

    <!-- Hero Slide -->
    <div class="box box1 w-full h-150 flex-shrink-0 relative">

      <!-- Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-r from-lime-900/70 via-black/40 to-transparent z-10"></div>

      <!-- Background Image --> 
      <img
        :src="demuImage1"
        alt="demulla1"
        class="absolute inset-0 w-full h-150 object-cover brightness-105 contrast-100"
      />

   <div class="details-container relative z-20 w-full h-full flex items-center justify-center text-center">
  <div class="details p-6 md:p-10 lg:p-16 max-w-3xl">

    <!-- Central box for description + label -->
    
      
      <!-- Short central description -->
      <p class="text-lg md:text-2xl text-white mb-4 leading-relaxed drop-shadow-lg">
        We help communities thrive through technology, innovation, and meaningful connections.
      </p>

      <!-- Label -->
      <div class="inline-flex items-center px-6 py-2 rounded-full border-2 border-orange-400 justify-center mx-auto mt-4 animate-pulse bg-white/10 backdrop-blur-sm transition-all hover:bg-white/20">
        <span class="w-2 h-2 bg-orange-400 rounded-full mr-4 animate-ping"></span>
        <span class="text-sm font-medium text-white">Innovation</span>
      </div>

    </div>

  </div>



    </div>
  </div>
</section>

   <section class="relative -mt-65 z-20 px-4 md:px-10 lg:px-28">
  <div class="max-w-6xl mx-auto">

    <!-- Single Card -->
    <div
      class="bg-lime-700 rounded-3xl shadow-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center md:items-stretch transform hover:scale-105 transition-transform duration-300"
    >
      <!-- Branches -->
      <div class="flex-1 text-center flex flex-col justify-center items-center p-4">
        <i class="fas fa-building text-orange-500 text-4xl mb-2"></i>
        <h2 class="text-4xl md:text-4xl font-bold text-white mb-2">12</h2>
        <p class="text-white font-medium">Branches</p>
      </div>

      <!-- Divider -->
      <div class="hidden md:block w-px bg-orange-500 my-4 mx-2"></div>

      <!-- Satisfied Customers -->
      <div class="flex-1 text-center flex flex-col justify-center items-center p-4">
        <i class="fas fa-building text-orange-500 text-4xl mb-2"></i>
        <h2 class="text-4xl md:text-4xl font-bold text-white mb-2">4,500+</h2>
        <p class="text-white font-medium">Satisfied Customers</p>
      </div>

      <!-- Divider -->
      <div class="hidden md:block w-px bg-orange-500 my-4 mx-2"></div>

      <!-- Loans Lent -->
      <div class="flex-1 text-center flex flex-col justify-center items-center p-4">
        <i class="fas fa-building text-orange-500 text-4xl mb-2"></i>
        <h2 class="text-4xl md:text-4xl font-bold text-white mb-2">25,000+</h2>
        <p class="text-white font-medium">Loans Lent</p>
      </div>
    </div>
  </div>
</section>

<section class="bg-white font-roboto mt-0 py-16 font-roboto relative">
  <div class="max-w-6xl mx-auto px-4">

  <!-- Heading -->
  <h2 class="text-3xl font-semibold tracking-wide mb-6 text-center mx-auto">
    ABOUT US
  </h2>

  <!-- First paragraph -->
  <p class="text-gray-600 leading-relaxed text-base mb-4 max-w-3xl text-center mx-auto">
    We work with individuals and organizations who want their message to be as focused and resonant as possible. Clients of all experience levels come to us for everything from a tune-up to an overhaul.
  </p>

  <!-- Second paragraph -->
  <p class="text-gray-700 font-medium mb-12 max-w-3xl text-center mx-auto">
    Whether a toast, a keynote, or an interview, we are invested in our clients’ success.
  </p>

</div>

  <!-- Core Values Cards with Lime Green Background -->
  <div class="relative mt-16">
    <div class="absolute inset-0 bg-lime-500 -z-10"></div>

    <div class="max-w-7xl mx-auto px-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        <!-- Innovation -->
        <div class="bg-white rounded-xl p-6 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all flex flex-col h-44">
          <div class="flex items-center mb-3">
            <LightBulbIcon class="w-10 h-10 text-lime-600 mr-3" />
            <h3 class="text-lg font-bold text-lime-700">Innovation</h3>
          </div>
          <p class="text-gray-700 text-sm ml-13">
            We embrace creativity and new ideas to deliver cutting-edge solutions.
          </p>
        </div>

        <!-- Discipline -->
        <div class="bg-white rounded-xl p-6 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all flex flex-col h-44">
          <div class="flex items-center mb-3">
            <ClipboardDocumentCheckIcon class="w-10 h-10 text-lime-600 mr-3" />
            <h3 class="text-lg font-bold text-lime-700">Discipline</h3>
          </div>
          <p class="text-gray-700 text-sm ml-13">
            We maintain consistency, focus, and high standards in everything we do.
          </p>
        </div>

        <!-- Honesty & Integrity -->
        <div class="bg-white rounded-xl p-6 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all flex flex-col h-44">
          <div class="flex items-center mb-3">
            <ShieldCheckIcon class="w-10 h-10 text-lime-600 mr-3" />
            <h3 class="text-lg font-bold text-lime-700">Honesty & Integrity</h3>
          </div>
          <p class="text-gray-700 text-sm ml-13">
            We act transparently, building trust with clients and colleagues.
          </p>
        </div>

        <!-- Teamwork -->
        <div class="bg-white rounded-xl p-6 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all flex flex-col h-44">
          <div class="flex items-center mb-3">
            <UsersIcon class="w-10 h-10 text-lime-600 mr-3" />
            <h3 class="text-lg font-bold text-lime-700">Teamwork</h3>
          </div>
          <p class="text-gray-700 text-sm ml-13">
            We collaborate effectively to achieve common goals and create lasting impact.
          </p>
        </div>

      </div>
    </div>
  </div>
</section>






    <section class="bg-gray-50 py-20">
    <div class="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">

      <!-- LEFT IMAGE -->
      <div class="relative w-45px h-[400px] overflow-hidden">
  <img 
    :src="demuImage1"
    class="w-full h-full object-cover rounded-r-[120px]"
  />
</div>

      <!-- RIGHT TEXT -->
      <div>
        <h2 class="text-3xl font-semibold mb-6">
          Our Story
        </h2>

        <p class="text-gray-600 leading-relaxed mb-4">
          Our journey began with a simple mission: to equip people with the confidence and clarity they need to deliver powerful messages. From our early days working with a handful of clients, we have grown into a dedicated team that supports organizations across industries.
        </p>

        <p class="text-gray-600 leading-relaxed mb-4">
          We believe that everyone has a story worth telling. Our role is to help uncover it, refine it, and present it with impact. Today, our approach blends experience, strategy, and empathy in helping clients shape compelling communication.
        </p>

        <p class="text-gray-700 font-medium">
          And we're just getting started.
        </p>
      </div>

    </div>
  </section>


  
   <section class="bg-gray-50 py-16">
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-3xl font-bold mb-12">Our Esteemed Clients</h2>

      <!-- Dynamic Icon Grid -->
      <div class="flex flex-wrap justify-center gap-12 items-center">
        <div 
          v-for="(client, index) in clients" 
          :key="client.name" 
          class="flex flex-col items-center transform transition hover:scale-110"
          :class="getOffsetClass(index)"
        >
          <i :class="client.icon" class="text-6xl text-lime-600 mb-2"></i>
          <span class="text-sm font-medium">{{ client.name }}</span>
        </div>
      </div>
    </div>
  </section>







</template>

<script setup>
import demuImage1 from '../../images/demu1.jpg';


const clients = [
  { name: 'Businesses', icon: 'fas fa-building' },
  { name: 'Shops', icon: 'fas fa-store' },
  { name: 'Hospitals', icon: 'fas fa-hospital' },
  { name: 'Mama Mboga', icon: 'fas fa-carrot' },
  { name: 'Hotels', icon: 'fas fa-hotel' },
  { name: 'Tailoring Boutiques', icon: 'fas fa-scissors' },
]

// Function to create a staggered layout (alternating top offsets)
const getOffsetClass = (index) => {
  const offsets = ['mt-0', 'mt-6', 'mt-12', 'mt-0', 'mt-6', 'mt-12']
  return offsets[index % offsets.length]
}



</script>
