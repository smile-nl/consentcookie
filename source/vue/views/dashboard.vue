<template>
	<div class="_icDashboard">
		<h1>Your page</h1>	
         <a v-link="{ path: '/profile' }">
            <div class="_icButton">Your profile</div>
      	</a>
      	<a v-link="{ path: '/tracking' }">
            <div class="_icButton">Who is tracking</div>
      	</a>
      	<a v-link="{ path: '/foryou' }">
            <div class="_icButton">Selected for you</div>
      	</a>
      	<a v-link="{ path: '/settings' }">
            <div class="_icButton">Settings</div>
      	</a>
      	<a v-link="{ path: '/about' }">
            <div class="_icButton">How it works</div>
      	</a>
      	<a v-link="{ path: '/contact' }">
            <div class="_icButton">Contact</div>
      	</a>
	</div>
</template>

<script>
	module.exports = {
		name:"dashboard"
	};	
</script>

<style>

</style>