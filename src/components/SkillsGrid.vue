<template>
<section id="skills">
<div class="skillsGrid">
		<div class="skillGrid" v-for="item in skills" :key="item.name">
			<div class="skill_title">
				<img v-bind:src="item.image" />
				<h3>{{item.title}}</h3>
			</div>
			<div class="skill_features">
				<p>{{item.skill1}}</p>
				<p>{{item.skill2}}</p>
				<p>{{item.skill3}}</p>
				<p>{{item.skill4}}</p>
				<p>{{item.skill5}}</p>
				<p>{{item.skill6}}</p>
				<p>{{item.skill7}}</p>
				<p>{{item.skill8}}</p>
			</div>
		</div>
	</div>
</section>
</template>
<script>
export default {
    name: 'SkillsGrid',
    data() {
        return {
            	skills: [{
				title: 'Frontend & Design',
				image: require('../assets/sketch.png'),
				skill1: 'Javascript',
				skill2: 'HTML 5',
				skill3: 'VueJS',
				skill4: 'CSS',
				skill5: 'SASS',
				skill6: 'REACT',
				skill7: 'Adobe XD',
				skill8: 'Adobe Illustrator'
			},
			{
			title: 'CMS & Version Control System',
			image: require('../assets/gear.png'),
			skill1: 'Umbraco',
			skill2: 'Drupal',
			skill3: 'Wordpress',
			skill4: 'Github',
			skill5: 'Bitbucket'
			},
			{
				title: 'Backend & DB',
				image: require('../assets/code.png'),
				skill1: 'ASP.NET',
				skill2: 'NodeJS',
				skill3: 'MongoDB',
				skill4: 'SQL',
				skill5: 'Firebase'
			}]
        }
    }
}
</script>
<style scoped>
  .skillsGrid {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0 10px;
    height: 500px;
  }
  .skillGrid {
    display: flex;
    flex-direction: column;
	flex-wrap: wrap;
    border-bottom: 0px solid #E6ECF8;
    border-right: 1px solid #E6ECF8;
    box-shadow: 0 5px 5px 0 rgba(233,240,243,0.5), 0 0 0 1px #E6ECF8;
    width: 25%;
    align-items: center;
    position: relative;
    top: -30%;
    background: #ffffff;
    padding: 50px 0;
    border-radius: 25px;

  }
  .flexboxSkill:hover {
    box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.20);
  }
  .skill_title {
      text-align: center;
  }
  .skill_title img:hover{
	     -webkit-transform: scale(0.8);
        -ms-transform: scale(0.8);
        transform: scale(0.8);
  }
  /* media queries */
  @media screen and (max-width: 600px) {
	  .skillGrid {
		  flex: 0 80%;
	  }
	 .skillsGrid {
		 padding-bottom: 700px;
	 }
  }
  
</style>