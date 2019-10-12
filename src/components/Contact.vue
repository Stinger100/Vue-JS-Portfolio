<template>
    	<div class="contact">
				<p>{{title}}</p>
				<p><button><a href="mailto:marian.zoicas@gmail.com" target="_blank">Contact me</a></button></p>
			</div>
</template>
<script>
export default {
    name: 'Contact',
    data() {
        return {
            title: 'Do you believe we can do great things together?'
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
</style>