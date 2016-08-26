


<template>
	<div class="_icCookieConsent">
		<a id="cookieAcceptButton" class="button accept-button" href="#">Akkoord</a>
		<a id="cookieSettingsButton" class="button cookie-settings" href="#">Cookie instellingen aanpassen</a>
		<a class="_icLink" href="#">Privacy- en cookiebeleid</a>
		<a class="_icLink" href="#">Meer informatie tonen</a>
		<div class="_icConsentText">
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
</template

<script>

</script>

<style>
#icookieContent ._icCookieConsent {
	margin-bottom: 20px;
}

#icookieContent ._icCookieConsent .button {
	padding: 8px;
	float: none;
	position: static;
	margin: 0;
	display: block;
	text-align: center;
	margin-bottom: 10px;
	font-weight: bold;
	text-decoration: none;
	border-radius: 5px;
	-webkit-border-radius: 5px;
	line-height: 18px;
	color: #FFFFFF;
	cursor: pointer;
}

#icookieContent ._icCookieConsent .button.accept-button {
	background: #9bdc02;
	background: -moz-linear-gradient(top, #9bdc02 0%, #57a725 100%);
	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#9bdc02), color-stop(100%,#57a725));
	background: -webkit-linear-gradient(top, #9bdc02 0%,#57a725 100%);
	background: -o-linear-gradient(top, #9bdc02 0%,#57a725 100%);
	background: -ms-linear-gradient(top, #9bdc02 0%,#57a725 100%);
	background: linear-gradient(to bottom, #9bdc02 0%,#57a725 100%);
	border: 1px solid rgb(113, 169, 43);
}

#icookieContent ._icCookieConsent .button.cookie-settings {
	background-color: #4c76a9 !important;
	background-image: -webkit-gradient(linear, left top, left bottom, from(#87b0d2), to(#4c76a9)) !important;
	background-image: -webkit-linear-gradient(top, #87b0d2, #4c76a9) !important;
	background-image: -moz-linear-gradient(top, #87b0d2, #4c76a9) !important;
	background-image: -ms-linear-gradient(top, #87b0d2 0%, #4c76a9 100%) !important;
	background-image: -o-linear-gradient(top, #87b0d2, #4c76a9) !important;
	background-image: linear-gradient(to bottom, #87b0d2, #4c76a9) !important;
}

#icookieContent ._icCookieConsent ._icLink {
	color: #191919;
	font-size: 12px;
	font-weight: normal;
	text-decoration: underline;
	cursor: pointer !important;
	text-align: center;
	display: block;
	margin-bottom: 10px;
}

#icookieContent ._icCookieConsent ._icConsentText {
	margin: 20px 0px;
}
</style>