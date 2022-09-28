<template>
    <section class="px-16 mb-32">
        <div class="flex gap-7 items-center mb-9">
            <h4 class="font-grotesk font-bold text-xl">My Backend Projects</h4>
            <hr class="w-52 border-neon-green animate-pulse" />
        </div>
        <div class="flex flex-col gap-20">
            <div class="h-fit flex gap-16 items-center">
                <img class="w-2/5 object-contain max-w-1/2" src="@/assets/images/shoppa-1.png" />
                <div class="flex gap-7 flex-col max-w-md">
                    <h3 class="uppercase font-mono text-lg font-bold">Shoppa</h3>
                    <p class="font-capriola text-[15px] leading-loose">Shoppa is an ecommerce platform that specializes in the sales of laptops, phones and games across Nigeria. The Frontend and Backend were created by me using HTML, CSS, JS, Django amongst other libraries.</p>
                    <button class="font-mono font-bold border-2 border-neon-green text-center px-9 py-2 relative after:h-full after:w-0 after:bg-neon-green after:block after:absolute after:top-0 after:left-0 after:z-10 hover:after:w-full hover:text-black after:duration-300 after:ease-in-out w-fit">
                        <span class="relative z-20 delay-100 duration-[400ms] font-grotesk">View Project</span>
                    </button>
                </div>
            </div>

            <div class="h-fit flex gap-16 items-center">
                <img class="w-2/5 object-contain max-w-1/2" src="@/assets/images/research_notes.png" />
                <div class="flex gap-7 flex-col max-w-md">
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