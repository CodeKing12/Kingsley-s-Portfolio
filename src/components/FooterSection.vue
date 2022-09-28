<template>
    <footer class="px-16 mb-24">
        <h3 class="font-mono font-bold text-xl uppercase">Let's Make <span class="text-neon-green">Contact</span></h3>
        <div class="mt-10 flex justify-between">
            <form class="flex flex-col gap-10 font-epilogue w-4/5 max-w-lg">
                <input class="w-full max-w-lg outline-none bg-transparent border-b border-b-gray-300 placeholder:text-grey placeholder:text-opacity-60 py-2 focus:border-neon-green ease-in-out duration-500" type="text" placeholder="Full Name" />
                <input class="w-full max-w-lg outline-none bg-transparent border-b border-b-gray-300 placeholder:text-grey placeholder:text-opacity-60 py-2 focus:border-neon-green ease-in-out duration-500" type="email" placeholder="Email Address" />
                <textarea class="w-full max-w-lg outline-none bg-transparent border-b border-b-gray-300 placeholder:text-grey placeholder:text-opacity-60 py-2 focus:border-neon-green ease-in-out duration-500 h-32" placeholder="Message"></textarea>
            </form>
            <div class="flex flex-col gap-12 mx-auto">
                <a class="flex gap-4 font-grotesk font-medium text-2xl uppercase cursor-pointer group">
                    <span class="after:block after:w-0 after:bg-neon-green after:h-0.5 group-hover:after:w-full after:ease-linear after:duration-300">
                        Gmail
                    </span>
                    <img class="w-5" src="@/assets/images/link-arrow.svg" />
                </a>
                <a class="flex gap-4 font-grotesk font-medium text-2xl uppercase cursor-pointer group">
                    <span class="after:block after:w-0 after:bg-neon-green after:h-0.5 group-hover:after:w-full after:ease-linear after:duration-300">
                        Github
                    </span>
                    <img class="w-5" src="@/assets/images/link-arrow.svg" />
                </a>
                <a class="flex gap-4 font-grotesk font-medium text-2xl uppercase cursor-pointer group">
                    <span class="after:block after:w-0 after:bg-neon-green after:h-0.5 group-hover:after:w-full after:ease-linear after:duration-300">
                        LinkedIn
                    </span>
                    <img class="w-5" src="@/assets/images/link-arrow.svg" />
                </a>
                <a class="flex gap-4 font-grotesk font-medium text-2xl uppercase cursor-pointer group">
                    <span class="after:block after:w-0 after:bg-neon-green after:h-0.5 group-hover:after:w-full after:ease-linear after:duration-300">
                        Whatsapp
                    </span>
                    <img class="w-5" src="@/assets/images/link-arrow.svg" />
                </a>
            </div>
        </div>
    </footer>
</template>