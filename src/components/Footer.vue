<template>
    <div class="footer">
		<div class="footer_logo">
			<a v-scroll-to="{
                el:'#header',
                duration: 7000
            }"><img class="logoImg" alt="Marian logo" v-bind:src="logoImage"></a> 
		</div>
		<div class="footer_description">
					<p>"{{content.footer.footerDescription}}"</p>
		</div>
		<div class="footer_social">
						<a class="rotate" href="https://github.com/Stinger100" target="_blank"><img v-bind:src="githubImg" margin:10px></a> 
						<a class="rotate" href="https://www.linkedin.com/in/marianzoicas21/" target="_blank"><img v-bind:src="linkedinImg"></a> 
						<a class="rotate" href="mailto:marian.zoicas@gmail.com" target="_blank"><img v-bind:src="gmailImg"></a> 
		</div>
		<div class="footer_copyright">
					{{content.footer.footerCopyright}}
		</div>
		</div>
</template>
<script>
export default {
    name: 'Footer',
    props: ['content'],
    data() {
        return {
            logoImage: require('../assets/Logo.png'),
            githubImg: require('../assets/github-logo.png'),
			linkedinImg: require('../assets/linkedin-letters.png'),
            gmailImg: require('../assets/gmail-logo.png'),
        }
    }
}
</script>
<style scoped>
.footer {
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #8C43FF;
    margin-top: 75px;
}
a {
    cursor: pointer;
}
.footer_logo {
    padding: 20px;
}
.footer_logo img:hover {
-webkit-animation: swing 3s ease;
        animation: swing 3s ease;
        -webkit-animation-iteration-count: 1;
        animation-iteration-count: 1;
}
.logoImg {
    width: 70px;
}
.footer_social {
    display: flex;
    justify-content: space-between;
    width: 150px;
    padding:20px;
}
.rotate {
     animation: rotation 8s infinite linear;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
      transform: rotate(359deg);
  }
}
.footer_description {
    padding: 20px;
}
.footer_copyright {
padding: 20px;
}

  /* media queries */

 @media screen and (max-width: 600px) {
     .footer {
         height: 400px;
     }
 }
</style>