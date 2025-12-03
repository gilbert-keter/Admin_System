<template>
  <section class="min-h-screen w-full bg-lime-700 font-roboto flex items-center justify-center px-6 py-16">
    <div class="max-w-7xl w-full mt-20 p-6 grid grid-cols-1 md:grid-cols-2 gap-10">

      <!-- LEFT SECTION -->
      <div class="text-orange-400 space-y-6">
        <h1 class="text-4xl font-semibold">Contact Us</h1>

        <p class="text-white max-w-sm leading-relaxed">
          Not sure what you need? The team at Demulla Microfinance is always ready to listen, understand your financial goals, and guide you with options you may not have considered
        </p>

        <div class="space-y-4 pt-6">
          <!-- Email -->
          <div class="flex items-center space-x-3">
            <i class="fa fa-envelope text-2xl"></i>
            <p class="text-white"> customer@demulla.co.ke</p>
          </div>

          <!-- Phone -->
          <div class="flex items-center space-x-3">
            <i class="fa fa-phone text-2xl"></i>
            <p class="text-white">Support: 0709005000</p>
          </div>
        </div>
      </div>

      <!-- RIGHT SECTION (FORM CARD) -->
      <div class="bg-white rounded-xl shadow-xl p-8 relative">
        <!-- Decorative rings -->
        <div class="absolute -top-6 -right-6 opacity-30">
          <svg width="120" height="120">
            <circle cx="60" cy="60" r="40" stroke="#cfcfcf" stroke-width="3" fill="none"/>
            <circle cx="60" cy="60" r="55" stroke="#cfcfcf" stroke-width="3" fill="none"/>
          </svg>
        </div>

        <h2 class="text-2xl font-bold mb-2">We’d love to hear from you!</h2>
        <p class="text-gray-600 mb-6">Let’s get in touch</p>

        <form class="space-y-5">

          <!-- Name Row -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              type="text" 
              placeholder="Full Name"
              class="border rounded-lg p-3 w-full focus:ring-2 focus:ring-purple-400 outline-none"
            />

            <input 
              type="text" 
              placeholder="Location"
              class="border rounded-lg p-3 w-full focus:ring-2 focus:ring-orange-400 outline-none"
            />
          </div>

          <!-- Email + Phone -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              type="email" 
              placeholder="Email"
              class="border rounded-lg p-3 w-full focus:ring-2 focus:ring-orange-400 outline-none"
            />

            <div class="flex space-x-3">
              <select 
                class="border rounded-lg p-3 focus:ring-2 focus:ring-orange-400 outline-none"
              >
                <option>RW</option>
                <option>KE</option>
                <option>UG</option>
              </select>
              <input 
                type="text" 
                placeholder="phone number"
                class="border rounded-lg p-3 w-full focus:ring-2 focus:ring-orange-400 outline-none"
              />
            </div>
          </div>

          <!-- Address -->
          <input 
            type="text" 
            placeholder="Address"
            class="border rounded-lg p-3 w-full focus:ring-2 focus:ring-orange-400 outline-none"
          />

          <!-- Message -->
          <textarea 
            rows="5"
            placeholder="Your message here"
            class="border rounded-lg p-3 w-full focus:ring-2 focus:ring-orange-400 outline-none"
          ></textarea>

          <!-- Submit Button -->
          <button 
            type="submit"
            class="bg-orange-400 hover:bg-orange-400 text-white px-6 py-3 rounded-lg shadow-md transition"
          >
            Send Message
          </button>
        </form>
      </div>

    </div>

    </section>


  <section class="max-w-5xl mx-auto px-6 py-16 font-Roboto">
    <!-- Title -->
    <h2 class="text-3xl font-semi-bold text-center mb-8">
      Get to know — we are located in different branches
    </h2>

    <!-- Card Wrapper -->
    <div class="bg-white shadow-xl rounded-2xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8 border">

      <!-- Left Column (Select Branch) -->
      <div class="flex flex-col space-y-5">
        <h3 class="text-xl font-semibold">Select a Branch</h3>

        <select
          v-model="selectedBranch"
          class="border rounded-lg p-3 focus:ring-2 focus:ring-indigo-400 outline-none bg-gray-50"
        >
          <option disabled value="">Choose a branch...</option>

          <option
            v-for="branch in branches"
            :key="branch.id"
            :value="branch.id"
          >
            {{ branch.name }}
          </option>
        </select>
      </div>

      <!-- Right Column (Branch Details) -->
      <div v-if="activeBranch" class="bg-lime-200 rounded-xl p-8 flex flex-col space-y-4">
        
        <h3 class="text-2xl font-bold text-lime-900">{{ activeBranch.name }}</h3>

        <p class="text-gray-800">
          <span class="font-semibold text-lime-900">Phone:</span> {{ activeBranch.phone }}
        </p>

        <p class="text-gray-800">
          <span class="font-semibold text-lime-900">Email:</span> {{ activeBranch.email }}
        </p>

        <p class="text-gray-800">
          <span class="font-semibold text-lime-900">Office Location:</span> {{ activeBranch.location }}
        </p>
      </div>

      <!-- If No Branch Selected -->
      <div 
        v-else
        class="flex items-center justify-center text-gray-500 italic bg-gray-50 rounded-xl"
      >
        Select a branch to see contact details.
      </div>

    </div>















  </section>
</template>

<script>
export default {
  name: "ContactPage",
  name: "ContactBranches",




  data() {
    return {
      selectedBranch: "",

      branches: [
        {
          id: "Kakamega",
          name: "Kakamega Headquarters",
          phone: "+254 709 005 000",
          email: "customer@demulla.co.ke",
          location: "Mumias Road, Joyland",
        },
        {
          id: "Bungoma",
          name: "Bungoma Office",
          phone: "+254 oooooo",
          email: "bungoma@demulla.co.ke",
          location: "Kanduyi",
        },
        {
          id: "kisumu",
          name: "Kisumu Branch",
          phone: "+254 7000000",
          email: "kisumu@demulla.co.ke",
          location: "Oginga Odinga Street, Kisumu",
        },
      ],
    };
  },

  computed: {
    activeBranch() {
      return this.branches.find(branch => branch.id === this.selectedBranch);
    },
  },
};








</script>
