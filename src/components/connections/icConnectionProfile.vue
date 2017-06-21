<template>
	<div>

	</div>


	<div class="ic-connection-summary">
		<ic-icon :icon="connection.icon" :size="40"></ic-icon>
		<ic-connection-profile></ic-connection-profile>
		<ic-switch></ic-switch>
	</div>
</template>

<script>

	// Components

	// Vue module
	module.exports = {
		name : "ic-connection-profile",
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