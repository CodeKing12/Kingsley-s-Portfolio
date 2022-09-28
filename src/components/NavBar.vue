<template>
    <nav class="flex justify-between w-full px-16 py-5 top-0 fixed bg-[#0c0c0c] z-50" data-aos="flip-up" data-aos-easing="ease-in-quart" data-aos-duration="700">
        <img class="w-10" src="@/assets/images/icon-logo.svg" />
        <div class="flex gap-12 items-center">
            <a @click="scrollToSection('intro')" class="text-[15px] font-epilogue w-fit font-light after:w-0 after:transition-all after:duration-300 after:ease-linear after:opacity-0 hover:after:w-full hover:after:opacity-100 after:bg-neon-green after:bg-opacity-70 after:h-[0.4px] after:block nav-item cursor-pointer intro active" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="600" data-aos-delay="50">Introduction</a>
            <a @click="scrollToSection('projects')" class="text-[15px] font-epilogue w-fit font-light after:w-0 after:transition-all after:duration-300 after:ease-linear after:opacity-0 hover:after:w-full hover:after:opacity-100 after:bg-neon-green after:bg-opacity-70 after:h-[0.4px] after:block nav-item cursor-pointer projects" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="600" data-aos-delay="150">Projects</a>
            <a @click="scrollToSection('languages')" class="text-[15px] font-epilogue w-fit font-light after:w-0 after:transition-all after:duration-300 after:ease-linear after:opacity-0 hover:after:w-full hover:after:opacity-100 after:bg-neon-green after:bg-opacity-70 after:h-[0.4px] after:block nav-item cursor-pointer languages" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="600" data-aos-delay="250">Languages & Frameworks</a>
            <a @click="scrollToSection('about')" class="text-[15px] font-epilogue w-fit font-light after:w-0 after:transition-all after:duration-300 after:ease-linear after:opacity-0 hover:after:w-full hover:after:opacity-100 after:bg-neon-green after:bg-opacity-70 after:h-[0.4px] after:block nav-item cursor-pointer about" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="600" data-aos-delay="350">About</a>
            <a @click="scrollToSection('contact')" class="text-[15px] font-epilogue w-fit font-light after:w-0 after:transition-all after:duration-300 after:ease-linear after:opacity-0 hover:after:w-full hover:after:opacity-100 after:bg-neon-green after:bg-opacity-70 after:h-[0.4px] after:block nav-item cursor-pointer contact" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="600" data-aos-delay="450">Contact</a>
        </div>
    </nav>
</template>

<script setup>
    function scrollToSection(sectionId) {
        // This scrolls the page to the clicked section. Using traditional ID's won't work perfectly because the navbar is covering part of the section.
        let section = document.getElementById(sectionId)
        sectionId == 'intro' ? scrollTo(0, 0) : scrollTo(0, section.offsetTop-120);
    }
</script>

<style scoped>
    .nav-item::after {
        transform: rotateY(24deg);
    }

    .active::after {
        width: 100%;
        opacity: 1;
    }
</style>