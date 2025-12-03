<template>
<section class="relative bg-cover bg-center bg-no-repeat text-white -mt-5 overflow-hidden h-120 pb-16"
  style="background-image: url('${demuImage1}');"
>
  <div class="absolute inset-0 bg-lime-700 mix-blend-multiply shadow-transparent"></div>

   <div class="details-container mt-5 relative z-20 w-full h-full flex items-center justify-center text-center">
  <div class="details p-6 md:p-10 lg:p-16 max-w-3xl">

    <!-- Central box for description + label -->
    
      
      <!-- Short central description -->
      <p class="text-lg md:text-2xl text-white mb-4 leading-relaxed drop-shadow-lg">
        We help communities thrive through technology, innovation, and meaningful connections.
      </p>

      <!-- Label -->
      <div class="inline-flex items-center px-6 py-2 rounded-full border-2 border-orange-400 justify-center mx-auto mt-4 animate-pulse bg-white/10 backdrop-blur-sm transition-all hover:bg-white/20">
        <span class="w-2 h-2 bg-orange-400 rounded-full mr-4 animate-ping"></span>
        <span class="text-sm font-medium text-white">Teamwork</span>
      </div>

    </div>

  </div>
</section>

<!-- ===================== HERO IMAGE ===================== -->
<section class="relative -mt-50 z-20 px-6">
  <div class="flex justify-center">
    <img
      :src="demuImage1"
      alt="Team working"
      class="w-full max-w-6xl h-80 object-cover rounded-xl shadow-2xl"
    />
  </div>
</section>

  <section class="py-24 container mx-auto px-6 bg-white font-roboto">

    <!-- Title -->
    <div class="text-center mb-20">
      <h3 class="text-3xl md:text-4xl font-bold text-gray-900">
        Our Professional Services
      </h3>
      <p class="text-gray-600 max-w-2xl mx-auto mt-4">
        We help brands build strong digital identities and enhance their customer experience
        through modern, impactful solutions.
      </p>
    </div>

   <div class="grid md:grid-cols-2 gap-12 items-stretch">

      <!-- Card 1: Leading Loans -->
      <div class="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all border-l-8 border-l-lime-600 flex gap-6">
        <div class="flex-shrink-0">
          <div class="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-tr from-lime-500 to-lime-400 text-white text-3xl shadow-md">
            <i class="fa-solid fa-hand-holding-dollar"></i>
          </div>
        </div>
        <div>
          <h3 class="text-2xl font-bold text-gray-900 mb-3">Leading Loans</h3>
          <p class="text-gray-600 mb-4 leading-relaxed">
            Offer tailored loan solutions for individuals and businesses. We ensure fast approvals, fair terms, and support throughout the borrowing process.
          </p>
          <ul class="text-gray-600 list-disc list-inside space-y-1 mb-4">
            <li>Quick loan approvals</li>
            <li>Flexible repayment plans</li>
            <li>Supportive client guidance</li>
          </ul>
          <button class="mt-3 inline-block text-lime-800 font-medium hover:underline">
            Learn more →
          </button>
        </div>
      </div>

      <!-- Card 2: Financial Education -->
      <div class="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all border-r-8 border-r-lime-600 flex gap-6">
        <div class="flex-shrink-0">
          <div class="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-tr from-lime-500 to-lime-400 text-white text-3xl shadow-md">
            <i class="fa-solid fa-book-open"></i>
          </div>
        </div>
        <div>
          <h3 class="text-2xl font-bold text-gray-900 mb-3">Financial Education</h3>
          <p class="text-gray-600 mb-4 leading-relaxed">
            Empower clients with knowledge on budgeting, saving, and responsible financial management. We offer workshops, webinars, and personal coaching.
          </p>
          <ul class="text-gray-600 list-disc list-inside space-y-1 mb-4">
            <li>Budgeting & saving tips</li>
            <li>Workshops & webinars</li>
            <li>Personalized guidance</li>
          </ul>
          <button class="mt-3 inline-block text-lime-800 font-medium hover:underline">
            Learn more →
          </button>
        </div>
      </div>

      <!-- Card 3: Employment Promotion -->
      <div class="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all border-l-8 border-l-lime-600 flex gap-6">
        <div class="flex-shrink-0">
          <div class="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-tr from-lime-500 to-lime-400 text-white text-3xl shadow-md">
            <i class="fa-solid fa-briefcase"></i>
          </div>
        </div>
        <div>
          <h3 class="text-2xl font-bold text-gray-900 mb-3">Employment Promotion</h3>
          <p class="text-gray-600 mb-4 leading-relaxed">
            Connect clients with meaningful job opportunities, provide training programs, and support career growth for sustainable employment.
          </p>
          <ul class="text-gray-600 list-disc list-inside space-y-1 mb-4">
            <li>Job placement support</li>
            <li>Skill development workshops</li>
            <li>Career guidance & mentoring</li>
          </ul>
          <button class="mt-3 inline-block text-lime-800 font-medium hover:underline">
            Learn more →
          </button>
        </div>
      </div>

      <!-- Card 4: Investment Guidance -->
      <div class="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all border-r-8 border-r-lime-600 flex gap-6">
        <div class="flex-shrink-0">
          <div class="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-tr from-lime-500 to-lime-400 text-white text-3xl shadow-md">
            <i class="fa-solid fa-chart-line"></i>
          </div>
        </div>
        <div>
          <h3 class="text-2xl font-bold text-gray-900 mb-3">Investment Guidance</h3>
          <p class="text-gray-600 mb-4 leading-relaxed">
            Assist clients in making smart investment decisions for sustainable wealth growth through personalized strategies and expert advice.
          </p>
          <ul class="text-gray-600 list-disc list-inside space-y-1 mb-4">
            <li>Investment planning</li>
            <li>Risk assessment</li>
            <li>Portfolio management</li>
          </ul>
          <button class="mt-3 inline-block text-lime-800 font-medium hover:underline">
            Learn more →
          </button>
        </div>
      </div>

    </div>

    <div class="text-center mt-10">
  <a href="tel:*123#" 
     class="inline-block bg-orange-500 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-orange-600 hover:shadow-xl transition-all">
    Dial *658*55# Now
  </a>
