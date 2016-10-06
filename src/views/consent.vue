<template>
	<div class="_ic_dashboard">
		<div class="_ic_header">
			<img class="_ic_logo" alt="logo" src="../assets/img/hs_red_logo_sub.png"/>
		</div>
		<div class="_ic_content _ic_consent">
			<div class="_ic_consent">
				<a id="acceptButton" class="_ic_btn _ic_btn-success" href="#">Akkoord</a>
				<a id="settingsButton" class="_ic_btn _ic_btn-danger" href="#">Cookie instellingen aanpassen</a>
				<a class="_ic_link" href="#">Privacy- en cookiebeleid</a>
				<a class="_ic_link" href="#">Meer informatie tonen</a>
				<div class="_ic_content_text">
					<b>Cookies</b>
					<p>Om deze website goed te laten werken, moeten we soms kleine bestanden op uw computer zetten, zogenaamde cookies. De meeste grote websites doen dit.</p>
					<br/>
					<b>Wat zijn cookies?</b>
					<p>Een cookie is een klein tekstbestand dat een website op uw computer of mobiel toestel opslaat wanneer u die site bezoekt. Zo onthoudt de website de pagina's die u heeft bezocht en uw voorkeuren (zoals gebruikersnaam, taal, lettergrootte en andere voorkeuren) zodat u die niet bij ieder bezoek aan de site opnieuw hoeft in te vullen.</p>
					<br/>
					<b>Hoe gebruiken we cookies?</b>
					<p>Wij gebruiken cookies om u een betere website ervaring te kunnen bieden.</p>
					<p>U kunt cookies altijd controleren en/of wissen. Meer hierover leest u op aboutcookies.org.  U kunt alle cookies op uw computer wissen en u kunt uw browser zo instellen dat cookies geblokkeerd worden. Dit betekent wel dat u daarna uw voorkeuren bij ieder bezoek opnieuw moet instellen en dat sommige delen van de website niet (naar behoren) werken.</p>
					<br/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	
</script>

<style lang="scss">
	
	#icookie ._ic_consent {
		
		._ic_link {
			color: #191919;
			font-size: 12px;
			font-weight: normal;
			text-decoration: underline;
			cursor: pointer !important;
			text-align: center;
			display: block;
			margin-bottom: 10px;
		}
		
		._ic_content_text{
			margin: 20px;
		}
		
		._ic_button {
	     	display: inline-block;
		    margin-bottom: 0;
		    font-weight: 400;
		    text-align: center;
		    vertical-align: middle;
		    -ms-touch-action: manipulation;
		    touch-action: manipulation;
		    cursor: pointer;
		    background-image: none;
		    border: 1px solid transparent;
		    white-space: nowrap;
		    padding: 6px 12px;
		    font-size: 14px;
		    line-height: 1.42857143;
		    border-radius: 4px;
		    -webkit-user-select: none;
		    font-size: 12px;
		    margin:auto;
		    
			&:hover {
				color: #333333;
				text-decoration: none;
				box-shadow: none;
			}
			
			&:focus {
				color: #333333;
				text-decoration: none;
			}
	     }
	     
	     ._ic_btn-danger{
 	 		@extend ._ic_button;
     	    color: #FFFFFF;
			background-color: #d9534f;
			border-color: #d43f3a;
		    
			&:hover {
				color: #FFFFFF;
			    background-color: #c9302c;
			    border-color: #ac2925;
			}
			
			&:focus {
				color: #FFFFFF;
			    background-color: #c9302c;
			    border-color: #ac2925;
			}
	     }
	     
	     ._ic_btn-success{
	     	@extend ._ic_button;
	     	color: #FFFFFF;
			background-color: #5cb85c;
			border-color: #4cae4c;
		    
			&:hover {
				color: #FFFFFF;
				background-color: #449d44;
				border-color: #398439;
			}
			
			&:focus {
				color: #FFFFFF;
				background-color: #449d44;
				border-color: #398439;
			}
	     }
	}
</style>