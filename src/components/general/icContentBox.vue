<template>
	<div class="ic-content-box">
		<slot></slot>
	</div>
</template>

<script>
	module.exports = {
		name: 'icContentBox',
	};
</script>

<style lang="scss" scoped>

	@import '../../assets/scss/general-variables';

	.ic-content-box {
		margin: 5px;
		padding: 10px 25px;
		border:$ic-box-border;
		border-radius: $ic-box-border-radius;

		.icTitle {
			font-size: 26px;
			color: $ic-brand-color;
			margin: 15px 0px 5px 0px;
		}
		.icText {
			line-height: 22px;
			font-size: 15px;
			padding-top: 15px;
		}
	}
</style>