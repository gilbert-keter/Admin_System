<template>
  <div>
  <MainHeader :scrolledPastCarousel="scrolledPastCarousel" />
  <component :is="currentPage"></component>
    
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import MainHeader from './components/MainHeader.vue'
import About from './components/About.vue'
import Service from './components/Service.vue'
import News  from './components/News.vue'
import Contact from './components/Contact.vue'
import Home from './components/Home.vue'




const pages = {
  home: Home,
  about: About,
  service: Service,
  news:News,
  contact:Contact,
  

  
  
}

// Blade sets this variable
const currentPage = ref(pages[window.page] || Home)


const scrolledPastCarousel = ref(false)
const carouselSection = ref(null)

const handleScroll = () => {
  if (carouselSection.value?.$el) {
    const carouselBottom = carouselSection.value.$el.offsetHeight
    scrolledPastCarousel.value = window.scrollY > carouselBottom - 100
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
/* optional styling */
</style>