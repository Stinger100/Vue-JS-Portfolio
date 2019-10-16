<template>
<section id="projects">
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
                                <p><button><a v-bind:href="project.link"></a>View project</button></p>	
							</div>
				</div>
		</div>
</div>
</section>
</template>
<script>
export default {
    name: 'ProjectsSkill',
    data() {
        return {
            projectsTitle: 'My Newest Projects',
			projectsDescription: 'Below you can see an overview of my last projects',
			projects: [
			{name:'Football Blog', image: require('../assets/portfolio.png'), LanguagesUsed:'Javascript, HTML5, CSS3, Node.Js, MongoDB', link:'https://github.com/Stinger100/Football-Blog'},
			{name:'React Project', image: require('../assets/portfolio2.png'), LanguagesUsed:'Javascript, HTML5, CSS3, REACT', link:'https://github.com/Stinger100/React-Project'},
			{name:'Promotional Website for Private Ambulance Company', image: require('../assets/portfolio3.png'), LanguagesUsed:'Javascript, HTML5, CSS3, Wordpress', link:'https://ambulantasfantulandrei.ro/'},
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
      padding: 10px 0 80px 0;
     justify-content: center;
      padding: 20px;
  }
  .projectsGrid_item {
      padding: 20px;
      position: relative;
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
    /* media queries */

 @media screen and (min-width: 600px) {
	   .project_image:hover {
      opacity: 0;
  }
 .project_image:hover + .projectsGrid_item_overlay {
     opacity: 1;
    -ms-transform: rotate(10deg); /* IE 9 */
    -webkit-transform: rotate(10deg); /* Safari prior 9.0 */
    transform: rotate(10deg); /* Standard syntax */
 }
  }
  @media screen and (max-width: 600px) {
  .projectsGrid_item_overlay {
      opacity: 1;
      position: static;
      margin: 0 auto;
      width: 90%;
      padding: 10px 0 5px 20px;
      margin-top: 10px;
      background: none;
      color: #000000;
  }

  .projectGrid_content {
      padding-top: 5px;
  }
  .projectsGrid {
      padding-bottom: 10px;
  }
  }
</style>