<template>

    <div class="ic-dropdown-button v-centered">
        <i v-bind:class="'fa fa-' + (state.collapsed ? iconShowInfo : iconHideInfo)" v-on:click="state.collapsed = !state.collapsed"></i>




    </div>


</template>

<script>

    module.exports = {
        name: 'ic-dropdown-button',
        props: {
            state : Object,
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

    #icookie .ic-dropdown-button .fa{
    font-size: 20px;
}
</style>