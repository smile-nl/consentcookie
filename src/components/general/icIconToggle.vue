<template>
	<img class="ic-icon" :style="'width:' + size + 'px;height:' + size + 'px;'" :src="icon"/>
</template>

<script>
	/**
	 *  Credits: http://mint-ui.github.io
	 *
	 *  ic-switch
	 *
	 * @param {boolean} [value] -
	 * @param {slot} -
	 *
	 * @example
	 * <ic-switch v-model="value"></ic-switch>
	 */

	module.exports = {
		name: 'ic-icon',
		props: {
			size:{
				type:Number,
				require:true
			},
			icon:{
				type:String,
				require:true
			}
		},
		computed: {

		},
	};
</script>

<style lang="scss">

	@import '../../assets/scss/general-variables';

	.ic-icon{

	}

</style>