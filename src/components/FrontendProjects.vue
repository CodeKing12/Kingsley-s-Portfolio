<template>
    <section class="px-5 xs:px-7 sm:px-10 lg:px-16 mb-32">
        <div class="flex mx-auto lg:mx-0 w-fit flex-col gap-2 sm2:flex-row sm2:gap-7 items-center sm2:mb-9 mb-10" data-aos="zoom-out" data-aos-easing="ease-out-quart" data-aos-duration="1000" data-aos-offset="100">
            <h4 class="font-grotesk font-bold text-xl">My Frontend Projects</h4>
            <hr class="w-52 border-neon-green animate-pulse" />
        </div>
        <div class="grid grid-cols-1 max-w-xl mx-auto lg:max-w-none lg:mx-0 lg:grid-cols-2 gap-16 sm:gap-20 md:gap-28 lg:gap-24 justify-between mb-16">
            <div v-for="project in frontprojects" :key="project.id" class="cursor-pointer group project" :data-aos="project.id % 2 === 1 ? 'flip-right' : 'flip-left'" data-aos-easing="ease-out-cubic" data-aos-duration="1000" data-aos-offset="150" @mouseenter="startAnim" @animationend="endAnim">
                <a :href="project.url" target="_blank">
                    <div class="after:bg-black after:bg-opacity-40 after:w-full after:h-0 after:bottom-0 after:left-0 after:block after:absolute relative project-img">
                        <img :src="require('@/assets/images/' + project.img)" />
                    </div>
                    <h4 class="w-fit uppercase font-bold font-mono text-lg sm:text-xl md:text-2xl mt-3 after:w-0 after:transition-all after:duration-[400ms] after:ease-in-out after:mt-0.5 group-hover:after:w-full after:bg-neon-green after:h-1 after:block" data-aos="fade-right" data-aos-easing="ease-in-out-sine" data-aos-duration="800" data-aos-delay="100" data-aos-offset="50">{{ project.name }}</h4>
                </a>
            </div>
            <!-- <div class="cursor-pointer group project" data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="1000" data-aos-offset="150" @mouseenter="startAnim" @animationend="endAnim">
                <div class="after:bg-black after:bg-opacity-40 after:w-full after:h-0 after:bottom-0 after:left-0 after:block after:absolute relative project-img">
                    <img src="@/assets/images/smart_neighbourhoods_1.png" />
                </div>
                <h4 class="w-fit uppercase font-bold font-mono text-2xl mt-3 after:w-0 after:transition-all after:duration-[400ms] after:ease-in-out after:mt-0.5 group-hover:after:w-full after:bg-neon-green after:h-1 after:block" data-aos="fade-right" data-aos-easing="ease-in-out-sine" data-aos-duration="800" data-aos-delay="100" data-aos-offset="50">Smart Neighbourhoods</h4>
            </div>
            <div class="cursor-pointer group project" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000" data-aos-offset="150" @mouseenter="startAnim" @animationend="endAnim">
                <div class="after:bg-black after:bg-opacity-40 after:w-full after:h-0 after:bottom-0 after:left-0 after:block after:absolute relative project-img">
                    <img src="@/assets/images/wiscar.png" />
                </div>
                <h4 class="w-fit uppercase font-bold font-mono text-2xl mt-3 after:w-0 after:transition-all after:duration-[400ms] after:ease-in-out after:mt-0.5 group-hover:after:w-full after:bg-neon-green after:h-1 after:block" data-aos="fade-right" data-aos-easing="ease-in-out-sine" data-aos-duration="800" data-aos-delay="100" data-aos-offset="50">Wiscar</h4>
            </div>
            <div class="cursor-pointer group project" data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="1000" data-aos-offset="150" @mouseenter="startAnim" @animationend="endAnim">
                <div class="after:bg-black after:bg-opacity-40 after:w-full after:h-0 after:bottom-0 after:left-0 after:block after:absolute relative project-img">
                    <img src="@/assets/images/smezone.png" />
                </div>
                <h4 class="w-fit uppercase font-bold font-mono text-2xl mt-3 after:w-0 after:transition-all after:duration-[400ms] after:ease-in-out after:mt-0.5 group-hover:after:w-full after:bg-neon-green after:h-1 after:block" data-aos="fade-right" data-aos-easing="ease-in-out-sine" data-aos-duration="800" data-aos-delay="100" data-aos-offset="50">SMEZONE Fundraiser</h4>
            </div>
            <div class="cursor-pointer group project" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000" data-aos-offset="150" @mouseenter="startAnim" @animationend="endAnim">
                <div class="after:bg-black after:bg-opacity-40 after:w-full after:h-0 after:bottom-0 after:left-0 after:block after:absolute relative project-img">
                    <img src="@/assets/images/black-hosting.png" />
                </div>
                <h4 class="w-fit uppercase font-bold font-mono text-2xl mt-3 after:w-0 after:transition-all after:duration-[400ms] after:ease-in-out after:mt-0.5 group-hover:after:w-full after:bg-neon-green after:h-1 after:block" data-aos="fade-right" data-aos-easing="ease-in-out-sine" data-aos-duration="800" data-aos-delay="100" data-aos-offset="50">Black Hosting</h4>
            </div>
            <div class="cursor-pointer group project" data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="1000" data-aos-offset="150" @mouseenter="startAnim" @animationend="endAnim">
                <div class="after:bg-black after:bg-opacity-40 after:w-full after:h-0 after:bottom-0 after:left-0 after:block after:absolute relative project-img">
                    <img src="@/assets/images/hostechno.png" />
                </div>
                <h4 class="w-fit uppercase font-bold font-mono text-2xl mt-3 after:w-0 after:transition-all after:duration-[400ms] after:ease-in-out after:mt-0.5 group-hover:after:w-full after:bg-neon-green after:h-1 after:block" data-aos="fade-right" data-aos-easing="ease-in-out-sine" data-aos-duration="800" data-aos-delay="100" data-aos-offset="50">Hostechno</h4>
            </div> -->
        </div>
        <!-- <button class="block mx-auto font-grotesk text-lg font-bold border-2 border-neon-green text-center px-10 py-2 text-black relative after:h-full after:w-full after:bg-neon-green after:block after:absolute after:top-0 after:left-0 after:z-10 hover:after:w-0 hover:text-white after:duration-300 after:ease-in-out" data-aos="flip-up" data-aos-easing="ease-in-out-sine" data-aos-duration="700">
            <span class="relative z-20 delay-100 duration-[400ms]">View More</span>
        </button> -->
    </section>
