<template>
	<div class="_ic_settings">
		<view-header title="Settings"></view-header>
		<div class="_ic_settings_box">
			<div class="_ic_setting">
				<div class="_ic_title">Enable test enviroment</div>
				<div class="_ic_action">
					<button type="button" class="btn {{testSelectedClass}} test-selected" 
						@click="toggleTest">{{testSelectedText}}</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	require('bootstrap-css');

	var settingsService = require('services/settingsService.js');
	var checkbox = require('vue-strap').checkbox;

	module.exports = {
		name : "settings",
		components :{
			checkbox
		},
		data : function() {
			return {
				url : settingsService.getRESTBasePath(),
				isTest : settingsService.isTest()
			};
		},
		computed : {
			testSelectedClass : function(){
				return this.isTest ? 'btn-success' : 'btn-danger';
			},
			testSelectedText : function(){
				return this.isTest ? 'enabled' : 'disabled';
			}
		},
		props : {
			
		},
		methods: {
			toggleTest: function(){
				settingsService.toggleTest();
				this.url = settingsService.getRESTBasePath();
				this.isTest = settingsService.isTest();
			}
		},
		watch : {},
	}; 
</script>

<style lang="scss">
	._ic_settings{
		
		._ic_settings_box{
		    margin: 20px;
		    list-style-type: none;
		    padding: 0;
		    border-top: 1px solid #ddd;
		    border-right: 1px solid #ddd;
		    border-left: 1px solid #ddd;
		
			._ic_setting {
		    	cursor:pointer;
		        display: block;
		        background-color: #FFFFFF;
		        border-bottom: 1px solid #DDDDDD;
		        list-style-type: none;
		        min-height: 45px;
		        line-height: 45px;
		        padding: 0px 15px;
		       
		        > div {
		        	display:inline-block;
		        }
		        
		        ._ic_action{
		        	float:right;
		        	
		        	button {
		        		width: 80px;
		        	}
		        }
		       
		     }
		}
		
	}
</style>