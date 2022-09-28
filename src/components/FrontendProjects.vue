<template>
    <section class="px-16 mb-32">
        <div class="flex gap-7 items-center mb-9">
            <h4 class="font-grotesk font-bold text-xl">My Frontend Projects</h4>
            <hr class="w-52 border-neon-green animate-pulse" />
        </div>
        <div class="grid grid-cols-2 gap-24 justify-between mb-16">
            <div class="cursor-pointer group project">
                <div class="after:bg-black after:bg-opacity-40 after:w-full after:h-0 after:bottom-0 after:left-0 after:block after:absolute relative project-img">
                    <img src="@/assets/images/covertskins-2.png" />
                </div>
                <h4 class="w-fit uppercase font-bold font-mono text-2xl mt-3 after:w-0 after:transition-all after:duration-[400ms] after:ease-in-out after:mt-0.5 group-hover:after:w-full after:bg-neon-green after:h-1 after:block">CovertSkins</h4>
            </div>
            <div class="cursor-pointer group project">
                <div class="after:bg-black after:bg-opacity-40 after:w-full after:h-0 after:bottom-0 after:left-0 after:block after:absolute relative project-img">
                    <img src="@/assets/images/smart_neighbourhoods_1.png" />
                </div>
                <h4 class="w-fit uppercase font-bold font-mono text-2xl mt-3 after:w-0 after:transition-all after:duration-[400ms] after:ease-in-out after:mt-0.5 group-hover:after:w-full after:bg-neon-green after:h-1 after:block">Smart Neighbourhoods</h4>
            </div>
            <div class="cursor-pointer group project">
                <div class="after:bg-black after:bg-opacity-40 after:w-full after:h-0 after:bottom-0 after:left-0 after:block after:absolute relative project-img">
                    <img src="@/assets/images/wiscar.png" />
                </div>
                <h4 class="w-fit uppercase font-bold font-mono text-2xl mt-3 after:w-0 after:transition-all after:duration-[400ms] after:ease-in-out after:mt-0.5 group-hover:after:w-full after:bg-neon-green after:h-1 after:block">Wiscar</h4>
            </div>
            <div class="cursor-pointer group project">
                <div class="after:bg-black after:bg-opacity-40 after:w-full after:h-0 after:bottom-0 after:left-0 after:block after:absolute relative project-img">
                    <img src="@/assets/images/smezone.png" />
                </div>
                <h4 class="w-fit uppercase font-bold font-mono text-2xl mt-3 after:w-0 after:transition-all after:duration-[400ms] after:ease-in-out after:mt-0.5 group-hover:after:w-full after:bg-neon-green after:h-1 after:block">SMEZONE Fundraiser</h4>
            </div>
            <div class="cursor-pointer group project">
                <div class="after:bg-black after:bg-opacity-40 after:w-full after:h-0 after:bottom-0 after:left-0 after:block after:absolute relative project-img">
                    <img src="@/assets/images/black-hosting.png" />
                </div>
                <h4 class="w-fit uppercase font-bold font-mono text-2xl mt-3 after:w-0 after:transition-all after:duration-[400ms] after:ease-in-out after:mt-0.5 group-hover:after:w-full after:bg-neon-green after:h-1 after:block">Black Hosting</h4>
            </div>
            <div class="cursor-pointer group project">
                <div class="after:bg-black after:bg-opacity-40 after:w-full after:h-0 after:bottom-0 after:left-0 after:block after:absolute relative project-img">
                    <img src="@/assets/images/hostechno.png" />
                </div>
                <h4 class="w-fit uppercase font-bold font-mono text-2xl mt-3 after:w-0 after:transition-all after:duration-[400ms] after:ease-in-out after:mt-0.5 group-hover:after:w-full after:bg-neon-green after:h-1 after:block">Hostechno</h4>
            </div>
        </div>
        <button class="block mx-auto font-grotesk text-lg font-bold border-2 border-neon-green text-center px-10 py-2 text-black relative after:h-full after:w-full after:bg-neon-green after:block after:absolute after:top-0 after:left-0 after:z-10 hover:after:w-0 hover:text-white after:duration-300 after:ease-in-out">
            <span class="relative z-20 delay-100 duration-[400ms]">View More</span>
        </button>
    </section>
</template>

<script>
    let projects = document.getElementsByClassName("project");
    for (let i=0; i < projects.length; i++) {
        console.log("ROW")
        projects[i].addEventListener("mouseenter", () => {
            projects[i].classList.add("hovered-project");
        })
        projects[i].addEventListener("animationend", () => {
            projects[i].classList.remove("hovered-project")
        })
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