<template>
    <div class="header">
        <div class="navbar">
            <div class="logoImg">
                     <img class="logoImg" alt="Marian logo" v-bind:src="logoImg">
            </div>
            <ul>
                <li><a v-scroll-to="'#about'">About Me</a></li>
                <li><a v-scroll-to="'#skills'">Skills</a></li>
                <li><a v-scroll-to=" {
                el: '#projects',
                duration: 5000}">Projects</a></li>
                <li><a v-scroll-to=" {
                    el: '#contact',
                    duration: 7000}">Contact</a></li>
            </ul>
	</div>
             <div class="navbar-mobile">
            <div class="logoImg">
                     <img class="logoImg" alt="Marian logo" v-bind:src="logoImg">
            </div>
            <div class="Burger-menu">
             <a   v-if="navBarBurgerMenu" class="icon" v-on:click="openMobileNavBar()">
             <i class="fa fa-bars"></i>
             </a>
            <a  v-if="navBarClosed" class="btn-close" v-on:click="closeMobileNavBar()" >&times;</a>
            </div>
            <ul v-if="navBarClicked">
                <li><a v-scroll-to="'#about'">About Me</a></li>
                <li><a v-scroll-to="'#skills'">Skills</a></li>
                <li><a v-scroll-to=" {
                el: '#projects',
                duration: 5000}">Projects</a></li>
                <li><a v-scroll-to=" {
                    el: '#contact',
                    duration: 7000}">Contact</a></li>
            </ul>
	</div>
    
     <div class="text-card">
		    <div class="text-card_title">
		        {{content.header.headerTitle}}
		    </div>
		    <div class="text-card_description">
               <p> {{content.header.headerDescription}} </p>
               <p> {{content.header.headerDescription2}} </p>
		   </div>
    </div>
    <div class="avatar">
        <img class="avatar-image" alt="Marian Avatar" v-bind:src="avatarImg">
    </div>
    <div class="dev-image">
	    <img class="dev-image" alt="Development Image" v-bind:src="devImg">
	</div>
 </div>
</template>
<script>
const VueScrollTo = require('vue-scrollto')

export default {
    name: 'Header',
    props: ['content'],
    data() {
        return{
            logoImg: require ("../assets/Logo.png"),
            headerTitle: 'Looking for a web developer? Then you are on the right page!',
            headerDescription: 'My name is Marian and I like to build web applications.',
            headerDescription2: 'Frontend / VueJS / Umbraco',
            avatarImg: require ("../assets/avatar2.jpg"),
            devImg: require ("../assets/design.png"),
            navBarClicked: false,
            navBarBurgerMenu: true,
            navBarClosed: false
        }
    },
    methods: {
        openMobileNavBar: function () {
            var scope = this;
            scope.navBarClicked= true;
            scope.navBarBurgerMenu = false;
            scope.navBarClosed = true;
        },
        closeMobileNavBar: function () {
            var scope = this;
            scope.navBarClosed = false;
            scope.navBarBurgerMenu = true;
            scope.navBarClicked = false;
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
    cursor: pointer;
  }
  
  li a:hover {
    background-color: #7b0ac7;
    color: #ffffff;
  }
  .logoImg  {
  width: 50px;
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
    -webkit-transition: width 2s; /* For Safari 3.1 to 6.0 */
    transition: width 2s;
}
.avatar-image:hover {
    width: 300px;
}
.dev-image {
    text-align: center;
}
.dev-image img {
    width: 60%;
    height: auto;
    padding-bottom: 3px;
}
.dev-image img:hover {
    -webkit-transform: rotateY(180deg); /* Safari */
  transform: rotateY(180deg);
}

/* media query */
@media screen and (max-width: 600px) {
     .text-card {
         padding: 0;
     }
     .avatar {
         padding-bottom: 50px;
     }
     .navbar {
         display: none;
     }
     ul {
         flex-direction: column;
         display: flex;
         width: 60%;
     }
     .navbar-mobile {
         display: flex;
         padding: 20px;
     }
     .icon {
    position: absolute;
    right: 18%;
    top: 21%;
}
    .btn-close{
        position:absolute;
        right:18%;
        top: 15%;
        font-size:36px;
        }
    }
 @media screen and (min-width: 600px) {
     .navbar-mobile {
         display: none;
     }
 }

</style>