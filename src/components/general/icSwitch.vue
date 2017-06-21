<template>
	<label :class="'ic-switch'">
		<input @change="$emit('change', currentValue)" type="checkbox" v-model="currentValue"/>
		<span>
            <div class="state on">Aan</div>
            <div class="state off">Uit</div>
        </span>
	</label>
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
		name: 'ic-switch',
		props: {
			value: Boolean,
		},
		computed: {
			currentValue: {
				get: function () {
					return this.value;
				},
				set: function (val) {
					this.$emit('input', val);
				}
			}
		},
		functions : {
			test: function(){
				window.alert('test');
			}
		}
	};
</script>

<style lang="scss">

	@import '../../assets/scss/general-variables';

	$switch-width: 60;
	$switch-height: 30;
	$switch-border-width: 1;
	$switch-on-margin-offset: -2;
	$switch-color-on:$ic-brand-color;
	$switch-color-off:$ic-color-white;
	$switch-state-fontsize: 10;
	$switch-state-offset:10;
	$switch-state-center-offset:2;

	.ic-switch {
		position: relative;
		width: $switch-width + px;
		height: $switch-height + px;
		padding: 0px !important;
		display: table-cell !important;
		vertical-align: middle;

		> input[type="checkbox"] {
			position: absolute;
			margin-left: -9999px;
			visibility: hidden;
		}

		> input[type="checkbox"] + span {
			display: block;
			position: relative;
			cursor: pointer;
			outline: none;
			-ms-user-select: none;
			user-select: none;
			padding: 2px;
			width: 100%;
			height: 100%;
			background-color: $switch-color-on;
			border-radius: $switch-height + px;
			transition: background 0.4s;

			@mixin switch-child {
				display: block;
				position: absolute;
				content: "";
			}

			&:before {
				@include switch-child();
				top: $switch-border-width + px;
				left: $switch-border-width + px;
				bottom: $switch-border-width + px;
				right: $switch-border-width + px;
				background-color: $switch-color-off;
				border-radius: $switch-height + px;
				transition: background 0.4s;
			}
			&:after {
				@include switch-child();
				top: 5px;
				left: 5px;
				bottom: 5px;
				width: ($switch-height - 10 - (2 * $switch-border-width)) + px;
				background-color: $switch-color-off;
				border: $switch-border-width + px solid $switch-color-on;
				border-radius: ($switch-height - 10) + px;;
				transition: margin 0.4s, background 0.4s;
			}

			.state {
				@include switch-child();
				top:0;
				bottom: 0;
				height: $switch-height + px;
				line-height: ($switch-height + $switch-state-center-offset) + px;
				text-transform: uppercase;

				&.on {
					font-size: $switch-state-fontsize + px;
					left: $switch-state-offset + px;
					color: $switch-color-off;
				}

				&.off {
					font-size: $switch-state-fontsize + px;
					right: $switch-state-offset + px;
					color: $switch-color-on;
				}
			}
		}

		> input[type="checkbox"]:checked + span {

			background-color: $switch-color-on;

			&:before{
				background-color: $switch-color-on;;
			}

			&:after{
				margin-left: ($switch-width / 2) + $switch-on-margin-offset + px;
				background-color: $switch-color-off;
				border: $switch-border-width + px solid $switch-color-off;;
			}
		}
	}
</style>