</div>

</section>

<!-- TITTLE -->
  <div class="py-24 bg-gray-50 px-3">
     
        <div class="section-title text-center">
          <div class="title-effect">
            <div class="bar bar-top"></div>
            <div class="bar bar-right"></div>
            <div class="bar bar-bottom"></div>
            <div class="bar bar-left"></div>
          </div>
          <h2 class="font-bold text-3xl">How It Work</h2>
          <h2 class="title">Three Simple Step To Started Working Process</h2>
        </div>
        </div>


   <section class="relative -mt-30 py-20 bg-gray-50 overflow-hidden">
  <!-- Top Decorative Wave -->
  <div class="w-full h-40 md:h-60 lg:h-80 relative overflow-hidden">
    <svg class="w-full h-full" viewBox="0 0 620 120" preserveAspectRatio="xMidYMid meet">
      <path
        d="M62.9 14.9c-25-7.74-56.6 4.8-60.4 24.3-3.73 19.6 21.6 35 39.6 37.6 42.8 6.2 72.9-53.4 116-58.9 65-18.2 191 101 215 28.8 5-16.7-7-49.1-34-44-34 11.5-31 46.5-14 69.3 9.38 12.6 24.2 20.6 39.8 22.9 91.4 9.05 102-98.9 176-86.7 18.8 3.81 33 17.3 36.7 34.6 2.01 10.2.124 21.1-5.18 30.1"
        fill="none"
        stroke="rgba(192, 255, 0, 0.4)"
        stroke-width="1.2"
        stroke-dasharray="5,10"
      />
    </svg>
  </div>

  <!-- Steps -->
  <div class="max-w-6xl mx-auto mt-16 flex flex-col md:flex-row items-start justify-between md:space-x-8 space-y-12 md:space-y-0 relative">

    <div
      v-for="(step, index) in steps"
      :key="index"
      class="flex-1 flex flex-col items-center text-center relative px-4"
    >
      <!-- Leaf-shaped icon -->
      <div
        class="relative w-24 h-24 flex items-center justify-center text-white text-3xl font-bold shadow-lg bg-lime-700 rounded-[30%] rotate-6 hover:rotate-0 transition-all duration-500"
      >
        <div class="absolute inset-0 bg-lime-700 rounded-[30%] rotate-12 -z-10"></div>
        <i :class="step.icon"></i>
      </div>

      <!-- Step Number -->
      <div class="mt-4 text-lime-700 font-bold text-xl tracking-wide">
        Step {{ step.number }}
      </div>

      <!-- Step Title + Description -->
      <div class="mt-2">
        <h4 class="font-semibold text-gray-900 text-lg">{{ step.title }}</h4>
        <p class="text-gray-500 text-sm mt-1 leading-relaxed">{{ step.desc }}</p>
      </div>

      <!-- Arrow Between Steps -->
      <div
        v-if="index !== steps.length - 1"
        class="hidden md:flex items-center absolute top-14 right-[-12%] w-24"
      >
        <div class="flex-grow h-[2px] bg-lime-300"></div>
        <div class="w-0 h-0 border-t-6 border-b-6 border-l-8 border-t-transparent border-b-transparent border-l-lime-400"></div>
      </div>
    </div>

  </div>
</section>


