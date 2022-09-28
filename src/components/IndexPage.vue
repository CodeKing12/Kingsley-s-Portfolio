<template>
    <section class="bg-[#0C0C0C] text-white text-base font-epilogue font-normal transition-all">
        <header>
            <NavBar />
            <IntroDuction />
        </header>
        <main>
            <MyProjects />
            <MyLanguages />
            <AboutMe />
        </main>
        <FooterSection />
    </section>
</template>

<script setup>
    import NavBar from "./NavBar.vue";
    import IntroDuction from "./IntroDuction.vue";
    import MyProjects from "./MyProjects.vue";
    import MyLanguages from "./MyLanguages.vue";
    import AboutMe from "./AboutMe.vue";
    import FooterSection from "./FooterSection.vue";
</script>