</template>

<script setup>
    import { ref } from "vue";

    let frontprojects = ref([
        {
            img: "10000carrots.png",
            name: "10000 Carrots Rabbit Rescue",
            url: "https://10000carrots.netlify.app/"
        },
        {
            img: "smart_neighbourhoods_1.png",
            name: "Smart Neighbourhoods",
            url: "https://smartneighbourhood.com.ng/"
        },
        {
            img: "wiscar.png",
            name: "Wiscar",
            url: "https://wiscar.hypersence.ml/sources/"
        },
        {
            img: "smezone.png",
            name: "SMEZONE Fundraiser",
            url: "https://codeking12.github.io/Smezone-Fundraiser/sources"
        },
        {
            img: "black-hosting.png",
            name: "Black Hosting",
            url: "https://black-hosting.eyetukingsley.gq/"
        },
        {
            img: "hostechno.png",
            name: "Hostechno",
            url: "https://hostechno.eyetukingsley.gq/"
        },
    ])

    for (let i=1; i < frontprojects.value.length; i++) {
      frontprojects.value[i-1]['id'] = i
    }

    /* {
            id: 0,
            img: "covertskins-2.png",
            name: "CovertSkins",
            url: "https://covertskins.eyetukingsley.gq/"
        },

        {
            id: 6,
            img: "eagleskills.png",
            name: "Eagleskills",
            url: "https://eagleskills.com.ng/"
        },
        {
            id: 7,
            img: "lumia-mayes.png",
            name: "Lumia Mayes",
            url: "https://lumia-mayes.eyetukingsley.gq/"
        },
        {
            id: 8,
            img: "eps.png",
            name: "Eden Plus Spectrum",
            url: "https://eps.hypersence.ml/"
        },
        {
            id: 9,
            img: "quizix.png",
            name: "Quizix",
            url: ""
        }, */

    // console.log(frontprojects)

    function startAnim(event) {
        // Add the hovered project class to start the animation once the mouse enters the div
        event.target.classList.add("hovered-project")
    }

    function endAnim(event) {
        // Once the image animation ends, remove the hovered-project class from it's parent div
        event.target.parentElement.classList.remove("hovered-project")
    }
</script>

<style scoped>
    @keyframes imageOverlay {
        0% {
            height: 0%;
        }

        50% {
            height: 100%;
        }

        100% {
            top: 0;
            height: 0%;
        }
    }

    .hovered-project .project-img:after {
        animation: imageOverlay 1s ease-in-out;
    }
</style>
