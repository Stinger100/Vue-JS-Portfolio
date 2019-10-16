<template>
<section id="about">
    <div class="aboutMe">
        <h3>{{title}}</h3>
        <p>{{description}}</p>
	</div>
</section>
</template>
<script>
export default {
    name: 'AboutMe',
    data() {
        return {
            title: 'I am more than pleased to meet you!',
            description: 'My story as a programmer started in 2015 when I have moved to Denmark in order to begin my studies. During my studies at Multimedia Design and Web Development profiles, I have gained several knowledge in the User Research and Design Thinking fields, combined with the skills in Design of Adobe Tools and the programming abilities in several programming languages, I believe I am the right person that you are looking for.'
        }
    }
}
</script>
<style  scoped>
 .aboutMe {
      background: #7b0ac7;
      margin: 0 auto;
      color: #ffffff;
      padding: 100px 0 300px 0;
      margin-top: -5px;
  }
   h3 {
      width: 30%;
      margin: 0 auto;
      font-size: 1.25rem;
      line-height: 2rem;
      font-weight: 800;
      letter-spacing: .0125em;
      padding-bottom: 30px;
  }
  p {
    font-size: 1rem;
    letter-spacing: .0178571429em;
    font-weight: 500;
    width: 50%;
    margin: 0 auto;
  }
  /* media query */
@media screen and (max-width: 600px) {
    .aboutMe {
        padding: 50px 0 180px 0;
    }
}
</style>