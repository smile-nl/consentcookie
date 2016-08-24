<template>
	<div class="_ic_menu">
		<template v-repeat="items">

		</template>
	</div>
</template>

<script>
module.exports = {
name : "dasboardmenu",
data : function() {
return {
items : [
{
icon: "test1",
title: "test1",
path: "test1"

},
]
};
},
};
</script>

<style>
</style>
/*
 * 
		<a>
		<div class="_ic_menu-item" v-repeat='items'>
			<div class="_ic_icon">
				{{icon}}
			</div>
			<div class="_ic_title">
				{{title}}
			</div>
			<div class="_ic_navicon"></div>
		</div> </a>
 */