<template>
    <nav class="flex justify-between w-full px-16 py-5 top-0 fixed bg-[#0c0c0c] z-50" data-aos="flip-up" data-aos-easing="ease-in-quart" data-aos-duration="700">
        <img class="w-10" src="@/assets/images/icon-logo.svg" />
        <div class="gap-12 items-center hidden lg:flex">
            <a @click="scrollToSection('intro')" class="text-[15px] font-epilogue w-fit font-light after:w-0 after:transition-all after:duration-300 after:ease-linear after:opacity-0 hover:after:w-full hover:after:opacity-100 after:bg-neon-green after:bg-opacity-70 after:h-[0.4px] after:block nav-item cursor-pointer intro active" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="600" data-aos-delay="50">Introduction</a>
            <a @click="scrollToSection('projects')" class="text-[15px] font-epilogue w-fit font-light after:w-0 after:transition-all after:duration-300 after:ease-linear after:opacity-0 hover:after:w-full hover:after:opacity-100 after:bg-neon-green after:bg-opacity-70 after:h-[0.4px] after:block nav-item cursor-pointer projects" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="600" data-aos-delay="150">Projects</a>
            <a @click="scrollToSection('languages')" class="text-[15px] font-epilogue w-fit font-light after:w-0 after:transition-all after:duration-300 after:ease-linear after:opacity-0 hover:after:w-full hover:after:opacity-100 after:bg-neon-green after:bg-opacity-70 after:h-[0.4px] after:block nav-item cursor-pointer languages" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="600" data-aos-delay="250">Languages & Frameworks</a>
            <a @click="scrollToSection('about')" class="text-[15px] font-epilogue w-fit font-light after:w-0 after:transition-all after:duration-300 after:ease-linear after:opacity-0 hover:after:w-full hover:after:opacity-100 after:bg-neon-green after:bg-opacity-70 after:h-[0.4px] after:block nav-item cursor-pointer about" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="600" data-aos-delay="350">About</a>
            <a @click="scrollToSection('contact')" class="text-[15px] font-epilogue w-fit font-light after:w-0 after:transition-all after:duration-300 after:ease-linear after:opacity-0 hover:after:w-full hover:after:opacity-100 after:bg-neon-green after:bg-opacity-70 after:h-[0.4px] after:block nav-item cursor-pointer contact" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="600" data-aos-delay="450">Contact</a>
        </div>
        <div class="flex lg:hidden">
            <svg @click="showSidebar = !showSidebar" class="flex lg:hidden fill-neon-green hover:fill-[#1eb403] duration-300 ease-linear cursor-pointer" id="svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="40" viewBox="0, 0, 400,400"><g id="svgg"><path id="path0" d="M5.657 101.558 C 1.845 103.883,0.006 107.443,0.006 112.500 C 0.006 117.557,1.845 121.117,5.657 123.442 C 9.672 125.890,390.328 125.890,394.343 123.442 C 402.051 118.742,402.051 106.258,394.343 101.558 C 390.328 99.110,9.672 99.110,5.657 101.558 M5.657 189.058 C -2.051 193.758,-2.051 206.242,5.657 210.942 C 9.672 213.390,390.328 213.390,394.343 210.942 C 402.051 206.242,402.051 193.758,394.343 189.058 C 390.328 186.610,9.672 186.610,5.657 189.058 M130.657 276.558 C 126.845 278.883,125.006 282.443,125.006 287.500 C 125.006 292.557,126.845 296.117,130.657 298.442 C 134.666 300.886,390.334 300.886,394.343 298.442 C 402.051 293.742,402.051 281.258,394.343 276.558 C 390.334 274.114,134.666 274.114,130.657 276.558 " stroke="none" fill-rule="evenodd"></path></g></svg>
        </div>
        <div class="absolute left-0 w-0 opacity-0 bg-[#0c0c0c] h-screen z-50 py-7 px-8 duration-300 ease-linear" :class="showSidebar ? '!w-64 !opacity-100' : ''">
            <img class="w-9 mb-16" src="@/assets/images/icon-logo.svg" />
            <div class="flex flex-col gap-12 opacity-0 duration-300 ease-in-out" :class="showSidebar ? '!opacity-100' : ''">
                <a :class="showSidebar ? '!delay-100 !translate-x-0 opacity-100' : ''" @click="sideScroll('intro')" class="translate-x-24 delay-0 text-[15px] font-epilogue w-fit font-light after:w-0 after:transition-all after:duration-300 after:ease-linear after:opacity-0 hover:after:w-full hover:after:opacity-100 after:bg-neon-green after:bg-opacity-70 after:h-[0.4px] after:block nav-item cursor-pointer duration-500 opacity-0 intro active" data-aos-easing="ease-in-cubic">Introduction</a>
                <a :class="showSidebar ? '!delay-300 !translate-x-0 opacity-100' : ''" @click="sideScroll('projects')" class="translate-x-24 delay-0 text-[15px] font-epilogue w-fit font-light after:w-0 after:transition-all after:duration-300 after:ease-linear after:opacity-0 hover:after:w-full hover:after:opacity-100 after:bg-neon-green after:bg-opacity-70 after:h-[0.4px] after:block nav-item cursor-pointer duration-500 opacity-0 projects" data-aos-easing="ease-in-cubic">Projects</a>
                <a :class="showSidebar ? '!delay-500 !translate-x-0 opacity-100' : ''" @click="sideScroll('languages')" class="translate-x-24 delay-0 text-[15px] font-epilogue w-fit font-light after:w-0 after:transition-all after:duration-300 after:ease-linear after:opacity-0 hover:after:w-full hover:after:opacity-100 after:bg-neon-green after:bg-opacity-70 after:h-[0.4px] after:block nav-item cursor-pointer duration-500 opacity-0 languages" data-aos-easing="ease-in-cubic">Languages & Frameworks</a>
                <a :class="showSidebar ? '!delay-700 !translate-x-0 opacity-100' : ''" @click="sideScroll('about')" class="translate-x-24 delay-0 text-[15px] font-epilogue w-fit font-light after:w-0 after:transition-all after:duration-300 after:ease-linear after:opacity-0 hover:after:w-full hover:after:opacity-100 after:bg-neon-green after:bg-opacity-70 after:h-[0.4px] after:block nav-item cursor-pointer duration-500 opacity-0 about" data-aos-easing="ease-in-cubic">About</a>
                <a :class="showSidebar ? '!delay-1000 !translate-x-0 opacity-100' : ''" @click="sideScroll('contact')" class="translate-x-24 delay-0 text-[15px] font-epilogue w-fit font-light after:w-0 after:transition-all after:duration-300 after:ease-linear after:opacity-0 hover:after:w-full hover:after:opacity-100 after:bg-neon-green after:bg-opacity-70 after:h-[0.4px] after:block nav-item cursor-pointer duration-500 opacity-0 contact" data-aos-easing="ease-in-cubic">Contact</a>
            </div>
        </div>
    </nav>
</template>

<script setup>
    import { ref, watch } from 'vue';

    let showSidebar = ref(false)

    function scrollToSection(sectionId) {
        // This scrolls the page to the clicked section. Using traditional ID's won't work perfectly because the navbar is covering part of the section.
        let section = document.getElementById(sectionId)
        sectionId == 'intro' ? scrollTo(0, 0) : scrollTo(0, section.offsetTop-120);
    }

    watch(showSidebar, (newVal, oldVal) => {
        console.log(newVal, oldVal)
    })
</script>

<style scoped>
    .nav-item::after {
        transform: rotateY(24deg);
    }

    .active::after {
        width: 100%;
        opacity: 1;
    }

    /* @media (max-width: 990px) {
        .link-list {

        }
    } */
</style>