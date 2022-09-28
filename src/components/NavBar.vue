<template>
    <nav class="flex justify-between w-full px-16 py-5 top-0 fixed bg-[#0c0c0c] z-50">
        <img class="w-10" src="@/assets/images/icon-logo.svg" />
        <div class="flex gap-12 items-center">
            <a class="text-[15px] font-epilogue w-fit font-light after:w-0 after:transition-all after:duration-300 after:ease-linear after:opacity-0 hover:after:w-full hover:after:opacity-100 after:bg-gray-100 after:bg-opacity-70 after:h-[0.3px] after:block rota" href="#">Introduction</a>
            <a class="text-[15px] font-epilogue w-fit font-light after:w-0 after:transition-all after:duration-300 after:ease-linear after:opacity-0 hover:after:w-full hover:after:opacity-100 after:bg-gray-100 after:bg-opacity-70 after:h-[0.3px] after:block rota" href="#">Projects</a>
            <a class="text-[15px] font-epilogue w-fit font-light after:w-0 after:transition-all after:duration-300 after:ease-linear after:opacity-0 hover:after:w-full hover:after:opacity-100 after:bg-gray-100 after:bg-opacity-70 after:h-[0.3px] after:block rota" href="#">Languages & Frameworks</a>
            <a class="text-[15px] font-epilogue w-fit font-light after:w-0 after:transition-all after:duration-300 after:ease-linear after:opacity-0 hover:after:w-full hover:after:opacity-100 after:bg-gray-100 after:bg-opacity-70 after:h-[0.3px] after:block rota" href="#">About</a>
            <a class="text-[15px] font-epilogue w-fit font-light after:w-0 after:transition-all after:duration-300 after:ease-linear after:opacity-0 hover:after:w-full hover:after:opacity-100 after:bg-gray-100 after:bg-opacity-70 after:h-[0.3px] after:block rota" href="#">Contact</a>
        </div>
    </nav>
</template>

<style scoped>
    .rota::after {
        transform: rotateY(30deg);
    }
</style>