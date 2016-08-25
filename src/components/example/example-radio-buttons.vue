<template>
	<div class="btn-group" data-toggle="buttons">
	    <label
	    	class="btn {{btnVariant}} {{btnSize}} {{ item.disabled ? 'disabled' : '' }} {{ selection == item.value ? 'active' : '' }}"
	    	v-for="item in list">
	      <input
	      	type="radio"
	      	name="options"
	      	value="{{item.value}}"
	      	autocomplete="off"
	      	v-model="selection"
	        :disabled="item.disabled"> {{item.text}}
	    </label>
	</div>
</template>

<script>

module.exports = {
    name: "example-radio-buttons",
    data: function() {
        return {
            selection: ''
        };
    },
    computed: {
        btnVariant: function() {
            return !this.variant || this.variant === `default` ? `btn-secondary` : `btn-${this.variant}`
        },
        btnSize: function() {
            return !this.size || this.size === `default` ? `` : `btn-${this.size}`
        },
        btnActive: function() {
            return item.value
        },
    },
    props: {
        model: {
            required: true
        },
        list: {
            type: Array,
            default: function(){return []},
            required: true
        },
        size: {
            type: String,
            default: 'md'
        },
        variant: {
            type: String,
            default: 'default'
        },
        returnObject: {
            type: Boolean,
            default: false
        },
    },
    watch: {
        selection: {
            handler: function() {
                // set the model based on selection
                if (this.returnObject) {
                    this.list.forEach((item) => {
                        if (item.value === this.selection) {
                            this.model = item
                        }
                    })
                } else {
                    this.model = this.selection
                }
                // dispatch an event
                this.$dispatch('changed::button-radio', this.model)
            },
            deep: true,
        }
    },
    ready: function() {
        // handle initial selection
        if(typeof this.model !== 'undefined'){
        	this.selection = this.model.value
        }
    }
};
</script>