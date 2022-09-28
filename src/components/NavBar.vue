<template>
    <nav class="flex justify-between w-full px-16 py-5 top-0 fixed bg-[#0c0c0c] z-50" data-aos="flip-up" data-aos-easing="ease-in-quart" data-aos-duration="700">
        <img class="w-10" src="@/assets/images/icon-logo.svg" />
        <div class="flex gap-12 items-center">
            <a class="text-[15px] font-epilogue w-fit font-light after:w-0 after:transition-all after:duration-300 after:ease-linear after:opacity-0 hover:after:w-full hover:after:opacity-100 after:bg-neon-green after:bg-opacity-70 after:h-[0.4px] after:block nav-item cursor-pointer active" id="intro" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="600" data-aos-delay="50">Introduction</a>
            <a class="text-[15px] font-epilogue w-fit font-light after:w-0 after:transition-all after:duration-300 after:ease-linear after:opacity-0 hover:after:w-full hover:after:opacity-100 after:bg-neon-green after:bg-opacity-70 after:h-[0.4px] after:block nav-item cursor-pointer" id="projects" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="600" data-aos-delay="150">Projects</a>
            <a class="text-[15px] font-epilogue w-fit font-light after:w-0 after:transition-all after:duration-300 after:ease-linear after:opacity-0 hover:after:w-full hover:after:opacity-100 after:bg-neon-green after:bg-opacity-70 after:h-[0.4px] after:block nav-item cursor-pointer" id="languages" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="600" data-aos-delay="250">Languages & Frameworks</a>
            <a class="text-[15px] font-epilogue w-fit font-light after:w-0 after:transition-all after:duration-300 after:ease-linear after:opacity-0 hover:after:w-full hover:after:opacity-100 after:bg-neon-green after:bg-opacity-70 after:h-[0.4px] after:block nav-item cursor-pointer" id="about" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="600" data-aos-delay="350">About</a>
            <a class="text-[15px] font-epilogue w-fit font-light after:w-0 after:transition-all after:duration-300 after:ease-linear after:opacity-0 hover:after:w-full hover:after:opacity-100 after:bg-neon-green after:bg-opacity-70 after:h-[0.4px] after:block nav-item cursor-pointer" id="contact" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="600" data-aos-delay="450">Contact</a>
        </div>
    </nav>
</template>

<script setup>
    let navItems = document.getElementsByClassName("nav-item");
    for (let i=0; i < navItems.length; i++) {
        console.log(i);
        let item = navItems[i];
        item.addEventListener("click", () => {
            let section = document.getElementById(item.id);
            console.log(section.offsetTop);
        })
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