<!-- ===================== CLIENT TESTIMONIALS ===================== -->
<section class="py-24 bg-gray-50">
  <div class="max-w-6xl mx-auto px-6">

    <!-- Section Heading -->
    <h2 class="text-4xl font-extrabold text-gray-900 mb-12 text-center">
      What Our Clients Say
    </h2>

    <div class="grid md:grid-cols-2 gap-12">

      <!-- Testimonial 1 -->
      <div class="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
        <!-- Video Embed -->
        <div class="w-full h-48 mb-4 overflow-hidden rounded-xl">
          <iframe 
            class="w-full h-full rounded-xl" 
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
            title="Client Video Testimonial" 
            frameborder="0" 
            allowfullscreen>
          </iframe>
        </div>
        <!-- Quote -->
        <p class="text-gray-700 mb-4">
          "The loan services were fast and efficient, and the financial guidance really helped me grow my business."
        </p>
        <!-- Client Info -->
        <h4 class="font-bold text-gray-900">Jane Doe</h4>
        <p class="text-gray-500 text-sm">Small Business Owner</p>
      </div>

      <!-- Testimonial 2 -->
      <div class="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
        <!-- Video Embed -->
        <div class="w-full h-48 mb-4 overflow-hidden rounded-xl">
          <iframe 
            class="w-full h-full rounded-xl" 
            src="https://www.youtube.com/embed/3JZ_D3ELwOQ" 
            title="Client Video Testimonial" 
            frameborder="0" 
            allowfullscreen>
          </iframe>
        </div>
        <!-- Quote -->
        <p class="text-gray-700 mb-4">
          "Financial education workshops helped me manage my money better and plan for the future."
        </p>
        <!-- Client Info -->
        <h4 class="font-bold text-gray-900">John Smith</h4>
        <p class="text-gray-500 text-sm">Freelancer</p>
      </div>

    </div>

    <!-- Optional CTA -->
    <div class="text-center mt-12">
      <a href="#contact" class="inline-block bg-lime-500 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:bg-lime-600 transition-all">
        Share Your Experience
      </a>
    </div>

  </div>
</section>

  </template>

  <script setup>

import demuImage1 from '../../images/demu1.jpg'
import demuImage2 from '../../images/demu1.jpg'
import { ref } from "vue";


const steps = [
  {
    number: 1,
    title: "Apply",
    desc: "Fill in your loan application with accurate personal and business information.",
    icon: "fas fa-file-edit"
  },
  {
    number: 2,
    title: "Submit Documents",
    desc: "Provide the required identification and supporting financial documents.",
    icon: "fas fa-folder-open"
  },
  {
    number: 3,
    title: "Approval",
    desc: "Our team reviews your application and verifies your details.",
    icon: "fas fa-check-circle"
  },
  {
    number: 4,
    title: "Disbursement",
    desc: "Once approved, funds are released directly into your account.",
    icon: "fas fa-hand-holding-usd"
  }
];


const currentStep = ref(0);

const nextStep = () => {
  if (currentStep.value < steps.length - 1) currentStep.value++;
};

const prevStep = () => {
  if (currentStep.value > 0) currentStep.value--;
};






</script>


