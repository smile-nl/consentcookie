<template>
	<div class="ic-connection-summary">
		<ic-icon :icon="connection.icon" :size="40"></ic-icon>
		<a class="profile-toggle"><i class="fa fa-profile"/></a>
		<ic-switch></ic-switch>
	</div>
</template>

<script>

	// Components
	var icIcon = require('components/general/icIcon.vue');

	// Vue module
	module.exports = {
		name : "ic-connection-summary",
		components :{
			icIcon:icIcon
		},
		props: {
			connection : {
				type : Object,
				required : true
			}
		},
		data : function() {
			return {

			};
		},
		computed : {

		}
	};
</script>

<style lang="scss" scoped>

	@import '../../assets/scss/general-variables';

	.ic-connection-summary{

		$ic-content-padding: 10;

		@include default-content-border();
		position: relative;
		margin: 10px;
		padding: $ic-content-padding + px;
		text-align: center;

		.ic-logo{

		}

		.ic-switch{

		}
	}


</style>