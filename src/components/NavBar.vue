<template>
    <nav class="flex justify-between w-full px-5 xs:px-7 sm:px-10 lg:px-16 py-2 sm:py-5 top-0 fixed bg-[#030a09] z-50" data-aos="flip-up" data-aos-easing="ease-in-quart" data-aos-duration="700">
        <!-- 0c0c0c, 030c01 -->
        <img class="w-10 duration-300 ease-in-out" :class="showSidebar ? 'opacity-0' : 'opacity-100 delay-700'" src="@/assets/images/icon-logo.svg" />
        <div class="gap-12 items-center hidden lg:flex">
            <a @click="scrollToSection('intro')" class="text-[15px] font-epilogue w-fit font-light after:w-0 after:transition-all after:duration-300 after:ease-linear after:opacity-0 hover:after:w-full hover:after:opacity-100 after:bg-neon-green after:bg-opacity-70 after:h-[0.4px] after:block nav-item cursor-pointer intro active" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="600" data-aos-delay="50">Introduction</a>
            <a @click="scrollToSection('projects')" class="text-[15px] font-epilogue w-fit font-light after:w-0 after:transition-all after:duration-300 after:ease-linear after:opacity-0 hover:after:w-full hover:after:opacity-100 after:bg-neon-green after:bg-opacity-70 after:h-[0.4px] after:block nav-item cursor-pointer projects" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="600" data-aos-delay="150">Projects</a>
            <a @click="scrollToSection('languages')" class="text-[15px] font-epilogue w-fit font-light after:w-0 after:transition-all after:duration-300 after:ease-linear after:opacity-0 hover:after:w-full hover:after:opacity-100 after:bg-neon-green after:bg-opacity-70 after:h-[0.4px] after:block nav-item cursor-pointer languages" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="600" data-aos-delay="250">Languages & Frameworks</a>
            <a @click="scrollToSection('about')" class="text-[15px] font-epilogue w-fit font-light after:w-0 after:transition-all after:duration-300 after:ease-linear after:opacity-0 hover:after:w-full hover:after:opacity-100 after:bg-neon-green after:bg-opacity-70 after:h-[0.4px] after:block nav-item cursor-pointer about" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="600" data-aos-delay="350">About</a>
            <a @click="scrollToSection('contact')" class="text-[15px] font-epilogue w-fit font-light after:w-0 after:transition-all after:duration-300 after:ease-linear after:opacity-0 hover:after:w-full hover:after:opacity-100 after:bg-neon-green after:bg-opacity-70 after:h-[0.4px] after:block nav-item cursor-pointer contact" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="600" data-aos-delay="450">Contact</a>
        </div>
        <div @click="showSidebar = !showSidebar" class="flex w-10 h-10 lg:hidden relative after:h-full after:block after:absolute after:bg-[#0c0c0c] after:duration-300 after:ease-linear" :class="showSidebar ? 'after:w-full z-30' : 'after:w-0 after:delay-300'">
            <svg class="absolute top-0 left-0 flex lg:hidden fill-neon-green hover:fill-[#1eb403] duration-300 ease-linear cursor-pointer" :class="showSidebar ? 'opacity-0' : 'opacity-100'" id="svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="40" viewBox="0, 0, 400,400"><g id="svgg"><path id="path0" d="M5.657 101.558 C 1.845 103.883,0.006 107.443,0.006 112.500 C 0.006 117.557,1.845 121.117,5.657 123.442 C 9.672 125.890,390.328 125.890,394.343 123.442 C 402.051 118.742,402.051 106.258,394.343 101.558 C 390.328 99.110,9.672 99.110,5.657 101.558 M5.657 189.058 C -2.051 193.758,-2.051 206.242,5.657 210.942 C 9.672 213.390,390.328 213.390,394.343 210.942 C 402.051 206.242,402.051 193.758,394.343 189.058 C 390.328 186.610,9.672 186.610,5.657 189.058 M130.657 276.558 C 126.845 278.883,125.006 282.443,125.006 287.500 C 125.006 292.557,126.845 296.117,130.657 298.442 C 134.666 300.886,390.334 300.886,394.343 298.442 C 402.051 293.742,402.051 281.258,394.343 276.558 C 390.334 274.114,134.666 274.114,130.657 276.558 " stroke="none" fill-rule="evenodd"></path></g></svg>
            <svg class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex lg:hidden fill-neon-green hover:fill-[#1eb403] duration-300 ease-linear cursor-pointer opacity-0" :class="showSidebar ? 'opacity-100 delay-[400ms] z-50' : 'opacity-0 delay-200'" id="svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0, 0, 400,400"><g id="svgg"><path id="path0" d="M7.944 1.676 C 3.276 3.987,0.569 8.285,0.152 14.050 C -0.491 22.946,-6.099 16.768,89.337 112.306 L 176.940 200.003 89.671 287.306 C 27.961 349.041,2.051 375.460,1.201 377.514 C -3.162 388.065,3.164 399.060,14.050 399.848 C 22.946 400.491,16.768 406.099,112.305 310.665 L 200.000 223.063 287.695 310.665 C 383.232 406.099,377.054 400.491,385.950 399.848 C 396.836 399.060,403.162 388.065,398.799 377.514 C 397.949 375.460,372.038 349.040,310.327 287.305 L 223.056 200.000 310.327 112.695 C 372.038 50.960,397.949 24.540,398.799 22.486 C 403.162 11.935,396.836 0.940,385.950 0.152 C 377.054 -0.491,383.232 -6.099,287.694 89.337 L 199.997 176.940 112.694 89.671 C 50.959 27.961,24.540 2.051,22.486 1.201 C 18.282 -0.537,12.002 -0.332,7.944 1.676 " stroke="none" fill-rule="evenodd"></path></g></svg>
        </div>
        <div class="absolute left-0 w-0 opacity-0 bg-[#030a09] h-screen z-50 py-7 px-8 ease-linear" :class="showSidebar ? '!w-full sm:!w-64 !opacity-100 duration-300' : 'duration-500 delay-200'">
            <div class="flex justify-between">
                <img class="w-9 mb-20" src="@/assets/images/icon-logo.svg" />
                <svg @click="showSidebar = !showSidebar" class="flex sm:hidden fill-neon-green hover:fill-[#1eb403] duration-300 ease-linear cursor-pointer" :class="showSidebar ? 'opacity-100 delay-[400ms]' : 'delay-200'" id="svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0, 0, 400,400"><g id="svgg"><path id="path0" d="M7.944 1.676 C 3.276 3.987,0.569 8.285,0.152 14.050 C -0.491 22.946,-6.099 16.768,89.337 112.306 L 176.940 200.003 89.671 287.306 C 27.961 349.041,2.051 375.460,1.201 377.514 C -3.162 388.065,3.164 399.060,14.050 399.848 C 22.946 400.491,16.768 406.099,112.305 310.665 L 200.000 223.063 287.695 310.665 C 383.232 406.099,377.054 400.491,385.950 399.848 C 396.836 399.060,403.162 388.065,398.799 377.514 C 397.949 375.460,372.038 349.040,310.327 287.305 L 223.056 200.000 310.327 112.695 C 372.038 50.960,397.949 24.540,398.799 22.486 C 403.162 11.935,396.836 0.940,385.950 0.152 C 377.054 -0.491,383.232 -6.099,287.694 89.337 L 199.997 176.940 112.694 89.671 C 50.959 27.961,24.540 2.051,22.486 1.201 C 18.282 -0.537,12.002 -0.332,7.944 1.676 " stroke="none" fill-rule="evenodd"></path></g></svg>
            </div>
            <div class="flex flex-col gap-12 opacity-0 duration-300 ease-in-out" :class="showSidebar ? '!opacity-100' : ''">
                <a :class="showSidebar ? '!delay-100 !translate-x-0 opacity-100' : ''" @click="sideScroll('intro')" class="translate-x-24 delay-0 text-[15px] font-epilogue w-fit font-light after:w-6 after:transition-all after:duration-300 after:ease-linear after:opacity- hover:after:w-full hover:after:opacity-100 after:bg-neon-green after:bg-opacity-70 after:h-[0.4px] after:block nav-item cursor-pointer duration-500 opacity-0 intro" data-aos-easing="ease-in-cubic">Introduction</a>
                <a :class="showSidebar ? '!delay-300 !translate-x-0 opacity-100' : ''" @click="sideScroll('projects')" class="translate-x-24 delay-0 text-[15px] font-epilogue w-fit font-light after:w-6 after:transition-all after:duration-300 after:ease-linear after:opacity- hover:after:w-full hover:after:opacity-100 after:bg-neon-green after:bg-opacity-70 after:h-[0.4px] after:block nav-item cursor-pointer duration-500 opacity-0 projects" data-aos-easing="ease-in-cubic">Projects</a>
                <a :class="showSidebar ? '!delay-500 !translate-x-0 opacity-100' : ''" @click="sideScroll('languages')" class="translate-x-24 delay-0 text-[15px] font-epilogue w-fit font-light after:w-6 after:transition-all after:duration-300 after:ease-linear after:opacity- hover:after:w-full hover:after:opacity-100 after:bg-neon-green after:bg-opacity-70 after:h-[0.4px] after:block nav-item cursor-pointer duration-500 opacity-0 languages" data-aos-easing="ease-in-cubic">Languages & Frameworks</a>
                <a :class="showSidebar ? '!delay-700 !translate-x-0 opacity-100' : ''" @click="sideScroll('about')" class="translate-x-24 delay-0 text-[15px] font-epilogue w-fit font-light after:w-6 after:transition-all after:duration-300 after:ease-linear after:opacity- hover:after:w-full hover:after:opacity-100 after:bg-neon-green after:bg-opacity-70 after:h-[0.4px] after:block nav-item cursor-pointer duration-500 opacity-0 about" data-aos-easing="ease-in-cubic">About</a>
                <a :class="showSidebar ? '!delay-1000 !translate-x-0 opacity-100' : ''" @click="sideScroll('contact')" class="translate-x-24 delay-0 text-[15px] font-epilogue w-fit font-light after:w-6 after:transition-all after:duration-300 after:ease-linear after:opacity- hover:after:w-full hover:after:opacity-100 after:bg-neon-green after:bg-opacity-70 after:h-[0.4px] after:block nav-item cursor-pointer duration-500 opacity-0 contact" data-aos-easing="ease-in-cubic">Contact</a>
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

    watch(showSidebar, () => {
        // let overflow = showSidebar.value === true ? "hidden" : "scroll"
        // document.querySelector("html").style.overflowY = overflow
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