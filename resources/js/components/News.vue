<template>
  <section class=" mt-20 grid md:grid-cols-2 gap-8 py-10">
    <!-- CARD 1 -->
    <div
      class="bg-white p-10 w-150 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
    >
      <!-- Media (Image or Video) -->
      <div class="w-full h-56 overflow-hidden">
        <img
          v-if="card1.type === 'image'"
          :src="card1.src"
          class="w-full h-full object-cover"
        />

        <video
          v-else-if="card1.type === 'video'"
          :src="card1.src"
          controls
          class="w-full h-full object-cover"
        ></video>
      </div>

      <!-- Content -->
      <div class="p-6">
        <h3 class="text-lime-700 font-bold text-xl mb-3">
          {{ card1.title }}
        </h3>

        <p class="text-gray-500 text-sm mb-4">{{ card1.date }}</p>

        <!-- Social Icons -->
        <div class="flex space-x-4">
          <i class="fab fa-facebook text-gray-500 hover:text-lime-700"></i>
          <i class="fab fa-twitter text-gray-500 hover:text-lime-700"></i>
          <i class="fab fa-linkedin text-gray-500 hover:text-lime-700"></i>
        </div>
      </div>
    </div>

    <!-- CARD 2 -->
    <div
      class="bg-white p-6 w-150 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
    >
      <!-- Media (Image or Video) -->
      <div class="w-full h-56 overflow-hidden">
        <img
          v-if="card2.type === 'image'"
          :src="card2.src"
          class="w-full h-full object-cover"
        />

        <video
          v-else-if="card2.type === 'video'"
          :src="card2.src"
          controls
          class="w-full h-full object-cover"
        ></video>
      </div>

      <!-- Content -->
      <div class="p-6">
        <h3 class="text-lime-700 font-bold text-xl mb-3">
          {{ card2.title }}
        </h3>

        <p class="text-gray-500 text-sm mb-4">{{ card2.date }}</p>

        <!-- Social Icons -->
        <div class="flex space-x-4">
          <i class="fab fa-facebook text-gray-500 hover:text-lime-700"></i>
          <i class="fab fa-twitter text-gray-500 hover:text-lime-700"></i>
          <i class="fab fa-linkedin text-gray-500 hover:text-lime-700"></i>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      card1: {
        type: "image", // 'image' or 'video'
        src: "../../images/demu1.jpg",
        title: "Mastering the Art of Financial Boundaries",
        date: "27 NOV 2025",
      },
      card2: {
        type: "video",
        src: "/videos/sample.mp4",
        title: "Consistency Over Perfection: Your Shortcut to Financial Peace",
        date: "27 NOV 2025",
      },
    };
  },
};
</script>