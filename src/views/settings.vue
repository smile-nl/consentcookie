<template>
	<div class="_ic_settings">
		<view-header title="Settings"></view-header>
		<div class="_ic_settings_box">
			<div class="_ic_setting">
				<div class="_ic_title">Enable test enviroment</div>
				<div class="_ic_action">
					<button type="button" class="btn {{testEnviromentSelected}}" 
						@click="toggleTestEnviroment">{{testEnviromentSelectedText}}</button>
				</div>
			</div>
			<div class="_ic_setting">
				<div class="_ic_title">Enable Do not Track</div>
				<div class="_ic_action">
					<button type="button" class="btn {{doNotTrackSelected}}" 
						@click="toggleDoNotTrack">{{doNotTrackSelectedText}}</button>
				</div>
			</div>
			<div class="_ic_setting">
				<div class="_ic_title">Delete profile</div>
				<div class="_ic_action">
					<button type="button" class="btn btn-danger" 
						@click="removeProfile">Delete</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	var iCookieDNT = '_icDNT';
	var jsCookie = require('js-cookie');
	
	require('bootstrap-css');
	
	var settingsService = require('services/settingsService.js');
	var checkbox = require('vue-strap').checkbox;

	function toggleDoNotTrack(){
		if(settingsService.doNotTrackEnabled()){
			// Enable do not tracking
			jsCookie.set(iCookieDNT,'true',{domain:getTopDomain()});
		}else{
			// Disable do not tracking
			jsCookie.remove(iCookieDNT,{domain:getTopDomain()});
		}
	}
	
	function remoteProfile(){
		jsCookie.remove('_iqnomyvid',{domain:getTopDomain()});
	}
	
	function getTopDomain(){
		var hostname = document.location.hostname.split('.');
		return hostname[hostname.length - 2] + "." + hostname[hostname.length - 1];
	}

	module.exports = {
		name : "settings",
		components :{
			checkbox
		},
		data : function() {
			return {
				url : settingsService.getRESTBasePath(),
				isTestEnviroment : settingsService.isTestEnviroment(),
				doNotTrack : settingsService.doNotTrackEnabled()
			};
		},
		computed : {
			testEnviromentSelected : function(){
				return this.isTestEnviroment ? 'btn-success' : 'btn-danger';
			},
			testEnviromentSelectedText : function(){
				return this.isTestEnviroment ? 'enabled' : 'disabled';
			},
			doNotTrackSelected : function(){
				return this.doNotTrack ? 'btn-danger' : 'btn-success';
			},
			doNotTrackSelectedText : function(){
				return this.doNotTrack ? 'Tracking disabled' : 'Tracking enabled';
			}
		},
		props : {
			
		},
		methods: {
			toggleTestEnviroment: function(){
				settingsService.toggleTestEnviroment();
				this.url = settingsService.getRESTBasePath();
				this.isTestEnviroment = settingsService.isTestEnviroment();
			},
			toggleDoNotTrack: function(){
				settingsService.toggleDoNotTrack();
				this.doNotTrack = settingsService.doNotTrackEnabled();
				
				toggleDoNotTrack();
			},
			removeProfile : function(){
				remoteProfile();
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
		        		min-width: 80px;
		        	}
		        }
		       
		     }
		}
		
	}
</style>