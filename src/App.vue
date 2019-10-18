<style>
  [v-cloak] {
     display: none;
  }
</style>

<template>
  <div id="app">
    <div class="loader" v-if="!appLoader">Loading</div>
    <div class="container" v-if="appMounted">
    <Header :content="content"/>
    <about-me :content="content" />
    <skills-grid />
    <ProjectsSkill :content="content"/>
    <Contact :content="content"/>
    <Footer :content="content"/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import AboutMe from './components/AboutMe.vue';
import SkillsGrid from './components/SkillsGrid.vue';
import ProjectsSkill from './components/ProjectsSkill';
import Contact from './components/Contact';
import Footer from './components/Footer';
import axios from 'axios';

export default {
  name: 'app',
  data() {
    return {
      baseUrl: process.env.VUE_APP_BASE_URL,
      appMounted: false,
      appLoader: false,
      content: {
        about: {
          aboutTitle: '',
          aboutDescription: ''
          },
          contact: {
            contactTitle:''
          },
          footer: {
            footerDescription: '',
            footerCopyright: ''
          },
          projectsSkill: {
            projectsTitle:'',
            projectsDescription: ''
          },
          header: {
            headerTitle: '',
            headerDescription: '',
            headerDescription2: ''
          }
      }
  }
  },
  components: {
    Header,
    AboutMe,
    SkillsGrid,
    ProjectsSkill,
    Contact,
    Footer
  },
  methods: {
    fetchData() {
      axios.get(this.baseUrl + 'data.json').then(response => {
          { this.content = response.data }
           console.log(this.content.projectsSkill);   
    })
    }
  },
mounted () {
    this.fetchData();
    this.appMounted = true;
    this.appLoader = true;
  }
}
</script>

<style>
#app {
  font-family: 'Noto Sans', sans-serif;
}
html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}
/**
 * Remove the margin in all browsers.
 */
body {
  margin: 0;
}
/**
 * Render the `main` element consistently in IE.
 */
main {
  display: block;
}
 .loader {
            border: 16px solid #f3f3f3; /* Light grey */
            border-top: 16px solid #3498db; /* Blue */
            border-radius: 50%;
            width: 120px;
            height: 120px;
            animation: spin 2s linear infinite;
            margin: auto;
        }
        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }

            100% {
                transform: rotate(360deg);
            }
        }


</style>
