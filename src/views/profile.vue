<template>
	<div class="_icProfile">
		{{iqProfile}}
	</div>
</template>

<script>
	var data  = {};
	data.iqProfile = {};
	
	module.exports = {
		name:"profile",
		data : function(){
			return data;
		},
		methods : {

		}
	};	
</script>