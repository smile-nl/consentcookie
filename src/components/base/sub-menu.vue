<template>
	<ul class="_ic_sub-menu">
		<li class="_ic_menu-item" v-on:click="goToBack()">
			<div class="_ic_icon"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>
		</li>
	</ul>
</template>

<script>
	module.exports = {
		name : "sub-menu",
		components :{},
		data : function() {
			return {};
		},
		props : {},
		methods: {
			goToBack : function(path){
				this.$route.router.go('/');
			}
		},
		watch : {},
		ready : function() {

		}
	}; 
</script>

<style lang="scss">
._ic_sub-menu {
    margin: 10px 0px;
    list-style-type: none;
    padding: 0;
    border-top: 1px solid #ddd;
    border-right: 1px solid #ddd;
    border-left: 1px solid #ddd;
    
    ._ic_menu-item {
    	cursor:pointer;
        display: block;
        background-color: #FFFFFF;
        border-bottom: 1px solid #DDDDDD;
        list-style-type: none;
        min-height: 45px;
        line-height: 45px;
        padding: 0px 15px;
       
      	&:hover{
      		background: rgba(0,0,0,0.4);
      	} 
       
        > div {
            display: inline-block;
        }
        
        ._ic_icon {
        	width:20px;
    		color:rgba(0,0,0,0.8);
    		font-size:16px;
        }
    } 
}
</style>