<style>
/* Arrow animation: moving glow */
@keyframes flowArrow {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.animate-flowArrow {
  animation: flowArrow 2s linear infinite;
}

/* Pulse effect on triangle arrow tip */
@keyframes pulseArrow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
.animate-pulseArrow {
  animation: pulseArrow 1s ease-in-out infinite;
}

body {font-family: 'Roboto', sans-serif; }


.pos-r {
    position: relative;
}
section{padding: 80px 0;}
.section-title{margin-bottom:50px; position: relative;}
.section-title p{font-size: 16px;}
.title-effect {width: 50px; height: 50px; top: 0; position: absolute; left: 0; opacity: 0.5; animation: rotation 12.8s steps(1) 0s infinite;}
.text-center .title-effect{left: 50%; margin-left: -25px;}
.text-center .section-title h6{padding: 15px 0;}

.title-effect .bar {background: #25fc7f;}
.title-effect .bar-top {width: 100%; height: 7px; position: absolute; top: 0; left: 0; transform-origin: left top; transform: scale(0, 1); animation: bar-top 3.2s linear 0s infinite;}
.title-effect .bar-right {width: 7px; height: 100%; position: absolute; top: 0; right: 0; transform-origin: left top; transform: scale(1, 0); animation: bar-right 3.2s linear 0s infinite;}
.title-effect .bar-bottom {width: 100%; height: 7px; position: absolute; right: 0; bottom: 0; transform-origin: right top; transform: scale(0, 1); animation: bar-bottom 3.2s linear 0s infinite;}
.title-effect .bar-left {width: 7px; height: 100%; position: absolute; left: 0; bottom: 0; transform-origin: left bottom; transform: scale(1, 0); animation: bar-left 3.2s linear 0s infinite;}

.title {position: relative; color: #1c1d3e; margin-bottom: 0;}
.section-title h2{margin-bottom: 15px;}

/* ------------------------
    How It Work
------------------------*/
.work-process{position: relative;}
.step-num {background: #fff; border-radius: 50%; box-shadow: 0 12px 20px 0 rgba(117, 178, 240, 0.4); color: #005bea; display: inline-block; font-size: 18px; font-weight: 600; height: 50px; right: 0; line-height: 55px; position: absolute; text-align: center; top: 0; width: 50px;}
.theme-bg .work-process h4, .theme-bg .work-process p{color: #ffffff;}
.step-icon {background: #ffffff; width:140px; height:140px; position: relative; border: 3px solid #fafaff; border-radius: 50%; line-height: 140px; font-size: 40px; text-align: center; color: #1c1d3e;}
.step-icon span {position: relative;}
.step-icon span::after, .step-icon span::before {border-radius: 50%; content: ""; height: 40px; position: absolute; width: 40px; z-index: -1;}
.step-icon span::after {background: #cdf3f6; height: 25px; left: -10px; top: 5px; width: 25px;}
.step-icon span::before {background: #d4f8e6; bottom: 0; right: -10px;}
.dark-bg .step-icon{color: rgba(255,255,255,0.9); background: none;}
.dark-bg .step-desc h4{color: #2575fc;}
.dark-bg .step-icon{border-color: rgba(255,255,255,0.1);}
.dark-bg .step-desc p{color: rgba(255,255,255,0.7);}
.step-num-box{position: relative; display: inline-block; margin-bottom: 20px;}
.work-process .box-loader{position: absolute; top: 30%; right: -15%; left: inherit;}
.work-process.style-2 {padding: 0; display: flex; align-items: center;}
.work-process.style-2:before{display: none;}
.work-process.style-2 .step-num-box {margin-bottom: 0; margin-right: 30px;}
.work-process.style-3 {padding: 70px 30px 0;}
.work-process.style-3 .step-num {background: none; box-shadow: none; color: rgba(255, 255, 255, 0.1); font-size: 120px; height: auto; left: 50%; line-height: 120px; margin-bottom: 0; position: absolute; top: 0; transform: translateX(-50%); width: auto;}
#svg-container {position: absolute; width: 100%; left: 52%;  z-index: -1; transform: translateX(-50%); width: 75%;}
#svgC {margin: 0 auto; width: 100%;}


/* ------------------------
    box-loader
------------------------*/
.box-loader {border-radius: 100%; margin: 0 auto; position: absolute; top: 15px; left: 15px;}
.box-loader span{display: inline-block; width: 10px; height: 10px; border-radius: 100%; background: #2575fc; margin: 0 5px; opacity: 0;}
.box-loader span:nth-child(1){animation: opacitychange 1s ease-in-out infinite;}
.box-loader span:nth-child(2){animation: opacitychange 1s ease-in-out 0.33s infinite;}
.box-loader span:nth-child(3){animation: opacitychange 1s ease-in-out 0.66s infinite;}


/*--rotation--*/

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes bar-top {
  0% {
    transform: scale(0, 1);
  }
  12.5% {
    transform: scale(1, 1);
  }
  87.5% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(0, 1);
  }
}
@keyframes bar-right {
  0% {
    transform: scale(1, 0);
  }
  12.5% {
    transform: scale(1, 0);
  }
  25% {
    transform: scale(1, 1);
  }
  75% {
    transform: scale(1, 1);
  }
  87.5% {
    transform: scale(1, 0);
  }
  100% {
    transform: scale(1, 0);
  }
}
@keyframes bar-bottom {
  0% {
    transform: scale(0, 1);
  }
  25% {
    transform: scale(0, 1);
  }
  37.5% {
    transform: scale(1, 1);
  }
  62.5% {
    transform: scale(1, 1);
  }
  75% {
    transform: scale(0, 1);
  }
  100% {
    transform: scale(0, 1);
  }
}
@keyframes bar-left {
  0% {
    transform: scale(1, 0);
  }
  37.5% {
    transform: scale(1, 0);
  }
  50% {
    transform: scale(1, 1);
  }
  62.5% {
    transform: scale(1, 0);
  }
  100% {
    transform: scale(1, 0);
  }
}

/*--opacitychange--*/

@keyframes opacitychange{
  0%, 100%{
    opacity: 0;
  }

  60%{
    opacity: 1;
  }
}

/* responsive */
@media (max-width: 1200px){
	#svg-container { width: 85%; }
}
@media (max-width: 992px){
	.md-mt-5 { margin-top: 50px !important; }
	/*Step*/
	.work-process .box-loader{display: none;}
	.step-desc p {max-width: 300px;  margin: 0 auto;}
	#svg-container {width: 100%; transform: rotate(90deg); left: 0; top: 50%;}
}


</style>