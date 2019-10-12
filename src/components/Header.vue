<template>
    <div class="header">
        <div class="navbar">
            <div class="logoImg">
                     <img class="logoImg" alt="Marian logo" src="../assets/Logo.png">
            </div>
            <ul>
                <li><a href="#">About Me</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
	</div>
    
     <div class="text-card">
		    <div class="text-card_title">
		        {{title}}
		    </div>
		    <div class="text-card_description">
               <p> {{description}} </p>
               <p> {{description2}} </p>
		   </div>
    </div>
    <div class="avatar">
        <img class="avatar-image" alt="Marian Avatar" src="../assets/avatar2.jpg">
    </div>
    <div class="dev-image">
	    <img class="dev-image" alt="Development Image" src="../assets/design.png">
	</div>
 </div>
</template>
<script>
export default {
    name: 'Header',
    data() {
        return{
            title: 'Looking for a web developer? Then you are on the right page!',
            description: 'My name is Marian and I like to build web applications.',
            description2: 'Frontend / VueJS / Umbraco'
        }
    }
}
</script>
<style scoped>
.header {
    width: 100%;
    margin: 0 auto;
}
.navbar {
    display: flex;
    padding: 30px;
    justify-content: space-between;
}
ul {
    list-style-type: none;
    padding: 0;
    overflow: hidden;
    display: flex;
  }
  
  li a {
    display: block;
    color: #000000;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  
  li a:hover {
    background-color: #7b0ac7;
    color: #ffffff;
  }
  .logoImg  {
  width: 20%;
}
.text-card {
    padding: 100px 0 20px 0;
    text-align: center;
}
h3 {
    font-size: 1.25rem;
    line-height: 2rem;
    font-weight: 800;
    letter-spacing: .0125em;
}
p, div{
    font-size: 1rem;
    letter-spacing: .0178571429em;
    font-weight: 500;
}
.text-card_title {
    font-size: 1.25rem;
    line-height: 2rem;
    font-weight: 800;
    letter-spacing: .0125em;
}
.text-card_description{
    font-size: 1rem;
    letter-spacing: .0178571429em;
    font-weight: 500;
}
.avatar {
  text-align: center;
    padding-bottom: 100px;
}
.avatar-image {
    border-radius: 50%;
    height: auto;
    width: 250px;
}
.dev-image {
    text-align: center;
}
.dev-image img {
    width: 60%;
    height: auto;
}

</style>