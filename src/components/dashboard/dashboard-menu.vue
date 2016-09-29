<template>
	<ul class="_ic_dashboard-menu">
		<li class="_ic_menu-item" v-for="menuitem in menuitems"  v-on:click="goToPath(menuitem.path)">
			<div class="_ic_icon"><i class="fa fa-{{menuitem.icon}}" aria-hidden="true"></i></div>
			<div class="_ic_title">{{menuitem.title}}</div>			
			<span class="_ic_navicon fa fa-chevron-right" aria-hidden="true"></span>
			<span v-show="menuitem.count > 0" class="_ic_notification_count">
				<span class="_ic_count">{{menuitem.count}}</span>
			</span>
		</li>
	</ul>
</template>

<script>

	var notificationCount = require('components/main/notification-count.vue');

	module.exports = {
		name : "dashboard-menu",
		components :{
			notificationCount
		},
		data : function() {
			return {
				path : ''
			};
		},
		props : {
			menuitems : {
				type : Array,
				default : function() {
					return [];
				},
				required : true
			}
		},
		methods: {
			goToPath : function(path){
				this.$route.router.go(path);
			}
		},
		watch : {},
		ready : function() {

		}
	}; 
</script>

<style lang="scss">
._ic_dashboard-menu {
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
        height:50px;
        min-height: 50px;
        line-height: 50px;
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
        
        ._ic_title {
        	font-family: "Calibre Regular", "sans-serif";
    		font-size: 20px;
        	margin: 0px 15px;
        }
        
        ._ic_navicon{
        	min-height: 50px;
        	height:50px;
        	line-height:50px;
			display:inline-block;
        	vertical-align:middle;
        	float:right;
    		color:rgba(0,0,0,0.8);
    		font-size:16px;
        }
        
        ._ic_notification_count{
        	min-height: 50px;
        	height:50px;
        	line-height:50px;
			display:inline-block;
        	vertical-align:middle;
        	float:right;
        	margin-right:15px;
        	
        	._ic_count{
		    	min-width: 10px;
		    	padding: 3px 7px;
		    	font-size: 14px;
		    	font-weight: 700;
		    	color: #fff;
		    	line-height: 1;
		    	white-space: nowrap;
		    	text-align: center;
		    	vertical-align:middle;
		    	background-color: #999;
		    	border-radius: 10px;
		    	background: red;
        	}
        }
    }    
}
</style>