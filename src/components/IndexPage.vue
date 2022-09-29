<template>
    <section class="bg-[#0C0C0C] text-white text-base font-epilogue font-normal transition-all">
        <header id="intro" class="section">
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

    window.onscroll = () => {
        // This function underlines the active nav-link when it's corresponding section is in view.
        let current = "";
        let sections = document.getElementsByClassName("section")
        let navItem = document.getElementsByClassName("nav-item")

        for (let i=0; i < sections.length; i++) {
            let section = sections[i]
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop-210 ) {
                current = section.getAttribute("id"); }
        }

        // This loops through all the sections each time
        for (let i=0; i < navItem.length; i++) {
            let li = navItem[i]
            li.classList.remove("active");
            if (li.classList.contains(current)) {
                li.classList.add("active");
            }
        }
    };
</script>