<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
  />

  <header
    class="{{ $headerTheme ?? 'default' }} w-full fixed top-0 left-0 z-50 transition-all duration-500 "
    :class="{
      '-translate-y-full': isHidden,
    }"
  >
    <!-- TOP BAR -->
    <div
  v-show="!scrolledPastCarousel && !isHidden"
  :class="topBarClasses"
  class="text-sm py-2 px-6 flex justify-between items-center transition-all duration-500"
>
      <div class="flex items-center space-x-6">
        <span class="flex items-center space-x-3">
          <a
            href="tel:+254700000000"
            class="w-10 h-10 flex items-center justify-center bg-lime-600 hover:bg-lime-700 text-white rounded-full shadow-md hover:scale-90 transition transform animate-bounce"
            aria-label="Call Us"
          >
            <i class="fa-solid fa-phone"></i>
          </a>
          <span>Call us Today: 0700940088</span>
        </span>

        <span class="flex items-center space-x-3">
          <a
            href="https://maps.google.com/?q=Demulla+Headquarters"
            target="_blank"
            class="w-10 h-10 flex items-center justify-center bg-lime-600 hover:bg-lime-700 text-white rounded-full shadow-md hover:scale-90 transition transform animate-bounce"
            aria-label="Find Us"
          >
            <i class="fa-solid fa-location-dot"></i>
          </a>
          <span>Find us: Kakamega, Kenya</span>
        </span>
      </div>

      <div class="flex items-center space-x-3">
        <a
          href="#"
          class="w-8 h-8 flex items-center justify-center bg-lime-700 hover:bg-[#3b5998] text-white rounded-sm transition"
        >
          <i class="fa-brands fa-facebook-f"></i>
        </a>
        <a
          href="#"
          class="w-8 h-8 flex items-center justify-center bg-lime-700 hover:bg-[#1DA1F2] text-white rounded-sm transition"
        >
          <i class="fa-brands fa-twitter"></i>
        </a>
        <a
          href="#"
          class="w-8 h-8 flex items-center justify-center bg-lime-700 hover:bg-[#E4405F] text-white rounded-sm transition"
        >
          <i class="fa-brands fa-instagram"></i>
        </a>
        <button
          class="bg-white text-lime-600 px-3 py-1 rounded font-semibold hover:bg-lime-700 hover:text-white transition"
        >
          Contact Us
        </button>
      </div>
    </div>

    <!-- NAVIGATION -->
    <nav
  :class="[navBarClasses, 'justify-between -mt-2 px-8 py-4 flex items-center shadow-lg transition-all duration-500 backdrop-blur-md']"
>
      <!-- LOGO -->
      <div class="flex items-center space-x-2">
        <img src="#" alt="Demulla Logo" class="h-10 w-auto" />
        <h1
          :class="scrolledPastCarousel ? 'text-lime-700' : 'text-white'"
          class="text-2xl font-bold"
        >
          Your<span
            :class="scrolledPastCarousel ? 'text-gray-800' : 'text-lime-100'"
            class="ml-1"
          >
            Reliable Partners
          </span>
        </h1>
      </div>

      <!-- LINKS -->
      <ul class="hidden md:flex space-x-8 font-semibold">
        <li>
          <a
            href="/"
            class="border border-orange-300 bg-orange-400 text-white px-4 py-2 rounded-md transition duration-300"
            >Home</a
          >
        </li>
        <li>
          <a
            href="/service"
            class="border border-transparent hover:border-orange-400 hover:bg-orange-400 hover:text-white px-4 py-2 rounded-md transition"
            >services</a
          >
        </li>
        <li><a href="/about" class="hover:text-lime-600 transition">About Us</a></li>
        <li><a href="#" class="hover:text-lime-600 transition">Career</a></li>
        <li><a href="/news" class="hover:text-lime-600 transition">News</a></li>
        <li><a href="/contact" class="hover:text-lime-600 transition">Contact</a></li>
      </ul>

      <!-- MOBILE BUTTON -->
      <button @click="toggleMenu" class="md:hidden text-lime-700">
        <i class="fa fa-bars text-2xl"></i>
      </button>
    </nav>

    <!-- MOBILE MENU -->
    <div
      v-if="menuOpen"
      class="md:hidden bg-lime-600 text-white text-center py-4 space-y-2"
    >
      <a href="#" class="block hover:bg-lime-700 py-2">Home</a>
      <a href="#" class="block hover:bg-lime-700 py-2">Features</a>
      <a href="#" class="block hover:bg-lime-700 py-2">About</a>
      <a href="#" class="block hover:bg-lime-700 py-2">Gallery</a>
      <a href="#" class="block hover:bg-lime-700 py-2">Contact</a>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";

const scrolledPastCarousel = ref(false);
const isHidden = ref(false);
const lastScrollY = ref(0);
const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const handleScroll = () => {
  const scrollY = window.scrollY;
  const missionSection = document.getElementById("mission");

  // Navbar color change
  if (missionSection) {
    const sectionTop = missionSection.offsetTop;
    scrolledPastCarousel.value = scrollY >= sectionTop - 80;
  }

  // Show/hide navbar
  if (scrollY > lastScrollY.value && scrollY > 400) {
    // Scrolling down beyond 400px (past mission)
    isHidden.value = true
  } else {
    // Scrolling up or near top
    isHidden.value = false
  }

  lastScrollY.value = scrollY
}
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);

});
const appDiv = document.getElementById('app');
const headerTheme = appDiv.dataset.theme;

const topBarClasses = computed(() => {
  if (headerTheme === 'light') return "bg-black text-white";
  if (headerTheme === 'dark') return "bg-black text-white";
  if (headerTheme === 'colored') return "bg-white text-lime-700";
  return "bg-transparent text-black";
});

const navBarClasses = computed(() => {
  if (headerTheme === 'light') return "bg-white text-lime-700 shadow";
  if (headerTheme === 'dark') return "bg-white text-lime-700 shadow";
  if (headerTheme === 'colored') return "bg-orange-400 text-white shadow";
  return "bg-transparent text-white";
});

 

</script>

<style scoped>
header {
  font-family: "Roboto", sans-serif;
}
</style>
