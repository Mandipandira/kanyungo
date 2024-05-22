function translateLanguage(lang) {
	fetch(`https://argos-translate.azurewebsites.net/translate?from=en&to=${lang}&text=${encodeURIComponent(document.getElementById("content").textContent)}`)
		.then(response => response.json())
		.then(data => {
			const translatedContent = data.translatedText;
			document.getElementById("content").innerHTML = translatedContent;
		})
		.catch(error => console.error(error));
}
