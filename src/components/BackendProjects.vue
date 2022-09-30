<template>
    <section class="px-5 xs:px-7 sm:px-10 lg:px-16 mb-32">
        <div class="flex mx-auto lg:mx-0 w-fit flex-col gap-2 sm2:flex-row sm2:gap-7 items-center mb-14" data-aos="zoom-in-down" data-aos-easing="ease-out-cubic" data-aos-duration="1000" data-aos-offset="100">
            <h4 class="font-grotesk font-bold text-xl">My Backend Projects</h4>
            <hr class="w-52 border-neon-green animate-pulse" />
        </div>
        <div class="flex flex-col gap-28 lg:gap-20 w-fit mx-auto lg:mx-0">
            <div class="h-fit w-fit flex flex-col lg:flex-row gap-8 border-b border-neon-green lg:border-none lg:gap-16 items-center" data-aos="zoom-in-right" data-aos-easing="ease-out-quart" data-aos-duration="800" data-aos-offset="150">
                <img class="w-full max-w-md lg:max-w-none lg:w-2/5 object-contain max-w-1/2 cursor-pointer" src="@/assets/images/shoppa-1.png" />
                <div class="flex gap-7 flex-col max-w-md lg:pb-0 pb-9" data-aos="fade-down-left" data-aos-easing="ease-out-quad" data-aos-duration="900" data-aos-delay="100" data-aos-offset="150">
                    <h3 class="uppercase font-mono text-lg font-bold">Shoppa</h3>
                    <p class="font-capriola text-[15px] leading-loose">Shoppa is an ecommerce platform that specializes in the sales of laptops, phones and games across Nigeria. The Frontend and Backend were created by me using HTML, CSS, JS, Django amongst other libraries.</p>
                    <button class="font-mono font-bold border-2 border-neon-green text-center px-9 py-2 relative after:h-full after:w-0 after:bg-neon-green after:block after:absolute after:top-0 after:left-0 after:z-10 hover:after:w-full hover:text-black after:duration-300 after:ease-in-out w-fit">
                        <span class="relative z-20 delay-100 duration-[400ms] font-grotesk">View Project</span>
                    </button>
                </div>
            </div>

            <div class="h-fit w-fit flex flex-col lg:flex-row gap-8 lg:gap-16 items-center border-b border-neon-green lg:border-none" data-aos="zoom-out-right" data-aos-easing="ease-out-quart" data-aos-duration="800" data-aos-offset="150">
                <img class="w-full max-w-md lg:max-w-none lg:w-2/5 object-contain max-w-1/2 cursor-pointer" src="@/assets/images/research_notes.png" />
                <div class="flex gap-7 flex-col max-w-md lg:pb-0 pb-9" data-aos="fade-down-left" data-aos-easing="ease-out-cubic" data-aos-duration="900" data-aos-delay="100" data-aos-offset="150">
                    <h3 class="uppercase font-mono text-lg font-bold">Research Notes</h3>
                    <p class="font-capriola text-[15px] leading-loose">Research Notes is a Django Web-App that converts a github repository of folders and markdown files into a functioning website. Amongst other features, it also updates itself whenever a commit is made to the chosen github repo.</p>
                    <button class="font-mono font-bold border-2 border-neon-green text-center px-9 py-2 relative after:h-full after:w-0 after:bg-neon-green after:block after:absolute after:top-0 after:left-0 after:z-10 hover:after:w-full hover:text-black after:duration-300 after:ease-in-out w-fit">
                        <span class="relative z-20 delay-100 duration-[400ms] font-grotesk">View Project</span>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>