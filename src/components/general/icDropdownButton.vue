<template>
    <div class="ic-dropdown-button v-centered">
        <i v-bind:class="'fa fa-' + (state.collapsed ? iconShowInfo : iconHideInfo)" v-on:click="state.collapsed = !state.collapsed"></i>
    </div>
</template>

<script>

    module.exports = {
        name: 'ic-dropdown-button',
        props: {
            state:Object,
            iconShowInfo : String,
            iconHideInfo : String,
        },

        data : function(){
            return {

            };
        },
};

</script>

<style lang="scss" scoped>

    @import '../../assets/scss/general-variables';

    @keyframes bounce {
        0%, 60%, 100% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }

        80% {
            -webkit-transform: translateY(5px);
            transform: translateY(5px);
        }
    }

    #icookie {
        .ic-dropdown-button .fa{
            font-size: 20px;
            -webkit-transition: all 0.3s;
            -moz-transition: all 0.3s;
            transition: all 0.3s;
        }

        .ic-dropdown-button .fa:hover{
            animation: bounce 1s;
        }
    }
</style>