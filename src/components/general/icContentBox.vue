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
			font-weight: 600;
			color: $ic-brand-color;
			margin: 5px 0px 5px 0px;
		}
		.icText {
			line-height: 22px;
			font-size: 15px;
			padding-top: 5px;
			font-weight: 400;
		}
	}
</style>