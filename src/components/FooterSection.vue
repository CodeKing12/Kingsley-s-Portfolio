<template>
    <footer id="contact" class="px-5 xs:px-7 sm:px-10 lg:px-16 mb-16 lg:mb-24 max-w-3xl lg:max-w-5xl mx-auto section">
        <h3 class="font-mono font-bold text-xl uppercase" data-aos="flip-down" data-aos-easing="ease-in-quad" data-aos-duration="700" data-aos-delay="50" data-aos-offset="50">Let's Make <span class="text-neon-green">Contact</span></h3>
        <div class="mt-10 flex flex-col gap-y-20 lg:gap-y-0 lg:flex-row justify-between">
            <form class="flex flex-col gap-10 font-epilogue w-full lg:w-4/5 max-w-lg">
                <input class="w-full max-w-lg outline-none bg-transparent border-b border-b-gray-300 placeholder:text-grey placeholder:text-opacity-60 py-2 focus:border-neon-green ease-in-out duration-500" type="text" placeholder="Full Name" data-aos="zoom-out-left" data-aos-easing="ease-in-quart" data-aos-duration="900" data-aos-delay="50" data-aos-offset="50" />
                <input class="w-full max-w-lg outline-none bg-transparent border-b border-b-gray-300 placeholder:text-grey placeholder:text-opacity-60 py-2 focus:border-neon-green ease-in-out duration-500" type="email" placeholder="Email Address" data-aos="zoom-out-left" data-aos-easing="ease-in-quart" data-aos-duration="900" data-aos-delay="200" data-aos-offset="50" />
                <textarea class="w-full max-w-lg outline-none bg-transparent border-b border-b-gray-300 placeholder:text-grey placeholder:text-opacity-60 py-2 focus:border-neon-green ease-in-out duration-500 h-32" placeholder="Message" data-aos="zoom-out-left" data-aos-easing="ease-in-quart" data-aos-duration="900" data-aos-delay="350" data-aos-offset="50"></textarea>
            </form>
            <div class="flex lg:flex-col gap-8 sm2:gap-10 lg:gap-12 lg2:mx-auto flex-wrap lg:flex-nowrap">
                <a class="flex gap-4 font-grotesk font-medium text-xl lg:text-2xl uppercase cursor-pointer group" data-aos="fade-left" data-aos-easing="ease-in" data-aos-duration="700" data-aos-delay="50" data-aos-offset="0" href="mailto:eyetukingsley330@gmail.com">
                    <span class="after:block after:w-0 after:bg-neon-green after:h-0.5 group-hover:after:w-full after:ease-linear after:duration-200">
                        Gmail
                    </span>
                    <img class="w-5" src="@/assets/images/link-arrow.svg" />
                </a>
                <a class="flex gap-4 font-grotesk font-medium text-xl lg:text-2xl uppercase cursor-pointer group" data-aos="fade-left" data-aos-easing="ease-in" data-aos-duration="700" data-aos-delay="100" data-aos-offset="0" href="https://github.com/CodeKing12" target="_blank">
                    <span class="after:block after:w-0 after:bg-neon-green after:h-0.5 group-hover:after:w-full after:ease-linear after:duration-200">
                        Github
                    </span>
                    <img class="w-5" src="@/assets/images/link-arrow.svg" />
                </a>
                <a class="flex gap-4 font-grotesk font-medium text-xl lg:text-2xl uppercase cursor-pointer group" data-aos="fade-left" data-aos-easing="ease-in" data-aos-duration="700" data-aos-delay="150" data-aos-offset="0" href="https://www.linkedin.com/in/eyetu-kingsley" target="_blank">
                    <span class="after:block after:w-0 after:bg-neon-green after:h-0.5 group-hover:after:w-full after:ease-linear after:duration-200">
                        LinkedIn
                    </span>
                    <img class="w-5" src="@/assets/images/link-arrow.svg" />
                </a>
                <a class="flex gap-4 font-grotesk font-medium text-xl lg:text-2xl uppercase cursor-pointer group" data-aos="fade-left" data-aos-easing="ease-in" data-aos-duration="700" data-aos-delay="200" data-aos-offset="0" href="https://api.whatsapp.com/send?phone=2347035991721&text=Hi,%20I%20need%20you%20to%20develop%20something%20for%20me." target="_blank">
                    <span class="after:block after:w-0 after:bg-neon-green after:h-0.5 group-hover:after:w-full after:ease-linear after:duration-200">
                        Whatsapp
                    </span>
                    <img class="w-5" src="@/assets/images/link-arrow.svg" />
                </a>
            </div>
        </div>
    </footer>
</template>