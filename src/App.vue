<template>
  <div id="app">
    <Header />
    <about-me />
    <skills-grid />
    <ProjectsSkill />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import AboutMe from './components/AboutMe.vue';
import SkillsGrid from './components/SkillsGrid.vue';
import ProjectsSkill from './components/ProjectsSkill';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default {
  name: 'app',
  components: {
    Header,
    AboutMe,
    SkillsGrid,
    ProjectsSkill,
    Contact,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Noto Sans', sans-serif;
    line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  margin: 0;
}

</style>
