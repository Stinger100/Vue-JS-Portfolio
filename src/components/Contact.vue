<template>
<section id="contact">
    	<div class="contact">
				<p>{{content.contact.contactTitle}}</p>
				<p><button v-on:click="showContanctInfo()"><a href="mailto:marian.zoicas@gmail.com" target="_blank">Contact me</a></button></p>
			    <transition name="swing"
                enter-active-class="animated bounceInLeft"
                leave-active-class="animated bounceOutRight">>
                <p v-if="clicked">Our collaboration is now even closer</p>
			    </transition>
            </div>
</section>
</template>
<script>
export default {
    name: 'Contact',
    props: ['content'],
    data() {
        return {
            clicked: false
        }
    },
    methods: {
        showContanctInfo: function () {
            this.clicked= true;
             setTimeout(() => {
            this.clicked = false;
        }, 5000);
        }
    }
}
</script>
<style scoped>
 .contact {    
 height: 150px;
 display: flex;
 background: #293347;
 justify-content: space-around;
 flex-wrap: wrap;
 width: 80%;
 margin: 0 auto;
 color: #ffffff;
 align-items: center;
 position: absolute;
 left: 10%;
 border-radius: 25px;
 }
 button {
    padding: 1.25em 2em;
    font-weight: 400;
    border-width: 2px;
    border-color: #8C43FF;
    border-radius: 20%;
    background: #293347;
    cursor: pointer;
    outline:none;
}
button a {
    color: #fff;
    text-decoration: none;
}
button:hover {
    background: #8C43FF;
}
/* media query */
@media screen and (max-width: 600px) {
.contact {
    padding: 10px 5px;
    height: 100px;
    font-size: 0.7rem;
    }
    button {
        padding: 0.8rem;
    }
}
</style>
