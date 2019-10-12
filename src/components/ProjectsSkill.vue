<template>
    <div class="projectsGrid">
				<div class="projectsTitle">
					<h3>{{projectsTitle}}</h3>
				</div>
				<div class="projectsDescription">
					<p>{{projectsDescription}}</p>
				</div>
				<div class="projectGrid_content">
						<div class="projectsGrid_item" 
						v-for="project in projects" v-bind:key=project.image>
							<img class="project_image" v-bind:src=project.image width="500px" />
							<div class="projectsGrid_item_overlay">
								<p>{{project.name}}</p>
								<p>Languages used: {{project.LanguagesUsed}}</p>	
							</div>
				</div>
		</div>
</div>
</template>
<script>
export default {
    name: 'ProjectsSkill',
    data() {
        return {
            projectsTitle: 'My Newest Projects',
			projectsDescription: 'Below you can see an overview of my last projects',
			projects: [
			{name:'Football Blog', image: require('../assets/portfolio.png'), LanguagesUsed:'Javascript, HTML5, CSS3, Node.Js, MongoDB', link:'Link to github'},
			{name:'React Project', image: require('../assets/portfolio2.png'), LanguagesUsed:'Javascript, HTML5, CSS3, REACT', link:'Link to github'},
			{name:'Promotianal Website for Private Ambulance Company', image: require('../assets/portfolio3.png'), LanguagesUsed:'Javascript, HTML5, CSS3, Wordpress'},
			{name:'Vue JS CRUD Interface', image: require('../assets/portfolio4.png'), LanguagesUsed:'Javascript, HTML5, CSS3, VUE.JS'}
			]}
        }
    }
</script>
<style scoped>
.projectsDescription {
      text-align: center;
  }
  .projectsTitle {
      text-align: center;
  }
  .projectsGrid {
      padding-bottom: 50px;
  }
  .projectGrid_content {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: center;
      padding: 10px 0 80px 0;
      width: 70%;
      margin: 0 auto;
      padding: 20px;
  }
  .projectsGrid_item {
      margin-right: 10px;
      position: relative;
      padding: 20px;
  }
  .projectsGrid_item_overlay {
      position: absolute;
      top: 30%;
      left: 10%;
      background: #7b0ac7;
      color: #ffffff;
      opacity: 0;
      padding: 20px;
      border-radius: 25px;
      font-size: 1rem;
      letter-spacing: .0178571429em;
      font-weight: 500;
      -webkit-transition: all .8s ease;
    -moz-transition: all .8s ease;
    -ms-transition: all .8s ease;
    -o-transition: all .8s ease;
    transition: all .8s ease;
  }
  .project_image:hover {
      opacity: 0;
  }
 .project_image:hover + .projectsGrid_item_overlay {
     opacity: 1;
 }
</style>